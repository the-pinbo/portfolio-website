import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, relative, resolve } from "node:path";
import { expect, test } from "@playwright/test";
import { verifyRecordedOutDigest } from "../../scripts/out-digest.mjs";
import { collectWorktreeIdentity } from "../../scripts/worktree-identity.mjs";
import { assertCandidateDestination, compareCandidate, hashFile, validateEvidence } from "./evidence.mjs";
import { acceptanceRows, fixtureRevision, viewports } from "./registry.mjs";

const projectRoot = resolve(process.cwd());
const digest = verifyRecordedOutDigest(join(projectRoot, "out"));
const baselineManifestPath = join(projectRoot, "tests/visual/baselines/manifest.json");
const baselineManifestHash = hashFile(baselineManifestPath);
const baselineManifest = JSON.parse(readFileSync(baselineManifestPath, "utf8"));
const runId = (process.env.VISUAL_RUN_ID ?? new Date().toISOString()).replace(/[^a-zA-Z0-9._-]/g, "-");
const implementation = collectWorktreeIdentity(projectRoot);

async function loadImages(page: import("@playwright/test").Page) {
  const images = page.locator("img[data-delivery-primary]");
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => (element as HTMLImageElement).decode());
  }
}

async function prepareFallbackPage(browser: import("@playwright/test").Browser, viewport: { width: number; height: number }) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const failed: string[] = [];
  await page.route(/inbase-editorial-portrait-\d+\.(?:avif|webp)(?:\?.*)?$/, async (route) => {
    failed.push(route.request().url());
    await route.abort("failed");
  });
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}" });
  const stage = page.locator("#identity-frame .portrait-triptych");
  const before = await stage.boundingBox();
  await page.waitForTimeout(100);
  const after = await stage.boundingBox();
  expect(failed.length, "VA-16 must exercise an actual derivative request failure").toBeGreaterThan(0);
  expect(before).not.toBeNull();
  expect(after).toEqual(before);
  await expect(page.locator("#identity-frame .identity-copy")).toContainText("Inbasekaran Perumal");
  await expect(page.locator("a[href='#work']")).toHaveCount(1);
  const primary = await page.locator("#identity-frame img[data-delivery-primary]").evaluateAll((images) => images.map((image) => ({
    alt: (image as HTMLImageElement).alt,
    naturalWidth: (image as HTMLImageElement).naturalWidth,
  })));
  expect(primary).toHaveLength(3);
  expect(primary.every((image) => image.alt === "" && image.naturalWidth === 0)).toBe(true);
  const fallback = await page.locator("#identity-frame img[data-delivery-fallback]").evaluateAll((images) => images.map((image) => ({
    complete: (image as HTMLImageElement).complete,
    naturalWidth: (image as HTMLImageElement).naturalWidth,
  })));
  expect(fallback).toHaveLength(3);
  expect(fallback.every((image) => image.complete && image.naturalWidth > 0)).toBe(true);
  return { context, page };
}

for (const viewport of viewports) {
  test(`capture unreviewed candidates at ${viewport.width}px`, async ({ page, browser: browserInstance, browserName }) => {
    await page.setViewportSize(viewport);
    await page.goto("/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await loadImages(page);
    await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}" });
    const browserVersion = page.context().browser()?.version() ?? "unknown";
    const browser = `${browserName} ${browserVersion}`;
    const browserMajor = `${browserName}-${browserVersion.split(".")[0]}`;
    const fontReady = await page.evaluate(() => document.fonts.status === "loaded");
    const dpr = await page.evaluate(() => window.devicePixelRatio);

    for (const row of acceptanceRows) {
      const fallbackSession = row.id === "VA-16" ? await prepareFallbackPage(browserInstance, viewport) : null;
      const capturePage = fallbackSession?.page ?? page;
      const directory = join(projectRoot, "tests/visual/candidates", digest.digest, runId, row.id, viewport.name);
      const artifactPath = join(directory, "candidate.png");
      const evidencePath = join(directory, "evidence.json");
      assertCandidateDestination(artifactPath, projectRoot);
      mkdirSync(directory, { recursive: true });

      const locator = capturePage.locator(row.anchor);
      await expect(locator).toHaveCount(1);
      await locator.scrollIntoViewIfNeeded();
      if (row.crop === "full-page") await capturePage.screenshot({ animations: "disabled", fullPage: true, path: artifactPath });
      else if (row.crop === "viewport") await capturePage.screenshot({ animations: "disabled", path: artifactPath });
      else await locator.screenshot({ animations: "disabled", path: artifactPath });

      const baselineIdentity = `${row.id}/${viewport.width}x${viewport.height}@${dpr}/${browserMajor}/${fixtureRevision}/${row.checkpoint}-${row.crop}`;
      const comparison = await compareCandidate({
        baselineEntry: baselineManifest.entries[baselineIdentity],
        baselineRoot: join(projectRoot, "tests/visual/baselines"),
        candidatePath: artifactPath,
        masks: row.masks,
        tolerance: row.tolerance,
      });

      const evidence = validateEvidence({
        rowId: row.id,
        gate: row.gate,
        implementationRevision: implementation.head,
        worktreeFingerprint: implementation.worktreeFingerprint,
        fixtureRevision,
        outDigest: digest.digest,
        viewport,
        devicePixelRatio: dpr,
        browser,
        fontReady,
        anchor: row.anchor,
        checkpoint: row.checkpoint,
        crop: row.crop,
        masks: row.masks,
        tolerance: row.tolerance,
        command: process.env.VISUAL_CAPTURE_COMMAND ?? "npm run visual:capture:candidate",
        artifactPath: relative(projectRoot, artifactPath),
        artifactHash: hashFile(artifactPath),
        result: "candidate/unreviewed",
        comparison,
        reviewer: null,
        reviewDate: null,
        exceptionOwner: null,
      });
      writeFileSync(evidencePath, `${JSON.stringify(evidence, null, 2)}\n`);
      expect(basename(artifactPath)).toBe("candidate.png");
      await fallbackSession?.context.close();
    }

    expect(hashFile(baselineManifestPath), "candidate capture changed promoted baseline metadata").toBe(baselineManifestHash);
  });
}
