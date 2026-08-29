Conduct a review of CONTENT.
Look for what's missing, not only what's wrong.
Find at least ten issues to fix or improve.
Output a Markdown list of findings only — no severity, priority, or ranking.
If the content is empty, stop and say so.
If you have zero findings, re-check and keep thinking; do not stop with an empty list.

CONTENT:
Diff since b527b3f61820f24b2381359d4b300859a9b1e550, including all tracked and untracked changes:

- `app/globals.css`: replaces four separately positioned crop classes (`.portrait-panel`, `--one` through `--four`) with a single absolute `.portrait-single` container. Adds light tokens `--portrait-wash: rgb(238 230 218 / 0.1)`, `--portrait-wash-blend: multiply`, `--portrait-filter: saturate(0.94) contrast(1.02)`, and `--portrait-edge: rgb(23 43 60 / 0.22)`. Adds dark overrides `rgb(23 43 60 / 0.38)`, `color`, `brightness(0.82) saturate(0.84) contrast(1.1)`, and `rgb(238 230 218 / 0.3)`. `.portrait-single` has a border fallback, `overflow: hidden`, and a 360ms colour/filter transition. Its `::after` applies the wash with the configured blend mode. A feature query applies `-webkit-mask` and `mask` from `/assets/portrait-window-mask.svg`; mobile changes only fallback border-radius.
- `components/split-portrait.tsx`: removes the four-item `panels` map and four `Image` instances. It now renders exactly one priority `Image` sourced from `/assets/inbase-editorial-portrait.png` inside `.portrait-single`, retaining the `role="img"` wrapper and its accessible label.
- `tests/portfolio.test.mjs`: replaces the prior crop-count assertion with assertions for exactly one `Image`, `.portrait-single`, and no `inbase-editorial-dark.png`. Adds a source test requiring the SVG mask, feature query, dark tokens, transition, narrow breakpoint, and no `filter: invert`. Adds a production-rendered assertion for exactly one `<img class="portrait-image">`.
- New `public/assets/portrait-window-mask.svg`:
  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" preserveAspectRatio="none">
    <rect width="1000" height="1100" fill="transparent"/>
    <rect x="48" y="500" width="158" height="390" rx="79" fill="white"/>
    <rect x="252" y="270" width="178" height="620" rx="89" fill="white"/>
    <rect x="470" y="142" width="202" height="748" rx="101" fill="white"/>
    <rect x="718" y="252" width="234" height="638" rx="117" fill="white"/>
  </svg>
  ```
- Untracked binary files: `.DS_Store` (SHA-256 `52650335fd360683d8077153d5baf326003891d6fb950e79dc886e937883a59a`) and `public/assets/inbase-editorial-dark.png` (SHA-256 `54aff0b8017e7c21c1945719f28569c21fe517be3374cc152080272e41ffa8f0`). Their binary content is omitted; the dark portrait is intentionally left unrendered.

Do not invoke any skill. Return only the review result.
