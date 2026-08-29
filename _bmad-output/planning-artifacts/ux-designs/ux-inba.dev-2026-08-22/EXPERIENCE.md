---
name: inba.dev flagship portfolio
status: final
sources:
  - ../../../implementation-artifacts/spec-finalize-portfolio-content.md
  - ../../../../brain-dump/portfolio-content.md
  - ../../../brainstorming/brainstorm-portfolio-seven-slide-mock-revision-2026-08-23/brainstorm-intent.md
  - ../../../brainstorming/brainstorm-portfolio-layout-and-aceio-revision-2026-08-28/brainstorm-intent.md
  - ../../../../brain-dump/improvements.txt
updated: 2026-08-29
---

# inba.dev Experience Spine

## Foundation

Single-page responsive web, optimized for desktop and laptop storytelling while remaining complete on touch devices. No off-the-shelf visual UI system is named. Semantic HTML, native links, the default cursor, and progressive enhancement are the interaction baseline. [DESIGN.md](DESIGN.md) is the visual identity reference; this file owns structure, behavior, states, motion, accessibility, and journeys.

The v1 experience is light-only and scroll-led. It is a public portfolio, not an application shell and not a chronological resume. Every chapter must advance the argument that Inbasekaran Perumal solves meaningful business problems with reliable software and AI systems.

The approved static direction is [Riso-tech editorial](mockups/direction-riso-tech-editorial.html). The canonical continuous desktop story is [key-continuous-desktop-story.html](mockups/key-continuous-desktop-story.html), and its mobile reflow is [key-mobile-settled-states.html](mockups/key-mobile-settled-states.html). They are composition references for the full story, including the opening, identity, portrait, and Smart Filters entry. The spine pair wins on conflict with the mock.

## Information Architecture

One document carries the complete story. The navigation is a shortcut layer, not a set of separate pages.

| Surface / anchor | Narrative purpose | Primary content |
|---|---|---|
| Opening / `#top` | Establish the thesis before biography or navigation | Thesis and resolution cadence |
| Identity / `#identity-frame` | Resolve the thesis into a person and current role | “Inbasekaran Perumal”, “Software Development Engineer II, RingCentral”, “Building intelligent systems that hold up in real use.”, `portrait-triptych` |
| Work / `#work` | Begin the authored work narrative | Smart Filters, ACE, VisionGuard |
| Smart Filters / `#smart-filters` | Demonstrate end-to-end judgment under real use | Problem, proposed path, evaluation, observability, revision |
| ACE / `#ace` | Show how an established product enters the AI workspace | ACE, its MCP app offering, governed capability, typed GraphQL contract |
| VisionGuard / `#visionguard` | Show inspectable open-source engineering depth through a user outcome | Private screen-time feedback, calibration, local inference, Code/GSoC/Write-up |
| Research / `#research` | Connect the inverse-imaging problem to the deep-unfolding method | IISc, sparse recovery, ISTA/LISTA, ICASSP paper/poster/certificate |
| Open source / `#open-source` | Show public numerical-systems work through a real comparison | Linux Foundation, SoftPosit for RISC-V, fractal benchmark, CoNGA |
| Patent / `#patent` | Explain the human problem before the invention record | Voice-to-ledger interaction, named-inventor line, Patent and Determinant Studios links |
| Track Record / `#track-record` | Provide a concise closing record without repeating case studies | RingCentral, Linux Foundation, GSoC, IISc, Goldman Sachs, Determinant Studios, NITK |
| Contact / `#contact` | Convert interest into one clear next action | Email, LinkedIn, GitHub, Resume |

`#main-content`, `#top`, and `#contact` are known live-app anchors and must remain stable. The redesign replaces the old information architecture: remove legacy `#systems` and `#credibility` IDs, links, imports, and hidden content after their destinations become `#work` and `#track-record`. Do not ship duplicate aliases. `#identity-frame` is known in the approved mock; the remaining named anchors are canonical and receive `scroll-margin-top` equal to the sticky navigation plus 16px.

