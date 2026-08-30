import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import sharp from "sharp";
import { computeOutDigest, verifyRecordedOutDigest } from "../../scripts/out-digest.mjs";
import { assertEvidenceIdentity, fingerprintWorktree } from "../../scripts/worktree-identity.mjs";
import { resolveStaticRequest } from "./static-server.mjs";
import { assertCandidateDestination, compareCandidate, hashFile, validateEvidence } from "./evidence.mjs";
import { acceptanceRows, fixtureRevision, viewports } from "./registry.mjs";

test("registry covers VA-01 through VA-16 at all required widths", () => {
  assert.deepEqual(acceptanceRows.map((row) => row.id), Array.from({ length: 16 }, (_, index) => `VA-${String(index + 1).padStart(2, "0")}`));
  assert.deepEqual(viewports.map((viewport) => viewport.width), [1440, 1024, 768, 390, 320]);
  assert.equal(fixtureRevision, "a1d613522b568b5af79ca424ff64961c9927371f");
});

test("capture rejects baseline destinations and incomplete evidence", () => {
  const root = mkdtempSync(join(tmpdir(), "visual-contract-"));
  mkdirSync(join(root, "tests/visual/candidates"), { recursive: true });
  assert.doesNotThrow(() => assertCandidateDestination(join(root, "tests/visual/candidates/run/candidate.png"), root));
  assert.throws(() => assertCandidateDestination(join(root, "tests/visual/baselines/approved.png"), root), /candidate output/);
  assert.throws(() => validateEvidence({ rowId: "VA-01" }), /schema violation/);
});

const validEvidence = () => ({
  rowId: "VA-01", gate: "G1", implementationRevision: "a".repeat(40), worktreeFingerprint: "b".repeat(64),
  fixtureRevision, outDigest: "c".repeat(64), viewport: viewports[0], devicePixelRatio: 1, browser: "chromium 1",
  fontReady: true, anchor: "#top", checkpoint: "settled", crop: "viewport", masks: [], tolerance: 0.01,
  command: "npm run visual:capture:candidate", artifactPath: "candidate.png", artifactHash: "d".repeat(64),
  result: "candidate/unreviewed", comparison: { result: "not-reviewed", reason: "missing promoted baseline" },
  reviewer: null, reviewDate: null, exceptionOwner: null,
});

test("committed evidence schema rejects extras, invalid nested values, and malformed comparison rules", async () => {
  assert.doesNotThrow(() => validateEvidence(validEvidence()));
  assert.throws(() => validateEvidence({ ...validEvidence(), extra: true }), /additional properties/i);
  assert.throws(() => validateEvidence({ ...validEvidence(), viewport: { ...viewports[0], extra: true } }), /additional properties/i);
  assert.throws(() => validateEvidence({ ...validEvidence(), devicePixelRatio: 0 }), /must be > 0/);
  assert.throws(() => validateEvidence({ ...validEvidence(), tolerance: 1.01 }), /must be <= 1/);
  await assert.rejects(compareCandidate({ baselineEntry: undefined, baselineRoot: "/tmp", candidatePath: "/tmp/nope", tolerance: -1 }), /tolerance/);
  await assert.rejects(compareCandidate({ baselineEntry: undefined, baselineRoot: "/tmp", candidatePath: "/tmp/nope", masks: [{ x: 0, y: 0, width: 0, height: 1, unit: "px" }] }), /dimensions positive/);
});

const png = (pixels, width, height) => sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } }).png().toBuffer();

test("compare reports missing baselines as not-reviewed and verifies promoted hashes", async () => {
  const root = mkdtempSync(join(tmpdir(), "visual-compare-"));
  const candidate = join(root, "candidate.png");
  const baseline = join(root, "baseline.png");
  writeFileSync(candidate, await png([0, 0, 0, 255], 1, 1));
  writeFileSync(baseline, await png([255, 255, 255, 255], 1, 1));
  assert.deepEqual(await compareCandidate({ baselineEntry: undefined, baselineRoot: root, candidatePath: candidate }), {
    result: "not-reviewed",
    reason: "missing promoted baseline",
  });
  assert.equal((await compareCandidate({ baselineEntry: { path: "baseline.png", sha256: "0".repeat(64) }, baselineRoot: root, candidatePath: candidate })).reason, "promoted baseline hash mismatch");
  assert.equal((await compareCandidate({ baselineEntry: { path: "baseline.png", sha256: hashFile(baseline) }, baselineRoot: root, candidatePath: candidate })).result, "fail");
  await assert.rejects(compareCandidate({ baselineEntry: { path: "../baseline.png", sha256: hashFile(baseline) }, baselineRoot: join(root, "nested"), candidatePath: candidate }), /escapes/);
});

