import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { links } from "../content/links.ts";
const portfolio = readFileSync("content/portfolio.ts", "utf8");
const home = readFileSync("out/index.html", "utf8");
const slugs = ["natural-language-filtering", "ai-native-engineering", "ace-mcp", "visionguard"];
assert.deepEqual([...portfolio.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]), slugs);
assert.equal(links.icasspPoster, "/ICASSP-DUN-Poster.pdf");
assert.ok(home.includes("Inbasekaran Perumal | Applied AI &amp; Software Engineering"));
for (const slug of slugs) {
  assert.ok(home.includes(`/work/${slug}/`));
  const page = readFileSync(`out/work/${slug}/index.html`, "utf8");
  assert.ok(page.includes("<h1"));
  assert.ok(page.includes(`https://inba.dev/work/${slug}/`));
  assert.ok(page.includes('href="/#work"'));
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
assert.ok(ace.includes("Another engineer implemented the interface."), "ACE implementation attribution missing");
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