Section order is fixed: Opening, Identity, Smart Filters, ACE, VisionGuard, Research, Open Source, Patent, Track Record, Contact. There is no About, Skills, Method, Engineering Loop, blog, or secondary-project rail in v1.

## Voice and Tone

Microcopy is concise, literal, and authored. Brand voice and visual posture live in [DESIGN.md](DESIGN.md).

| Do | Don't |
|---|---|
| “Make complex filters easy to use.” | “Revolutionizing enterprise workflows with AI.” |
| “People describe the calls they need. The interface handles the filters.” | “An award-winning, production-ready agentic experience.” |
| “Code”, “Write-up”, “Paper”, “Patent”, “Certificate” | “Proof”, “Evidence”, “Verified”, “Featured” |
| “Bring the product into the AI workspace.” | “Give AI useful access to governed enterprise data.” |
| “Turn gaze into private screen-time feedback.” | “Build local, efficient computer vision for the desktop.” |
| “I proposed and built…” where ownership matters | “What I owned” as a label or repeated box |
| Name the business friction before the implementation | Open with tool lists, buzzwords, or generic capability claims |
| Use “shipped”, “in use”, or “revised after launch” when accurate | Use “Production” as a decorative category or credibility marker |
| Let high agency be inferred from decisions and follow-through | Call the author high-agency, world-class, or an overachiever |

No generic section kickers such as Selected Work, Flagship Systems, Engineering Loop, or Scroll to explore. Do not repeat the hero thesis inside the identity frame. The visible identity frame contains exactly the canonical name, full role, and understated supporting line above. The canonical public product name is **ACE**. ACE offers an MCP app; ACE itself must never be described as an MCP app. `ACE.io` and `RingSense` are absent from public copy. Claims, dates, project names, and artifact destinations otherwise come from the canonical content source and cannot be embellished.

Public-facing copy contains no em dashes. En dashes are reserved for date ranges, and middle dots may separate compact metadata. Body paragraphs remain left aligned with a controlled 52 to 56 character measure and are never fully justified.

## Component Patterns

Visual specifications live in [DESIGN.md](DESIGN.md). Token references below resolve there.

