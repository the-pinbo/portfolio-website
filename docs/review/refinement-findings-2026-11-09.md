# Independent refinement findings and disposition

Three independent reviews examined the source, current diff, rendered chapters and verification coverage. They ran as an adversarial visual/content review, an edge-case review and a verification-gap review. The parent independently reproduced the navigation defect and inspected chapter renders. Related findings are grouped below; all were treated as patches within the user's authorized design refinement.

| Finding | Disposition |
| --- | --- |
| Previous content visible through mobile navigation | Header made fully opaque. |
| Identity fragment removed | Restored `identity-frame` with enhanced-opening reveal support. |
| Experience list independently inset | Removed its separate width cap; list and heading now share the wrapper spine. |
| Work/research body text and spacing differed | Shared chapter-copy typography, measure and paragraph spacing. |
| Workflow illustration outer gutter differed | Removed the outer horizontal padding; kept internal document composition. |
| Filter mapping lost date/tracker color correspondence | Navy date and dark red tracker now connect corresponding phrases to fields; endpoint rules restored. |
| MCP/tool outputs implied server-generated report synthesis | Explicit read-only tools return results to the AI client, which assembles the report. |
| Reporting graphic used generic nouns without useful example | Added clearly illustrative cancellation question, matching records and counts by tracker; no fabricated measurements. |
| Every focus inside opening forced a scroll jump | Recovery now runs only when focused content is clipped. |
| Hydration changed opening height and broke fragment landing | Animated opening retains two-screen geometry; initial fragment reconciliation added. Original normal-motion Research failure reproduced independently before repair. |
| Opening test checked progress rather than actual motion/handoff | Added statement/portrait bounds, reverse transition, focus stability and wheel handoff tests at normal and threshold viewport heights. |
| Moved artifact links lost accessible context | Restored contextual accessible labels. |
| Scientific labels wrapped separately from their numbers | Render SSIM/value and MSE/value as separate nonbreaking metric units. |
| Release command excluded chapter/WebKit checks | Added explicit chapter and WebKit scripts to the release gate. WebKit also exercises the chapter/motion suite. |

Final verification and render acceptance are recorded in `../visual-review-2026-11-09.md` and `../release-readiness-2026-11-09.md`. Source-authentic scientific pixels, canonical project claims, contribution qualifiers and native portrait masks were preserved.
