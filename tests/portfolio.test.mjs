import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const page = read("app/page.tsx");
const portfolio = read("content/portfolio.ts");
const scene = read("components/hero-scene.tsx");
const canvas = read("components/hero-canvas.tsx");
const portrait = read("components/split-portrait.tsx");
const projectStories = read("components/project-stories.tsx");
const styles = read("app/globals.css");

test("the static page communicates the systems identity and routes", () => {
  assert.match(page, /AI\/ML Systems Engineer/);
  assert.match(page, /View flagship systems/);
  assert.match(page, /href="#contact"/);
  assert.match(page, /href="#credibility"/);
  assert.match(page, /Résumé/);
  assert.match(page, /Skip to content/);
  assert.match(page, /rel: "noreferrer"/);
  assert.match(page, /target: "_blank"/);
});

test("the RingCentral stories carry the approved labels and delivery evidence", () => {
  for (const title of ["Smart Filters", "Aura", "Ace IO MCP"]) {
    assert.match(portfolio, new RegExp(title));
  }
  for (const label of [
    "Agentic \\+ deterministic orchestration",
    "Agentic workflows \\+ evaluation",
    "Governed data access \\+ MCP delivery",
  ]) {
    assert.match(portfolio, new RegExp(label));
  }
  assert.equal((portfolio.match(/ownership:\n/g) ?? []).length, 3);
  assert.match(portfolio, /Evaluated/);
  assert.match(portfolio, /Integrated/);
  assert.match(portfolio, /Shipped/);
});

test("static portrait remains complete when WebGL is unavailable", () => {
  assert.match(portrait, /inbase-editorial-portrait\.png/);
  assert.equal((portrait.match(/portrait-panel/g) ?? []).length >= 5, true);
  assert.match(page, /<SplitPortrait \/>/);
  assert.match(styles, /\.hero-canvas \{ display: none; \}/);
  assert.doesNotMatch(projectStories, /initial=/);
});

test("the WebGL effect is optional, constrained, and demand rendered", () => {
  for (const guard of [
    "prefers-reduced-motion",
    "pointer: coarse",
    "saveData",
    "hardwareConcurrency",
    "deviceMemory",
    "getContext(\"webgl2\")",
  ]) {
    assert.match(canvas, new RegExp(guard.replace(/[()]/g, "\\$&")));
  }
  assert.match(canvas, /CanvasErrorBoundary/);
  assert.match(canvas, /canRenderHeroCanvas/);
  assert.match(canvas, /try \{/);
  assert.match(scene, /frameloop="demand"/);
  assert.match(scene, /antialias: false/);
  assert.match(scene, /dpr=\{\[1, 1\.25\]\}/);
  assert.doesNotMatch(scene, /onClick/);
});

test("the production-rendered page contains the anchorable systems and approved external routes", () => {
  const rendered = read(".next/server/app/index.html");
  const documentShell = rendered.slice(0, rendered.indexOf("</main>") + "</main>".length);

  assert.match(documentShell, /<section(?=[^>]*class="systems section-shell")(?=[^>]*id="systems")/);
  assert.equal((documentShell.match(/<article class="project-story/g) ?? []).length, 3);
  assert.equal((documentShell.match(/What I owned/g) ?? []).length, 3);
  assert.match(documentShell, /href="#systems"/);

  for (const href of [
    "mailto:inba2002.p@gmail.com",
    "https://www.linkedin.com/in/inbasperu",
    "https://github.com/the-pinbo",
    "https://drive.google.com/file/d/1Yd9XmOQbQr_j_XIw3krVfHL3XIJ8zHTQ/view?usp=sharing",
  ]) {
    assert.match(documentShell, new RegExp(`href="${href.replace(/[.?]/g, "\\$&")}"`));
  }
});

test("narrow layouts and accessible focus states are explicitly styled", () => {
  assert.match(styles, /@media \(max-width: 767px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height: 100dvh/);
});