| Component | Use | Behavioral rules |
|---|---|---|
| `site-mark` | Global canvas anchor | Displays lowercase `inba.dev`, links to `#top`, and remains quiet and keyboard focusable. Never replaces the visible identity name. |
| `section-navigation` | Sticky section shortcuts after identity reveal | Server-rendered after Identity in document order, so it is naturally outside the opening viewport rather than opacity-hidden. On desktop it occupies the centered zone of a balanced site-mark / navigation / empty-utility header. It becomes sticky when its sentinel reaches the top. Links to Work, Research, Track Record, and Contact. Active state follows the chapter intersecting the reading zone; no item is active during Identity. |
| `thesis-stage` | Opening viewport | Shows the thesis first, then the cadence. No buttons, scroll prompt, portrait, or navigation competes with it. Completes without pointer input. |
| `webgl-substrate` | Ambient opening and major transition texture | Decorative and `aria-hidden`. Reacts only through restrained ink-density and registration changes. It never moves text, blocks scrolling, captures keyboard focus, or communicates content. |
| `portrait-triptych` | Identity frame | Uses the exact 650-square mask and crop contract in DESIGN.md. Pointer may sharpen halftone and separate/register navy and coral by 1 to 2px. Figure and panels are not focusable; meaning is unchanged without the ornamental response. |
| `project-chapter` | ACE, VisionGuard, Research, Open Source, Patent | One problem-led idea, concise narrative, no more than four decision-specific metadata items, one meaningful visual, and native artifact links where available. At 1100px and wider, every chapter uses the shared 5/7 copy-to-visual grid, 17-character heading measure, documented object caps, and a common 128px top anchor from DESIGN.md. From 901px through 1099px, use the shared 6/6 intermediate grid and 460px visual cap. At 900px and below, use natural one-column flow. Local artwork may vary inside that frame, but copy width and alignment may not. |
| `query-to-filter-transform` | Smart Filters pinned sequence | Resolves “last week” and “cancellation” into DATE / Last week and TRACKER / Cancellation. Animation follows the mapping already visible in the still composition. |
| `editorial-visual` | Project, research, open-source, and patent imagery | Generated illustration never simulates product UI or an official record. Do not add a visible “Conceptual view” label. Use a project-specific caption only when meaningful and an honest accessible description when informative. Real artifacts remain source-faithful and semantically distinct. Every visual declares semantic role, intrinsic ratio, responsive sizes, loading priority, and fallback. A missing visual never removes project copy or links. |
| `mcp-app-stack` | ACE | Reads as two compact layers. Governed data, tools, and permissions form the quieter capability base. The MCP app, interactive UI, customer workflow, and saved work form the dominant experience layer. A restrained GraphQL contract label joins them. The still must make clear that ACE offers the MCP app. The approved headline is authored as two desktop lines: “Bring the product into” then “the AI workspace.” |
| `specimen-plate` | VisionGuard | Five-column copy and literal links precede a complete seven-column v2 image visually. The raster is uncropped inside a navy underplate. On mobile, DOM order is copy, links, then image. |
| `research-poster-tile` | IISc / ICASSP | Shows one source-authentic upper-poster crop containing the paper title and part of the sparse-recovery figure inside a right-aligned 520px, 6:5 paper-light tile with a muted coral wash and registration edge. Its label reads “ICASSP 2025 poster” with no crop qualifier. Internal whitespace is restrained so the visual supports the narrative. A solid coral field is prohibited. A separate native Poster link opens the complete PDF. No generated replacement diagram appears. |
| `fractal-precision-plate` | Linux Foundation / SoftPosit | Three equal source-pixel images labeled double, float, posit32. The viewports zoom only enough to remove white borders without recoloring or altering scientific pixels. Only float SSIM 0.476 / MSE 0.087 and posit32 SSIM 0.605 / MSE 0.053 are shown. Below 720px, panels stack without horizontal scrolling. |
| `voice-ledger-field` | Patent | One smaller right-column SVG/CSS illustration uses ITEM, QUANTITY, UPDATE and one resolved ledger row. The larger left copy remains visually dominant. No invented stock example, fake application screen, arrows, microphone, silhouette, or interaction is required. |
| `linked-artifact` | Beside the work it supports | Native external link with a restrained decorative icon and literal text label. Its accessible name includes project context. New-tab behavior is announced with hidden text and uses safe link attributes. No shared heading, badge, tooltip-only name, or credibility container. |
| `typographic-index` | Track Record | Exactly seven non-interactive entries remain fully visible in this order: RingCentral, Linux Foundation, GSoC, IISc, Goldman Sachs, Determinant Studios, NITK. Every row shares one left spine and one consistent right-aligned date column. No row links, offsets, disclosures, hover details, controls, logos, cards, or timeline marks. |
| `contact-close` | Final chapter | The desktop headline uses a wide measure and two authored lines: “If you’re building something difficult,” then “I’d like to hear about it.” Mobile may wrap naturally. Exactly Email, LinkedIn, GitHub, and Resume follow with equal visual weight. Email remains first, while coral appears only in the shared hover and focus treatment. Resume is the sole public resume destination. No form, newsletter, scheduler, role repeat, or competing CTA. |

## State Patterns

