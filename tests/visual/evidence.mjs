import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve, sep } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import sharp from "sharp";

const schema = JSON.parse(readFileSync(new URL("./evidence.schema.json", import.meta.url), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validateSchema = ajv.compile(schema);

export function validateEvidence(record) {
  assert.ok(validateSchema(record), `evidence schema violation: ${ajv.errorsText(validateSchema.errors, { separator: "; " })}`);
  return record;
}

export function assertCandidateDestination(path, projectRoot) {
  const candidates = resolve(projectRoot, "tests/visual/candidates");
  const destination = resolve(path);
  assert.ok(destination.startsWith(`${candidates}${sep}`), "candidate output must stay inside tests/visual/candidates");
  assert.ok(!destination.includes(`${sep}baselines${sep}`), "candidate output cannot target promoted baselines");
}

export function hashFile(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function isMasked(x, y, width, height, masks) {
  return masks.some((mask) => {
    const left = mask.unit === "ratio" ? mask.x * width : mask.x;
    const top = mask.unit === "ratio" ? mask.y * height : mask.y;
    const maskWidth = mask.unit === "ratio" ? mask.width * width : mask.width;
    const maskHeight = mask.unit === "ratio" ? mask.height * height : mask.height;
    return x >= left && x < left + maskWidth && y >= top && y < top + maskHeight;
  });
}

export function validateComparisonRules(masks, tolerance) {
  assert.ok(typeof tolerance === "number" && Number.isFinite(tolerance) && tolerance >= 0 && tolerance <= 1, "comparison tolerance must be between 0 and 1");
  assert.ok(Array.isArray(masks), "comparison masks must be an array");
  for (const mask of masks) {
    assert.deepEqual(Object.keys(mask).sort(), ["height", "unit", "width", "x", "y"], "comparison mask must contain only x, y, width, height, and unit");
    assert.ok(mask.unit === "px" || mask.unit === "ratio", "comparison mask unit must be px or ratio");
    for (const key of ["x", "y", "width", "height"]) assert.ok(typeof mask[key] === "number" && Number.isFinite(mask[key]), `comparison mask ${key} must be numeric`);
    assert.ok(mask.x >= 0 && mask.y >= 0 && mask.width > 0 && mask.height > 0, "comparison mask coordinates must be non-negative and dimensions positive");
    if (mask.unit === "ratio") assert.ok(mask.x <= 1 && mask.y <= 1 && mask.width <= 1 && mask.height <= 1, "ratio mask values cannot exceed 1");
  }
}

export async function compareCandidate({ baselineEntry, baselineRoot, candidatePath, masks = [], tolerance = 0 }) {
  validateComparisonRules(masks, tolerance);
  if (!baselineEntry) return { result: "not-reviewed", reason: "missing promoted baseline" };
  assert.ok(typeof baselineEntry.path === "string" && baselineEntry.path.length > 0, "baseline manifest path must be a non-empty string");
  const root = resolve(baselineRoot);
  const baselinePath = resolve(root, baselineEntry.path);
  assert.ok(baselinePath.startsWith(`${root}${sep}`), "baseline manifest path escapes tests/visual/baselines");
  if (!existsSync(baselinePath)) return { result: "fail", reason: "promoted baseline file is missing" };
  if (hashFile(baselinePath) !== baselineEntry.sha256) {
    return { result: "fail", reason: "promoted baseline hash mismatch" };
  }

  const baseline = await sharp(baselinePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const candidate = await sharp(candidatePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  if (baseline.info.width !== candidate.info.width || baseline.info.height !== candidate.info.height) {
    return { result: "fail", reason: "candidate dimensions differ from promoted baseline" };
  }

  let comparedPixels = 0;
  let differingPixels = 0;
  let maximumDelta = 0;
  for (let y = 0; y < baseline.info.height; y += 1) {
    for (let x = 0; x < baseline.info.width; x += 1) {
      if (isMasked(x, y, baseline.info.width, baseline.info.height, masks)) continue;
      comparedPixels += 1;
      const offset = (y * baseline.info.width + x) * 4;
      let pixelDelta = 0;
      for (let channel = 0; channel < 4; channel += 1) {
        pixelDelta = Math.max(pixelDelta, Math.abs(baseline.data[offset + channel] - candidate.data[offset + channel]) / 255);
      }
      maximumDelta = Math.max(maximumDelta, pixelDelta);
      if (pixelDelta > tolerance) differingPixels += 1;
    }
  }

  if (comparedPixels === 0) return { result: "fail", reason: "comparison masks exclude every pixel" };
  return differingPixels === 0
    ? { result: "pass", reason: `all unmasked pixels are within tolerance ${tolerance}` }
    : { result: "fail", reason: `${differingPixels} unmasked pixels exceed tolerance ${tolerance}; maximum delta ${maximumDelta.toFixed(6)}` };
}
