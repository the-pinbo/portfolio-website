import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { verifyDeliveryAsset } from "../scripts/asset-contract.mjs";
import { validateRuntime } from "../scripts/runtime-contract.mjs";

test("wrong Node or npm versions report the exact blocker", () => {
  assert.throws(
    () => validateRuntime({ actualNode: "26.5.1", actualNpm: "11.19.0", expectedNode: "24.20.0", expectedNpm: "11.19.0" }),
    /Node runtime mismatch: expected 24\.20\.0, received 26\.5\.1/,
  );
  assert.throws(
    () => validateRuntime({ actualNode: "24.20.0", actualNpm: "11.17.0", expectedNode: "24.20.0", expectedNpm: "11.19.0" }),
    /npm runtime mismatch: expected 11\.19\.0, received 11\.17\.0/,
  );
});

test("missing media derivatives fail without modifying their source root", async () => {
  const directory = mkdtempSync(join(tmpdir(), "asset-contract-"));
  mkdirSync(join(directory, "public/assets"), { recursive: true });
  mkdirSync(join(directory, "assets/source"), { recursive: true });
  writeFileSync(join(directory, "public/assets/fallback.svg"), '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>');
  const source = await import("sharp").then(({ default: sharp }) => sharp({ create: { width: 100, height: 100, channels: 4, background: "white" } }).png().toBuffer());
  writeFileSync(join(directory, "assets/source/missing.png"), source);
  await assert.rejects(
    verifyDeliveryAsset({
      projectRoot: directory,
      asset: {
        role: "informative",
        alt: "Missing asset",
        intrinsic: { width: 100, height: 100, ratio: 1 },
        sizes: "100px",
        loading: "lazy",
        priority: "auto",
        derivatives: [
          { width: 50, height: 50, avif: "/assets/missing-50.avif", webp: "/assets/missing-50.webp" },
          { width: 100, height: 100, avif: "/assets/missing-100.avif", webp: "/assets/missing-100.webp" },
        ],
        fallback: { kind: "quiet", src: "/assets/fallback.svg" },
        source: { path: "assets/source/missing.png", sha256: createHash("sha256").update(source).digest("hex") },
        sourceLinkKey: null,
      },
    }),
    /missing declared derivative/,
  );
});
