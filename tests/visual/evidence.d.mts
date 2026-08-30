export function assertCandidateDestination(path: string, projectRoot: string): void;
export function hashFile(path: string): string;
export function validateEvidence(record: Record<string, unknown>): Record<string, unknown>;
export function compareCandidate(options: {
  baselineEntry?: { path: string; sha256: string };
  baselineRoot: string;
  candidatePath: string;
  masks?: ReadonlyArray<{ x: number; y: number; width: number; height: number; unit: "px" | "ratio" }>;
  tolerance?: number;
}): Promise<{ result: string; reason: string }>;
