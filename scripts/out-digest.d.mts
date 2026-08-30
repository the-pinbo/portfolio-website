export type OutDigest = { algorithm: "sha256"; digest: string; fileCount: number };
export function computeOutDigest(outDirectory: string): OutDigest;
export function verifyRecordedOutDigest(outDirectory: string): OutDigest;