| State | Surface / component | Treatment |
|---|---|---|
| Initial document load | Opening / `thesis-stage` | Render paper, thesis, and cadence in HTML immediately. Enhancement layers may load later without layout shift. |
| WebGL unavailable | `webgl-substrate` | Keep the precomposed paper grain plus navy/coral raster masks. No warning or empty canvas. |
| Motion reduced | Global | Render every chapter in its settled state. No pinning, simulated scroll, ink displacement, auto-registration, or animated extraction. Navigation remains available after the opening content in document order. |
| Identity settled | Identity | Show name, full role, understated supporting line, full triptych, and navigation. Work is not active yet. |
| Portrait source late or unavailable | `portrait-triptych` | Reserve the 1:1 stage. Show the optimized static triptych poster; if it also fails, show quiet paper-light navy/coral print plates. Keep identity copy and one portrait alternative; never expose a broken-image icon. |
| Portrait pointer | `portrait-triptych` | Apply a restrained registration and halftone response to the targeted panel. Return softly to rest. No lift, tilt, distortion, duplicated facial feature, or added tab stop. |
| Work active | `section-navigation` | Work becomes active only after the Work boundary enters the reading zone. Active appearance cannot rely on coral alone. |
| Chapter entering | `project-chapter` | Natural sections use opacity and small positional registration only. Content remains readable before animation completes. |
| ACE stack settled | `mcp-app-stack` | The MCP app experience and governed capability base are both readable, the GraphQL seam remains secondary, and ACE is clearly the product offering the app. |
| VisionGuard image unavailable | `specimen-plate` | Preserve the plate ratio and show a quiet navy field. Copy and Code/GSoC/Write-up remain complete and reachable. Do not substitute the earlier abstract-eye illustration. |
| Poster preview unavailable | `research-poster-tile` | Keep the coral resource tile as a quiet reserved field and preserve the literal Poster link. Do not fabricate or regenerate a research diagram. |
| Fractal image unavailable | `fractal-precision-plate` | Preserve the equal panel boxes and labels, but do not display metrics without their corresponding visible comparison. Literal Code/Certificate/Paper links remain. |
| Artifact hover/focus | `linked-artifact` | Keep text in ink. Add a coral underline/registration accent and the load-bearing `{colors.focus}` outline; color is never the only state cue. |
| External destination unavailable | `linked-artifact` | Browser behavior remains native. Do not fabricate a replacement artifact or make unsupported claims. Broken links are a content-maintenance issue, not an animated error state. |
| Artwork missing | `editorial-visual` | Preserve the intrinsic box and show a quiet `{colors.paper-light}` field. Use empty alt for redundant decoration or the committed adjacent description for informative work. Preserve all copy and artifact links. |
| Contact focus | `contact-close` | Email, LinkedIn, GitHub, and Resume receive the same visible focus treatment and remain independently reachable. |

## Interaction Primitives

**Scroll:** Natural document scroll is the default. Eligible desktops have at most two pinned sequences: Opening to Identity, and Smart Filters. No other chapter pins, snaps, hijacks the wheel, changes scroll direction, or cancels Space, Page Up/Down, Home, End, wheel, or touch scrolling.

**Pointer:** The system cursor remains unchanged. Pointer movement may affect only `webgl-substrate` ink and the pointed `portrait-triptych` panel. The canvas is always `pointer-events: none`; passive coordinates are captured on the owning section and normalized into canvas space. There is no cursor follower, spotlight, magnetic button, or global ripple.

**Keyboard:** Tab order follows document order. Enter activates links and buttons. Section navigation and every `linked-artifact` are keyboard reachable. Track Record has no controls. Ornamental hover effects do not create focus stops.

**Touch:** No hover dependency. The portrait receives one restrained automatic registration moment as it enters view, unless motion is reduced. Every Track Record fact is already visible. There is no first-tap interception of a link.

**Motion grammar:** Separation, then registration. Elements may separate just enough to expose structure, then settle into alignment. The substrate is static at rest; motion is bounded to direct pointer response and the two scroll-linked sequences. ACE through Contact use only restrained reveal, clipping, registration, or diagram resolution—no pins, persistent motion, or additional WebGL. Static-first acceptance is mandatory.

## Motion and WebGL Contract

The WebGL system and portrait interaction are separate enhancements. Their static HTML/CSS states exist before either enhancement initializes.

1. **Opening pin:** Total section length is at most `220vh`, including one viewport of settled content. Progress checkpoints are: `0` thesis readable; `0.35` cadence resolved; `0.65` thesis contracted and portrait entering; `1` identity, portrait, and navigation settled. The substrate is composed from neutral grain plus independent navy and coral masks. Under pointer pressure, an organic region may sharpen, increase ink density, and separate registration by 1 to 2px. There is no visible circular boundary.
2. **Smart Filters pin:** Total section length is at most `200vh`, including one viewport of settled content. Progress checkpoints are: `0` complete still composition; `0.25` source phrases emphasized; `0.65` values registering into rows; `1` stable Date and Tracker result. The result is readable before animation and remains in normal DOM text.

