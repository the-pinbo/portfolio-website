import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import sharp from "sharp";
import { homepageShareArt, searchAssets } from "../content/assets.ts";
import { homepage, homepageSharing, projects, seo, site } from "../content/portfolio.ts";
import { links, projectPath, siteOrigin } from "../content/links.ts";
const home = readFileSync("out/index.html", "utf8");
const slugs = ["natural-language-filtering", "ai-native-engineering", "ace-mcp", "visionguard"];
assert.deepEqual(projects.map(({ slug }) => slug), slugs);
assert.equal(links.icasspPoster, "/ICASSP-DUN-Poster.pdf");
assert.ok(home.includes("Inbasekaran Perumal | Applied AI &amp; Software Engineering"));
for (const slug of slugs) {
  assert.ok(home.includes(`/work/${slug}/`));
  const page = readFileSync(`out/work/${slug}/index.html`, "utf8");
  assert.ok(page.includes("<h1"));
  assert.ok(page.includes(`https://inba.dev/work/${slug}/`));
  const anchor = { "natural-language-filtering": "smart-filters", "ai-native-engineering": "ai-native-engineering", "ace-mcp": "ace", visionguard: "visionguard" }[slug];
  assert.ok(page.includes(`href="/#${anchor}"`));
  assert.ok(page.includes("My contribution"));
  assert.ok(!/GraphQL|MCP app|plugin.delivery/i.test(page));
}
for (const text of ["Jul 2026–Present", "Dec 2022–Feb 2023", "Proceedings · forthcoming"]) assert.ok(home.includes(text), `Missing ${text}`);
for (const target of ["work", "research", "experience", "contact"]) assert.ok(home.includes(`href="/#${target}"`));
console.log("Content, project order, static routes, canonicals, contribution boundaries, and navigation verified");

const filtering = readFileSync("out/work/natural-language-filtering/index.html", "utf8");
for (const phrase of ["Filter activity increased 13% in the first month", "measured by page and API requests", "About 40% of queries used the deterministic path", "reducing latency for those queries from 5 seconds to under 1 second"]) {
  assert.ok(filtering.includes(phrase), `Filtering metric boundary missing: ${phrase}`);
}
const workflows = readFileSync("out/work/ai-native-engineering/index.html", "utf8");
for (const phrase of ["helped cut monthly AI spend by 52% while supporting higher delivery volume", "helped the team resolve 123 Jira bugs in three weeks", "estimated diagnostic time falling from 30 to 5 minutes"]) assert.ok(workflows.includes(phrase), `Missing team-attributed outcome: ${phrase}`);
assert.doesNotMatch(home, /Engineering for real product workflows\./, "redundant About section must remain removed");

const ace = readFileSync("out/work/ace-mcp/index.html", "utf8");
assert.ok(ace.includes("I designed the query language and client-facing interface for document search and aggregation, and contributed multi-turn evaluations."), "ACE contribution description missing");
for (const phrase of ["from 26.4 to 32.6 dB in the reported benchmark", "reducing entry time by about 35% in tests", "Indian Patent No. 576831, granted in 2025"]) {
  assert.ok(home.includes(phrase), `Research benchmark qualifier missing: ${phrase}`);
}
const removedCertificates = [
  "https://drive.google.com/file/d/1-LrhKrFmR9FZvuXp9MBH59vLjfCgzr6o/view",
  "https://www.credly.com/badges/0caf0ab0-83e9-4614-810a-0a54ef7eb5ab",
];
const caseOnlyReferences = [links.openSpec, links.mattPocockSkills, links.pstack, links.bmadMethod, links.bmadBuilder];
for (const page of [home, ...slugs.map(slug => readFileSync(`out/work/${slug}/index.html`, "utf8"))]) {
  for (const href of removedCertificates) assert.ok(!page.includes(href), `Removed certificate rendered: ${href}`);
}
for (const href of caseOnlyReferences) {
  assert.ok(workflows.includes(`href="${href}"`), `AI case reference missing: ${href}`);
  assert.ok(!home.includes(href), `Case-only reference leaked onto homepage: ${href}`);
  for (const slug of slugs.filter(slug => slug !== "ai-native-engineering")) {
    assert.ok(!readFileSync(`out/work/${slug}/index.html`, "utf8").includes(href), `AI reference rendered on ${slug}`);
  }
}
for (const href of [links.icasspPaper, links.icasspPoster, links.spectrumLab, links.softpositCode, links.congaPaper, links.patentCertificate]) {
  assert.ok(home.includes(`href="${href.replaceAll("&", "&amp;")}"`), `Retained research reference missing: ${href}`);
}
for (const href of [links.visionguardCode, links.visionguardGsoc, links.visionguardWriteUp]) {
  assert.ok(home.includes(`href="${href}"`), `VisionGuard homepage artifact missing: ${href}`);
  assert.ok(readFileSync("out/work/visionguard/index.html", "utf8").includes(`href="${href}"`), `VisionGuard case artifact missing: ${href}`);
}
console.log("Refined outcome qualifiers, research references, removed certificates and case-only attribution verified");

