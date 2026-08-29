---
name: inba.dev Riso-tech editorial
description: A light, print-led portfolio system where disciplined typography carries the story and interactive ink supplies the technical signature.
status: final
sources:
  - ../../../implementation-artifacts/spec-finalize-portfolio-content.md
  - ../../../../brain-dump/portfolio-content.md
  - ../../../brainstorming/brainstorm-portfolio-seven-slide-mock-revision-2026-08-23/brainstorm-intent.md
  - ../../../brainstorming/brainstorm-portfolio-layout-and-aceio-revision-2026-08-28/brainstorm-intent.md
  - ../../../../brain-dump/improvements.txt
updated: 2026-08-29
colors:
  paper: '#F1EEE7'
  paper-light: '#F8F5EE'
  ink: '#173047'
  ink-deep: '#102536'
  coral: '#CF654F'
  on-coral: '#0A1D2A'
  structure: '#8797A2'
  muted: '#596872'
  hairline: '#C9C5BC'
  focus: '#102536'
  focus-accent: '#CF654F'
typography:
  thesis:
    fontFamily: 'Instrument Sans'
    fontSize: 'clamp(42px, 5vw, 64px)'
    fontWeight: '520'
    lineHeight: '0.99'
    letterSpacing: -0.056em
  thesis-mobile:
    fontFamily: 'Instrument Sans'
    fontSize: 42px
    fontWeight: '520'
    lineHeight: '1.02'
    letterSpacing: -0.045em
  cadence:
    fontFamily: 'IBM Plex Mono'
    fontSize: 17px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.025em
  identity:
    fontFamily: 'Instrument Sans'
    fontSize: 'clamp(44px, 4.7vw, 60px)'
    fontWeight: '560'
    lineHeight: '0.95'
    letterSpacing: -0.058em
  identity-mobile:
    fontFamily: 'Instrument Sans'
    fontSize: 44px
    fontWeight: '560'
    lineHeight: '0.98'
    letterSpacing: -0.048em
  section:
    fontFamily: 'Instrument Sans'
    fontSize: 'clamp(32px, 3vw, 42px)'
    fontWeight: '560'
    lineHeight: '1.02'
    letterSpacing: -0.045em
  project:
    fontFamily: 'Instrument Sans'
    fontSize: 'clamp(34px, 3.5vw, 46px)'
    fontWeight: '570'
    lineHeight: '0.98'
    letterSpacing: -0.052em
  body-large:
    fontFamily: 'Instrument Sans'
    fontSize: 19px
    fontWeight: '500'
    lineHeight: '1.45'
    letterSpacing: -0.018em
  body:
    fontFamily: 'Instrument Sans'
    fontSize: 'clamp(16px, calc(0.3vw + 15px), 17px)'
    fontWeight: '400'
    lineHeight: '1.58'
    letterSpacing: -0.01em
  role:
    fontFamily: 'IBM Plex Mono'
    fontSize: 14px
    fontWeight: '540'
    lineHeight: '1.5'
    letterSpacing: -0.018em
  meta:
    fontFamily: 'IBM Plex Mono'
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0.035em
  navigation:
    fontFamily: 'Instrument Sans'
    fontSize: 14px
    fontWeight: '540'
    lineHeight: '1'
rounded:
  hairline: 2px
  sm: 4px
  md: 8px
  nav: 9999px
  portrait-panel: 72px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  '8': 64px
  '9': 96px
  '10': 144px
  page-margin-mobile: 20px
  page-margin-tablet: 40px
  page-margin-desktop: 64px
  content-max: 1280px
  reading-max: 56ch
