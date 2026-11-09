# Followup annotation review: 9 November 2026

This pass addresses the ten new browser annotations after the initial thirteen-comment refinement. Latest user corrections govern copy and hierarchy.

| Comment | Implemented result |
| --- | --- |
| 1 | Opening travel uses viewport width in both directions; identity stays outside the intro even at 3440px. |
| 2 | Same-company roles have a 14px gap, sharing one institution heading. |
| 3–4 | Job-description paragraphs and unused timeline description field removed. All eight role/education entries retained. |
| 5 | Education degree, CGPA and class rank share a pipe-separated role line, wrapping naturally on smaller screens. |
| 6 | Reporting diagram caption removed; accurate tool/client labels retained. |
| 7 | Selected work eyebrow removed from all case headers. |
| 8–9 | Modest case title/headline/body hierarchy and compact left red-arrow continuation links; final case returns to selected work. |
| 10 | Canonical project title and metadata now use ACE MCP; route remains /work/ace-mcp/. |

## Diagnosis and evidence

A new real-browser regression failed before the opening fix at 1920px: identity panel left edge 1740px, expected at least 1920px. Progress was zero, scroll was zero, and the full-width stage was already clipped correctly. The 1200px content panel moved 115% of its own width, exposing 180px on that monitor. A browser-only viewport-distance probe moved its left edge to 2280px and removed the leak. Both panel directions now travel 100vw.

Regression coverage includes 1920, 2560 and 3440px start/end states, an 861px fallback resized to desktop and reduced motion, narrow overflow, compact same-company spacing, inline education at desktop, all case headers, removed captions, renamed title, hierarchy and finite navigation. Existing smoke navigation now verifies the final case exits to /#work instead of expecting a cycle. Both suites run from the release gate in Chromium and WebKit.

Actual captures are in `/private/tmp/inba-annotation-review/`: intro and identity at large monitor sizes; timelines at 861, 1345, 1920, 2560, 3440 and 390px; all four case pages at 1345 and 390px. An early 861px timeline capture was taken during smooth scrolling and was rejected as evidence; it was recaptured only after measured target/header alignment settled. No code defect was inferred from the premature screenshot.

Independent adversarial visual/content, edge-case and verification-gap reviewers returned no remaining findings after checking these changes. Parent inspection confirmed large-screen isolation, compact role rows, inline education, removed labels and coherent footer hierarchy. Baselines are accepted only after this review, then the complete release gate is rerun. See the final release result in `../release-readiness-2026-11-09.md`.
