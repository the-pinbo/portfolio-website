# UX Spine Validation — Visual Integrity and Implementation Feasibility

Reviewed on 2026-08-23 against:

- `DESIGN.md`
- `EXPERIENCE.md`
- `.memlog.md`
- `reconcile-user-visuals.md`
- `.working/direction-riso-tech-editorial.html`
- `brain-dump/portfolio-content.md`
- the current Next.js app, components, assets, and dependency set

This is a behavioral-document review. It tests whether the approved direction can survive implementation without drifting back into a templated portfolio, and whether the current stack can deliver it accessibly and within credible Core Web Vitals constraints.

## Verdicts

### Visual integrity: conditional pass

The direction is distinctive and internally consistent. Its strongest safeguards are the continuous paper canvas, restrained typography, three-pillar portrait, project-specific chapter composition, quiet artifact links, and explicit rejection of generic portfolio vocabulary. No critical visual-direction conflict remains.

The pass is conditional because only the opening, identity, and Smart Filters entry have a resolved key-screen mock. The later chapters, Track Record, and generated-versus-real artifact language are described well but not yet specified tightly enough to prevent implementation drift into repeated rows, metadata chips, or generic editorial cards.

### Implementation feasibility: conditional pass

The current Next.js 15 / React 19 / React Three Fiber stack can implement the direction. The existing code already proves that WebGL can be dynamically isolated and demand-rendered. Server-rendered narrative content with small client enhancement islands is a plausible architecture.

The pass is conditional because the spine does not yet define measurable performance budgets, font delivery, exact client boundaries, responsive pin eligibility, deep-link behavior, or the event model for a non-intercepting pointer-reactive canvas. Those omissions make Core Web Vitals plausible, but not yet contractually protected.

## Visual-integrity findings

### VI-01 — High — The approved portrait crop is not promoted into the canonical component contract

- **Location:** `DESIGN.md:212`, `DESIGN.md:232`; `.memlog.md:41-43`; working mock `direction-riso-tech-editorial.html:664-688`
- **Finding:** The spine says to keep the approved crop, while the only exact geometry lives in the decision log and working mock. A developer can satisfy the prose while losing the face scale, peripheral-only side treatment, or uniform source scaling that made the mock work.
- **Fix:** Add a canonical portrait crop map to `DESIGN.md` or a referenced asset contract: 650×650 view box, three mask bounds, source image bounds, `preserveAspectRatio` behavior, and the rule that side panels cannot contain a readable eye, nose, or mouth. Add desktop and mobile visual-regression snapshots.

### VI-02 — High — Most of the authored story has no validated key-screen composition

- **Location:** `EXPERIENCE.md:28-36`, `EXPERIENCE.md:69-74`; working mock `direction-riso-tech-editorial.html:631-739`
- **Finding:** The working mock resolves only Opening, Identity, and the Smart Filters entry. ACE io MCP, VisionGuard, Research, Open Source, Patent, Track Record, and Contact still depend on prose descriptions. This is where repeated two-column sections or tasteful-looking generic cards are most likely to re-enter.
- **Fix:** Before live implementation, approve one static key screen for each remaining composition family: ACE io MCP, VisionGuard, compact editorial chapter, Track Record index, and Contact. Review the full sequence as a single long page to catch repetition between individually attractive screens.

### VI-03 — High — The compact editorial chapters are required to differ, but their differences are not defined

- **Location:** `DESIGN.md:210`, `DESIGN.md:233-237`; `EXPERIENCE.md:31-35`; `reconcile-user-visuals.md:31`
- **Finding:** “Consecutive chapters should not repeat an identical grid” is a useful prohibition, not an implementable composition plan. Research, Open Source, and Patent all currently share the same content recipe: one visual, short copy, artifact links.
- **Fix:** Assign each chapter a distinct information-bearing composition before implementation. For example: research can foreground a real paper excerpt and one conceptual figure; open source can foreground a contribution trace; patent can foreground an unaltered certificate/specification fragment. Preserve the same type and spacing system while changing the narrative geometry, not merely the alignment.

### VI-04 — Medium — Technical metadata can easily become the skill-chip wall the direction rejects

- **Location:** `DESIGN.md:81-86`, `DESIGN.md:204`, `DESIGN.md:233`; `EXPERIENCE.md:69`; `reconcile-user-visuals.md:44`
- **Finding:** The contract allows contextual technical metadata but does not define its maximum density or visual form. Repeated technology pills would reproduce a conventional Skills section inside every project.
- **Fix:** Specify plain inline text or a quiet definition-list treatment, no filled pills, no logos, and a small project-specific cap. Include a technology only when the adjacent narrative explains its role or a real decision it enabled.

### VI-05 — Medium — The Track Record index can regress into a résumé timeline or directory

