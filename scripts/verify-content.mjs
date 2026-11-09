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
for (const phrase of ["filter activity up 13%", "page and API requests", "About 40% of queries", "for that subset"]) {
  assert.ok(filtering.includes(phrase), `Filtering metric boundary missing: ${phrase}`);
}
const workflows = readFileSync("out/work/ai-native-engineering/index.html", "utf8");
for (const phrase of ["helped the team reduce monthly AI spend by 52%", "helped the team resolve 123 Jira bugs", "estimated diagnostic time fell from 30 to 5 minutes"]) assert.ok(workflows.includes(phrase), `Missing team-attributed outcome: ${phrase}`);
assert.doesNotMatch(home, /Engineering for real product workflows\./, "redundant About section must remain removed");
