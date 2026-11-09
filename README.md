# inba.dev

Inbasekaran Perumal’s portfolio uses Next.js App Router, React, and TypeScript. It exports a static homepage and individual case studies. The November 2026 refresh implements the approved narrative in [the content review](docs/website-content-review.md); the earlier [website review](docs/website-review.md) records the starting state.

Agent contributors should start with [AGENTS.md](AGENTS.md) and the [codebase map](docs/agents/domain.md).

## Run locally

Use Node **24.20.0** and npm **11.19.0**, matching `.node-version` and `package.json`.

```sh
npm ci
npm run verify:runtime
npm run dev
```

## Content and structure

`content/portfolio.ts` owns the narrative, project sections, timeline, navigation, and metadata; `content/links.ts` owns artifact and contact destinations. `app/page.tsx` composes the homepage’s separated project previews, each with its own visual and a direct case-study link, while `app/work/[slug]/page.tsx` generates the case studies and their metadata. Global fonts live in `app/layout.tsx` and responsive styles in `app/globals.css`. Media metadata and original assets are in `content/assets.ts` and `assets/source/`; files in `public/` are published.

The résumé at `public/Inbasekaran_Perumal_Resume.pdf` is the current maintained application résumé, built from the sibling `../../Inbasekaran_Resume/main.tex`. When updating it, compile with XeLaTeX from that checkout, inspect the PDF, replace the public file, and check the local link. Keep private evidence and planning out of `public/` and rendered content.

## Verification

`npm run verify:release` is the current release gate. It builds the static export and runs the checks below without updating visual baselines. A local preview already serving port 4173 is reused; CI starts its own server.


```sh
npm run lint -- --max-warnings=0
npm run typecheck
npm run build
npm run verify:content
npm test
npm run visual:smoke
npm run visual:chapters
npm run visual:webkit
npm run visual:compare
```

The browser checks serve the static `out/` export and exercise direct routes, responsive widths, navigation, images, and JavaScript-free reading. Install the configured Chrome and Playwright WebKit browsers if necessary. Chapter checks cover viewport isolation, actual opening transforms and wheel handoff, fragment return, resource placement, metric containment and role/date alignment. Followup checks cover 1920/2560/3440px opening isolation, responsive resizing, compact timeline, inline education details and finite case navigation; WebKit also checks painted portrait mask pixels. When changing media, preserve the originals and run `npm run assets:generate` and `npm run verify:assets`. The current visual comparison covers the full homepage and four full case studies at desktop and mobile widths. For intentional design changes, review the new rendering and run `npm run visual:update` to refresh the approved baselines. Historical capture and evidence commands are retained for the previous design and are not the November release gate.

## Static hosting

`npm run build` writes the deployable static site to `out/`. For Cloudflare Pages, use `npm ci` to install, `npm run build` as the build command, `out` as the output directory, and Node 24.20.0. Production is deployed from `main` to the Cloudflare Pages project `inba-dev-portfolio`. Automatic deployments are enabled. The site is available at [inba.dev](https://inba.dev/) and [www.inba.dev](https://www.inba.dev/). Metadata assumes `https://inba.dev`. See [deployment instructions](docs/deployment.md) for publishing, domain configuration and recovery.

## Visual layout

See the [current design guide](docs/design-guide.md), [visual review](docs/visual-review-2026-11-09.md), and [release verification](docs/release-readiness-2026-11-09.md).

The November 9 design uses equal side margins, viewport-height story chapters and one bounded visual field per project. A horizontal opening reveals identity before vertical scrolling resumes; reduced motion and small screens retain normal document flow. Keep text and artwork inside the shared content spine, with resource links in the left copy column. Native illustrations explain the filtering, shared-context and reporting concepts. VisionGuard’s source image uses a deliberate 4:3 preview crop, while the case study retains the wider composition. Scientific media stays faithful to its source. Check sizing and text hierarchy at desktop, tablet, 390px and 320px widths before updating visual baselines.