test("comparison applies numeric tolerance to unmasked pixels", async () => {
  const root = mkdtempSync(join(tmpdir(), "visual-tolerance-"));
  const baseline = join(root, "baseline.png");
  const candidate = join(root, "candidate.png");
  writeFileSync(baseline, await png([100, 100, 100, 255], 1, 1));
  writeFileSync(candidate, await png([110, 100, 100, 255], 1, 1));
  const baselineEntry = { path: "baseline.png", sha256: hashFile(baseline) };
  assert.equal((await compareCandidate({ baselineEntry, baselineRoot: root, candidatePath: candidate, tolerance: 10 / 255 })).result, "pass");
  assert.equal((await compareCandidate({ baselineEntry, baselineRoot: root, candidatePath: candidate, tolerance: 9 / 255 })).result, "fail");
});

test("comparison excludes only explicitly masked pixels", async () => {
  const root = mkdtempSync(join(tmpdir(), "visual-mask-"));
  const baseline = join(root, "baseline.png");
  const candidate = join(root, "candidate.png");
  writeFileSync(baseline, await png([0, 0, 0, 255, 0, 0, 0, 255], 2, 1));
  writeFileSync(candidate, await png([255, 255, 255, 255, 0, 0, 0, 255], 2, 1));
  const baselineEntry = { path: "baseline.png", sha256: hashFile(baseline) };
  assert.equal((await compareCandidate({ baselineEntry, baselineRoot: root, candidatePath: candidate, masks: [{ x: 0, y: 0, width: 1, height: 1, unit: "px" }] })).result, "pass");
  assert.equal((await compareCandidate({ baselineEntry, baselineRoot: root, candidatePath: candidate, masks: [] })).result, "fail");
});

test("out digest verification rejects stale output and worktree identity is deterministic", () => {
  const out = mkdtempSync(join(tmpdir(), "out-digest-"));
  writeFileSync(join(out, "index.html"), "one");
  const digest = computeOutDigest(out);
  writeFileSync(join(out, ".digest.json"), `${JSON.stringify(digest)}\n`);
  assert.deepEqual(verifyRecordedOutDigest(out), digest);
  writeFileSync(join(out, "index.html"), "two");
  assert.throws(() => verifyRecordedOutDigest(out), /stale/);
  const input = { head: "a".repeat(40), trackedDiff: Buffer.from("diff"), untrackedFiles: [{ path: "z", bytes: Buffer.from("z") }, { path: "a", bytes: Buffer.from("a") }] };
  const first = fingerprintWorktree(input);
  const second = fingerprintWorktree({ ...input, untrackedFiles: [...input.untrackedFiles].reverse() });
  assert.equal(first, second);
  assert.notEqual(first, fingerprintWorktree({ ...input, trackedDiff: Buffer.from("changed") }));
});

test("evidence identity must match the current HEAD and dirty-worktree fingerprint", () => {
  const current = { head: "a".repeat(40), worktreeFingerprint: "b".repeat(64) };
  assert.doesNotThrow(() => assertEvidenceIdentity({ implementationRevision: current.head, worktreeFingerprint: current.worktreeFingerprint }, current));
  assert.throws(() => assertEvidenceIdentity({ implementationRevision: "c".repeat(40), worktreeFingerprint: current.worktreeFingerprint }, current), /implementationRevision/);
  assert.throws(() => assertEvidenceIdentity({ implementationRevision: current.head, worktreeFingerprint: "d".repeat(64) }, current), /worktreeFingerprint/);
});

test("static server maps malformed percent encoding to 400", () => {
  const out = mkdtempSync(join(tmpdir(), "static-server-"));
  writeFileSync(join(out, "index.html"), "ok");
  assert.equal(resolveStaticRequest("/%E0%A4%A", out).status, 400);
  assert.equal(resolveStaticRequest("/", out).status, 200);
  assert.equal(readFileSync(resolveStaticRequest("/", out).file, "utf8"), "ok");
});
