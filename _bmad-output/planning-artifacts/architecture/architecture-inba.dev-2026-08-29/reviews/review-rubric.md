# Architecture Rubric Review

## Gate verdict

**FAIL — one critical source-contract contradiction blocks G0, and two high-severity gaps leave the runtime and operational envelope open to incompatible implementation choices.** The spine is otherwise strong: it names a coherent paradigm, covers every capability, gives most decisions enforceable `Binds`/`Prevents`/`Rule` contracts, keeps structural seed compact, and passes the deterministic lint with zero findings.

## Review basis

- Spine: `ARCHITECTURE-SPINE.md`
- Rubric: `bmad-architecture/references/reviewer-gate.md` good-spine checklist
- Primary contract inputs checked: `SPEC.md`, `stack.md`, `visual-acceptance.md`, `DESIGN.md`, and `EXPERIENCE.md`
- Brownfield checks: `package.json`, `package-lock.json`, `next.config.ts`, current `app/`, `components/`, `content/`, `public/`, and `tests/`
- Deterministic lint: **pass**, zero findings (run directly with the lint script because the `uv` cache was sandbox-inaccessible)

## Findings

### Critical — The spine expands the client-island boundary while its canonical source limits it to three islands

**Evidence:** The spine declares five bounded islands, including `PortraitRegistration` and `SectionDisclosure`, in the paradigm, AD-7, state convention, and structural seed (`ARCHITECTURE-SPINE.md:35`, `:87`, `:143`, `:169-174`). The canonical implementation companion says client islands are limited to exactly `WebGLSubstrate`, `PinnedSequenceController`, and `ActiveSectionObserver` (`stack.md:32-38`); EXPERIENCE repeats the same closed list (`EXPERIENCE.md:138-146`). Yet EXPERIENCE also requires an interactive portrait response and a stateful sub-320px disclosure with Escape/focus return (`EXPERIENCE.md:188-189`, `:231`, `:235`).

**Why this fails the rubric:** G0 explicitly requires the spec, UX handoff, and architecture invariant to agree. Two builders following the canonical package can validly choose incompatible implementations: reject the two new islands to honor the closed source list, or create them to honor the behavior and the spine. The spine silently chooses a resolution instead of surfacing and reconciling the source conflict.

**Disposition:** **Discuss / reconcile upstream before handoff.** Choose the intended ownership for portrait registration and compact navigation behavior, then amend `stack.md` and EXPERIENCE's Rendering and Enhancement Boundary (or revise the spine) so all canonical artifacts name the same island set and responsibilities. This is not safely autofixable in the spine alone because the contradiction exists in its governing inputs.

### High — Deferred operations contradict the required post-launch Core Web Vitals contract

**Evidence:** Deferred says all analytics, monitoring, and operations instrumentation are out of scope and that Cloudflare routing/response performance are the only operational checks (`ARCHITECTURE-SPINE.md:221`). EXPERIENCE requires field-data checks after launch and specifically requires recording real-user Core Web Vitals, with regressions beyond the stated thresholds treated as release defects (`EXPERIENCE.md:205`, `:222`). CAP-5 binds accessibility and performance, and the spine maps CAP-5 to AD-8/AD-9/AD-11, but none assigns ownership for collecting, retaining, reviewing, or acting on the required field data.

**Why this fails the rubric:** The operational dimension is mentioned but decided incompatibly with a governing requirement. Independent builders can omit RUM entirely, use incompatible providers, or collect data without any review/response contract. AD-11 only gates the pre-release static export and cannot enforce the post-launch requirement.

**Disposition:** **Discuss, then add an invariant or bounded open item.** Fix the minimum operational contract: approved RUM source, privacy posture, metric ownership, review cadence/trigger, and regression response. If post-launch field monitoring is genuinely excluded, amend EXPERIENCE so the canonical package no longer promises it.

### High — The build runtime is not pinned despite exact-artifact reproducibility being an invariant

