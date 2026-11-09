---
title: 'Refresh portfolio content and presentation for publication'
type: 'feature'
created: '2026-11-08'
status: 'done'
review_loop_iteration: 0
baseline_commit: 'adcf2092f06fa5d4e6a1f356b6d0d9086aa7b19c'
context:
  - 'docs/website-content-review.md'
  - 'docs/website-review.md'
---

<frozen-after-approval reason="User approved full implementation, review, and deployment in the November follow-up">

## Intent

**Problem:** The portfolio has stale content, incorrect dates and ownership, no separate project pages, navigation below the opening, and substantial mismatch with its intended prototype. The user wants a polished, readable, accurate website ready for publication today.

**Approach:** Rebuild the existing Next.js static portfolio around approved November content, persistent top navigation, individual case studies, and the existing paper/navy/coral editorial design. Compare rendered desktop/mobile pages to the reference, then repair observed defects before publication.

## Boundaries & Constraints

**Always:** Use existing Next.js/React/TypeScript infrastructure. Keep typed runtime content centralized. Feature natural language filtering, AI native engineering workflows, ACE MCP in that order; retain VisionGuard. Apply the recommended filtering metrics with explicit activity/subset qualifiers. Include the manager-cleared transformation figures with team attribution and explicit diagnostic-time estimates, as authorized on 8 November. Describe ACE MCP query-language design and multi-turn evaluation contribution without claiming interface implementation. Current evidence confirms release. Correct SDE II to Jul 2026 and Determinant to Dec 2022–Feb 2023. Keep publication forthcoming. Preserve real source artifacts. Keep content accessible without JavaScript, keyboard focus visible, motion reduced when requested. Use GPT-6.1 Terra for coding when available; the user explicitly authorized the available-model fallback after its usage limit.

**Ask First:** Only externally required account access, domain changes that could disrupt other services, or genuinely destructive changes not needed for this refresh. User has already authorized edits and deployment; do not ask routine approval again.

**Never:** Publish private evidence ledgers, telemetry, or private planning; invent claims, customer adoption, screenshots, references, employment, or URLs. Advertise the cancelled MCP app or GraphQL plans. Scaffold a replacement application, change public contact values, or disable tests merely to pass.

</frozen-after-approval>

## Code Map

- `content/portfolio.ts` owns runtime narrative, navigation, timeline, SEO, and visual labels; extend with case-study sections and summaries.
- `content/links.ts` owns existing contact/artifact destinations; relative poster path needs a root path on nested pages.
- `app/page.tsx` currently renders every full project in a generic article; replace with composed homepage summaries and direct case-study links.
- `app/work/[slug]/page.tsx` is the proposed static-generated route; include generateStaticParams, notFound, unique metadata/canonical and next-project navigation.
- `components/site-navigation.tsx`, `active-section-observer.tsx` currently use homepage hash links; make top navigation work from nested pages without hydration-dependent destinations.
- `components/portrait-triptych.tsx` uses the same image bounds under all three masks. Reference needs independent source transforms: left 0/257.92/305.37/407.16, center 65.5/31.5/479.52/639.36, right 265.25/156/384.75/513 in 650-square stage. Use responsive derivatives and keep whole face visible.
- `components/delivery-image.tsx`, `content/assets.ts`, `assets/source/` provide existing real responsive images. Reuse scientific media without alteration.
- `components/mcp-app-stack.tsx` contains stale app/GraphQL labels; replace or remove its runtime use. Confidential project visuals should be honest system diagrams, not fabricated product UI.
- `app/globals.css` contains current tokens/layout. Replace obsolete styles coherently rather than append conflicting patches.
- `app/layout.tsx` currently applies homepage canonical globally; provide route overrides. Fonts are Instrument Sans and IBM Plex Mono.
- `_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/DESIGN.md` and `mockups/key-continuous-desktop-story.html` are visual references, read-only. New top navigation, concise opening, and project pages supersede old continuous-scroll/no-initial-nav requirements. Keep light print-inspired brand; its explicit no-dark-alternate direction supersedes generic dual-theme guidance.
- `scripts/verify-content.mjs`, `tests/` contain historical assertions; update behavior contracts that this request supersedes while retaining meaningful asset/accessibility checks.

## Tasks & Acceptance

