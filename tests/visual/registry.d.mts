export const fixtureRevision: string;
export const viewports: ReadonlyArray<{ name: string; width: number; height: number }>;
export const acceptanceRows: ReadonlyArray<{
  id: string;
  gate: string;
  anchor: string;
  checkpoint: string;
  crop: string;
  masks: ReadonlyArray<{ x: number; y: number; width: number; height: number; unit: "px" | "ratio" }>;
  tolerance: number;
}>;
