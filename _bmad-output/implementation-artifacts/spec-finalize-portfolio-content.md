---
title: 'Finalize evidence-aware portfolio content'
type: 'feature'
created: '2026-08-22'
status: 'done'
review_loop_iteration: 0
baseline_commit: 'ef2890f918ae10ec3059026679bcec7fa30815b7'
context:
  - 'brain-dump/portfolio-content.md'
  - '_bmad-output/brainstorming/brainstorm-flagship-portfolio-content-narrative-2026-08-22/.memlog.md'
  - '_bmad-output/brainstorming/brainstorm-portfolio-proof-ledger-2026-08-22/.memlog.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The existing brain dump is a mixture of a dated résumé, unapproved metrics, duplicate project descriptions, and copy that no longer reflects Inbasekaran's role or desired narrative. The current website must not reuse it as-is.

**Approach:** Replace it with a concise, evidence-aware content source for a founder-facing portfolio. The source must present a high-agency AI/ML systems engineer through selected proof stories and establish where each material claim is publicly supported, confidential, or deliberately excluded.

## Boundaries & Constraints

**Always:** Lead with the thesis: “I turn meaningful business problems into reliable, production-ready software and AI systems: evaluated, integrated, and shipped.” Present Inbasekaran as Software Development Engineer II at RingCentral and a B.Tech ECE graduate of NITK Surathkal, 2024. Tell a narrative, not a chronology. Keep Smart Filters first, ACE io MCP server second, and VisionGuard third. Use careful high-level language for the two RingCentral cases: no numbers, screenshots, customer quotes, or claims that require internal approval. Keep public links adjacent to public proof. Use short paragraphs and proof cards, not a skills matrix or exhaustive role bullets.

**Ask First:** Adding an unapproved RingCentral metric, customer feedback, product visual, release note, or internal architecture detail. Changing the agreed flagship order. Publishing a new personal contact method or document. Claiming a different patent inventor, project ownership, or publication status.

**Never:** Reintroduce Aura. Reuse the old CV as a public source. Claim that Inbasekaran solely owns the patent or confidential product work. Present the temporary résumé as a narrative proof source. Use the expiring LinkedIn media CDN URL as a rendered evidence link. Add a conventional skills section, community section, or detailed job-description timeline.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| Approved public proof | VisionGuard, GSoC, IISc, SoftPosit, patent, career credential | Concise claim paired with its stable source or a documented source route | Do not expand beyond source-supported scope |
| Confidential production work | Smart Filters or ACE io MCP server | Problem, judgment, and ownership narrative with no unapproved outcome claim | Mark source as confidential and reserve future official blog support |
| Weak or stale evidence | Aura, old CV metrics, expiring LinkedIn media URL | Omit from public-facing copy | Retain only an internal note explaining why it was excluded |

</frozen-after-approval>

## Code Map

- `brain-dump/portfolio-content.md:1-166` -- disconnected human source material; rewrite this file as the canonical content and evidence source. The current document contains stale copy, Aura, old project names, and unsupported details.
- `_bmad-output/brainstorming/brainstorm-flagship-portfolio-content-narrative-2026-08-22/.memlog.md` -- approved positioning, flagship order, exclusions, and narrative thesis. Read-only evidence for the rewrite.
- `_bmad-output/brainstorming/brainstorm-portfolio-proof-ledger-2026-08-22/.memlog.md` -- approved source hierarchy and confidentiality policy. Read-only evidence for the rewrite.
- `content/portfolio.ts:1-89` -- current runtime structured copy. Read-only in this task; its data model is stale and will be replaced during the later UI redesign.
- `app/page.tsx:19-110`, `components/project-stories.tsx:1-30`, `components/builder-field.tsx:1-14` -- current rejected page hierarchy and consumers. Read-only in this task.
- `app/layout.tsx:5-18`, `tests/portfolio.test.mjs:14-111` -- stale live metadata and assertions. Do not change until the redesign consumes the approved content source.
- `tests/portfolio-content.test.mjs` -- content-contract coverage for the approved public-proof, confidential-case, and exclusion matrix. Add without altering tests for the current rejected UI.