**Execution:**
- [x] `content/portfolio.ts`, `content/links.ts` — apply approved narrative and case-study model; root-safe artifact links.
- [x] `app/page.tsx`, `components/` — polished homepage, true top navigation, corrected portrait, relevant visuals, readable research and experience.
- [x] `app/work/[slug]/page.tsx` — statically generated case studies with evidence links, back/next navigation, unique metadata.
- [x] `app/globals.css` — responsive editorial styling, focus states, target offsets, and restrained transitions.
- [x] `tests/`, `scripts/verify-content.mjs` — current content and browser contracts covering all routes, navigation, responsive overflow and no-JavaScript content; preserve meaningful checks.
- [x] `README.md`, `docs/` — update actual architecture, editing, checks and implementation status; record verification evidence.

**Acceptance Criteria:**
- Given homepage or direct project entry, when loaded, then top navigation, identity and readable content appear immediately without overlaps.
- Given the homepage work list, when a project is opened, then a distinct complete case-study page renders with its own title, canonical URL and working return navigation.
- Given desktop, tablet, 390px and 320px widths, when browsing and navigating, then no horizontal document overflow, clipped text, hidden links or portrait-face truncation occurs.
- Given reduced motion or JavaScript disabled, when reading any page, then content and navigation remain usable.
- Given current public content, when inspected, then project order, contribution boundaries, dates and publication status match the approved draft and cancelled claims are absent.
- Given independently captured screenshots, when compared with the reference, then brand, typography, spacing, portrait geometry and responsive layouts are coherent; reviewer findings are resolved before release.

## Design Notes

Native CSS aesthetic, no new component system required. Set DESIGN_VARIANCE 6, MOTION_INTENSITY 3, VISUAL_DENSITY 3: an engineering portfolio with asymmetric editorial composition, quiet interaction feedback and readable content. Light paper #F1EEE7, paper-light #F8F5EE, navy #173047, deep navy #102536, coral #CF654F. Use existing sans/mono pair. Avoid generic equal-card grids, excessive labels, gradient backgrounds, fake screenshots, giant empty viewport stages, and decorative process diagrams. Homepage should make person, role, work and next action clear promptly; case studies carry detailed decisions. Keep the original triptych only if faithfully corrected and visually strong.

## Verification

- `npm run lint -- --max-warnings=0`, `npm run typecheck`, `npm run build`, `npm run verify:content`, `npm test` should pass.
- Browser checks must exercise real navigation and direct static routes, keyboard and narrow viewport overflow. Capture homepage top/work/research/experience/contact and every project at desktop/mobile. Inspect actual images, not screenshot existence alone.
- Run asset checks if media changes; report runtime mismatch honestly instead of quietly changing pinned versions. Parent coordinates deployment after independent review; implementation agent does not push or deploy.

## Post-approval authorization update

The user subsequently confirmed that AI spending and debugging figures are approved for public use and requested the maintained application résumé PDF as the public download. The AI workflows case study may present the team-attributed spending and debugging outcomes with their qualifiers; ACE MCP may state the shared interface covers 23 entities. This later instruction supersedes the earlier spending restriction above.

## November layout refinement

The user requested more space on the right and an individual visual treatment for every project. Homepage projects now have separate, generously spaced copy-and-artwork compositions that open their dedicated case-study routes. Filtering, AI workflows and ACE MCP use distinct explanatory native artwork; VisionGuard uses the existing image in a deliberate 4:3 crop. The shared content spine reserves a larger right gutter on desktop and retains safe margins on mobile. These November requirements supersede the earlier compact text-only project list.

## Suggested Review Order

**Content and pages**

- Start with the canonical narrative and approved contribution boundaries.
  [portfolio.ts:28](../../content/portfolio.ts#L28)

- See the dedicated static routes and metadata overrides.
  [page.tsx:14](../../app/work/[slug]/page.tsx#L14)

**Presentation and navigation**

- Follow the homepage preview composition and visual pairing.
  [page.tsx:11](../../app/page.tsx#L11)

- Inspect shared gutters, project composition, and responsive rules.
  [globals.css:54](../../app/globals.css#L54)

**Verification and maintenance**

- Run the current release gate and baseline comparison.
  [package.json:31](../../package.json#L31)

- Read the final evidence and deployment boundary.
  [release-readiness-2026-11-08.md:1](../../docs/release-readiness-2026-11-08.md#L1)