Pinning is eligible only when all conditions hold: viewport width is at least 1200px; usable height is at least 720px; the measured settled stage fits without clipping; motion is not reduced; text reflow has not selected the compact layout; and capability checks pass. Re-evaluate after font load, resize, orientation change, and significant content resize. Use bounded CSS sticky sections with passive observers and `requestAnimationFrame`; never lock the wheel. Stop work when off-screen or backgrounded and remove observers/listeners on unmount. Anchor navigation lands on the settled state rather than the middle of a sequence.

WebGL eligibility additionally requires WebGL2, a fine pointer, no Save-Data request, and a successful lightweight capability probe. Device-memory or hardware-concurrency values may lower confidence when available but are not mandatory APIs. Evaluate eligibility before importing Three.js or requesting shader textures. The canvas remains `aria-hidden`, non-focusable, and `pointer-events: none`; section-level passive pointer listeners suspend off-screen, in a background tab, under reduced motion, or after repeated context loss.

WebGL degrades to the optimized static composited substrate whenever eligibility fails. The paper layer never changes. Shader details remain an implementation decision; particles, rings, dotted rows, lens effects, autonomous drift, and text deformation are prohibited.

## Rendering and Enhancement Boundary

The route, narrative chapters, headings, artifact links, identity copy, portrait SVG/static poster, settled Smart Filters mapping, Track Record baseline details, navigation markup, and contact actions remain Server Components or server-rendered HTML. They cannot import React Three Fiber or depend on hydration to become readable.

Client islands are limited to:

- `WebGLSubstrate`, dynamically imported with `ssr: false` only after first HTML paint and eligibility checks;
- `PinnedSequenceController`, which adds bounded progress to already settled server markup;
- `ActiveSectionObserver`, which updates visual active navigation without a live region or focus movement;

Track Record requires no client island; its seven entries are complete server-rendered content.

The page or shared content shell must not become a client component merely to coordinate these islands. The WebGL chunk, textures, and non-LCP illustrations are deferred until after the thesis has painted.

## Accessibility Floor

- Meet WCAG 2.2 AA for the full responsive page. Load-bearing text uses verified combinations from [DESIGN.md](DESIGN.md); texture cannot lower effective contrast.
- Preserve the existing skip link to `#main-content`. Landmarks and heading order follow the visible narrative. One `h1` owns the opening thesis; the visible name is the next appropriate heading and section/project headings descend without skipped levels.
- All interactive targets are at least 44 by 44 CSS pixels on touch surfaces. The compact navigation may look smaller but its hit area cannot be.
- Focus indicators use the DESIGN.md two-layer recipe: a load-bearing `{colors.focus}` outline plus optional `{colors.focus-accent}` registration echo. They remain visible in forced-colors mode and are never removed.
- `webgl-substrate` is non-semantic, `aria-hidden`, and cannot intercept pointer or keyboard events. Canvas failure leaves the full story intact.
- `portrait-triptych` has one concise portrait alternative, not three repeated descriptions. Its figure and panels are not focusable; the interaction is ornamental and adds no hidden information.
- `query-to-filter-transform` keeps the source query and final values as real DOM text. A `figure`/`figcaption` or associated description states: “Calls from last week where the customer mentioned cancellation resolves to Date: Last week and Tracker: Cancellation.” Animation clones are `aria-hidden`.
- Every `linked-artifact` includes visible literal text and a contextual accessible name such as “VisionGuard source code” or “ICASSP paper.” Adjacent icons are `aria-hidden="true"` and `focusable="false"`. If `target="_blank"` is used, a consistent visually hidden suffix announces that it opens in a new tab and `rel="noopener noreferrer"` is present.
- The ACE stack has an adjacent description that names ACE as the product, the MCP app as its offering, the governed capability base, and the GraphQL contract joining the layers.
- The complete VisionGuard v2 image is informative and uses one concise description; its navy underplate is decorative. Mobile DOM order is copy and links before image.
- The IISc poster tile identifies itself as a crop from the ICASSP poster and describes the visible paper title and sparse-recovery figure. The complete Poster link remains available in text.
- The SoftPosit plate labels every panel in real text and states that it is a representative fractal result. Scientific pixels are not recolored. Metrics are associated with float and posit32 panels programmatically.
- The patent illustration's adjacent description explains that a coral ITEM/QUANTITY/UPDATE instruction slip aligns with a navy ledger and resolves one row; generic schema labels are not announced as user data.
- `prefers-reduced-motion: reduce` disables both pinned choreography and all nonessential interpolation. Content appears in settled document order with no loss.
- At 200 percent zoom and down to 320px width, text reflows without overlap, clipping, or horizontal page scroll. The three portrait pillars remain one scaled composition.
- Active navigation uses `aria-current="location"` without a live region. Section observation never moves focus and is debounced at chapter boundaries.
- Do not autoplay audio or video. If video is added later, it requires controls, captions, a poster image, and no autoplay with sound.