## Tasks & Acceptance

**Execution:**

- [x] `brain-dump/portfolio-content.md` -- replace the résumé-style draft with the canonical narrative source: approved hero copy; one current-role line; three flagship case-study briefs; a compact public-proof trail for IISc/ICASSP, GSoC/VisionGuard, Linux Foundation/SoftPosit/CoNGA, Patent 576831, Goldman Sachs, and NITK; contact and temporary résumé links; and a clearly non-public evidence ledger with stable source routes and confidential-case rules. -- Gives the later redesign a single accurate content contract.
- [x] `brain-dump/portfolio-content.md` -- remove Aura, the standalone technical-skills section, community material, exhaustive job bullets, duplicate project descriptions, unsupported RingCentral metrics, and the old public patent/source wording. -- Enforces the approved anti-résumé and anti-slop editorial direction.
- [x] `brain-dump/portfolio-content.md` -- preserve only source-supported public claims: VisionGuard plus official GSoC page, IISc certificate and ICASSP URL, SoftPosit contributor history and Credly badge with CoNGA as supporting research, official Patent No. 576831 record naming Inbasekaran, LinkedIn for career/education, and the supplied temporary résumé URL. -- Makes claim verification explicit before UI work resumes.
- [x] `tests/portfolio-content.test.mjs` -- add a Node content-contract test that covers each I/O matrix row against the canonical source. -- Prevents later copy changes from reintroducing unsupported, confidential, or excluded material.

**Acceptance Criteria:**

- Given a reader opens the new source document, when they read its public-facing content from top to bottom, then they encounter a concise founder-facing narrative rather than a chronological résumé or skill inventory.
- Given the flagship work section, when it is read, then Smart Filters is first, ACE io MCP server is second, VisionGuard is third, and Aura is absent.
- Given a material public claim, when a later implementer follows its evidence note, then they find a public source route or an explicit confidential classification; no RingCentral quantitative outcome appears.
- Given the later redesign starts, when it needs final copy or proof links, then it can consume this single source document without depending on the old CV or the current runtime copy.

## Design Notes

The public document has two intentional layers. The first is publishable portfolio copy written in brief, human paragraphs. The second is an internal “evidence ledger, not site copy” that prevents a future UI pass from separating assertions from proof. “High agency” should be inferred through the Smart Filters loop: propose, build, evaluate, ship, observe, and revise.

## Verification

**Manual checks:**

- Read `brain-dump/portfolio-content.md` and confirm the thesis, SDE II role, NITK 2024 credential, final flagship order, and patent wording are exact.
- Search the file for `Aura`, `Technical Skills`, and the unsupported RingCentral numeric claims; expect no public-facing matches.
- Inspect every public URL for the intended evidence role and confirm the expiring LinkedIn media URL is absent.

**Commands:**

- `npm test` -- expected: the existing UI tests and the new canonical-content contract tests pass.

## Suggested Review Order

**Narrative and proof boundaries**

- Establishes the founder-facing thesis and the public-versus-internal publishing boundary.
  [`portfolio-content.md:5`](../../brain-dump/portfolio-content.md#L5)

- Carries the approved flagship sequence with concise, confidentiality-aware case narratives.
  [`portfolio-content.md:39`](../../brain-dump/portfolio-content.md#L39)

- Pairs public research, open-source, patent, career, and education claims with evidence routes.
  [`portfolio-content.md:69`](../../brain-dump/portfolio-content.md#L69)

- Records claim-specific publication rules and deliberate exclusions for the later UI pass.
  [`portfolio-content.md:107`](../../brain-dump/portfolio-content.md#L107)

**Release safeguards**

- Preserves the UI boundary and a future freshness review as explicitly deferred launch work.
  [`deferred-work.md:7`](deferred-work.md#L7)

**Content contract tests**

- Verifies source boundaries, proof routes, confidentiality copy, and anti-résumé exclusions.
  [`portfolio-content.test.mjs:9`](../../tests/portfolio-content.test.mjs#L9)
