# Release verification: 9 November 2026

This refinement implements the user's thirteen annotations and replaces the prior short-row homepage composition with viewport chapters. Deployment remains with the user; nothing was pushed or deployed. Existing staged and unstaged work was preserved.

## Delivered

- Full-screen editorial statement followed by a reversible horizontal identity reveal; normal vertical scrolling resumes after the opening. Reduced motion, small screens and no JavaScript use readable document flow.
- Separate viewport-height work/research/contact chapters, centered equal gutters, shared copy/visual alignment and typography.
- Consistent left-column red-arrow links, contextual accessible names, aligned role dates, removal of redundant award and section interstitials.
- Prototype-style date/tracker mapping, clearer illustrative MCP/read-only-tools/client-report flow, intact scientific images with aligned metrics, enlarged minimal contact composition.
- Native SVG portrait masks preserved and verified in WebKit.
- Initial deep-link geometry and WebKit native smooth-scroll initialization defects reproduced and fixed; smooth in-page scrolling enables after the initial landing settles.

## Independent review

Adversarial visual/content, edge-case and verification-gap reviewers ran independently. The initial findings led to concrete fixes; all three final reviews returned no remaining actionable findings. The visual reviewer additionally checked all four case-study pages at desktop and mobile sizes. See [finding dispositions](review/refinement-findings-2026-11-09.md) and [visual evidence](visual-review-2026-11-09.md).

## Final release gate

The expanded `npm run verify:release` covers runtime, lint, TypeScript, static build, content/assets/legacy checks, Node tests, Chromium smoke/no-JS, chapter geometry and actual motion, WebKit chapter/paint regressions, and ten full-page screenshot comparisons. Baselines were updated only after review of the new renders.

Final command result and archive details are appended after verification. Playwright WebKit is engine verification, not a claim that the macOS Safari application was tested. Mobile/zoom/short viewport chapters grow to fit content rather than clipping or trapping scrolling. External destination availability and production hosting are outside this local refinement pass.

## Final result

The complete expanded release gate passed with exit 0 on Node 24.20.0 / npm 11.19.0. Lint reported zero warnings.

| Check | Result |
| --- | --- |
| Runtime, lint, TypeScript, production static build | Passed |
| Content, six source asset entries, legacy scan | Passed |
| Node tests | 11 passed |
| Chromium smoke and JavaScript-free reading | 7 passed |
| Chromium chapter, motion, wide-screen followup and fragment checks | 18 passed |
| WebKit chapter, motion, wide-screen followup and painted portrait checks | 21 passed |
| Reviewed full-page screenshot comparisons | 10 passed |
| Whitespace check | Passed |

The refreshed static archive is `/private/tmp/inba.dev-static-2026-11-09.zip` (87 files), with `index.html` at its root and all four case-study routes verified. Archive integrity passed. SHA-256: `4366d2525cd2677ba9a6ce9f06cd336419a81739cc64ede72a6daf73178d5ff5`. It supersedes the stale November 8 ZIP.

`out/` is the tested static export. No local commit was attempted because the handoff explicitly left signing unresolved; the user's existing index was preserved. No deployment or remote operation was performed.

## Later annotation followup

All ten later comments were implemented and independently reviewed. The opening now travels by viewport width; the identity cannot leak into the initial thesis on large monitors. Timeline descriptions are removed, RingCentral roles are closer and education qualifiers follow the degree inline. ACE MCP naming, case-page hierarchy, label/caption removal and a compact finite footer are implemented. The final project returns to selected work.

The expanded release gate passed again with exit 0: 11 Node tests and 56 browser/screenshot checks, including all seven new followup regressions in both Chromium and WebKit. Large monitor coverage includes 1920, 2560 and 3440px, with 861px responsive resizing. The ZIP and digest above now refer to this final followup build, replacing the earlier same-day package. See [followup evidence](review/annotation-followup-2026-11-09.md).