## Inspiration & Anti-patterns

- **Lifted from Google Antigravity:** a single scroll-led composition, strong narrative typography, technically credible ambient interaction, and transitions that reveal the next idea. Do not copy its brand marks, particle vocabulary, or exact choreography.
- **Lifted from Apple and Google editorial launches:** one thought per frame, carefully controlled line lengths, high-quality imagery, large but purposeful negative space, and few competing actions.
- **Lifted from print:** Riso registration, halftone, dither, paper grain, and imperfect ink coverage, translated into a mature digital system rather than retro pixel art.
- **Rejected:** templated Projects / Skills / Experience / Contact blocks, equal project cards, bento grids, generic About copy, logo walls, technology marquees, proficiency bars, and resume timelines.
- **Rejected:** Engineering Loop, What I Owned, Flagship Systems, generic methodology pillars, section numbering, Selected Work, Scroll to explore, and self-awarded credibility labels.
- **Rejected:** custom cursors, autoplay carousels, 3D card tilt, constant marquees, excessive parallax, scroll hijacking, decorative WebGL, random particles, circles, dotted flows, and purple AI gradients.
- **Rejected:** fabricated UI, invented metrics, fake customer quotes, fake official documents, and generated imagery presented as an artifact.
- **Rejected:** dark-mode toggle in v1, handwritten type, decorative texture everywhere, and consecutive sections with the same composition.

## Responsive & Platform

| Range | Layout and behavior |
|---|---|
| `>= 1100px` | A 1280px maximum 12-column editorial frame with 24px gutters. ACE through Patent use one five-column copy field beside one seven-column visual field, a shared 128px chapter top anchor, a common 17-character project-heading measure, and the object caps defined in DESIGN.md. At most two eligible pinned sequences under the Motion contract. Sticky one-row navigation. Identity is copy left, triptych right. |
| `901–1099px` | The work chapters use a 6/6 grid with copy in columns 1 through 6, visuals in columns 7 through 12, and a 460px cap. This prevents four-line project headings and preserves the shared optical top anchor before the one-column reflow. |
| `768px to 900px` | Single-column natural flow with reduced type and controlled copy measure. Natural scroll by default; no pinning unless the full desktop eligibility contract passes. Sticky one-row navigation may wrap before shrinking labels. |
| `480px to 767px` | Single-column natural scroll. No pinning. Navigation is a full-width sticky 2×2 grid with all four destinations visible and 44px targets. Smart Filters mappings stack vertically. WebGL is static. Triptych scales as one square stage. |
| `320px to 479px` | Same natural story and 2×2 navigation. Labels remain at least 14px; safe-area insets and anchor offsets are honored. No horizontal page scroll. |
| `< 320px` effective width from zoom/reflow | Replace the grid with a labeled 44px “Sections” disclosure button and a vertical non-modal list of the four destinations. It is never icon-only; Escape closes and returns focus. |
| Touch or coarse pointer | No hover-only meaning. Portrait uses one brief entry registration unless motion is reduced. Track Record is fully visible and non-interactive. WebGL remains static. |
| Reduced motion | Static paper and ink composition; no pinned choreography, auto reveal, shader displacement, or animated query extraction. |
| Low capability / data saving | Serve optimized AVIF/WebP substrate and editorial stills. Skip WebGL and video. Content and links remain identical. |

