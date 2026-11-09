# Codebase map

This is one static portfolio application, without a database, login or server API.

| Area | Owner / purpose |
| --- | --- |
| `content/portfolio.ts` | Homepage narrative, project data, timeline, navigation and SEO copy |
| `content/links.ts` | Contact and artifact destinations |
| `content/assets.ts` | Source and responsive media metadata |
| `app/page.tsx` | Homepage composition |
| `app/work/[slug]/page.tsx` | Statically generated case studies and metadata |
| `app/layout.tsx` | Root document, fonts and shared shell |
| `app/globals.css` | Design tokens, responsive layout and global styles |
| `components/` | Navigation, illustrations and isolated browser interactions |
| `assets/source/` | Original artwork and scientific images |
| `public/` | Files published verbatim, including generated media and PDFs |
| `scripts/` | Asset generation and runtime/content/build verification |
| `tests/visual/` | Static preview server, browser regressions and visual evidence |
| `out/` | Generated deployment output; ignored by Git |

## Terms and constraints

Smart Filters is the homepage label for the natural-language-filtering case study. ACE MCP is the reporting integration project. VisionGuard is the OpenVINO GSoC application. Keep these names and contribution boundaries consistent with the canonical content.

The opening has a horizontal identity reveal on capable desktops and normal document flow on small screens, reduced motion and without JavaScript. Work, research and contact use viewport-height chapters that grow when content needs more room. Experience uses a compact timeline. See [the design guide](../design-guide.md) for detailed invariants.

When changing media, preserve originals, run `npm run assets:generate` and `npm run verify:assets`, and inspect crops and scientific figures. The portrait uses native SVG masks because earlier clipping failed in WebKit.

See [the README](../../README.md) for local development and [deployment](../deployment.md) for production. If future domain or architecture decision docs are added, read those relevant to the change; none are required merely to edit this portfolio.
