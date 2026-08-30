# Epic 5 Context: Visual-Fidelity Rebuild and Verified Release

<!-- Compiled from planning artifacts. Edit freely. Regenerate with compile-epic-context if planning docs change. -->

## Goal

Rebuild the portfolio as the authored Riso-tech editorial experience, chapter by chapter, while preserving its canonical narrative, destinations, approved source assets, and static-site foundation. The complete story must remain accessible and coherent without JavaScript or advanced graphics, gain bounded enhancement only on eligible devices, and advance toward release through rendered browser evidence and independent review rather than source-string checks that can pass a visibly incorrect implementation.

## Stories

- Story 5.1: Foundation Cleanup and Visual Test Harness
- Story 5.2: Opening, Identity, Navigation, and Smart Filters Static Parity
- Story 5.3: ACE, VisionGuard, Research, Open Source, and Patent Static Parity
- Story 5.4: Track Record, Contact, Intermediate, Tablet, and Mobile Parity
- Story 5.5: Opening Transition, Smart Filters Pinning, WebGL, Accessibility, Performance, and Cloudflare Release

## Requirements & Constraints

- Treat the approved opening direction, continuous desktop story, and mobile reflow as executable composition fixtures. Passing lint, content presence, or source inspection alone does not establish visual completion.
- Rebuild in ordered vertical slices: foundation and harness, early static narrative, remaining desktop chapters, responsive completion, then enhancement and release. Static parity must be accepted before motion or WebGL work can affect it; failures return to the same slice.
- Preserve the complete canonical story, public links, chapter order, approved portrait and chapter assets, stable anchors, Next.js App Router, React, TypeScript, Tailwind CSS v4, and Cloudflare Pages static-export direction. Historical completion records remain traceable as superseded rather than being deleted or represented as current acceptance.
- Validate rendered behavior at desktop 1199px or wider, intermediate 1024px with 901px and 1099px boundaries, tablet 768px, mobile reference 390px, and narrow mobile 320px. Also cover 200 percent zoom, enlarged fonts, short landscape, deep links, restored scroll, reduced motion, no JavaScript, missing media, low capability, and data-saving paths.
- The settled story must retain WCAG 2.2 AA semantics, landmarks, heading order, a skip link, visible focus, 44px targets, stable sticky offsets, keyboard traversal, meaningful alternatives, and no horizontal page scroll or ornamental focus stops.
- Media delivery must use declared responsive AVIF/WebP derivatives with intrinsic geometry and quiet fallbacks. Source rasters, missing dimensions or derivatives, image warnings, broken-image UI, and fallback layout shifts are release failures.
- Candidate evidence must identify the production-export digest, fixture revision, actual viewport and DPR, browser, font-ready state, anchor or checkpoint, crop, masks, tolerance, artifact path, result, reviewer, and any scoped exception. Candidate output must never overwrite promoted baselines, and the implementation owner cannot approve their own evidence.
- Remove or fail on obsolete components, imports, content exports, selectors, anchors, dead enhancement assertions, duplicate IDs, rejected interface patterns, and prohibited copy. The redesign replaces the legacy interface; it does not merely hide it.

## Technical Decisions

- Use server-first islands: server-rendered HTML and static assets own all required content and settled geometry. Only `WebGLSubstrate`, `PinnedSequenceController`, and `ActiveSectionObserver` may own client enhancement state; the page shell must not become a client component to coordinate them.
- Keep ownership singular and typed: `content/portfolio.ts` owns public narrative and stable link keys, `content/links.ts` owns destination URLs, `content/assets.ts` owns media semantics and delivery metadata, and root CSS variables own palette, typography, spacing, radii, and component tokens. Components consume these owners without competing literals.
- Keep canonical anchors lowercase, hyphenated, stable, and unique. Active-section observation may update `aria-current="location"` from document position but must not move focus or create a live region.
- Build with the pinned Node/npm pair, committed lockfile, `npm ci`, and the canonical static-export command. The resulting `out/` digest is the production-equivalent unit against which browser evidence is recorded; no route, media path, or optimization behavior may require a server runtime.
- Visual verification combines structural browser assertions, deterministic captures, screenshot comparison, row-specific masks and tolerances, an evidence matrix, and immutable promoted baselines. Promotion proceeds monotonically through contract readiness, early narrative parity, complete static parity, enhancement, and release gates.
- Enhancement eligibility is revisioned and capability-specific. Loss of eligibility must tear down to settled document flow without scroll lock, blank gaps, stranded transforms, hidden content, or stale asynchronous state. Advanced graphics remain decorative, deferred, non-semantic, and absent from ineligible delivery paths.

## UX & Interaction Patterns

The page is a light-only, continuous cool-paper canvas with a modern Riso-tech editorial character: deep ink and navy carry readable hierarchy, coral is a restrained registration accent, and texture comes from neutral grain and separate ink layers. Avoid generic cards, gradients, dark-mode alternates, custom cursors, glass effects, arbitrary parallax, and duplicated chapter templates. Desktop work chapters share a disciplined editorial grid and optical top anchor while retaining distinct internal compositions; intermediate widths use a balanced split, and 900px and below use natural one-column flow. Mobile preserves every destination and artifact rather than shrinking the desktop composition. Native document scroll is the default, and required content, navigation, links, anchors, and settled layouts remain usable before and without enhancement.

## Cross-Story Dependencies

Foundation readiness and a trustworthy evidence harness are the entry condition for all later slices. The early static narrative must pass before later desktop chapters advance; all desktop chapters must then pass responsive completion before motion or WebGL begins. Enhancement changes must rerun every accepted static row they can affect. Accessibility, asset delivery, performance, and Cloudflare readiness apply to the identical final static-export digest, and no slice may reinterpret or waive a failed result from an earlier gate.