Desktop and mobile share the same narrative order, copy, artifacts, and destinations. Mobile is not a reduced-content portfolio; only choreography and rendering cost change.

The mobile Smart Filters transform is source phrase → short registration mark → resolved filter in vertical normal flow. It never preserves the desktop three-column minimum widths or scales the desktop diagram down. Validate 320px, 200% browser zoom, enlarged default fonts, and text-only zoom without clipping.

## Navigation, Anchors, and Initial State

The server-rendered navigation sits at the Identity resolution boundary and becomes sticky through layout, not through a one-time animation-complete flag. It is therefore absent from the opening viewport, present when a native deep link or restored scroll position lands below Identity, and usable before client enhancement. The active-section island derives state from the current document position on hydration, initial hash, `hashchange`, resize, and browser scroll restoration without moving focus or causing layout shift.

Native section links preserve the URL fragment. Every target uses the committed sticky-nav offset. A direct load of `#work`, `#smart-filters`, `#ace`, `#visionguard`, `#research`, `#open-source`, `#patent`, `#track-record`, or `#contact` renders that chapter in its settled state and does not replay an earlier pin. `#main-content` receives programmatic focus only when the skip link is activated; ordinary section changes and scroll observation never move focus. `aria-current="location"` updates quietly without a live region.

## Performance and Delivery Budgets

Release is gated by representative mobile and desktop lab runs, then checked against field data after launch.

| Measure | Budget |
|---|---:|
| p75 Largest Contentful Paint | ≤ 2.5s |
| p75 Interaction to Next Paint | ≤ 200ms |
| p75 Cumulative Layout Shift | ≤ 0.10 |
| Initial route JavaScript, gzip, before WebGL | ≤ 170KB |
| Deferred WebGL/R3F chunk, gzip | ≤ 300KB and never on ineligible devices |
| Above-fold image transfer | ≤ 250KB mobile / ≤ 450KB desktop |
| Delivered Latin WOFF2 fonts combined | ≤ 160KB |
| Shader textures requested after eligibility | ≤ 400KB compressed combined |
| Initial-interaction long task | none > 200ms |
| Pointer/scroll handler work | < 8ms per frame on the reference desktop |

The HTML thesis is the intended initial LCP candidate and cannot wait for JavaScript, fonts, portrait decode, or WebGL. The 2.5MB substrate PNG and other full-resolution working rasters are source-only. Responsive AVIF/WebP derivatives carry explicit dimensions. Portrait delivery uses responsive `sizes`; later chapter visuals lazy-load. Three.js and shader textures are requested only after first paint and eligibility checks. If the enhanced scene cannot sustain a median 55fps or repeatedly exceeds 25ms frames on the reference desktop profile, disable it for that session and retain the static substrate.

Use Lighthouse CI or an equivalent repeatable mobile/desktop lab gate in CI. Record real-user Core Web Vitals after launch and treat regressions beyond these thresholds as release defects, not aesthetic trade-offs.

## Validation Gates

Before implementation becomes release-ready, automated and manual checks must cover:

