import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const projectRoot = new URL("../", import.meta.url);
const rootPath = projectRoot.pathname;
const allowedExtensions = new Set([".css", ".ts", ".tsx"]);
const ignored = new Set([".git", ".next", "node_modules", "out", "_bmad-output"]);
const files = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignored.has(entry)) continue;
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (allowedExtensions.has(extname(path))) files.push(path);
  }
}

walk(rootPath);
files.push(join(rootPath, "out/index.html"));
const prohibited = [
  [/hero-canvas|hero-scene|HeroCanvas|HeroScene/, "dead WebGL hero enhancement"],
  [/href=["']#(?:systems|credibility)["']/, "stale route"],
  [/\.(?:site-nav|project-story|engineering-loop|credibility)(?:\W|$)/, "legacy selector"],
  [/class(?:Name)?=["'][^"']*\b(?:site-nav|project-story|engineering-loop|credibility)\b/, "legacy JSX/rendered class name"],
  [/--(?:parchment|navy|slate|vermilion|surface|surface-strong|text-muted|paper-shadow|portrait-filter|frame)\s*:/, "legacy token alias"],
  [/\b(?:Aura|production-ready|flagship systems|engineering loop)\b/i, "prohibited public copy"],
];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const [pattern, label] of prohibited) {
    assert.doesNotMatch(text, pattern, `${label} found in ${relative(rootPath, file)}`);
  }
}
console.log(`legacy and prohibited-copy scan passed across ${files.length} files`);
