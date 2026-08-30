import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { assets } from "../content/assets.ts";
import { links } from "../content/links.ts";
import { verifyDeliveryAsset } from "./asset-contract.mjs";

const projectRoot = resolve(new URL("../", import.meta.url).pathname);
const publicRoot = resolve(projectRoot, "public");
const publicAssets = resolve(projectRoot, "public/assets");
const out = resolve(projectRoot, "out");
const html = readFileSync(join(out, "index.html"), "utf8");

for (const asset of Object.values(assets)) {
  await verifyDeliveryAsset({ asset, projectRoot });
  if (asset.sourceLinkKey !== null) assert.ok(asset.sourceLinkKey in links, `unknown source link key: ${asset.sourceLinkKey}`);
  for (const derivative of asset.derivatives) {
    assert.ok(html.includes(derivative.avif), `rendered HTML omits declared AVIF: ${derivative.avif}`);
    assert.ok(html.includes(derivative.webp), `rendered HTML omits declared WebP: ${derivative.webp}`);
  }
  assert.ok(html.includes(`sizes="${asset.sizes.replaceAll("&", "&amp;")}"`), `rendered HTML omits sizes for ${asset.alt}`);
  assert.ok(html.includes(`loading="${asset.loading}"`), `rendered HTML omits loading mode for ${asset.alt}`);
}

function filesBelow(directory) {
  const files = [];
  function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  }
  }
  walk(directory);
  return files;
}
for (const file of filesBelow(publicRoot)) {
  const publicEntry = relative(publicRoot, file).replaceAll("\\", "/");
  assert.doesNotMatch(publicEntry, /\.png$/i, `source PNG must not ship from public/: ${publicEntry}`);
  assert.doesNotMatch(publicEntry, /(?:portrait-window-mask|riso-(?:coral|navy|paper)|paper-substrate|editorial-v1|editorial-dark)/i, `obsolete raw asset shipped from public/: ${publicEntry}`);
}
for (const file of filesBelow(publicAssets)) {
  const entry = relative(publicAssets, file).replaceAll("\\", "/");
  if (entry !== "quiet-media-fallback.svg") assert.match(entry, /-\d+\.(?:avif|webp)$/, `obsolete or non-responsive public asset: ${entry}`);
}

const outFiles = filesBelow(out);
for (const file of outFiles) {
  assert.notEqual(extname(file).toLowerCase(), ".png", `source raster shipped in out/: ${relative(out, file)}`);
}
assert.doesNotMatch(html, /\.png(?:[?"'\s]|$)/i, "rendered HTML references a source raster");
assert.ok(html.includes('href="./ICASSP-DUN-Poster.pdf"'), "rendered Poster destination is not canonical");
assert.ok(existsSync(join(projectRoot, "public/ICASSP-DUN-Poster.pdf")), "approved static Poster PDF is missing");
console.log(`${Object.keys(assets).length} AD-6 asset entries, delivery sets, source integrity, and rendered output verified`);
