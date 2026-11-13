# Source media

These approved working files are preserved byte-for-byte outside `public/`. They are inputs to `npm run assets:generate`, never delivery URLs. `content/assets.ts` owns their integrity hashes and the responsive AVIF/WebP delivery contract.

The homepage sharing card uses `inba-share.svg`, with lettering outlined from [Instrument Sans Bold](https://github.com/google/fonts/tree/main/ofl/instrumentsans). Rasterize it with `npm run assets:generate:search`.
