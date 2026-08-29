import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const page = read("app/page.tsx");
const portfolio = read("content/portfolio.ts");
const navigation = read("components/site-navigation.tsx");
const scene = read("components/hero-scene.tsx");
const canvas = read("components/hero-canvas.tsx");
const portrait = read("components/portrait-triptych.tsx");
const projectStories = read("components/project-stories.tsx");
const styles = read("app/globals.css");

test("the static page communicates the systems identity and routes", () => {
  assert.match(page, /I turn meaningful business problems into reliable software and AI systems\./);
  assert.match(page, /Software Development Engineer II, RingCentral/);
  assert.match(page, /<PortraitTriptych \/>/);
  assert.match(page, /Skip to content/);
  assert.match(page, /id="contact"/);
  assert.match(navigation, /href: "#work"/);
  assert.match(navigation, /href: "#research"/);
  assert.match(navigation, /href: "#track-record"/);
  assert.match(navigation, /href: "#contact"/);
  assert.match(navigation, /inba\.dev/);
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
  assert.match(portrait, /portrait-triptych/);
  assert.doesNotMatch(portrait, /inbase-editorial-dark\.png/);
  assert.match(page, /<PortraitTriptych \/>/);
  assert.match(styles, /\.hero-canvas \{ display: none; \}/);
  assert.doesNotMatch(projectStories, /initial=/);
});

test("the portrait uses a fixed multi-window mask and theme-safe treatment", () => {
  assert.match(styles, /portrait-window-mask\.svg/);
  assert.match(styles, /@supports \(\(mask-image/);
  assert.match(styles, /--portrait-wash/);
  assert.match(styles, /--portrait-filter/);
  assert.match(styles, /color-scheme: light/);
  assert.doesNotMatch(styles, /@media \(prefers-color-scheme: dark\)/);
  assert.match(styles, /transition: border-color 360ms ease, filter 360ms ease/);
  assert.match(styles, /@media \(max-width: 767px\)/);
  assert.doesNotMatch(styles, /filter: invert\(/);
});

test("the face-first mask prioritizes a full-height central portrait window", () => {
  const mask = read("public/assets/portrait-window-mask.svg");
  assert.equal((mask.match(/fill="white"/g) ?? []).length, 3);
  assert.match(mask, /x="201" y="36" width="598" height="1028"/);
  assert.match(mask, /x="24" y="328" width="150" height="700"/);
  assert.match(mask, /x="826" y="184" width="150" height="816"/);
  assert.match(styles, /\.hero__art \{ aspect-ratio: 0\.8; margin-left: auto; max-width: 560px/);
  assert.match(styles, /transform: scale\(1\.12\) translateX\(-3\.3%\)/);
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

  assert.match(documentShell, /<section(?=[^>]*class="thesis-stage")(?=[^>]*id="top")/);
  assert.match(documentShell, /<section(?=[^>]*class="identity-frame")(?=[^>]*id="identity-frame")/);
  assert.match(documentShell, /<section(?=[^>]*id="contact")/);
  assert.match(documentShell, /<figure class="portrait-triptych"/);
  assert.match(documentShell, /<nav class="section-navigation"/);
  assert.doesNotMatch(documentShell, /href="#systems"/);
  assert.doesNotMatch(documentShell, /href="#credibility"/);
});

test("narrow layouts and accessible focus states are explicitly styled", () => {
  assert.match(styles, /@media \(max-width: 767px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height: 100dvh/);
});
