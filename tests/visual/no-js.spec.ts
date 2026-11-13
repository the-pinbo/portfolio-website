import { expect, test } from "@playwright/test";
test("content and routes work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("main h1")).toContainText("reliable software and AI systems");
  await expect(page.locator("#experience li")).toHaveCount(8);
  await expect(page.locator('a[href="/ICASSP-DUN-Poster.pdf"]')).toHaveCount(1);
  for (const [slug, anchor] of [["natural-language-filtering", "smart-filters"], ["ai-native-engineering", "ai-native-engineering"], ["ace-mcp", "ace"], ["visionguard", "visionguard"]]) {
    await page.goto(`/work/${slug}/`);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.getByRole("link", { name: "All work" })).toBeVisible();
    await page.getByRole("link", { name: "All work" }).click();
    await expect(page).toHaveURL(new RegExp(`#${anchor}$`));
    await expect(page.locator(`#${anchor}`)).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  }
  await context.close();
});

test("standalone sections are discoverable and usable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 844 }, reducedMotion: "reduce" });
  try {
    const page = await context.newPage();
    await page.goto("/");
    for (const [label, evidence] of [
      ["Work", 'a[href="/work/ace-mcp/"]'],
      ["Research", 'a[href="/ICASSP-DUN-Poster.pdf"]'],
      ["Experience", "#track-record li"],
      ["Contact", 'a[href^="mailto:"]'],
    ]) {
      const path = `/${label.toLowerCase()}/`;
      await page.getByRole("link", { name: `View ${label.toLowerCase()} page` }).click();
      await expect(page).toHaveURL(path);
      await page.reload();
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator("main").locator(evidence).first()).toBeVisible();
      await expect(page.locator("nav a[aria-current=page]")).toHaveText(label);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
      await page.goBack();
      await expect(page).toHaveURL("/");
    }
  } finally {
    await context.close();
  }
});