**Evidence:** The application dependency versions in the spine match the installed lockfile, but Node.js is specified only as `20 or newer LTS` (`ARCHITECTURE-SPINE.md:147-158`). There is no root `engines` declaration, `.nvmrc`, `.node-version`, or Volta pin. AD-9 requires the generated export to be the production-equivalent verification/deployment unit and the exact candidate artifact to be promoted (`ARCHITECTURE-SPINE.md:95-99`).

**Why this fails the rubric:** “20 or newer LTS” currently permits multiple major runtimes with different native dependency resolution, tooling behavior, and generated output. Local, CI, and Cloudflare builds can therefore diverge while all claim conformance. This is precisely the kind of one-level-down choice the spine is meant to fix.

**Disposition:** **Autofix.** Pin one Node major/minor policy and package-manager version, require lockfile-preserving installation (for example `npm ci`), and bind the same runtime in local verification, CI, and Cloudflare build settings. Record the verified version in Stack.

## Checklist assessment

| Good-spine criterion | Result | Notes |
| --- | --- | --- |
| Fixes real divergence points and misses none | **Fail** | Strong coverage overall, but island ownership, post-launch performance operations, and build-runtime reproducibility remain divergent. |
| Every AD is enforceable and prevents its stated divergence | **Pass with concern** | AD-1 through AD-14 are generally testable or gateable. AD-8's “Pages or Workers” wording is superseded by AD-9's explicit Pages v1 choice, so implementers should treat AD-9 as controlling. |
| Nothing in Deferred can let units diverge | **Fail** | Monitoring is deferred despite a source requirement for field CWV and release-defect treatment. |
| Named technology is verified-current | **Pass with concern** | Exact framework/library versions match `package-lock.json`; Node is a broad range rather than a verified reproducible runtime. Cloudflare is appropriately treated as a managed platform, with AD-9 selecting Pages static export for v1. |
| Ratifies rather than contradicts brownfield reality | **Pass** | The existing App Router/React/TypeScript/Tailwind foundation and `output: "export"` are ratified. The structural seed intentionally represents the contract-approved rebuild, which the spec permits. Installed dependency versions match the lockfile. |
| Covers the driving spec's capabilities | **Pass** | CAP-1 through CAP-6 are all mapped to owning locations and ADs; content, visual identity, enhancement fallback, accessibility/performance, and evidence promotion are represented. |
| Does not weaken an inherited parent spine | **N/A** | No inherited parent spine is declared. |
| Every owned dimension is decided, deferred, or open | **Fail** | Deployment/provider and static artifact are decided, but the required post-launch operational loop is contradicted rather than coherently decided or opened. |

## Positive observations

- The named server-first island paradigm carries a clear ownership model, and AD-1 makes the no-hydration/no-WebGL narrative guarantee explicit.
- AD-2, AD-6, and AD-10 through AD-12 establish unusually clear ownership for content, assets, visual fixtures, evidence, and promotion authority.
- AD-4 separates pinning and WebGL eligibility so a WebGL failure does not unnecessarily remove safe CSS choreography.
- AD-9 resolves the otherwise broad Cloudflare target to a static Pages artifact for v1 and aligns with the existing `next.config.ts` export mode.
- The capability map is complete, the seed is lean relative to the rebuild, and Deferred does not leak shader or harness implementation detail into the spine.

## Required gate outcome

Resolve the client-island contradiction first; it blocks contract readiness. Then fix the runtime pin and reconcile the field-performance monitoring obligation. Re-run deterministic lint and this semantic gate after the canonical source set and spine agree.

---

## Final re-review — revised spine

This section supersedes the earlier verdict and findings for the revised `ARCHITECTURE-SPINE.md`.

### Gate verdict

**FAIL — no critical finding remains, but two high-severity internal contradictions still permit incompatible implementations.** The prior RUM and runtime-reproducibility findings are resolved. The prior island-boundary finding is mostly resolved at the source boundary but remains internally inconsistent in the spine.

### Prior-finding resolution

