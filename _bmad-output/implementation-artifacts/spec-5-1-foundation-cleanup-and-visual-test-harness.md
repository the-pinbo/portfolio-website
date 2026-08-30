---
title: 'Story 5.1: Foundation Cleanup and Visual Test Harness'
type: 'refactor'
created: '2026-08-29'
status: 'done'
review_loop_iteration: 0
baseline_commit: '91ae124b6340b39349b50aa07ca8f15d5c98d39b'
context:
  - '{project-root}/_bmad-output/implementation-artifacts/epic-5-context.md'
  - '{project-root}/_bmad-output/specs/spec-inba-dev/visual-acceptance.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The brownfield site retains canonical material but violates ownership, serves source assets, contains rejected legacy code and false-green source tests, and lacks rendered evidence for later visual acceptance.

**Approach:** Clean and verify the static foundation, then add a deterministic browser harness against `out/` that isolates unreviewed candidates from immutable baselines and reports honest G0 failures.

## Boundaries & Constraints

**Always:** Preserve exact public narrative, destinations, approved sources, order, stack, static export, stable anchors `#top`, `#main-content`, `#contact`, and all canonical anchors. Keep required content and geometry server-rendered. Make `content/portfolio.ts`, `content/links.ts`, `content/assets.ts`, and root tokens sole owners. Bind evidence to the `out/` digest and fixture revision `a1d613522b568b5af79ca424ff64961c9927371f`.

**Ask First:** Changing canonical copy/URLs or governing contracts; approving exceptions; promoting baselines; deployment; deleting approved source material.

**Never:** Implement Opening motion, Smart Filters pinning, WebGL choreography/replacement, later chapter parity, deployment/release gates, or self-approval. Never overwrite baselines, mask content/geometry, equate capture with visual pass, or waive failures.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Capture | Built `out/`, viewport, VA row | Candidate path plus complete digest/browser/viewport/font/fixture/crop/mask/tolerance metadata | Reject baseline destinations or missing fields |
| Compare | Candidate and promoted entry | Verify baseline hash; use row rules | Missing baseline is `not-reviewed`, never pass |
| Structural run | Static export, five widths | Check content, order, links, anchors, duplicates, legacy, overflow, fonts, determinism | Record the exact blocking assertion |
| Asset/runtime failure | Bad media contract or wrong Node/npm | Fail verification without altering sources/provenance | Record exact G0 blocker |

</frozen-after-approval>

## Code Map

- `package.json`, `package-lock.json`, `.node-version` -- runtime pins and Story 5.1 commands.
- `content/portfolio.ts`, `content/links.ts`, new `content/assets.ts` -- sole typed narrative/link/URL/media owners.
- `app/page.tsx`, `app/layout.tsx`, `components/*.tsx` -- server consumers; remove competing literals without redesigning chapters.
- `app/globals.css` -- canonical tokens/current layout; remove AD-14 legacy aliases/selectors.
- `components/hero-{canvas,scene}.tsx`, `tests/portfolio.test.mjs` -- dead enhancement and source-only assertions to remove/replace; add no WebGL.
- `public/assets/`, `brain-dump/ICASSP-DUN-Poster.pdf`, mock asset manifest -- sources, derivatives, integrity, and static PDF.
- `tests/visual/` -- static server, VA registry, browser assertions, digest, immutable baseline manifest, candidate store, evidence schema, capture/compare, masks/tolerances.
- Historical `1-1-*`, `2-1-*`, and `sprint-status.yaml` -- preserve records and replacement traceability.
- SPEC, DESIGN, EXPERIENCE, architecture, Epic 5, sprint status, audit -- read-only authority; unresolved Pages/Workers and 390px wording conflicts remain G0 blockers unless independently reconciled.

## Tasks & Acceptance

**Execution:**
- [x] `content/*.ts`, `app/page.tsx`, `components/*.tsx` -- centralize existing narrative, links, labels, and media metadata without content/layout invention.
- [x] `public/assets/`, `content/assets.ts`, `scripts/verify-assets.mjs` -- create delivery derivatives/fallbacks, publish the approved PDF, and fail on asset-contract violations.
- [x] `app/globals.css`, `components/hero-*.tsx`, `tests/` -- remove dead legacy surfaces and scan source plus `out/index.html` for prohibited copy, duplicates, stale routes, and competing definitions.
- [x] `.node-version`, `package*.json`, `scripts/digest-out.mjs` -- pin Node 24.20.0/npm 11.19.0, preserve static export, and hash sorted `out/` paths plus bytes.
- [x] `tests/visual/`, `playwright.config.ts` -- add deterministic Chromium smoke/capture/compare for VA-01–VA-16 at widths 1440, 1024, 768, 390, 320 with baseline validation, candidate isolation, metadata, and self-promotion guards.
- [x] `tests/visual/candidates/`, historical story files, `sprint-status.yaml` -- generate only unreviewed G0 candidates, preserve replacement history, and enumerate unresolved blockers.

**Acceptance Criteria:**
- Given the pinned clean install, when verification runs, then zero-warning lint, type/build, canonical content/link, legacy, and asset checks pass and the static export receives a reproducible digest.
- Given that export, when browser smoke runs at all five widths, then structural, anchor, overflow, font-ready, deterministic-capture, comparison-failure, evidence-schema, and isolation checks exercise the same digest.
- Given no independent approval, when evidence is generated, then every record is candidate/unreviewed or an honest failure, promoted files are unchanged, and G0 is not self-approved.
- Given history and governing artifacts, when reviewed, then Story 5.1 is the sole G0 owner and every disagreement is a blocker, not concealed.

## Spec Change Log

