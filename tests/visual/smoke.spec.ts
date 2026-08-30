import { createHash } from "node:crypto";
import { expect, test } from "@playwright/test";
import { viewports } from "./registry.mjs";

const expectedAnchors = [
  "top", "main-content", "identity-frame", "work", "smart-filters", "ace", "visionguard",
  "research", "open-source", "patent", "track-record", "contact",
];

async function loadAndValidateImages(page: import("@playwright/test").Page) {
  const images = page.locator("img[data-delivery-primary]");
  const count = await images.count();
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => (element as HTMLImageElement).decode());
  }
  return images.evaluateAll((elements) => elements.map((element) => {
    const image = element as HTMLImageElement;
    return {
    complete: image.complete,
    currentSrc: image.currentSrc,
    naturalHeight: image.naturalHeight,
    naturalWidth: image.naturalWidth,
    };
  }));
}

for (const viewport of viewports) {
  test(`structural export is deterministic at ${viewport.width}px`, async ({ page, browserName }) => {
    const imageWarnings: string[] = [];
    page.on("console", (message) => {
      if (["warning", "error"].includes(message.type()) && /image|img|avif|webp/i.test(message.text())) imageWarnings.push(message.text());
    });
    page.on("requestfailed", (request) => {
      if (request.resourceType() === "image") imageWarnings.push(`${request.url()}: ${request.failure()?.errorText ?? "request failed"}`);
    });
    await page.setViewportSize(viewport);
    await page.goto("/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const imageStates = await loadAndValidateImages(page);
    expect(imageStates.every((image) => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0)).toBe(true);
    expect(imageStates.every((image) => /-\d+\.(?:avif|webp)(?:\?|$)/.test(image.currentSrc))).toBe(true);
    const fallbacks = await page.locator("img[data-delivery-fallback]").evaluateAll((elements) => elements.map((element) => ({
      alt: (element as HTMLImageElement).alt,
      complete: (element as HTMLImageElement).complete,
      naturalWidth: (element as HTMLImageElement).naturalWidth,
    })));
    expect(fallbacks.every((image) => image.alt === "" && image.complete && image.naturalWidth > 0)).toBe(true);
    expect(imageWarnings).toEqual([]);

    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator("#top h1")).toContainText("I turn meaningful business problems");
    await expect(page.locator("#track-record li")).toHaveCount(7);
    await expect(page.locator("#contact .linked-artifact")).toHaveCount(4);
    await expect(page.locator("#contact .linked-artifact").first()).toContainText("Email");

    const state = await page.evaluate((anchors) => {
      const ids = [...document.querySelectorAll<HTMLElement>("[id]")].map((element) => element.id);
      const links = [...document.querySelectorAll<HTMLAnchorElement>("a[href]")];
      return {
        anchorsPresent: anchors.every((anchor) => document.getElementById(anchor)),
        duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
        fontsReady: document.fonts.status === "loaded",
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        staleRoutes: links.filter((link) => ["#systems", "#credibility"].includes(link.getAttribute("href") ?? "")).length,
        emptyLinks: links.filter((link) => !link.getAttribute("href")).length,
      };
    }, expectedAnchors);

    expect(state.anchorsPresent).toBe(true);
    expect(state.duplicateIds).toEqual([]);
    expect(state.fontsReady).toBe(true);
    expect(state.horizontalOverflow).toBeLessThanOrEqual(1);
    expect(state.staleRoutes).toBe(0);
    expect(state.emptyLinks).toBe(0);

    await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}" });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
    const first = await page.screenshot({ animations: "disabled" });
    await page.waitForTimeout(100);
    const second = await page.screenshot({ animations: "disabled" });
    expect(createHash("sha256").update(first).digest("hex"), `${browserName} capture changed without state change`).toBe(
      createHash("sha256").update(second).digest("hex"),
    );
  });
}
