# Cloudflare Pages deployment

## Production configuration

Configured on 9 November 2026:

| Setting | Value |
| --- | --- |
| GitHub repository | `the-pinbo/portfolio-website` |
| Pages project | `inba-dev-portfolio` |
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build` |
| Output directory | `out` |
| Root directory | Repository root |
| Node | 24.20.0, pinned by `.node-version` |
| npm | 11.19.0, declared in `package.json` |
| Pages hostname | https://inba-dev-portfolio.pages.dev/ |
| Custom domains | https://inba.dev/ and https://www.inba.dev/ |

[Project dashboard](https://dash.cloudflare.com/b0ecd34e63f0ee7593a34f2886075c4e/pages/view/inba-dev-portfolio) · [Custom domains](https://dash.cloudflare.com/b0ecd34e63f0ee7593a34f2886075c4e/pages/view/inba-dev-portfolio/domains)

Cloudflare installs dependencies and runs the build from GitHub. This is a static export, with no Worker functions or server runtime. `next.config.ts` enables `output: "export"` and trailing slashes. `npm run start` is not the production serving command; preview the exported files with `node tests/visual/static-server.mjs` after building.

Both custom domains were configured through Pages, which added CNAME records pointing to `inba-dev-portfolio.pages.dev`. Do not replace these with a server IP. Site metadata assumes `https://inba.dev`.

The former Work, Research, Experience and Contact page URLs redirect to their sections on the homepage through [the Pages redirect rules](../public/_redirects). The sitemap lists the homepage and project case studies.

## Publish changes

1. Inspect `git status` and the diff; include only intended files. Keep local drafts and private material out of the commit.
2. Run the checks in [AGENTS.md](../AGENTS.md). For application releases, run `npm run verify:release` and review any intentional screenshot changes.
3. Create a signed commit using the existing Git configuration. Push to `main` only when publishing is authorized: this triggers a production deployment. Use a feature branch for work awaiting review.
4. Follow the Pages deployment until success, confirm its commit hash and inspect build logs if it fails.
5. Verify the homepage, a direct `/work/.../` route, images and the résumé PDF on the custom domain. A successful build alone does not verify DNS or public availability.

The first production deployment used commit `b4e122f`. Homepage and ACE MCP routes loaded on `inba.dev`, and the `www` address also loaded. The dashboard still displayed domain verification in progress at the final check; inspect current status rather than assuming that historical status persists.

## Git access and recovery

This checkout uses `git@github-the-pinbo:the-pinbo/portfolio-website.git`. `github-the-pinbo` is a local SSH alias selecting the owner's account-specific key. On other machines, use their authenticated SSH/HTTPS setup instead of assuming the alias exists. Confirm account access before pushing; commit author name/email do not select a GitHub account.

Respect configured GPG signing. If the signing prompt cannot open in the agent session, have the owner complete signing in their terminal; do not silently disable signing. Never store private keys, tokens or passphrases in this repository.

For a failed deployment, inspect the project's deployment logs before changing build settings. For a custom-domain error, compare the working Pages hostname with the custom domain and inspect Pages verification and DNS records. Initial provisioning briefly returned 522 before the domain began serving correctly.

To recover a broken production release, use the dashboard's rollback option for a known successful deployment if available, or revert the offending commit and push the revert through the normal release flow. Verify public behavior afterward; do not force-push shared history.
