# Website review and repair plan

Initial source review: 8 November 2026. The findings below record the starting state. See the November implementation update at the end and `visual-review-2026-11-08.md` for completed changes and visual evidence. Deployment is managed by the user.

## Current state

The repository has an appropriate Next.js/React foundation and a central content module. The main problems are stale narrative, incomplete information architecture, and presentation that needs comparison with the intended prototype. The README previously contained only two repeated title lines.

| Finding | Current evidence | Required change |
| --- | --- | --- |
| Project pages are missing | `app/page.tsx` maps all projects into articles; no project routes exist under `app/`. | Homepage summaries should link to separate case studies with unique URLs, metadata, and a return path. |
| Navigation starts too late | `<SiteNavigation />` appears after the thesis and identity sections. CSS makes it sticky only once that position is reached. | Put the primary navigation at the top from the first viewport, and make it work on every project page. |
| Anchor handling needs verification | CSS gives `section[id]` a scroll offset, but project anchors are `article` elements. | Cover all anchor targets and test direct entry, keyboard focus, and mobile header height. This is a source-level risk, not a reproduced overlap defect. |
| Active navigation may be unreliable | The observer chooses only among entries changed in a callback rather than tracking all visible sections. | Verify scroll-up/down and long-section transitions; select a stable active target if failures reproduce. |
| ACE narrative is obsolete | Copy and `McpAppStack` labels advertise an MCP app, GraphQL contract, and interactive app experience. | Replace the story and diagram with released query-language/reporting/evaluation work. |
| Featured order is obsolete | Runtime order is Smart Filters, ACE, VisionGuard. | Use natural language filtering, AI native engineering workflows, ACE MCP; retain VisionGuard as additional work. |
| Career dates are wrong | Runtime SDE II starts Jul 2024; current résumé says Jul 2026. Determinant dates/title also differ. | Apply the corrected compact timeline from the content draft. |
| Search positioning is stale | SEO repeats the old slogan and formal role without the revised applied-AI narrative. | Update homepage metadata and add page-specific metadata/canonicals for case studies. |
| Portrait presentation needs review | `PortraitTriptych` renders one source through three clipped panels. | Compare the actual source, crop, and composition with the intended reference before deciding whether to replace the image or its treatment. |
| Publication status is unclear in UI | CoNGA artifact is simply labeled “Paper” and points to a book listing. | State “Proceedings · forthcoming” and use the maintained proceedings link after checking it. |
| Résumé freshness is unverified | Contact links to an existing Drive PDF. | Confirm that it contains the current résumé before launch. |
| Deployment is undocumented | Static export is configured; no hosting workflow is checked in. | Identify the current host and establish a reproducible deploy procedure before publishing. |

## Prototype and visual review

The August `implementation-fidelity-audit-2026-08-29.md` already recorded substantial mismatch with the authored prototype. Some technical items in that audit have since changed: responsive delivery components exist, chapter copy is centralized, and browser-test infrastructure exists. Do not treat every historical finding as a current defect.

The next design pass should inspect the rendered site and the prototype side by side. Reference HTML and design files are under `_bmad-output/planning-artifacts/ux-designs/ux-inba.dev-2026-08-22/`. The user's current request for top navigation and separate project pages supersedes the older continuous-page plan. Reuse useful typography, assets, and design decisions only where they serve the revised structure.

Establish the intended opening composition, portrait treatment, page hierarchy, project summaries, and case-study reading layout before broad CSS changes. Judge the result by actual desktop/mobile renders and navigation behavior, as well as automated checks.

## Work sequence

1. Finalize the proposed copy and the optional public metrics in `website-content-review.md`.
2. Apply approved content, replace stale visual labels, and create the case-study content structure.
3. Build the top navigation and separate project pages, including back navigation, direct links, and page metadata.
4. Repair the visual system against the chosen reference: opening, portrait, project summaries, case-study layouts, and mobile behavior.
5. Verify content, links, accessibility, keyboard navigation, direct entry to pages, responsive overflow, and actual desktop/mobile appearance. Check the generated static export on the intended host configuration.
6. Deploy the reviewed result through the confirmed hosting mechanism and verify the public pages and domain.

## Completion criteria

The homepage identifies the person and work immediately; navigation is available at the top. Each featured project has its own readable, directly accessible page. The selected project order matches the November request. MCP app and GraphQL claims are absent from public text and diagrams. Dates, contribution boundaries, publication status, and résumé links agree with maintained sources. The portrait and layout are reviewed against the intended reference. Desktop and mobile navigation work, all artifact links are checked, and the deployed site serves the final build.

## Verification of the initial documentation pass

Only Markdown documentation changed. Application code, runtime copy, routes, images, and hosting were left for the requested content-first sequence. No build, browser validation, link availability check, or deployment was performed. The draft is reviewable prose, not a claim that the site is repaired.

## November implementation update

The refresh now renders a top navigation, a concise homepage, and four statically generated case studies. The runtime narrative and routes are maintained in `content/portfolio.ts`; the reviewed copy above remains the historical draft. The root-safe poster link and public résumé PDF are included in the export. Homepage and case-study metadata use the production domain and page-specific canonicals. The user manages Cloudflare deployment.

Verification for this implementation uses the pinned Node 24.20.0 and npm 11.19.0 runtime. Lint, typecheck, build, content and asset verification, and legacy scan passed; all 11 Node tests passed. Seven Playwright checks passed against the static export, covering JavaScript-free reading and routes at 1440, 1024, 768, 390, and 320 pixels, plus normal-motion section highlighting. The historical capture and evidence matrix describes the superseded continuous-page design and was not used as the November release gate. Independent visual review is recorded separately; the original source-level review did not establish it.

## Publication authorization update

The user confirmed that the AI spending and debugging figures are cleared for public use. The application résumé PDF built from the maintained sibling source is the public download. The AI workflows case study presents the figures with team attribution and an estimated diagnostic-time qualifier.
