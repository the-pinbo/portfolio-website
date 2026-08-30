import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { links } from "../content/links.ts";

const projectRoot = resolve(new URL("../", import.meta.url).pathname);
const html = readFileSync(join(projectRoot, "out/index.html"), "utf8");
const portfolio = readFileSync(join(projectRoot, "content/portfolio.ts"), "utf8");
const linkOwner = readFileSync(join(projectRoot, "content/links.ts"), "utf8");
const consumers = [];
for (const root of ["app", "components"]) {
  const walk = (directory) => {
    for (const entry of readdirSync(directory).sort()) {
      const path = join(directory, entry);
      if (statSync(path).isDirectory()) walk(path);
      else if ([".ts", ".tsx"].includes(extname(path))) consumers.push(path);
    }
  };
  walk(join(projectRoot, root));
}
const consumerText = consumers.map((file) => readFileSync(file, "utf8")).join("\n");

for (const required of [
  "I turn meaningful business problems into reliable software and AI systems.", "Evaluated. Integrated. Shipped.",
  "Inbasekaran Perumal", "Smart Filters", "ACE", "VisionGuard", "Recovering images from incomplete measurements.",
  "When numerical formats change the picture.", "Inventory should not require a keyboard.",
  "If you're building something difficult, I'd like to hear about it.",
]) {
  assert.ok(portfolio.includes(required), `canonical content owner is missing: ${required}`);
  assert.ok(html.includes(required.replaceAll("'", "&#x27;")) || html.includes(required), `static export is missing: ${required}`);
  assert.ok(!consumerText.includes(required), `canonical copy is duplicated in ${consumers.map((file) => relative(projectRoot, file)).join(", ")}`);
}

for (const [key, destination] of Object.entries(links)) {
  assert.ok(linkOwner.includes(destination), `canonical destination owner is missing ${key}`);
  const rendered = destination.replaceAll("&", "&amp;");
  assert.ok(html.includes(`href="${rendered}"`), `static export is missing canonical destination ${key}: ${destination}`);
  assert.ok(!consumerText.includes(destination), `canonical destination ${key} is duplicated outside content/links.ts`);
}
assert.equal(links.icasspPoster, "./ICASSP-DUN-Poster.pdf", "Poster destination owner is not exact");
assert.ok(html.includes('href="./ICASSP-DUN-Poster.pdf"'), "rendered Poster destination is not exact");

for (const href of ["#work", "#research", "#track-record", "#contact"]) {
  assert.ok(portfolio.includes(href), `navigation owner is missing ${href}`);
  assert.ok(html.includes(`href="${href}"`), `static export is missing ${href}`);
}

const chapterOrder = ["top", "identity-frame", "work", "smart-filters", "ace", "visionguard", "research", "open-source", "patent", "track-record", "contact"];
const positions = chapterOrder.map((id) => html.indexOf(`id="${id}"`));
assert.ok(positions.every((position) => position >= 0), "static export is missing a fixed chapter anchor");
assert.ok(positions.every((position, index) => index === 0 || position > positions[index - 1]), "fixed chapter order changed");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "static export contains duplicate IDs");
console.log(`canonical copy, ${Object.keys(links).length} destinations, fixed chapter order, and ${consumers.length} discovered consumers verified`);