components:
  site-mark:
    foreground: '{colors.ink-deep}'
    typography: '{typography.meta}'
  section-navigation:
    background: '{colors.paper-light}'
    foreground: '{colors.muted}'
    active-background: '{colors.ink-deep}'
    active-foreground: '{colors.paper-light}'
    border: '{colors.hairline}'
    radius: '{rounded.nav}'
  thesis-stage:
    background: '{colors.paper}'
    foreground: '{colors.ink-deep}'
    thesis: '{typography.thesis}'
    cadence: '{typography.cadence}'
    cadence-foreground: '{colors.ink}'
    cadence-ghost: '{colors.coral}'
  webgl-substrate:
    background: '{colors.paper}'
    navy-ink: '{colors.ink}'
    coral-ink: '{colors.coral}'
  portrait-triptych:
    background: '{colors.paper}'
    ghost-plate: '{colors.coral}'
    radius: '{rounded.portrait-panel}'
  project-chapter:
    background: '{colors.paper}'
    heading: '{typography.project}'
    body: '{typography.body}'
    metadata: '{typography.meta}'
  query-to-filter-transform:
    foreground: '{colors.ink-deep}'
    accent: '{colors.coral}'
    border: '{colors.hairline}'
    background: '{colors.paper-light}'
    radius: '{rounded.hairline}'
  editorial-visual:
    background: '{colors.paper-light}'
    navy-ink: '{colors.ink}'
    coral-ink: '{colors.coral}'
    border: '{colors.hairline}'
    radius: '{rounded.sm}'
  specimen-plate:
    background: '{colors.ink}'
    inset: '{spacing.3}'
    radius: '{rounded.sm}'
  mcp-app-stack:
    foreground: '{colors.ink-deep}'
    secondary: '{colors.muted}'
    accent: '{colors.coral}'
    contract-background: '{colors.paper-light}'
  research-poster-tile:
    foreground: '{colors.ink}'
    accent: '{colors.coral}'
    background: '{colors.paper-light}'
  fractal-precision-plate:
    foreground: '{colors.ink-deep}'
    rule: '{colors.ink}'
    registration: '{colors.coral}'
    background: '{colors.paper-light}'
  voice-ledger-field:
    ledger: '{colors.ink}'
    instruction: '{colors.coral}'
    background: '{colors.paper-light}'
  linked-artifact:
    foreground: '{colors.ink}'
    accent: '{colors.coral}'
    typography: '{typography.meta}'
  typographic-index:
    foreground: '{colors.ink-deep}'
    secondary: '{colors.muted}'
    divider: '{colors.hairline}'
  contact-close:
    background: '{colors.paper}'
    foreground: '{colors.ink-deep}'
    link: '{colors.ink-deep}'
    underline: '{colors.hairline}'
    active-underline: '{colors.coral}'
---

# inba.dev Visual Identity Spine

## Brand & Style

The visual identity is **modern Riso-tech editorial**. It should feel like a meticulously printed technical publication made interactive: quiet, exact, tactile, and visibly authored. The interface borrows the restraint and narrative confidence associated with Apple and Google product storytelling, while the Riso print language gives it a distinct identity.

The page is light-only in v1. One continuous cool paper canvas supports every chapter. Imperfect ink, halftone, dither, and registration shifts carry the human texture. The structure around them remains clean and contemporary.

Premium means disciplined hierarchy, negative space, strong alignment, and a small number of carefully engineered visual moments. It does not mean more motion or more decoration. Static composition must be approved before motion is added.

The approved opening direction is [Riso-tech editorial](mockups/direction-riso-tech-editorial.html). It establishes the opening, resolved identity, portrait geometry, and first Smart Filters composition. The canonical continuous desktop story is [key-continuous-desktop-story.html](mockups/key-continuous-desktop-story.html), and its mobile reflow is [key-mobile-settled-states.html](mockups/key-mobile-settled-states.html). These spines win on any conflict with a mock.

## Colors

- **Paper `{colors.paper}`** is the single full-page canvas. It is cool and quiet enough to integrate the printed portrait without looking sepia or nostalgic.
- **Paper light `{colors.paper-light}`** is used only for subtle inset surfaces such as filter results and the navigation shell. It must not turn the page into a field of cards.
- **Ink deep `{colors.ink-deep}`** is the primary text and active-navigation color. It should meet WCAG AA against both paper surfaces for body-sized text.
- **Ink navy `{colors.ink}`** carries secondary headlines, diagrams, links, and the navy print plate.
- **Coral `{colors.coral}`** is the sole registration accent. Use it for non-text marks, underlines, selected-phrase ghosts, and tiny ink shifts. It is not a small-text color, section background, or standalone focus indicator.
- **Muted `{colors.muted}`** supports role lines, secondary copy, diagram labels, and quiet metadata. **Structure `{colors.structure}`** and **Hairline `{colors.hairline}`** are decorative only; neither may carry readable text or be the sole boundary of an interactive control.
- **Focus `{colors.focus}`** is the load-bearing focus ring. **Focus accent `{colors.focus-accent}`** may add an offset registration echo, but never replaces the ring. **On coral `{colors.on-coral}`** is the only approved normal-text foreground on a solid coral surface; v1 should rarely need that surface.

### Verified contrast roles

Ratios below use the flat token colors. Final composited states must be rechecked with grain, opacity, blending, and focus offsets applied.

