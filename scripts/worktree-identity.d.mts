export function fingerprintWorktree(input: {
  head: string;
  trackedDiff: Uint8Array;
  untrackedFiles: Array<{ path: string; bytes: Uint8Array }>;
}): string;
export function collectWorktreeIdentity(projectRoot: string): { head: string; worktreeFingerprint: string };
export function assertEvidenceIdentity(
  evidence: { implementationRevision: string; worktreeFingerprint: string },
  current: { head: string; worktreeFingerprint: string },
): void;
