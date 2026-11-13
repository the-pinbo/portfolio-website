import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { assets, searchAssets } from "../content/assets.ts";
import { links, projectPath } from "../content/links.ts";
import { projects, site } from "../content/portfolio.ts";
import { verifyDeliveryAsset } from "./asset-contract.mjs";

const projectRoot = resolve(new URL("../", import.meta.url).pathname);
const publicRoot = resolve(projectRoot, "public");
const publicAssets = resolve(projectRoot, "public/assets");
const out = resolve(projectRoot, "out");
const html = ["index.html", "work/visionguard/index.html"].map(file => readFileSync(join(out, file), "utf8")).join("\n");

for (const asset of Object.values(assets)) {
  await verifyDeliveryAsset({ asset, projectRoot });
  if (asset.sourceLinkKey !== null) assert.ok(asset.sourceLinkKey in links, `unknown source link key: ${asset.sourceLinkKey}`);
  if (asset === assets.portrait) {
    const portraitSource = asset.derivatives[2].webp;
    const images = [...html.matchAll(/<image\b[^>]*>/g)];
    assert.equal(images.length, 3, "portrait must have three native SVG image panels");
    for (const [panel] of images) {
      assert.ok(panel.includes(`href="${portraitSource}"`), "portrait panel must use the verified WebP source");
      assert.ok(panel.includes('clip-path="url(#portrait-'), "portrait panel must retain its clip mask");
    }
    assert.doesNotMatch(html, /foreignObject/i, "mixed HTML/SVG portrait clipping regresses Safari");
    assert.ok(html.includes(`href="${portraitSource}" as="image"`) || html.includes(`as="image" href="${portraitSource}"`), "above-fold portrait must preload its selected source");
    continue;
  }
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
// These generated search assets are dimension-checked by verify-content.
const searchPngs = new Set([
  searchAssets.favicon.path,
  searchAssets.appleTouchIcon.path,
  ...["/", ...site.navigation.map(({ route }) => route), ...projects.map(({ slug }) => projectPath(slug))]
    .map(searchAssets.share.path),
]);

for (const file of filesBelow(publicRoot)) {
  const publicEntry = relative(publicRoot, file).replaceAll("\\", "/");
  if (!searchPngs.has(`/${publicEntry}`)) {
    assert.doesNotMatch(publicEntry, /\.png$/i, `source PNG must not ship from public/: ${publicEntry}`);
  }
  assert.doesNotMatch(publicEntry, /(?:portrait-window-mask|riso-(?:coral|navy|paper)|paper-substrate|editorial-v1|editorial-dark)/i, `obsolete raw asset shipped from public/: ${publicEntry}`);
}
for (const file of filesBelow(publicAssets)) {
  const entry = relative(publicAssets, file).replaceAll("\\", "/");
  if (entry !== "quiet-media-fallback.svg") assert.match(entry, /-\d+\.(?:avif|webp)$/, `obsolete or non-responsive public asset: ${entry}`);
}

for (const file of filesBelow(out)) {
  const entry = relative(out, file).replaceAll("\\", "/");
  if (!searchPngs.has(`/${entry}`)) {
    assert.notEqual(extname(file).toLowerCase(), ".png", `source raster shipped in out/: ${entry}`);
  }
}
const body = html.replace(/<head>.*?<\/head>/gs, "");
assert.doesNotMatch(body, /\.png(?:[?"'\s]|$)/i, "rendered HTML references a source raster");
assert.ok(html.includes('href="/ICASSP-DUN-Poster.pdf"'), "rendered Poster destination is not canonical");
assert.ok(existsSync(join(projectRoot, "public/ICASSP-DUN-Poster.pdf")), "approved static Poster PDF is missing");
console.log(`${Object.keys(assets).length} AD-6 asset entries, delivery sets, source integrity, and rendered output verified`);