| Foreground / background | Ratio | Approved role |
|---|---:|---|
| Ink deep / paper | 13.53:1 | Primary text, headings, controls, focus ring |
| Ink deep / paper light | 14.39:1 | Text and controls on inset surfaces |
| Ink / paper | 11.69:1 | Secondary headings, links, diagram text |
| Ink / paper light | 12.44:1 | Links and diagram text on inset surfaces |
| Muted / paper | 4.97:1 | Normal-size secondary copy and metadata |
| Muted / paper light | 5.29:1 | Normal-size secondary copy and metadata |
| On coral / coral | 4.60:1 | Normal text only when a solid coral surface is essential |
| Coral / paper | 3.22:1 | Non-text marks and large display accents only |
| Structure / paper | 2.60:1 | Decorative rules and non-load-bearing print structure only |
| Hairline / paper | 1.49:1 | Decorative separation only |

The cadence is readable ink text; any coral registration duplicate is `aria-hidden`. Selected phrases remain readable in ink and may receive a coral underline or ghost. Small labels and artifact names use ink or muted, never coral or structure.

No gradients, purple AI glows, multicolor spectral effects, or dark-mode alternates in v1. Texture comes from separate neutral grain and navy/coral masks, not from changing the base paper color.

## Typography

**Instrument Sans** owns display, body, and interface text. **IBM Plex Mono** is limited to roles, technical metadata, artifact labels, and diagram values. No handwritten, serif, or novelty type appears anywhere.

Deliver both as local or `next/font` variable fonts with Latin subsets, `display: swap`, metric-compatible fallbacks, and CSS variables exposed from the root layout. No runtime remote font stylesheet is allowed. Confirm that the delivered files support the specified intermediate weights; otherwise normalize them to the nearest real axis value before visual approval. Preload only the faces used above the fold and test cold-cache font loading for layout shift.

The opening thesis uses the fluid `{typography.thesis}` token, capped by `{typography.thesis-mobile}` on small screens. It occupies about 58 to 64 percent of the desktop viewport, wraps naturally into no more than three lines, and never overlaps another object. Its resolution line uses `{typography.cadence}` in `{colors.ink}` at deliberately lower emphasis. A coral registration ghost may sit behind it, but the readable text cannot depend on low-contrast coral.

After the opening resolves, the name uses `{typography.identity}` and becomes the strongest text in the identity frame. The role uses `{typography.role}` and must remain clearly readable. Section titles use `{typography.section}` and are normally one line. Project titles use `{typography.project}` and are balanced against their visual rather than allowed to dominate the viewport.

Body copy uses `{typography.body}` with a line length of approximately `{spacing.reading-max}`. Lead sentences may use `{typography.body-large}`. Metadata uses `{typography.meta}` sparingly and never as a substitute for narrative. Sentence case is the default. All-caps is reserved for very short machine-like labels inside a diagram. At 768, 834, 1024, and 1199px, the fluid tokens must preserve the hierarchy without forcing section headings beyond two lines or project titles beyond three. Short landscape viewports and 200% zoom use the natural-flow small-screen hierarchy rather than scaling the desktop composition.

Public-facing copy never uses an em dash. En dashes remain valid for date ranges, and middle dots remain valid for compact metadata. Body paragraphs are left aligned with a deliberate rag and use `text-wrap: pretty` where supported. They are never fully justified. Section and project headings use `text-wrap: balance` where supported, with authored line breaks only when the break is part of the approved composition.

## Layout & Spacing

Use a fluid 12-column editorial grid on desktop with 24px gutters. The maximum stage width is `{spacing.content-max}`. Page margins are `{spacing.page-margin-desktop}` on desktop, `{spacing.page-margin-tablet}` on tablets, and `{spacing.page-margin-mobile}` on phones.

At 1100px and wider, every work chapter from ACE through Patent uses one shared 5/7 composition: copy occupies columns 1 through 5, while the visual field occupies columns 6 through 12. ACE, VisionGuard, and SoftPosit objects are right aligned and capped at 600px. Research is capped at 520px, and the Patent illustration at 460px. Project headings share one scale and a controlled 17-character measure. Every chapter begins 128px below its divider rather than being vertically centered inside a viewport-height frame, so the eyebrow, headline, and visual share one repeatable top anchor.

From 901px through 1099px, use a 6/6 split with copy in columns 1 through 6, visuals in columns 7 through 12, and visual objects capped at 460px. At 900px and below, chapters enter natural one-column flow. Chapter character comes from internal crop, ratio, and content rhythm, not arbitrary changes to the outer grid.