- **Location:** `DESIGN.md:161-164`, `DESIGN.md:237`; `EXPERIENCE.md:35`, `EXPERIENCE.md:73`, `EXPERIENCE.md:178-186`
- **Finding:** Repeated institution/role/year/contribution rows with dividers are structurally close to a conventional experience list, even when ordered by narrative importance.
- **Fix:** Add a narrative lead-in that explains what the environments collectively establish, keep role/date treatment subordinate, and art-direct one reveal object rather than turning every row into an identical expandable card. Validate the full index against the rejected résumé-timeline reference.

### VI-06 — Medium — Generated illustrations and real artifacts are separated in principle, not yet by a durable visual grammar

- **Location:** `DESIGN.md:235-236`, `DESIGN.md:249`; `EXPERIENCE.md:71-72`, `EXPERIENCE.md:136`; `reconcile-user-visuals.md:46`; `.memlog.md:15-16`
- **Finding:** An editorial system diagram can still be mistaken for a real product or architecture artifact if both use the same Riso frame and appear without context.
- **Fix:** Give conceptual illustrations a consistent caption such as “Conceptual view” or a visually unmistakable illustration treatment; keep real artifacts source-faithful, linked, and unaltered except for surrounding layout. Never place invented UI text, metrics, customer language, or document chrome inside generated art.

### VI-07 — Medium — Small coral and structure-colored text can violate the intended hierarchy and contrast floor

- **Location:** `DESIGN.md:14-19`, `DESIGN.md:81-86`, `DESIGN.md:157-160`, `DESIGN.md:189-192`; `EXPERIENCE.md:116-119`
- **Finding:** `structure` on `paper` is approximately 2.60:1 and `coral` on `paper` approximately 3.22:1. Both fail WCAG AA for normal-size text; coral also cannot be assumed to satisfy non-text focus contrast on every adjacent surface. The prose warns about this but still assigns these tokens to diagram labels, metadata, links, and focus.
- **Fix:** Reserve `structure` and coral for non-load-bearing marks or large/bold text. Use `muted` or ink for all 12–14px labels and link names. Define a verified darker focus token, or pair coral with a high-contrast ink outline/underline. Record the approved token-pair matrix in `DESIGN.md`.

### VI-08 — Medium — Typography tokens do not cover the intermediate responsive range

- **Location:** `DESIGN.md:20-91`, `DESIGN.md:200-204`; `EXPERIENCE.md:143-145`
- **Finding:** The spine defines desktop and mobile thesis/identity sizes but only one size for section and project headings. The 768–1199px range is where the approved hierarchy is most likely to become oversized or wrap into the rejected multi-line-display pattern.
- **Fix:** Define fluid `clamp()` ranges or explicit tablet tokens for thesis, identity, section, project, and body sizes, plus maximum line counts and width constraints. Test at 768, 834, 1024, 1199, short landscape, and 200% zoom.

### VI-09 — Low — Repeating the Riso treatment across every generated visual could flatten the narrative

- **Location:** `DESIGN.md:179`, `DESIGN.md:235`; `reconcile-user-visuals.md:30-31`, `reconcile-user-visuals.md:49-51`
- **Finding:** The palette is coherent enough that every illustration may receive the same navy/coral grain, two-column placement, and inset paper field. That would make a bespoke system feel like a themed template.
- **Fix:** Keep palette and material consistent, but vary density, scale, cropping, and the ratio of real artifact to conceptual illustration. Require at least one low-texture resting chapter between dense visual moments.

## Implementation-feasibility findings

### IF-01 — High — Core Web Vitals are named as an aspiration but have no acceptance budgets

- **Location:** `EXPERIENCE.md:80-82`, `EXPERIENCE.md:105-112`, `EXPERIENCE.md:139-150`; `package.json:5-10`
- **Finding:** The contract contains graceful fallbacks but no numerical LCP, INP, CLS, JavaScript, texture, or animation-frame budgets. The current test command builds and runs Node tests; it does not measure browser performance.
- **Fix:** Add release gates measured on representative mobile and desktop profiles: p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1, no long task over 200ms during initial interaction, and a documented JS/image budget for the opening route. Add Lighthouse CI or an equivalent repeatable lab check, then verify field data after launch.

### IF-02 — High — Existing raster sources are too large to ship as an undefined fallback strategy

- **Location:** `public/assets/inbase-editorial-portrait.png` (2.9 MB), `riso-paper-substrate-v1.png` (2.5 MB), navy/coral masks (about 688 KB combined); `DESIGN.md:132-135`; `EXPERIENCE.md:81`, `EXPERIENCE.md:112`, `EXPERIENCE.md:148`
- **Finding:** The contract says “optimized raster” but does not define formats, responsive sizes, preload priority, or whether the 2.5 MB source substrate is excluded from delivery. Loading these alongside Three.js can directly threaten LCP and mobile memory.
- **Fix:** Treat the full substrate PNG as source-only. Generate AVIF/WebP responsive derivatives, retain the 28 KB grain map where useful, size the portrait with `next/image`, and lazy-load non-LCP masks/illustrations. Do not request Three.js or shader textures until after the HTML thesis has painted and capability checks pass.

