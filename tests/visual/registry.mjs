export const fixtureRevision = "a1d613522b568b5af79ca424ff64961c9927371f";

export const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "intermediate", width: 1024, height: 900 },
  { name: "tablet", width: 768, height: 900 },
  { name: "mobile", width: 390, height: 844 },
  { name: "narrow-mobile", width: 320, height: 720 },
];

const rows = [
  ["VA-01", "G1", "#top", "settled", "viewport", 0.005],
  ["VA-02", "G1", "#identity-frame", "settled", "chapter", 0.005],
  ["VA-03", "G1", "#smart-filters", "settled", "chapter", 0.01],
  ["VA-04", "G2", "#ace", "settled", "chapter", 0.01],
  ["VA-05", "G2", "#visionguard", "settled", "chapter", 0.01],
  ["VA-06", "G2", "#research", "settled", "chapter", 0.01],
  ["VA-07", "G2", "#open-source", "settled", "chapter", 0.01],
  ["VA-08", "G2", "#patent", "settled", "chapter", 0.01],
  ["VA-09", "G2", "#track-record", "settled", "chapter", 0.005],
  ["VA-10", "G2", "#contact", "settled", "chapter", 0.005],
  ["VA-11", "G3", "#top", "motion-not-implemented", "viewport", 0.02],
  ["VA-12", "G3", "#smart-filters", "motion-not-implemented", "chapter", 0.02],
  ["VA-13", "G3", "#top", "pin-not-implemented", "viewport", 0.02],
  ["VA-14", "G3", "#top", "webgl-not-implemented", "viewport", 0.02],
  ["VA-15", "G3", "#main-content", "reduced-motion", "full-page", 0.01],
  ["VA-16", "G3", "#identity-frame", "delivery-fallback", "chapter", 0.01],
];

export const acceptanceRows = rows.map(([id, gate, anchor, checkpoint, crop, tolerance]) => ({
  id,
  gate,
  anchor,
  checkpoint,
  crop,
  masks: [],
  tolerance,
}));