The desktop header uses a stable three-zone grid: quiet site mark left, navigation centered against the viewport, and an equal-width empty utility zone right. Do not position the navigation with leftover flex space or attach it to the right edge. On mobile, the navigation may reflow according to EXPERIENCE.md without changing destination order.

The spacing scale is based on `{spacing.1}`. Major narrative transitions use `{spacing.9}` to `{spacing.10}`. Chapter internals use `{spacing.5}` to `{spacing.8}`. Tight metadata relationships use `{spacing.2}` to `{spacing.4}`. Later chapters are flexible, content-led fields, typically 80–95vh on large screens, but never fixed-height slides. The shared work grid provides continuity; differences in artwork ratio, ink density, and internal composition provide pacing without breaking alignment.

Typography and imagery share a clear alignment spine. No floating text, accidental tangencies, overlapping labels, or oversized headings compensating for weak composition. The three portrait panels remain one coherent square stage, with a dominant center panel and narrower side panels. The center contains the complete face; side panels show peripheral artwork without a readable second face.

The v1 identity frame contains exactly three visible lines: **“Inbasekaran Perumal”**, **“Software Development Engineer II, RingCentral”**, and the understated supporting line **“Building intelligent systems that hold up in real use.”** The name leads, the full role establishes current context, and the supporting line remains body-sized rather than becoming a second headline.

### Portrait triptych geometry

The canonical composition uses a `650 × 650` SVG view box and scales as one square object at every breakpoint. Do not independently resize the panels.

| Window | Mask bounds (`x y width height rx`) | Source image bounds (`x y width height`) |
|---|---|---|
| Left | `0 273 104 377 52` | `0 257.92 305.37 407.16` |
| Center | `124 58 377 592 72` | `65.5 31.5 479.52 639.36` |
| Right | `526 175 124 475 62` | `265.25 156 384.75 513` |

Every source view uses `preserveAspectRatio="xMidYMid meet"`; horizontal stretching is prohibited. The center must retain the complete readable face. Side windows may contain hair, ear edges, clothing, and background print, but no readable second eye, nose, or mouth. Mobile scales the complete 650-square composition without rearranging masks. Visual-regression snapshots at desktop and 320px are release gates.

## Elevation & Depth

Hierarchy comes from scale, spacing, tone, and ink density. Shadows are exceptional and quiet: a large, low-opacity navy shadow may ground the portrait or a printed artifact, but cards never float as a default pattern.

The WebGL field creates depth through local ink density and registration, not perspective camera movement. Project visuals may gain clarity on focus, but no card tilt, springy lift, glass blur, or faux-3D parallax is allowed.

## Shapes

The system is predominantly rectilinear. `{rounded.hairline}` and `{rounded.sm}` soften technical surfaces without making them app-like. `{rounded.nav}` belongs only to the compact navigation shell and its active item.

The portrait triptych is the one expressive shape family. Its tall rounded masks use the geometry represented by `{rounded.portrait-panel}`, with different heights and widths but a shared visual rhythm. Do not reuse those pillars as generic cards or decorative section frames.

## Components