- 2026-08-29: Implemented the static foundation cleanup, pinned runtime verification, typed media delivery contract, deterministic export digest, and isolated visual candidate harness. Historical Stories 1.1 and 2.1 now explicitly identify Story 5.1 as their replacement.
- 2026-08-30: Closed the Step 3 audit findings: normalized dependency declarations, completed the AD-6 manifest and width-suffixed delivery sets while preserving source bytes outside public delivery, restored the exact Poster route, and made screenshot masks and numeric tolerance executable comparison rules.
- 2026-08-30: Closed the consolidated Step 4 findings: capture now rejects stale exports and binds evidence to full HEAD plus a deterministic dirty-worktree fingerprint; committed-schema validation and baseline path confinement are strict; VA-16 exercises failed responsive derivatives against a server-owned quiet fallback; recursive ownership/legacy/asset verification, accessible artifact naming, malformed-request handling, and JavaScript-disabled structure checks are executable; the pinned aggregate generates and validates the isolated 80-record matrix.

## Design Notes

Use Playwright Chromium against a dependency-free static server for `out/`. Key candidates by digest and run ID outside the baseline tree. Promotion may have a guarded boundary, but this story does not invoke it or create approved images.

The promoted baseline manifest remains empty and unchanged. The deterministic `story-5-1-verify` run generates 80 ignored candidate images and 80 evidence records for VA-01 through VA-16 across all five required widths under reproducible export digest `51663565cc9917a7e0a603e51faffe3432fc38a51bd3b2116d87c4656f949772`; every record is `candidate/unreviewed` with a comparison result of `not-reviewed`, no reviewer, and no review date. The baseline manifest SHA-256 remains `554dd840e05b2f8adacea5c50cc54c1a9e5fe67ea6c01f96d6ecd97771ae94f6`.

Unresolved G0 blockers remain explicit: the governing Pages-versus-Workers deployment disagreement and the 390px wording disagreement require independent reconciliation, and no baseline may be promoted until a non-implementing reviewer resolves them. G0 has not been self-approved.

## Verification

**Commands:**
- `npm ci`
- `npm run lint -- --max-warnings=0`
- `npm run typecheck && npm run build`
- `npm run verify:content && npm run verify:legacy && npm run verify:assets`
- `npm run visual:smoke`
- `npm run visual:capture:verify && npm run verify:evidence-matrix`
- `npm run verify:story-5-1`

The full Story 5.1 command passed after a clean install under the pinned Node 24.20.0/npm 11.19.0 pair. It produced a zero-warning lint, successful typecheck/static build, passing content/legacy/AD-6 asset checks, the digest above, eleven harness and failure-contract tests, six Chromium smoke checks including JavaScript-disabled structure, five viewport capture jobs, and an exact 80-record/80-screenshot matrix validation. Candidate capture exercised VA-16 derivative failures at 1440, 1024, 768, 390, and 320 pixels without changing or promoting the baseline manifest.

## Suggested Review Order

**Verification contract**

- Start with the single command that defines the complete Story 5.1 gate.
  [`package.json:28`](../../package.json#L28)

- Review how every VA row, checkpoint, viewport, mask, and tolerance is registered.
  [`registry.mjs:30`](../../tests/visual/registry.mjs#L30)

- Inspect candidate isolation, VA-16 failure setup, comparison, and evidence writes.
  [`capture.spec.ts:26`](../../tests/visual/capture.spec.ts#L26)

- Confirm strict schema validation and baseline-path confinement precede comparison.
  [`evidence.mjs:12`](../../tests/visual/evidence.mjs#L12)

**Canonical foundation**

- Review the typed AD-6 owner for semantics, responsive delivery, sources, and fallbacks.
  [`assets.ts:26`](../../content/assets.ts#L26)

- See how responsive pictures preserve server-owned semantics and quiet fallback geometry.
  [`delivery-image.tsx:9`](../../components/delivery-image.tsx#L9)

- Confirm public narrative remains centralized before components consume it.
  [`portfolio.ts:3`](../../content/portfolio.ts#L3)

- Verify the server page binds canonical content without introducing later visual parity.
  [`page.tsx:15`](../../app/page.tsx#L15)

**Integrity and provenance**

- Follow worktree fingerprinting that prevents dirty code from masquerading as HEAD.
  [`worktree-identity.mjs:18`](../../scripts/worktree-identity.mjs#L18)

- Check stale-export rejection before candidates bind to an `out/` digest.
  [`out-digest.mjs:27`](../../scripts/out-digest.mjs#L27)

- Review canonical copy, all destinations, anchors, and chapter-order verification.
  [`verify-content.mjs:48`](../../scripts/verify-content.mjs#L48)

- Inspect recursive source integrity and production-delivery enforcement.
  [`verify-assets.mjs:14`](../../scripts/verify-assets.mjs#L14)

- Confirm rejected selectors, classes, anchors, code, and copy cannot return.
  [`verify-legacy.mjs:22`](../../scripts/verify-legacy.mjs#L22)

**Browser and failure coverage**

- Verify the no-JavaScript story remains complete and correctly ordered.
  [`no-js.spec.ts:5`](../../tests/visual/no-js.spec.ts#L5)

- Inspect mask, tolerance, stale-digest, schema, and provenance contract tests.
  [`harness.test.mjs:13`](../../tests/visual/harness.test.mjs#L13)

- Confirm wrong-runtime and missing-derivative failures produce blocking diagnostics.
  [`failure-contracts.test.mjs:10`](../../tests/failure-contracts.test.mjs#L10)

- End with deterministic browser configuration and static-export serving boundaries.
  [`playwright.config.ts:3`](../../playwright.config.ts#L3)