### IF-03 — High — The non-intercepting canvas rule conflicts with pointer-reactive WebGL

- **Location:** `EXPERIENCE.md:67`, `EXPERIENCE.md:97`, `EXPERIENCE.md:109`, `EXPERIENCE.md:120`; current `components/hero-scene.tsx:71-85`; current `app/globals.css:170-172`
- **Finding:** The spine says the canvas cannot intercept pointer events, while the current implementation receives pointer events on the Three.js mesh and CSS enables pointer interaction on the canvas layer. That can interfere with scrolling or links once the canvas becomes full-canvas.
- **Fix:** Set the decorative canvas to `pointer-events: none`. Capture passive pointer coordinates on the owning hero section or document, normalize them into canvas space, and pass them to the shader without hit-testing the WebGL scene. Suspend listeners when off-screen, backgrounded, reduced-motion, or capability-ineligible.

### IF-04 — High — The server/client boundary is not explicit enough to protect first paint and bundle size

- **Location:** `EXPERIENCE.md:14`, `EXPERIENCE.md:80`, `EXPERIENCE.md:107-112`; current `app/page.tsx:12-114`; current `components/hero-canvas.tsx:1-74`
- **Finding:** Progressive enhancement is required, but the spine does not state which components remain Server Components. Scroll state, active navigation, portrait interaction, Track Record disclosure, and WebGL could accidentally turn the whole page into one client component.
- **Fix:** Make the page, content chapters, artifact links, portrait SVG, and settled Smart Filters mapping server-rendered. Isolate client islands for `WebGLSubstrate`, `PinnedSequenceController`, active-nav observation, and optional disclosures. Dynamically import Three.js with `ssr: false`; do not import R3F from the page or shared server component.

### IF-05 — High — Pinning eligibility is incomplete for short desktops, zoom, and dynamic viewport changes

- **Location:** `EXPERIENCE.md:95`, `EXPERIENCE.md:109-110`, `EXPERIENCE.md:124-125`, `EXPERIENCE.md:143-147`
- **Finding:** Desktop widths ≥1200px always receive exactly two pins, while only tablets have a viewport-height/performance escape hatch. A short laptop window, landscape tablet reporting a wide CSS viewport, browser zoom, or enlarged text can make the pinned content impossible to read.
- **Fix:** Gate pinning on width, minimum usable height, motion preference, zoom/reflow fit, and content measurement—not width alone. Re-evaluate on resize/orientation/font load, and fall back to settled natural flow without changing reading order. Prefer CSS `position: sticky` plus bounded scroll progress; never lock the wheel.

### IF-06 — High — Font delivery and supported weights are unspecified

- **Location:** `DESIGN.md:20-91`, `DESIGN.md:198`; current `app/layout.tsx:1-25`; current `app/globals.css:51-58`
- **Finding:** The visual system depends heavily on Instrument Sans and IBM Plex Mono, but the app currently renders Arial and system monospace. Several specified weights (520, 540, 560, 570) require variable-font support; naïve remote CSS loading can introduce FOIT/FOUT and layout shift.
- **Fix:** Load variable fonts through `next/font/google` or self-hosted files in the root layout, expose their CSS variables, and use metric-compatible fallbacks. Confirm the chosen files support every requested weight or normalize to supported values. Preload only the necessary subsets and verify CLS with fonts cold-cached.

### IF-07 — High — Direct anchors and restored scroll positions do not have a navigation/reveal contract

- **Location:** `EXPERIENCE.md:38`, `EXPERIENCE.md:64-66`, `EXPERIENCE.md:80-85`, `EXPERIENCE.md:156-169`
- **Finding:** The narrative assumes a top-of-page entrance, but visitors can load `#work`, `#research`, or a restored mid-page session. If navigation is hidden until an opening animation state settles, deep-linked visitors may see no navigation or an incorrect active state during hydration.
- **Fix:** Keep navigation in the DOM and derive visibility from document position, not a one-time animation completion flag. On initial load and `hashchange`, immediately render the settled state appropriate to the target, account for the fixed-nav offset with `scroll-margin-top`, and initialize the active item without layout shift.

### IF-08 — Medium — The pinned sequences have no lifecycle, duration, or progress-mapping specification

