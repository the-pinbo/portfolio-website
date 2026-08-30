import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import { assets } from "../content/assets.ts";

const projectRoot = resolve(new URL("../", import.meta.url).pathname);

for (const asset of Object.values(assets)) {
  const source = resolve(projectRoot, asset.source.path);
  for (const derivative of asset.derivatives) {
    for (const [format, publicPath] of [["avif", derivative.avif], ["webp", derivative.webp]]) {
      const destination = resolve(projectRoot, "public", publicPath.slice(1));
      mkdirSync(dirname(destination), { recursive: true });
      const pipeline = sharp(source).resize({ width: derivative.width, withoutEnlargement: true });
      if (format === "avif") await pipeline.avif({ quality: 70 }).toFile(destination);
      else await pipeline.webp({ quality: 82 }).toFile(destination);
    }
  }
}

console.log(`${Object.values(assets).flatMap((asset) => asset.derivatives).length * 2} delivery derivatives generated`);
