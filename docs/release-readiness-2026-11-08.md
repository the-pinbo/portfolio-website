# Release verification: 8 November 2026

The portfolio refresh is built and reviewed. Deployment is managed by the user on Cloudflare; no remote push, DNS change, or deployment was performed.

## Delivered

- Updated narrative and dates, including the manager-cleared AI spending/debugging figures with team attribution and diagnostic-time estimates.
- Selected work ordered as natural language filtering, AI native engineering workflows, ACE MCP reporting, then VisionGuard.
- Four independent static case-study pages, native return/next navigation, unique metadata and sharing images.
- Visible top navigation, correct section highlighting during normal scrolling, preserved legacy anchors, and usable skip navigation.
- Larger right gutter, aligned header/content spine, distinct bounded project illustrations, deliberate VisionGuard preview crop, and corrected portrait crops.
- Current application résumé PDF, checked as two rendered pages and available without Google sign-in.
- Current design guide and repeatable full-page screenshot comparisons.

## Final checks

`npm run verify:release` passed using Node 24.20.0 and npm 11.19.0:

| Check | Result |
| --- | --- |
| Runtime, lint, TypeScript, static build | Passed; zero lint warnings |
| Content, six source assets, legacy scan | Passed |
| Node tests | 11 passed |
| Browser checks | 7 passed |
| Full-page screenshot comparisons | 10 passed |
| Whitespace check | Passed |

Browser checks cover 1440, 1024, 768, 390 and 320px widths, direct routes, image/label bounds, sticky-header clearance, active navigation, the complete next-project cycle, keyboard skip navigation, JavaScript-free reading, and normal-motion scrolling followed by further manual scrolling.

The independent visual reviewer inspected the ten final desktop/mobile PNGs, full-resolution homepage regions, and parent-captured 892px panel screenshots against the reference and latest user direction. Heading collisions, a narrow paper label, competing illustration typography and an orphaned mobile arrow were fixed. No actionable visual finding remains within that reviewed scope. See `visual-review-2026-11-08.md` for evidence and limits; the independent review agent could not operate CUA itself and inspected the parent's captures and browser-test PNGs.

## Delivery experiment

Lighthouse 13.6.0 audited an identical frozen VisionGuard build under default simulated mobile conditions (412×823, DPR 1.75, 150ms RTT, 1638.4Kbps, 4× CPU slowdown). Only response compression differed:

| Delivery | Performance / accessibility / best practices / SEO | LCP | Transfer |
| --- | --- | --- | --- |
| Uncompressed local HTTP | 88 / 100 / 100 / 100 | 3.958 seconds | 565,956 bytes |
| Brotli local HTTP | 100 / 100 / 100 / 100 | 1.915 seconds | 240,558 bytes |

Both used the same image and decoded resources; the two main JavaScript bundles transferred about 347KB uncompressed versus 85KB with Brotli. CLS was zero. This explains the preview-server performance difference without changing the design. It is a controlled delivery experiment before the final layout polish, not a measurement of a live Cloudflare deployment. Verify compression and repeat the audit after publishing.

## Handoff

`out/` contains the final static website. A ZIP with `index.html` at its root was prepared at `/private/tmp/inba.dev-static-2026-11-08.zip` (87 files). Archive integrity and all four case-study entries were checked. SHA-256: `fd9c246874e379e6a494a21cb1eca2a98e64cbe72f5fec72cec876bdffa36f31`.

For a fresh build, follow README.md. Cloudflare output directory: `out`. The canonical origin remains `https://inba.dev`; use that domain or update metadata before publishing elsewhere. Production DNS, HTTPS, caching/compression, public routes and external artifact availability must be checked by the deployment owner.

The Medium write-up blocks automated HTTP requests; the GSoC endpoint serves a JavaScript shell. These audit limits do not establish that those public links are broken. The ICASSP link now uses the readable primary DLR record, CoNGA uses the publisher's proceedings listing marked forthcoming, and the résumé is a direct local PDF.