- **`site-mark`**: A quiet `inba.dev` wordmark in `{typography.meta}` and `{colors.ink-deep}`. It anchors the canvas but never competes with the name.
- **`section-navigation`**: A compact sticky shell with Work, Research, Track Record, and Contact. It uses the surfaces and states in `{components.section-navigation}`. Its document position follows Identity, so it is outside the opening viewport without being removed from semantic order.
- **`thesis-stage`**: A nearly typographic full-viewport stage using `{components.thesis-stage}`. Negative space is part of the composition. There is no scroll cue, button, illustration, or navigation in its initial state.
- **`webgl-substrate`**: A full-canvas, non-semantic print substrate using the independent paper, navy, and coral layers in `{components.webgl-substrate}`. The visible form is organic ink, never particles, rings, dots, beams, or a circular pointer spotlight.
- **`portrait-triptych`**: Three independent, natural-ratio views of the same portrait inside the canonical masks above. A muted coral ghost plate may sit behind the right side. The figure and its panels are not keyboard-focusable; their response is ornamental. Expose exactly one concise portrait alternative.
- **`project-chapter`**: A chapter-specific composition that joins one problem-led sentence, concise narrative, technical metadata, a meaningful visual, and any native artifact links where available. Smart Filters is expansive; ACE and VisionGuard are shorter and visually distinct.
- **`query-to-filter-transform`**: The Smart Filters visual. A natural-language query resolves into DATE / Last week and TRACKER / Cancellation. Use `{components.query-to-filter-transform}`; do not add generic nodes, route cores, or decorative connectors.
- **`editorial-visual`**: An original Riso-tech illustration for confidential or visually inconsistent work. It must communicate the project concept from a distance and meaningful system structure up close. It cannot imitate a product screenshot or official document. Do not add a visible “Conceptual view” label; use a project-specific caption only when it adds meaning and an honest accessible description when the image is informative.
- **`specimen-plate`**: A navy technical underplate used only by VisionGuard. The complete `visionguard-riso-editorial-v2` image sits inside it with a 12–16px inset. The plate is an object on warm paper, never a full-width dark chapter.
- **`mcp-app-stack`**: The ACE visual. A compact lower capability layer names governed data, tools, and permissions. A dominant upper experience layer names the MCP app, interactive UI, customer workflow, and saved work. A small GraphQL contract label occupies the joining seam. The object is capped at 600px and remains right aligned. ACE is the product offering this MCP app; ACE itself is never labeled as an app.
- **`research-poster-tile`**: One source-authentic crop from the upper section of the ICASSP poster, preserving the paper title and part of the sparse-recovery figure. The right-aligned object is capped at 520px and uses a shallow 6:5 rectangle rather than a square. It sits inside a quiet paper-light tile with a low-opacity coral wash, thin coral registration edge, and restrained navy grounding shadow. Padding and gaps remain tight enough that the poster crop, not empty tinted space, carries the object. Its only meta label is “ICASSP 2025 poster”; do not label the image as cropped. A solid coral field is prohibited because it overpowers the scientific artifact. Do not redraw, regenerate, or paraphrase the scientific diagram. The complete poster remains visibly linkable through the literal Poster artifact.
- **`fractal-precision-plate`**: Three equal, source-pixel crops labeled double, float, and posit32. Scientific pixels remain untouched; Riso treatment belongs only to the surrounding rule, paper edge, and registration offset. Only the approved SSIM and MSE values appear beneath float and posit32.
- **`voice-ledger-field`**: A compact right-column patent illustration made from a coral instruction slip labeled ITEM, QUANTITY, UPDATE and a navy ledger with one visibly resolved row. The illustration is capped at 460px and aligned right so it does not overpower the narrative. Transformation is expressed through overlap and alignment, not arrows, steps, a microphone, a silhouette, or fake UI. The text remains the dominant left-side object.
- **`linked-artifact`**: A quiet icon plus a literal label such as Code, Write-up, Paper, Patent, or Certificate, styled with `{components.linked-artifact}`. It has no umbrella heading, badge, or surrounding credibility card.
- **`typographic-index`**: The Track Record treatment. Seven fully visible entries share one left spine and one quiet right-aligned date column. Large institution names, role lines, contributions, and sparing hairline separation use `{components.typographic-index}`. It has no offsets, timeline marks, cards, links, logos, or disclosure controls.
- **`contact-close`**: The final statement and exactly four text links: Email, LinkedIn, GitHub, and Resume. All four use equal weight and the same quiet hairline underline; coral appears only on hover or focus. Email remains first through ordering, not unique decoration. Resume is the sole public resume destination. No form, role repeat, or extra CTA.

### Composition families

The palette and material remain coherent, but chapter geometry must change with the kind of evidence being presented. Approve one static key screen for each family and review them together as one long page before implementation.

| Chapter | Composition family | Required visual rhythm |
|---|---|---|
| Opening + Identity | Thesis resolves into person | Centered typographic stillness becomes left identity / right triptych; no competing CTA |
| Smart Filters | Query-to-filter transformation | Expansive two-part chapter and the second bounded pin; source language visibly resolves into filter rows |
| ACE | MCP app stack | `Bring the product into` / `the AI workspace.` is an authored two-line desktop headline; the right visual shows the MCP app experience above governed capability, joined by a quiet GraphQL contract seam |
| VisionGuard | Technical specimen | Five columns of narrative and links beside the shared seven-column visual stage containing the complete v2 image on a navy inset plate; no dark section background |
| Research | Poster resource tile | Five columns of narrative beside a right-aligned 520px, 6:5 poster object on a muted coral-wash tile; the smaller rectangle supports the copy rather than becoming the dominant object, and the complete poster remains a literal link |
| Open Source | Fractal precision plate | Linux Foundation narrative beside a smaller right-aligned Double / float / posit32 comparison; image viewports zoom slightly to remove white borders while preserving source pixels |
| Patent | Voice-to-ledger field | Larger problem-led copy on the left beside a smaller simplified instruction-slip and ledger illustration on the right; certificate remains a secondary literal link |
| Track Record | Single-spine typographic sequence | Seven fully visible entries in the approved current sequence, with one left edge and one consistent date column |
| Contact | Open field | Low-texture resting close with a wider two-line statement and four equally styled links, with Email first |