| Prior finding | Result | Evidence |
| --- | --- | --- |
| Client-island boundary contradicted canonical three-island source | **Partially resolved** | The paradigm and structural seed now match the source's three islands, and AD-7 assigns the two required behaviors to those islands (`ARCHITECTURE-SPINE.md:35`, `:87`, `:177-181`). However, the State convention still says there are five islands (`:150`), and portrait eligibility remains underspecified as described below. |
| Post-launch RUM requirement was deferred | **Resolved** | AD-15 names Cloudflare Web Analytics as the sole v1 RUM source, binds LCP/INP/CLS, assigns review ownership and a regression response; Deferred now excludes this performance monitoring (`:131-135`, `:228`). Cloudflare's current documentation confirms p75 Core Web Vitals and the stated cookie/local-storage/fingerprinting posture. |
| Node/runtime reproducibility was unpinned | **Resolved at architecture level** | AD-9 requires one pinned Node/npm pair, `npm ci`, an `out/` digest, and identical deployed bytes; the convention names `.node-version` and `packageManager`; Stack pins Node 24.20.0 LTS and npm 11.19.0 (`:95-99`, `:148`, `:164-165`). The versions match the official Node 24.20.0 release bundle. The implementation must still create the declared pin files during its build slice. |

### High — Island count and portrait eligibility remain internally inconsistent

**Evidence:** The paradigm and seed define three islands (`ARCHITECTURE-SPINE.md:35`, `:177-181`), while the State convention still says state is local to five islands (`:150`). AD-7 assigns ornamental portrait registration to `PinnedSequenceController` (`:87`), but AD-4 publishes only `pinningEligible` and `webglEligible` (`:65-69`). EXPERIENCE requires a brief portrait registration on touch/coarse pointers unless motion is reduced, precisely where pinning is normally ineligible.

**Why this remains high:** A builder can reasonably gate the whole `PinnedSequenceController` on `pinningEligible` and omit the required touch portrait behavior, while another can introduce an undocumented third eligibility path. The stale five-island convention also directly contradicts the closed boundary and can revive the original split.

**Disposition:** **Autofix.** Change the State convention to three islands. Then make portrait eligibility/teardown explicit: either add a distinct `portraitEligible` result to `EnhancementEligibility`, or state that `PinnedSequenceController` remains mounted and independently gates its portrait responsibility even when pinning is ineligible. Preserve the three-island source boundary.

### High — Stack still reopens Workers after AD-8 and AD-9 select Pages-only v1

**Evidence:** AD-8 says v1 targets Cloudflare Pages and explicitly disclaims generic Workers compatibility; AD-9 fixes a Pages static export (`ARCHITECTURE-SPINE.md:89-99`). The Stack nevertheless names `Cloudflare Pages or Workers` (`:166`).

**Why this is high:** Stack is a direct builder input. A deployment owner following it can choose Workers despite the explicit absence of a Workers compatibility decision and toolchain, recreating the local/production divergence AD-8 is intended to prevent.

**Disposition:** **Autofix.** Replace the Stack row with `Cloudflare Pages | managed platform` and keep Workers only in AD-8's later-decision clause or Deferred.

### Re-review checklist delta

- Deterministic lint still passes with zero findings.
- Capability coverage, brownfield ratification, dependency version fit, evidence promotion, asset ownership, and the post-release performance loop now pass the rubric.
- No new critical issue was found.
- The gate can pass after the two high-severity internal contradictions above are corrected and lint is rerun.

---

## Final verification verdict

**PASS — no critical or high good-spine failures remain.** This verdict supersedes all earlier gate verdicts in this review.

- The client-island boundary is consistently three islands across the paradigm, state convention, structural seed, and canonical source boundary.
- AD-4 now defines independent `portraitEligible` state, so required portrait behavior does not disappear when pinning is ineligible.
- The deployment target is consistently Cloudflare Pages static export; Workers remains a future explicit architecture decision.
- Post-release Core Web Vitals ownership and response remain fixed by AD-15.
- Node/npm, lockfile installation, build command, artifact digest, and byte-identical deployment form a reproducible release contract.
- Deterministic lint passes with zero findings.

**Remaining critical findings:** none.

**Remaining high findings:** none.
