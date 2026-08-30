import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { verifyRecordedOutDigest } from "./out-digest.mjs";
import { assertEvidenceIdentity, collectWorktreeIdentity } from "./worktree-identity.mjs";
import { assertCandidateDestination, hashFile, validateEvidence } from "../tests/visual/evidence.mjs";
import { acceptanceRows, fixtureRevision, viewports } from "../tests/visual/registry.mjs";

const projectRoot = resolve(new URL("../", import.meta.url).pathname);
const digest = verifyRecordedOutDigest(join(projectRoot, "out"));
const worktreeIdentity = collectWorktreeIdentity(projectRoot);
const runId = process.env.VISUAL_RUN_ID ?? "story-5-1-verify";
assert.match(runId, /^[a-zA-Z0-9._-]+$/, "verification run ID must be stable and path-safe");
const runRoot = join(projectRoot, "tests/visual/candidates", digest.digest, runId);
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory).sort()) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  }
}
walk(runRoot);
const evidenceFiles = files.filter((path) => path.endsWith("/evidence.json"));
const candidateFiles = files.filter((path) => path.endsWith("/candidate.png"));
assert.equal(evidenceFiles.length, 80, "verification candidate must contain exactly 80 evidence records");
assert.equal(candidateFiles.length, 80, "verification candidate must contain exactly 80 screenshots");
assert.equal(files.length, 160, "verification candidate contains unexpected files");

const expected = new Set(acceptanceRows.flatMap((row) => viewports.map((viewport) => `${row.id}/${viewport.name}`)));
for (const evidencePath of evidenceFiles) {
  const evidence = validateEvidence(JSON.parse(readFileSync(evidencePath, "utf8")));
  const key = `${evidence.rowId}/${evidence.viewport.name}`;
  assert.ok(expected.delete(key), `duplicate or unexpected evidence record: ${key}`);
  assert.equal(evidence.fixtureRevision, fixtureRevision);
  assert.equal(evidence.outDigest, digest.digest);
  assertEvidenceIdentity(evidence, worktreeIdentity);
  const artifactPath = resolve(projectRoot, evidence.artifactPath);
  assertCandidateDestination(artifactPath, projectRoot);
  assert.equal(hashFile(artifactPath), evidence.artifactHash, `artifact hash mismatch: ${relative(projectRoot, artifactPath)}`);
}
assert.equal(expected.size, 0, `verification candidate is missing: ${[...expected].join(", ")}`);
const manifestPath = join(projectRoot, "tests/visual/baselines/manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
assert.deepEqual(manifest, { version: 1, fixtureRevision, entries: {} }, "verification capture altered or promoted the baseline manifest");
console.log(JSON.stringify({ digest: digest.digest, runRoot: relative(projectRoot, runRoot), records: evidenceFiles.length, screenshots: candidateFiles.length, baselineManifestHash: hashFile(manifestPath) }));
