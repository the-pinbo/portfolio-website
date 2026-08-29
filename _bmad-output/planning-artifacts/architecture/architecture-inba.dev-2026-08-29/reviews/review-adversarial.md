# Adversarial review — inba.dev architecture spine

Verdict: pass with one high-risk divergence closed by AD-9, two medium refinements worth keeping, and a low naming-drift tail.

## Method

I tried to construct pairs of implementation units one level down that each obey every AD to the letter yet still build incompatibly. For each candidate I checked whether the spine already prevents the divergence, and whether the remaining ambiguity is a real conflict or just unspecified implementation detail.

## Findings

### High — Cloudflare output mode was ambiguous

Two builders could both obey AD-8 (“Cloudflare Pages or Workers compatible”) while one emitted a Cloudflare Pages static export and the other emitted a Cloudflare Workers edge runtime with dynamic routing. For a fully static single page these produce different output contracts and deployment gates. AD-9 now resolves this by pinning v1 to `output: "export"` on Cloudflare Pages and deferring Workers until an explicit edge function is required. This closes the high-risk divergence.

### Medium — Content module export shape was only partially pinned

Two builders could both obey AD-2 by exporting the same public content, but shape `portfolio.ts` and `links.ts` with incompatible keys or types (for example `projects` as an array in one unit and a record in another). The Consistency Conventions row now names `identity`, `links`, `projects`, and `trackRecord` as stable exports, which is materially better, but the exact TypeScript shapes are still unspecified. Recommend a companion typed content contract (or reference to a canonical type file) so the shape is machine-checked rather than prose-checked.

### Low — Derivative naming and token names can drift

Two builders can both obey AD-3/AD-6 while inventing different `--color-*` names or different derivative suffixes. The added `{base}-{width}.avif|webp` and `--color-*`, `--font-*`, `--space-*`, `--radius-*` conventions reduce this, but the full token inventory is left to DESIGN.md. This is acceptable at feature altitude as long as DESIGN.md is treated as the binding inventory; if it drifts from the spine, the inconsistency can reappear.

## Candidate pairs that did not produce a conflict

- **Two owners of `#contact`:** AD-5 anchors the canonical ID and AD-2 anchors the link set, so one builder cannot silently add a second resume source.
- **Client island competing for narrative copy:** AD-1 forbids islands from owning the only copy of public claims, so a WebGL-only rendering of the thesis is already a violation.
- **Accessibility ornamentation:** AD-7 forbids decorative layers adding hidden meaning or intercepting keyboard interaction, so the common decorative-layer hole is closed.

## Recommendation

Keep AD-9. The only remaining medium item is best resolved by adding the canonical content module types (or a type file path) to the spine's companions or to AD-2 itself.
