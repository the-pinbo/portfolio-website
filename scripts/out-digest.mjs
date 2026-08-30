import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

export function computeOutDigest(outDirectory) {
  const files = [];
  function walk(directory) {
    for (const entry of readdirSync(directory).sort()) {
      const path = join(directory, entry);
      if (relative(outDirectory, path) === ".digest.json") continue;
      if (statSync(path).isDirectory()) walk(path);
      else files.push(path);
    }
  }
  walk(outDirectory);
  const hash = createHash("sha256");
  for (const path of files) {
    const name = relative(outDirectory, path).replaceAll("\\", "/");
    const bytes = readFileSync(path);
    hash.update(`${name}\0${bytes.length}\0`);
    hash.update(bytes);
  }
  return { algorithm: "sha256", digest: hash.digest("hex"), fileCount: files.length };
}

export function verifyRecordedOutDigest(outDirectory) {
  const recorded = JSON.parse(readFileSync(join(outDirectory, ".digest.json"), "utf8"));
  const current = computeOutDigest(outDirectory);
  assert.deepEqual(recorded, current, "out/.digest.json is stale; rebuild and run npm run digest:out before capture");
  return current;
}
