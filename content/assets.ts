export type AssetRole = "artifact" | "decorative" | "informative";
export type LinkKey = "icasspPoster" | "softpositCode" | "visionguardCode";

export type DeliveryDerivative = {
  avif: string;
  height: number;
  webp: string;
  width: number;
};

export type DeliveryAsset = {
  alt: string;
  derivatives: ReadonlyArray<DeliveryDerivative>;
  fallback: { kind: "quiet"; src: string };
  intrinsic: { height: number; ratio: number; width: number };
  loading: "eager" | "lazy";
  priority: "auto" | "high";
  role: AssetRole;
  sizes: string;
  source: { path: string; sha256: string };
  sourceLinkKey: LinkKey | null;
};

const quietFallback = { kind: "quiet", src: "/assets/quiet-media-fallback.svg" } as const;

export const assets = {
  portrait: {
    role: "informative",
    alt: "Illustrated portrait of Inbasekaran Perumal",
    intrinsic: { width: 1086, height: 1448, ratio: 1086 / 1448 },
    sizes: "(max-width: 900px) calc(100vw - 40px), (max-width: 1280px) 50vw, 650px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 320, height: 427, avif: "/assets/inbase-editorial-portrait-320.avif", webp: "/assets/inbase-editorial-portrait-320.webp" },
      { width: 650, height: 867, avif: "/assets/inbase-editorial-portrait-650.avif", webp: "/assets/inbase-editorial-portrait-650.webp" },
      { width: 1086, height: 1448, avif: "/assets/inbase-editorial-portrait-1086.avif", webp: "/assets/inbase-editorial-portrait-1086.webp" },
    ],
    source: { path: "assets/source/inbase-editorial-portrait.png", sha256: "85ca8de243a3cd42357d519e4da3852e3267b88c0e4d85a9e387a7f56e01fab0" },
    sourceLinkKey: null,
    fallback: quietFallback,
  },
  visionguard: {
    role: "informative",
    alt: "Riso-style editorial composite of VisionGuard's desktop interface and gaze-calibration geometry",
    intrinsic: { width: 1586, height: 992, ratio: 1586 / 992 },
    sizes: "(max-width: 900px) calc(100vw - 40px), (max-width: 1280px) 50vw, 600px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 460, height: 288, avif: "/assets/visionguard-riso-editorial-v2-460.avif", webp: "/assets/visionguard-riso-editorial-v2-460.webp" },
      { width: 800, height: 500, avif: "/assets/visionguard-riso-editorial-v2-800.avif", webp: "/assets/visionguard-riso-editorial-v2-800.webp" },
      { width: 1200, height: 751, avif: "/assets/visionguard-riso-editorial-v2-1200.avif", webp: "/assets/visionguard-riso-editorial-v2-1200.webp" },
    ],
    source: { path: "assets/source/visionguard-riso-editorial-v2.png", sha256: "e39ec5c39df43e8acaa10be6e67b561b1f91f0481211d3a25b3bf60d26d7fb14" },
    sourceLinkKey: "visionguardCode",
    fallback: quietFallback,
  },
  researchPoster: {
    role: "artifact",
    alt: "Upper section of the ICASSP 2025 poster showing the paper title and sparse-recovery research figure",
    intrinsic: { width: 1350, height: 1800, ratio: 1350 / 1800 },
    sizes: "(max-width: 900px) calc(100vw - 40px), (max-width: 1280px) 50vw, 520px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 320, height: 427, avif: "/assets/icassp-poster-320.avif", webp: "/assets/icassp-poster-320.webp" },
      { width: 520, height: 693, avif: "/assets/icassp-poster-520.avif", webp: "/assets/icassp-poster-520.webp" },
      { width: 1040, height: 1387, avif: "/assets/icassp-poster-1040.avif", webp: "/assets/icassp-poster-1040.webp" },
    ],
    source: { path: "assets/source/icassp-poster.png", sha256: "bd06051a587c5fdb2e367a52452ee33fa50afd5026c218a8c6b59cb5e1151d9a" },
    sourceLinkKey: "icasspPoster",
    fallback: quietFallback,
  },
  fractalDouble: {
    role: "artifact",
    alt: "Double-precision fractal reference",
    intrinsic: { width: 790, height: 593, ratio: 790 / 593 },
    sizes: "(max-width: 720px) calc(100vw - 56px), 200px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 240, height: 180, avif: "/assets/fractal-double-240.avif", webp: "/assets/fractal-double-240.webp" },
      { width: 480, height: 360, avif: "/assets/fractal-double-480.avif", webp: "/assets/fractal-double-480.webp" },
      { width: 790, height: 593, avif: "/assets/fractal-double-790.avif", webp: "/assets/fractal-double-790.webp" },
    ],
    source: { path: "assets/source/fractal-double.png", sha256: "b64f4589c7d5332b062db4994c65e25dbb31da1feba0e1c089d29f11849e439b" },
    sourceLinkKey: "softpositCode",
    fallback: quietFallback,
  },
  fractalFloat: {
    role: "artifact",
    alt: "Conventional float fractal result",
    intrinsic: { width: 790, height: 593, ratio: 790 / 593 },
    sizes: "(max-width: 720px) calc(100vw - 56px), 200px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 240, height: 180, avif: "/assets/fractal-float-240.avif", webp: "/assets/fractal-float-240.webp" },
      { width: 480, height: 360, avif: "/assets/fractal-float-480.avif", webp: "/assets/fractal-float-480.webp" },
      { width: 790, height: 593, avif: "/assets/fractal-float-790.avif", webp: "/assets/fractal-float-790.webp" },
    ],
    source: { path: "assets/source/fractal-float.png", sha256: "3da40a68cc747326e31821d6225350e1093556beff19202a2ce7a3574c458c2a" },
    sourceLinkKey: "softpositCode",
    fallback: quietFallback,
  },
  fractalPosit32: {
    role: "artifact",
    alt: "Posit32 fractal result",
    intrinsic: { width: 790, height: 593, ratio: 790 / 593 },
    sizes: "(max-width: 720px) calc(100vw - 56px), 200px",
    loading: "lazy",
    priority: "auto",
    derivatives: [
      { width: 240, height: 180, avif: "/assets/fractal-posit32-240.avif", webp: "/assets/fractal-posit32-240.webp" },
      { width: 480, height: 360, avif: "/assets/fractal-posit32-480.avif", webp: "/assets/fractal-posit32-480.webp" },
      { width: 790, height: 593, avif: "/assets/fractal-posit32-790.avif", webp: "/assets/fractal-posit32-790.webp" },
    ],
    source: { path: "assets/source/fractal-posit32.png", sha256: "d61ba66ba4b8f5d401817e62bcaf717fd0e78d6df7ec62582b033436f4b4dc08" },
    sourceLinkKey: "softpositCode",
    fallback: quietFallback,
  },
} as const satisfies Record<string, DeliveryAsset>;
