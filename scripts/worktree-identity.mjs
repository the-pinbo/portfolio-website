import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export function fingerprintWorktree({ head, trackedDiff, untrackedFiles }) {
  const hash = createHash("sha256");
  hash.update(`HEAD\0${head}\0DIFF\0${trackedDiff.length}\0`);
  hash.update(trackedDiff);
  for (const file of [...untrackedFiles].sort((a, b) => a.path.localeCompare(b.path))) {
    hash.update(`FILE\0${file.path}\0${file.bytes.length}\0`);
    hash.update(file.bytes);
  }
  return hash.digest("hex");
}

export function collectWorktreeIdentity(projectRoot) {
  const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: projectRoot, encoding: "utf8" }).trim();
  const trackedDiff = execFileSync("git", ["diff", "--binary", "HEAD", "--", "."], { cwd: projectRoot, maxBuffer: 128 * 1024 * 1024 });
  const untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard", "-z"], { cwd: projectRoot })
    .toString("utf8").split("\0").filter(Boolean).sort();
  const untrackedFiles = untracked.map((path) => ({ path, bytes: readFileSync(join(projectRoot, path)) }));
  return { head, worktreeFingerprint: fingerprintWorktree({ head, trackedDiff, untrackedFiles }) };
}

export function assertEvidenceIdentity(evidence, current) {
  assert.equal(evidence.implementationRevision, current.head, "evidence implementationRevision does not match current HEAD");
  assert.equal(evidence.worktreeFingerprint, current.worktreeFingerprint, "evidence worktreeFingerprint does not match the current tracked diff and untracked files");
}