const paths = ["/", ...site.navigation.map(({ route }) => route), ...slugs.map(projectPath)];
const expectedUrls = paths.map(path => new URL(path, siteOrigin).href);
const sitemap = readFileSync("out/sitemap.xml", "utf8");
assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url), expectedUrls);
const exportedPages = readdirSync("out", { recursive: true })
  .filter(path => path.endsWith("index.html") && !path.startsWith("404/"))
  .map(path => `/${path.slice(0, -"index.html".length)}`);
assert.deepEqual(exportedPages.sort(), [...paths].sort());
assert.equal(readFileSync("out/robots.txt", "utf8").trim(), `User-Agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml`);

for (const { route } of site.navigation) {
  assert.ok(home.includes(`href="${route}"`), `Missing homepage link to ${route}`);
}

const escapeAttribute = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
const unique = { titles: new Set(), descriptions: new Set() };
for (const [index, path] of paths.entries()) {
  const html = readFileSync(`out${path}index.html`, "utf8");
  const head = html.match(/<head>(.*?)<\/head>/s)?.[1];
  assert.ok(head, `Missing initial HTML head for ${path}`);
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = head.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description, `Missing title or description for ${path}`);
  unique.titles.add(title);
  unique.descriptions.add(description);

  const social = path === "/" ? {
    title: escapeAttribute(homepageSharing.title),
    description: escapeAttribute(homepageSharing.description),
  } : { title, description };
  if (path === "/") {
    assert.equal(title, escapeAttribute(seo.title));
    assert.equal(description, escapeAttribute(seo.description));
  }

  const url = expectedUrls[index];
  const { share } = searchAssets;
  const image = `${siteOrigin}${share.path(path)}`;
  assert.deepEqual([...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(([, value]) => value), [url]);
  for (const [name, value] of Object.entries({
    url, ...social, type: "website", site_name: site.mark,
    image, "image:type": share.type, "image:width": share.width, "image:height": share.height,
  })) {
    assert.ok(head.includes(`property="og:${name}" content="${value}"`), `Missing og:${name} for ${path}`);
  }
  const alt = head.match(/property="og:image:alt" content="([^"]+)"/)?.[1];
  assert.ok(alt, `Missing Open Graph image alt for ${path}`);
  if (path === "/") assert.equal(alt, escapeAttribute(homepageShareArt.alt));
  for (const [name, value] of Object.entries({ card: "summary_large_image", ...social, image, "image:alt": alt })) {
    assert.ok(head.includes(`name="twitter:${name}" content="${value}"`), `Missing twitter:${name} for ${path}`);
  }
  assert.doesNotMatch(head, /noindex/i);
  const { format, width, height } = await sharp(`out${share.path(path)}`).metadata();
  assert.deepEqual([format, width, height], ["png", share.width, share.height]);
}
assert.equal(unique.titles.size, paths.length);
assert.equal(unique.descriptions.size, paths.length);

for (const { path, size } of [searchAssets.favicon, searchAssets.appleTouchIcon]) {
  const { format, width, height } = await sharp(`out${path}`).metadata();
  assert.deepEqual([format, width, height], ["png", size, size]);
  assert.ok(home.includes(`href="${path}"`));
}

const jsonLd = home.match(/<script type="application\/ld\+json">(.+?)<\/script>/)?.[1];
assert.ok(jsonLd, "Missing homepage structured data");
const graph = JSON.parse(jsonLd)["@graph"];
const website = graph.find(node => node["@type"] === "WebSite");
const profile = graph.find(node => node["@type"] === "ProfilePage");
assert.equal(website.name, homepage.name);
assert.equal(website.alternateName, site.mark);
assert.equal(website.url, `${siteOrigin}/`);
assert.equal(profile.url, website.url);
assert.equal(profile.isPartOf["@id"], website["@id"]);
assert.equal(profile.mainEntity["@type"], "Person");
assert.equal(profile.mainEntity.name, homepage.name);
assert.deepEqual(profile.mainEntity.sameAs, [links.linkedin, links.github]);
console.log("Nine indexable exports, sitemap, robots, initial search and social metadata, icons and JSON-LD verified");
