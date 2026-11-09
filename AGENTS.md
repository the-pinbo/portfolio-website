# Working in inba.dev

Personal portfolio for Inbasekaran Perumal. Next.js App Router, React, TypeScript and Tailwind CSS v4; static export hosted on Cloudflare Pages.

## Start here

- Read [the codebase map](docs/agents/domain.md) before changing an unfamiliar area.
- Read [the design guide](docs/design-guide.md) for layout, artwork or motion changes.
- Read [deployment instructions](docs/deployment.md) before publishing. Pushing to `main` automatically deploys production.
- Use [GitHub Issues](docs/agents/issue-tracker.md) for requested issue work and [triage labels](docs/agents/triage-labels.md) when applicable.

## Development and verification

Use Node 24.20.0 and npm 11.19.0, as pinned in `.node-version` and `package.json`. Install with `npm ci`; start with `npm run dev`.

- For application changes, run `npm run lint -- --max-warnings=0`, `npm run typecheck`, `npm run build` and relevant tests.
- Before publishing application changes, run `npm run verify:release`. It builds `out/` and checks content, assets, legacy anchors, Node tests, Chromium, WebKit and screenshots.
- Browser tests serve `out/` on port 4173. Rebuild after source changes; an existing server is reused locally. Use Chrome and Playwright WebKit as configured.
- For documentation-only changes, check links, commands and `git diff --check`; a full browser run is unnecessary.
- Screenshot baselines are approved design evidence. Inspect intentional rendering changes before `npm run visual:update`; do not update snapshots just to silence failures. Darwin baselines may require matching the platform.

## Change boundaries

- Keep narrative in `content/portfolio.ts`, destinations in `content/links.ts` and media metadata in `content/assets.ts`.
- Preserve static export compatibility. Server runtime features, API routes and request-time rendering require a deliberate hosting change.
- Keep essential copy and links server-rendered and readable without JavaScript. Preserve reduced motion, keyboard focus, skip links and stable anchors.
- Preserve scientific source images and contribution attribution. Do not invent achievements, metrics, dates or ownership claims.
- Keep public copy plain and direct; avoid em dashes. Use ACE MCP as the project name.
- Preserve unrelated user changes and stage explicit paths. Do not commit build output, credentials, private evidence or abandoned profile artwork.
- Keep configured commit signing enabled. See deployment instructions for the account-specific SSH remote; Git identity does not select the authentication account.

## Documentation

`README.md` is the contributor entry point; `docs/deployment.md` records hosting and release operations. Dated review and release reports describe their recorded revisions and do not certify later changes. `_bmad-output/` contains historical planning, not the current implementation contract. Update the relevant maintained docs when behavior or hosting changes.
