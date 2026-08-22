- source_spec: `_bmad-output/implementation-artifacts/spec-build-personal-portfolio.md`
  summary: Create an optimized wide Open Graph social card instead of reusing the portrait PNG directly.
  evidence: The current 3:4 portrait is 2.9 MB and may crop poorly in wide social previews, but a dedicated public-safe card needs separate art direction.
- source_spec: `_bmad-output/implementation-artifacts/spec-build-personal-portfolio.md`
  summary: Add a CI workflow that runs the portfolio's production test, lint, and build commands on future changes.
  evidence: The project has reliable local verification but no checked-in automation to enforce it before deployment.
- source_spec: `_bmad-output/implementation-artifacts/spec-finalize-portfolio-content.md`
  summary: During the UI redesign, render only the source document's Public-facing copy and keep the internal evidence ledger out of the published site.
  evidence: The canonical content file intentionally contains internal claim-verification guidance alongside public copy; no runtime consumer exists in this content-only task.
- source_spec: `_bmad-output/implementation-artifacts/spec-finalize-portfolio-content.md`
  summary: Establish a periodic owner-reviewed link and freshness check for current role, confidential-case clearance, and external proof routes before launch and after material career changes.
  evidence: The approved copy deliberately contains current-state statements and third-party proof links whose status can change outside the repository.
