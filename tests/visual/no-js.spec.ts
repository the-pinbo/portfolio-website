import { expect, test } from "@playwright/test";

const orderedAnchors = ["top", "identity-frame", "work", "smart-filters", "ace", "visionguard", "research", "open-source", "patent", "track-record", "contact"];

test("server-owned structure, copy, links, and anchors remain complete without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1024, height: 900 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await expect(page.locator("main#main-content")).toBeVisible();
  await expect(page.locator("#top h1")).toContainText("I turn meaningful business problems");
  await expect(page.locator("#track-record li")).toHaveCount(7);
  await expect(page.locator("#contact .linked-artifact")).toHaveCount(4);
  await expect(page.locator('a[href="./ICASSP-DUN-Poster.pdf"]')).toHaveCount(1);
  const structure = await page.locator("body").evaluate((body, expected) => {
    const ids = [...body.querySelectorAll<HTMLElement>("[id]")].map((element) => element.id);
    const positions = expected.map((id) => ids.indexOf(id));
    const hrefs = [...body.querySelectorAll<HTMLAnchorElement>("a[href]")].map((link) => link.getAttribute("href"));
    return {
      complete: positions.every((position) => position >= 0),
      ordered: positions.every((position, index) => index === 0 || position > positions[index - 1]),
      duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
      emptyLinks: hrefs.filter((href) => !href).length,
    };
  }, orderedAnchors);
  expect(structure).toEqual({ complete: true, ordered: true, duplicateIds: [], emptyLinks: 0 });
  await context.close();
});