- **Location:** `EXPERIENCE.md:95`, `EXPERIENCE.md:103`, `EXPERIENCE.md:109-110`
- **Finding:** “Exactly two pinned sequences” defines quantity but not maximum scroll distance, start/end thresholds, refresh behavior, or cleanup. Implementations can become slow, trap-like, or expensive while still satisfying the wording.
- **Fix:** Define a bounded scroll length for each sequence, named progress checkpoints, and a maximum duration in viewport heights. Use passive scroll/observer inputs, schedule visual writes in `requestAnimationFrame`, stop updates off-screen/backgrounded, and remove listeners on unmount.

### IF-09 — Medium — Track Record tap behavior risks nested controls and accidental navigation

- **Location:** `EXPERIENCE.md:73`, `EXPERIENCE.md:90`, `EXPERIENCE.md:101`, `EXPERIENCE.md:184`
- **Finding:** “Tap to reveal; second tap or explicit link follows” is ambiguous when a row also contains native artifact links. Making the whole row a button would create nested interactive elements; making the first tap consume a link surprises touch users.
- **Fix:** Keep each row non-interactive by default. Use a dedicated disclosure button with `aria-expanded` and a separate native artifact link. Reveal content without changing row height where practical, and preserve a visible no-JavaScript baseline.

### IF-10 — Medium — The mobile navigation treatment is described but not geometrically resolved

- **Location:** `EXPERIENCE.md:65`, `EXPERIENCE.md:118`, `EXPERIENCE.md:145`; `DESIGN.md:118-124`, `DESIGN.md:228-230`
- **Finding:** Four fixed labels plus 44px hit targets can overflow at 320px, especially with text scaling or translated browser UI. “Compact, horizontally safe” leaves the failure mode unresolved.
- **Fix:** Approve a mobile navigation layout at 320px and 200% zoom. Prefer a wrapping or bottom-safe arrangement that keeps all destinations visible; do not hide items behind an unlabeled icon or horizontal scroll without clear affordance.

### IF-11 — Medium — Generated and project visuals lack complete loading and semantic rules

- **Location:** `EXPERIENCE.md:71`, `EXPERIENCE.md:89`, `EXPERIENCE.md:121-123`; `DESIGN.md:235`
- **Finding:** The spine defines missing-art behavior but not which illustrations are informative, decorative, or linked, nor their intrinsic dimensions and loading priority. Incorrect choices can duplicate nearby copy for screen readers or cause layout shift.
- **Fix:** For every visual, record: semantic role, alt text or empty alt, intrinsic aspect ratio, responsive `sizes`, loading priority, and fallback. Reserve `priority` for the actual LCP candidate; give all later imagery fixed dimensions and lazy loading.

### IF-12 — Medium — The validation plan does not cover the behavior the spine depends on

- **Location:** `EXPERIENCE.md:76-126`, `EXPERIENCE.md:139-188`; `package.json:5-10`
- **Finding:** Existing tests can protect canonical wording but cannot verify heading order, anchor migration, keyboard focus, reduced motion, no horizontal overflow, WebGL fallback, or visual crop integrity.
- **Fix:** Add browser-level tests for the settled no-JS story, all anchors, keyboard navigation, reduced motion, 320px/200% reflow, touch disclosures, and WebGL-disabled fallback. Add visual snapshots for the three-pillar crop and each approved key screen, plus automated accessibility checks.

### IF-13 — Low — Legacy components and anchors can remain in the bundle or DOM after the redesign

- **Location:** current `app/page.tsx:19-109`, `components/project-stories.tsx:1-30`, `components/builder-field.tsx:1-14`, `components/split-portrait.tsx:21-23`; `EXPERIENCE.md:38-40`
- **Finding:** The live app still contains the rejected Engineering Loop, What I Owned, Flagship Systems, old anchors, handwritten copy, and dark-mode CSS. A partial migration can leave dead imports, duplicate IDs, or hidden legacy content.
- **Fix:** Treat the page rewrite as a replacement of the old information architecture. Remove obsolete components and content exports once no longer referenced, then search the built source for rejected terms and legacy anchors. Preserve only the required `#main-content`, `#top`, and `#contact` contracts.

## Counts

| Severity | Visual integrity | Feasibility | Total |
|---|---:|---:|---:|
| Critical | 0 | 0 | 0 |
| High | 3 | 7 | 10 |
| Medium | 5 | 5 | 10 |
| Low | 1 | 1 | 2 |
| **Total** | **9** | **13** | **22** |

## Recommended gate before key-screen production

The direction should proceed without reopening the approved concept. Before the final key-screen set becomes implementation authority, close the following gates:

1. Promote exact portrait geometry into the canonical design contract.
2. Mock the five remaining composition families as one continuous page.
3. Add the responsive typography, contrast-pair, generated-art, and metadata rules.
4. Define server/client islands, pointer event routing, pin eligibility, and deep-link behavior.
5. Add measurable asset, Core Web Vitals, accessibility, and browser-test acceptance criteria.