Across ACE, VisionGuard, Research, Open Source, and Patent, do not alter the shared copy span, headline scale, or top anchor to solve a local composition problem. Use the documented object caps and adjust only internal crop, ratio, density, or whitespace within them. Track Record and Contact are intentionally low-texture resting chapters. Contextual technical metadata is plain inline text or a definition list, never filled pills or logos, and is capped at four project-specific items. Include a technology only when the adjacent story explains its role or a decision it enabled.

### Media delivery and fallback contract

- Treat `riso-paper-substrate-v1.png` and other full-resolution working PNGs as source material, not delivery assets. Produce responsive AVIF/WebP derivatives and keep the lightweight grain map only where it remains visually useful.
- The HTML thesis and paper color paint before any portrait, shader texture, or Three.js request. Reserve preload/priority for the actual measured LCP candidate; all later chapter imagery has intrinsic dimensions, responsive `sizes`, and lazy loading.
- The triptych reserves a 1:1 box before image decode. Its first fallback is an optimized static triptych poster using the canonical geometry; if that also fails, retain the paper-light stage with quiet navy/coral print plates and the single portrait alternative. Identity copy never disappears and no broken-image icon is shown.
- Each visual receives an implementation manifest entry with: semantic role (`informative`, `decorative`, or `artifact`), alternative text or empty alt, intrinsic ratio, responsive sizes, loading priority, source link when applicable, and fallback asset.
- Decorative images use empty alt. Informative diagrams receive a concise adjacent caption or description. CSS background images never carry unique information. Generated illustrations never inherit metrics, quotes, UI, or claims from real artifacts.
- Real paper, certificate, repository, and product artifacts remain source-faithful. Riso treatment belongs to their surrounding composition, not to altered document content.

### Focus treatment

All focusable elements use a 2px `{colors.focus}` outline with at least 2px offset. `{colors.focus-accent}` may add a second offset registration echo. The load-bearing outline switches to a light system color on ink-deep surfaces and remains visible in forced-colors mode; never remove native focus without replacing it with an equivalent or stronger visible state.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Let typography, alignment, and negative space establish hierarchy | Enlarge every heading until the layout feels important |
| Use the light paper canvas continuously | Insert a dark chapter or ship a theme toggle in v1 |
| Concentrate grain and ink texture around meaningful visual moments | Apply distress, sepia, scan lines, or texture uniformly |
| Let coral mark resolution, focus accents, and registration | Use coral as readable small text, the sole focus cue, or a large section fill |
| Give each major work chapter a composition shaped by its story | Repeat equal cards, bento grids, numbered projects, or identical rows |
| Use real artifacts as artifacts and generated art as illustration | Fabricate dashboards, product UI, official documents, metrics, or quotes |
| Keep the default system cursor | Add a custom cursor, cursor follower, or visible spotlight |
| Show technologies only where they explain a real decision | Add logo walls, marquees, skill clouds, ratings, or percentage bars |
| Use literal artifact labels | Add Proof, Evidence, Verified, Featured, Award Winning, or similar credibility language |
| Communicate ownership inside the project narrative | Add What I Owned, Engineering Loop, methodology pillars, or Flagship Systems |
| Use subtle registration and dither as the motion vocabulary | Add random particles, circles, dotted flow bands, 3D tilt, or constant parallax |
| Keep all text readable without motion or hover | Overlap text, hide meaning in tooltips, or rely on hover-only content |
| Preserve the canonical triptych geometry and one accessible portrait name | Focus ornamental panels or announce the portrait three times |
| Give informative illustrations honest accessible descriptions and project-specific captions only when useful | Add visible “Conceptual view” disclaimers or make generated art resemble an internal screenshot or official document |
| Keep metadata plain, sparse, and decision-specific | Turn project metadata into skill chips, pills, or mini logo walls |
| Keep scientific crops pixel-faithful and label the supplied comparison as a representative fractal result | Apply Riso filters to benchmark pixels or call the supplied Julia-set plate Mandelbrot |
| Keep Email first while giving all four Contact links equal visual weight | Turn Contact into a button row or add a second resume source |
