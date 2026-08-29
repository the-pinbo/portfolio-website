# Asset contract

This companion fixes the delivery asset set, semantic role, and fallback behavior. Exact crops, source integrity, and accessible treatment for chapter imagery are in `mockups/assets/manifest.md`.

## Canonical delivery assets

| Asset | Role | Required treatment |
|---|---|---|
| `inbase-editorial-portrait.png` | Informative portrait source for the triptych | Scale through the canonical 650-square SVG geometry and mask contract in DESIGN.md; produce an optimized static triptych poster as the first fallback |
| `riso-paper-substrate-v1.png`, `riso-paper-grain-map.png`, `riso-navy-ink-mask.png`, `riso-coral-ink-mask.png` | Decorative WebGL substrate source layers | Generate responsive AVIF/WebP derivatives; keep the grain map only where it remains visually useful |
| `visionguard-riso-editorial-v2.png` | Informative VisionGuard editorial image | Show complete and uncropped inside the navy specimen plate at 12 to 16px inset; copy and links precede it on mobile |
| `fractal-double.png`, `fractal-float.png`, `fractal-posit32.png` | Scientific artifact crops for SoftPosit | Preserve source pixels; apply Riso treatment only to surrounding rules, paper edge, and registration |
| `icassp-poster.png` | Research artifact crop and full-poster source | Show the authenticated upper section in the 6:5 coral tile; keep the complete PDF linkable through the literal Poster label |
| Inline patent voice-ledger illustration | Informative editorial illustration | Use generic ITEM, QUANTITY, UPDATE labels and one resolved ledger row; no arrows, microphone, silhouette, fake UI, or official-document imitation |

## Delivery and fallback rules

- Full-resolution working PNGs are source material, not delivery assets. Produce responsive AVIF/WebP derivatives with explicit dimensions.
- The HTML thesis and paper color paint before portrait, shader texture, or Three.js requests.
- The portrait reserves a 1:1 box before image decode. Fallback order: optimized static triptych poster, then quiet paper-light navy/coral print plates with the single portrait alternative. Identity copy never disappears and no broken-image icon shows.
- Chapter visuals reserve intrinsic boxes. A missing visual preserves copy and artifact links and shows a quiet paper-light field.
- Scientific crops are never recolored, regenerated, or labeled with invented metrics.
- Generated illustrations never inherit metrics, quotes, UI, or claims from real artifacts.
