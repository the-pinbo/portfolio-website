import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import sharp from "sharp";
import { homepageShareArt, searchAssets } from "../content/assets.ts";
import { projectPath } from "../content/links.ts";
import { homepage, projects } from "../content/portfolio.ts";

const mark = await readFile("public/icon.svg");
for (const { path, size } of [searchAssets.favicon, searchAssets.appleTouchIcon]) {
  await sharp(mark, { density: 216 }).resize(size, size).png().toFile(join("public", path));
}
const brandImage = `data:image/png;base64,${(await sharp(mark, { density: 216 }).png().toBuffer()).toString("base64")}`;

const { share } = searchAssets;
const cards = projects.map(({ slug, title }) => ({ path: projectPath(slug), title }));

await mkdir("public/share", { recursive: true });
await sharp(homepageShareArt.source).png().toFile(join("public", share.path("/")));

for (const { path, title } of cards) {
  const card = h(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 86px",
        background: "#f1eee7",
        color: "#173047",
        borderBottom: "16px solid #cf654f",
      },
    },
    h("img", { src: brandImage, width: 92, height: 92, alt: "" }),
    h("div", { style: { marginTop: 32, fontSize: 29, color: "#a53f30" } }, homepage.name),
    h("div", { style: { marginTop: 15, maxWidth: 1010, fontSize: 74, lineHeight: 1.08 } }, title),
  );

  const image = new ImageResponse(card, { width: share.width, height: share.height });
  await writeFile(join("public", share.path(path)), Buffer.from(await image.arrayBuffer()));
}

console.log(`Generated ${cards.length + 1} sharing cards and two icons`);
