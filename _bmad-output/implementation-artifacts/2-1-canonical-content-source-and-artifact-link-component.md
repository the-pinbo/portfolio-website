---
title: 'Canonical content source and artifact link component'
type: 'feature'
created: '2026-08-29'
status: 'done'
baseline_commit: '7c1ab39'
review_loop_iteration: 0
context:
  - "{project-root}/_bmad-output/specs/spec-inba-dev/SPEC.md"
  - "{project-root}/_bmad-output/specs/spec-inba-dev/links.md"
  - "{project-root}/brain-dump/portfolio-content.md"
  - "{project-root}/_bmad-output/planning-artifacts/architecture/architecture-inba.dev-2026-08-29/ARCHITECTURE-SPINE.md"
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The runtime content module still contains the rejected Aura, Ace IO MCP, Engineering Loop, and credibility lists. Public copy and artifact URLs are scattered and not aligned with the finalized content source.

**Approach:** Replace the runtime content module with one typed canonical source for identity, hero, projects, Track Record, and contact. Add a reusable `LinkedArtifact` component that renders literal labels with safe external-link behavior and contextual accessible names.

## Boundaries & Constraints

**Always:** Use the canonical public copy from `brain-dump/portfolio-content.md`. Smart Filters first, ACE second, VisionGuard third. Artifact labels remain literal nouns: Code, GSoC, Write-up, Paper, Poster, Certificate, Patent, LinkedIn, GitHub, Email, Resume.

**Ask First:** Publishing an unapproved metric, quote, or internal RingCentral detail; adding a new artifact destination.

**Never:** Include Aura, Engineering Loop, What I Owned, Flagship Systems, skill clouds, credibility cards, or defensive proof labels. Do not use em dashes in public copy.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| External artifact | HTTP URL | Opens safely in a new tab with `noopener noreferrer` and announced suffix | N/A |
| Internal poster | Relative PDF URL | Opens in the same tab | N/A |
| Missing context | No `context` prop | Link still has a literal visible label | N/A |

</frozen-after-approval>

## Code Map

- `content/portfolio.ts` -- replace the stale runtime content with the canonical typed source.
- `content/links.ts` -- extract public destinations into one link map.
- `components/linked-artifact.tsx` -- new reusable literal artifact link.
- `tests/portfolio.test.mjs` -- update runtime content assertions.

## Tasks & Acceptance

**Execution:**
- [x] `content/links.ts` -- create one typed link map from the canonical link contract -- prevents scattered URLs.
- [x] `content/portfolio.ts` -- export `identity`, `hero`, `projects`, `trackRecord`, and `contact` from the finalized content -- makes the content module canonical.
- [x] `components/linked-artifact.tsx` -- render a literal label with safe external-link attributes and contextual accessible name -- standardizes artifact links.
- [x] `tests/portfolio.test.mjs` -- update runtime content assertions to the finalized source -- prevents stale content tests.

**Acceptance Criteria:**
- Given the content module, when projects are read, then Smart Filters is first, ACE second, VisionGuard third, and Aura and Ace IO MCP are absent.
- Given the link map, when destinations are read, then Email, LinkedIn, GitHub, Resume, Code, GSoC, Write-up, Paper, Poster, Certificate, Patent, and Determinant Studios are present with the canonical URLs.
- Given a `LinkedArtifact`, when it renders an external URL, then it uses `target="_blank"` and `rel="noopener noreferrer"` with a visually hidden new-tab suffix.
- Given the runtime content, when the public copy is inspected, then forbidden credibility labels and em dashes are absent.

## Spec Change Log

## Design Notes

Keep the content types simple and read-only. Components import from `content/portfolio.ts` or `content/links.ts`; they never redefine public copy or URLs.

## Verification

**Commands:**
- `npm run build` -- expected: static export succeeds.
- `npm run lint` -- expected: zero errors.
- `npm test` -- expected: tests pass.

**Manual checks:**
- Compare `content/portfolio.ts` with `brain-dump/portfolio-content.md`.
- Inspect `components/linked-artifact.tsx` for safe external-link attributes.

## Suggested Review Order

**Canonical link map**

- Centralizes every public artifact destination.
  [`links.ts:1`](../../content/links.ts#L1)

**Canonical content model**

- Replaces stale runtime projects and Track Record with the finalized source.
  [`portfolio.ts:3`](../../content/portfolio.ts#L3)

**Artifact link component**

- Standardizes literal labels, external-link safety, and accessible names.
  [`linked-artifact.tsx:7`](../../components/linked-artifact.tsx#L7)

**Test alignment**

- Verifies the new runtime content contract.
  [`portfolio.test.mjs:28`](../../tests/portfolio.test.mjs#L28)
