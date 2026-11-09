import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", name: "home" },
  {
    path: "/work/natural-language-filtering/",
    name: "natural-language-filtering",
  },
  { path: "/work/ai-native-engineering/", name: "ai-native-engineering" },
  { path: "/work/ace-mcp/", name: "ace-mcp" },
  { path: "/work/visionguard/", name: "visionguard" },
];
for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
]) {
  for (const route of routes) {
    test(`${route.name} at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await page.evaluate(() => document.fonts.ready);
      const images = page.locator("img[data-delivery-primary]");
      for (let i = 0; i < (await images.count()); i++) {
        await images.nth(i).scrollIntoViewIfNeeded();
        await images
          .nth(i)
          .evaluate((image: HTMLImageElement) => image.decode());
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await expect(page).toHaveScreenshot(
        `${route.name}-${viewport.width}.png`,
        { animations: "disabled", fullPage: true },
      );
    });
  }
}