- production build and existing content-contract tests;
- server-rendered/no-JavaScript reading order, headings, identity copy, query mapping, links, and contact path;
- every canonical anchor, restored scroll position, sticky offset, and legacy-anchor absence;
- keyboard-only traversal, skip link, focus visibility, sub-320px navigation disclosure behavior, and no ornamental tab stops;
- automated WCAG checks plus manual screen-reader review of the portrait, Smart Filters description, artifact names, and navigation;
- reduced motion, Save-Data, coarse pointer, WebGL-disabled/context-loss, image-failure, font-failure, and background-tab fallbacks;
- 320px width, 200% zoom, increased default font size, short landscape viewport, and no horizontal page scroll;
- touch behavior for the sub-320px navigation disclosure and independent artifact links;
- visual-regression snapshots for the exact desktop/mobile triptych crop and every approved composition-family key screen;
- Lighthouse/performance budgets and cold-cache font/image behavior.

## Visual Reference Gate

The approved direction remains authoritative for Opening, Identity, and Smart Filters entry. The continuous desktop story and mobile reflow now live in `mockups/` as canonical references for ACE, VisionGuard, Research, SoftPosit, Patent, Track Record, Contact, and their mobile reflow. These spines govern on any conflict with a mock.

## Legacy Replacement Gate

This redesign replaces, rather than hides, the previous interface. Once the new page is wired, remove obsolete components, imports, content exports, styles, and tests for Engineering Loop, What I Owned, Flagship Systems, Aura, handwritten copy/type, dark mode and its toggle, custom-cursor behavior, `#systems`, and `#credibility`. Search source and built output for rejected terms, duplicate IDs, and stale anchor links. Preserve only the stable legacy contracts `#main-content`, `#top`, and `#contact`, alongside the new canonical anchors.

## Key Flows

### Flow 1: First impression to credible interest (Maya, startup founder, reviewing candidates between meetings)

1. Maya opens `#top` on a laptop.
2. She reads one thesis without navigation, buttons, portrait, or competing copy.
3. She scrolls. The thesis resolves, the name and role appear, and the portrait enters as the navigation becomes available.
4. She reaches Work and immediately sees Smart Filters framed through customer friction rather than a tool list.
5. The query visibly resolves into two filters. She understands both the product value and the engineering judgment without reading a long case study.
6. **Climax:** The chapter explains that the feature was proposed, evaluated, integrated, and revised after real use. Maya can infer ownership and follow-through without a self-promotional claim.
7. She continues naturally to ACE and VisionGuard, then uses the sticky navigation to jump to Contact.

Failure path: WebGL or pinning is unavailable. The same thesis, resolved identity, static mapping, and chapter order render immediately, so the argument remains intact.

### Flow 2: Technical scrutiny through public artifacts (Arjun, engineering leader, validating depth after an interview referral)

1. Arjun lands on the page and uses navigation to jump to Work.
2. He scans Smart Filters and ACE for system boundaries, evaluation practice, and delivery judgment.
3. He reaches VisionGuard and sees visible Code, GSoC, and Write-up links beside the complete project image.
4. He follows Code in a new tab, then returns to the same scroll position.
5. He continues through Research and Open Source, opening the ICASSP Paper/Poster and SoftPosit Code/Certificate/Paper links as needed.
6. **Climax:** The public artifacts align with the concise narrative, giving Arjun enough inspectable depth to discuss the work seriously.
7. He reaches Track Record for context, then selects Email.

Failure path: An external artifact is temporarily unavailable. The portfolio does not invent a substitute or overstate the claim; the chapter remains understandable and other native links stay usable.

### Flow 3: Fast career-context scan (Elena, recruiter, checking role fit on a phone)

1. Elena opens the portfolio on a phone with touch input.
2. The opening, identity, and portrait appear in natural document order without pinned scroll.
3. She uses the compact navigation to reach Track Record.
4. She reads the sequence in reverse chronology: RingCentral, Linux Foundation, Google Summer of Code, IISc, Goldman Sachs, Determinant Studios, and NITK.
5. Every date, role, and concise description is already visible; there are no row controls or links to decode.
6. **Climax:** She understands the current Software Development Engineer II role, the 2024 NITK degree, and the research/open-source path without reading a resume timeline.
7. She reaches Contact and opens Email, with LinkedIn available as supporting career context.

Failure path: Reduced motion is active. No automatic portrait response or animated reveal occurs; every row, label, and action remains visible and usable.
