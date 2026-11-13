import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import sharp from "sharp";
import { searchAssets } from "../content/assets.ts";
import { projectPath } from "../content/links.ts";
import { homepage, projects, site } from "../content/portfolio.ts";

const mark = await readFile("public/icon.svg");
for (const { path, size } of [searchAssets.favicon, searchAssets.appleTouchIcon]) {
  await sharp(mark, { density: 216 }).resize(size, size).png().toFile(join("public", path));
}
const brandImage = `data:image/png;base64,${(await sharp(mark, { density: 216 }).png().toBuffer()).toString("base64")}`;

const { share } = searchAssets;
const cards = [
  { path: "/", title: homepage.name, label: site.mark },
  ...site.navigation.map(({ route, heading }) => ({ path: route, title: heading, label: homepage.name })),
  ...projects.map(({ slug, title }) => ({ path: projectPath(slug), title, label: homepage.name })),
];

await mkdir("public/share", { recursive: true });
for (const { path, title, label } of cards) {
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
    h("div", { style: { marginTop: 32, fontSize: 29, color: "#a53f30" } }, label),
    h("div", { style: { marginTop: 15, maxWidth: 1010, fontSize: 74, lineHeight: 1.08 } }, title),
  );

  const image = new ImageResponse(card, { width: share.width, height: share.height });
  await writeFile(join("public", share.path(path)), Buffer.from(await image.arrayBuffer()));
}

console.log(`Generated ${cards.length} sharing cards and two icons`);
