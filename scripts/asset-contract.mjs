import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { basename, resolve, sep } from "node:path";
import sharp from "sharp";

export async function verifyDeliveryAsset({ asset, projectRoot }) {
  assert.ok(["artifact", "decorative", "informative"].includes(asset.role), "asset semantic role is invalid");
  if (asset.role === "decorative") assert.equal(asset.alt, "", "decorative assets require empty alt text");
  else assert.ok(asset.alt.trim().length > 0, `${asset.role} assets require alternative text`);
  assert.ok(asset.intrinsic.width > 0 && asset.intrinsic.height > 0, "intrinsic dimensions must be positive");
  assert.equal(asset.intrinsic.ratio, asset.intrinsic.width / asset.intrinsic.height, "intrinsic ratio must match dimensions");
  assert.ok(asset.sizes.trim().length > 0, "responsive sizes are required");
  assert.ok(["eager", "lazy"].includes(asset.loading), "loading mode is invalid");
  assert.ok(["auto", "high"].includes(asset.priority), "loading priority is invalid");
  assert.ok(asset.derivatives.length >= 2, "a responsive derivative set requires at least two widths");
  assert.equal(asset.fallback.kind, "quiet", "fallback must be quiet");

  const fallback = resolve(projectRoot, "public", asset.fallback.src.slice(1));
  const deliveryRoot = resolve(projectRoot, "public/assets");
  const sourceRoot = resolve(projectRoot, "assets/source");
  assert.ok(fallback.startsWith(`${deliveryRoot}${sep}`), `fallback escapes governed delivery root: ${asset.fallback.src}`);
  assert.ok(existsSync(fallback) && statSync(fallback).size > 0, `missing quiet fallback: ${asset.fallback.src}`);

  const source = resolve(projectRoot, asset.source.path);
  assert.ok(source.startsWith(`${sourceRoot}${sep}`), `source raster escapes governed source root: ${asset.source.path}`);
  assert.ok(existsSync(source), `preserved source is missing: ${asset.source.path}`);
  assert.equal(createHash("sha256").update(readFileSync(source)).digest("hex"), asset.source.sha256, `source integrity mismatch: ${asset.source.path}`);

  let previousWidth = 0;
  for (const derivative of asset.derivatives) {
    assert.ok(derivative.width > previousWidth, "derivative widths must be strictly ascending");
    previousWidth = derivative.width;
    for (const [format, publicPath] of [["avif", derivative.avif], ["webp", derivative.webp]]) {
      assert.match(basename(publicPath), new RegExp(`-${derivative.width}\\.${format}$`), `delivery name must be width-suffixed: ${publicPath}`);
      const path = resolve(projectRoot, "public", publicPath.slice(1));
      assert.ok(path.startsWith(`${deliveryRoot}${sep}`), `derivative escapes governed delivery root: ${publicPath}`);
      assert.ok(existsSync(path) && statSync(path).size > 0, `missing declared derivative: ${publicPath}`);
      const metadata = await sharp(path).metadata();
      assert.equal(metadata.width, derivative.width, `${publicPath} width mismatch`);
      assert.equal(metadata.height, derivative.height, `${publicPath} height mismatch`);
      assert.equal(metadata.format, format === "avif" ? "heif" : format, `${publicPath} format mismatch`);
    }
  }
}
