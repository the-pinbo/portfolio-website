# Currency and Reality-Check Review

**Artifact:** `ARCHITECTURE-SPINE.md`  
**Lens:** Every committed technology/platform decision must be supported by the current repository or a current authoritative source.  
**Reviewed:** 2026-08-29  
**Verdict:** **CHANGES REQUIRED**

The dependency table is not hallucinated: every listed package version exactly matches `package-lock.json`, and `npm ls --depth=0` reports a valid installed graph. React 19.2.8, React DOM 19.2.8, Tailwind CSS 4.3.3, React Three Fiber 9.7.0, and Drei 10.7.8 also match their current npm `latest` tags. The installed R3F/Drei peer ranges accept React 19.2.8 and Three.js 0.180.0. Next.js 15 remains in Maintenance LTS, and Cloudflare explicitly documents Pages deployment of a Next.js static export, so the core Pages/static-export choice exists and fits.

## Findings

### 1. The Node.js floor names an EOL release and is not enforced

- **Location:** Stack — `Node.js | 20 or newer LTS`; AD-8 and AD-9
- **Trigger condition:** As of this review, Node.js 20 has been EOL since 2026-03-24. The official release table identifies Node 22 and 24 as LTS and Node 26 as Current. The repository has no `engines.node`, `.nvmrc`, `.node-version`, or checked-in Cloudflare build-runtime pin; the local runtime used for inspection is Node 26.5.1, which is Current rather than LTS.
- **Evidence:** [Node.js release schedule](https://nodejs.org/en/about/previous-releases), [Node.js EOL policy](https://nodejs.org/en/about/eol), `package.json`, repository file inventory, `node -v`.
- **Guard:** Replace the floor with an exact supported LTS line (prefer Node 24.x, or explicitly justify Node 22.x), then enforce it in `package.json` and the chosen local/Cloudflare build configuration. Do not retain “20 or newer LTS”: it includes an unsupported line and does not exclude Current releases.
- **Potential consequence:** Local, CI, and Cloudflare builds can run on three different Node lines; an EOL line receives no security fixes, while a Current line can expose compatibility changes the production LTS build never exercises.

### 2. Workers compatibility is asserted without a Workers toolchain or compatibility result

- **Location:** AD-8 — “Cloudflare Pages or Cloudflare Workers compatible”; Stack — “Cloudflare Pages or Workers”; AD-9
- **Trigger condition:** The checked-in configuration proves only a Next.js static export (`output: "export"`). No Workers adapter/toolchain or configuration (`vinext`, OpenNext, Wrangler) exists in `package.json`, `package-lock.json`, or the repository. Current Cloudflare guidance treats a static Next.js Pages deployment as one path and recommends `vinext` plus its compatibility check for Next.js on Workers; `vinext` is currently beta. AD-9 already says Workers require a later explicit decision, so AD-8 and the Stack overstate the verified target.
- **Evidence:** [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [Cloudflare Workers Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/), `next.config.ts`, `package.json`, `package-lock.json`.
- **Guard:** Bind v1 to **Cloudflare Pages static export** only. Move Workers to Deferred with a revisit condition requiring selection of the then-current adapter, a compatibility-check result, and a production-artifact test. If Workers is genuinely required now, add and verify that toolchain before claiming compatibility.
- **Potential consequence:** A builder can obey AD-8 yet choose a Workers deployment that the repository cannot build or verify, defeating the production-equivalence guarantee in AD-9.

### 3. The Stack table is an installed snapshot, not a current-version recommendation

- **Location:** Stack
- **Trigger condition:** The exact versions match the lockfile, but several are no longer current upstream: npm currently identifies Next.js 16.3.3 as latest and 15.5.24 as the current 15.x backport, TypeScript 7.0.2 as latest, and Three.js 0.185.1 as latest. The spine lists Next.js 15.5.23, TypeScript 5.9.3, and Three.js 0.180.0 without saying whether the table records the brownfield lock snapshot, the required implementation pins, or preferred current versions. Next.js 15 is still supported Maintenance LTS and the installed Three.js satisfies the R3F/Drei peer ranges; this is a currency/intent ambiguity, not evidence that the graph is incompatible.
- **Evidence:** [Next.js npm versions](https://www.npmjs.com/package/next?activeTab=versions), [Next.js support policy](https://nextjs.org/support-policy), [TypeScript npm versions](https://www.npmjs.com/package/typescript?activeTab=versions), [Three.js npm versions](https://www.npmjs.com/package/three?activeTab=versions), `package-lock.json`, installed peer metadata.
- **Guard:** Label the table “brownfield lock snapshot verified 2026-08-29” and keep version movement code-owned, or intentionally adopt supported target pins and record why the project remains on Next 15 / TypeScript 5 / Three r180. At minimum, assess and take the 15.5.24 maintenance patch before release.
- **Potential consequence:** Future builders may treat aging seed data as an architectural pin, or independently “modernize” different packages and invalidate the tested React/Three/Next combination.

### 4. The asset-delivery gate is target-state prose, not a reality-checked executable gate

- **Location:** AD-6; Consistency Conventions — Asset manifest; Structural Seed
- **Trigger condition:** The current brownfield code serves PNGs directly from `public/assets`, components reference those PNGs, no AVIF/WebP delivery derivatives are present, `content/assets.ts` does not exist, and no test or build script enforces the stated source-raster/dimension/derivative failures. `next.config.ts` declares image formats, but the code uses plain `<img>`/SVG image references rather than `next/image`, so that setting does not create the promised derivative pipeline.
- **Evidence:** `public/assets/*`, `components/research-poster-tile.tsx`, `components/fractal-precision-plate.tsx`, `components/portrait-triptych.tsx`, `components/specimen-plate.tsx`, `next.config.ts`, `package.json`, `tests/`.
- **Guard:** Mark AD-6 explicitly as a required migration target and bind a build slice that creates `content/assets.ts`, derivatives, and an executable gate before production promotion. Do not describe the gate as operative until a command and artifact path exist.
- **Potential consequence:** The architecture can be declared satisfied while the actual build still ships source PNGs; G4 then has no mechanical way to detect the violation it claims to block.

## Verified decisions

- `output: "export"` exists in `next.config.ts`, and Cloudflare currently documents `next build` → `out` for Pages static exports.
- The current app uses server components by default and bounded client components; the named rendering paradigm fits the brownfield framework.
- `next/font/google` self-hosts generated font assets and is compatible with static delivery; it does not require browser-time Google requests.
- React 19.2.8 is accepted by Next.js 15.5.23, R3F 9.7.0, and Drei 10.7.8 peer ranges in the installed lockfile.
- No Node-only runtime route, request API, middleware, or server action was found in the relevant app code.

---

## Final Re-review — 2026-08-29

**Verdict:** **CHANGES REQUIRED**

### Resolution status

| Prior area | Status | Re-review evidence |
| --- | --- | --- |
| Node/npm | Resolved in the spine | Node.js 24.20.0 is the current Node 24 LTS release and bundles npm 11.19.0. AD-9 and Build reproducibility now require a pinned Node/npm pair, `.node-version`, `packageManager`, `npm ci`, and the same build command across environments. These files are target-state seed and still need to be created during implementation. |
| Cloudflare Pages static export | Resolved | AD-8 now binds v1 to Cloudflare Pages static hosting; AD-9 correctly binds `output: "export"`, `npm run build`, the generated `out/` artifact, and byte-identical deployment. This matches current Cloudflare Pages guidance. |
| Workers claim | Partially resolved | AD-8 correctly defers Workers and requires a later architecture decision, compatibility check, and deployment toolchain. The Stack table still says “Cloudflare Pages or Workers,” contradicting that rule. |
| Installed dependency snapshot | Not resolved | The package versions still exactly match `package-lock.json` and have a valid peer graph, but the Stack table still does not label them as the brownfield lock snapshot or distinguish them from recommended current versions. |
| Asset gate | Not resolved | AD-6 and the seed still prescribe the correct target, but the spine still presents the production gate as operative without identifying it as a required migration. The current repository still has direct public PNG delivery, no `content/assets.ts`, no AVIF/WebP derivatives, and no enforcing command/test. |

### Remaining findings

#### 1. The Stack still claims Workers compatibility

- **Location:** Stack — `Cloudflare Pages or Workers | managed platform`
- **Trigger condition:** AD-8 now explicitly says generic Workers compatibility is not claimed by v1, while the Stack continues to name Workers as part of the selected platform.
- **Guard:** Change the Stack row to `Cloudflare Pages | managed static hosting`. Keep Workers only in AD-8's deferred/revisit language.
- **Potential consequence:** A builder reading the compact Stack can select Workers even though the governing deployment AD says that path has not been validated.

#### 2. The dependency table remains ambiguous between reality snapshot and architectural pin

- **Location:** Stack
- **Trigger condition:** Next.js 15.5.23, TypeScript 5.9.3, and Three.js 0.180.0 accurately reflect `package-lock.json`, but are not the current upstream releases. Nothing in the table identifies it as a verified brownfield snapshot or states whether exact versions are mandatory architecture.
- **Guard:** Add a one-line basis above the table: `Application packages are the package-lock.json snapshot verified 2026-08-29; upgrades remain code-owned and must preserve this compatibility set.` Alternatively, intentionally pin and justify each non-current version.
- **Potential consequence:** Implementers can either freeze aging seed values indefinitely or independently upgrade different portions of the coupled Next/React/Three graph.

#### 3. The asset gate is still not bounded as a migration prerequisite

- **Location:** AD-6; Asset manifest convention; Structural Seed
- **Trigger condition:** The rule says “Production gates fail” as though the mechanism exists, but the brownfield repository has no manifest, derivatives, or gate and still directly serves PNG sources. The revision did not add a migration boundary or an executable gate contract.
- **Guard:** State in AD-6 that this is a target-state invariant whose manifest, derivatives, and enforcing check must land in a named asset-pipeline slice before G4 can run. Require G4 to invoke that concrete check once selected.
- **Potential consequence:** The architecture can report G4 readiness while no executable control prevents source PNG delivery.

### Current-source confirmations

- [Node.js 24.20.0 release](https://nodejs.org/en/blog/release/v24.20.0) confirms LTS status and the bundled npm 11.19.0 update.
- [Cloudflare's static Next.js Pages guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) confirms `next build` with `out/` as the Pages artifact.
- [Cloudflare's Workers Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) confirms Workers is a separate toolchain/compatibility path.

---

## Final Critical/High Verification — 2026-08-29

**Verdict:** **PASS**

No critical or high currency or brownfield-fit findings remain.

- Node.js 24.20.0 LTS and its bundled npm 11.19.0 are a current, real pair; the spine requires the pair to be pinned and used consistently.
- Cloudflare Pages static export is the sole v1 deployment target and matches the existing `output: "export"` configuration. Workers is explicitly unclaimed and deferred behind a new architecture decision, compatibility check, and toolchain.
- Framework/library rows are explicitly labeled as the installed brownfield lockfile snapshot verified by `npm ls`, not as upstream-latest recommendations.
- AD-6 now makes the asset manifest and automated verifier a foundation-slice prerequisite before chapter promotion, records current PNG violations as failures, and blocks G4 until delivery derivatives and checks exist.
