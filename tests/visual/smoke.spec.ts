import { expect, test } from "@playwright/test";

const slugs = [
  "natural-language-filtering",
  "ai-native-engineering",
  "ace-mcp",
  "visionguard",
];
const navigation = ["Work", "Research", "Experience", "Contact"];
for (const width of [1440, 1024, 768, 390, 320]) {
  test(`routes and navigation remain usable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", ...slugs.map((slug) => `/work/${slug}/`)]) {
      await page.goto(route);
      await expect(page.locator("header nav")).toBeVisible();
      await expect(page.locator("main h1")).toBeVisible();
      expect(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        ),
      ).toBeLessThanOrEqual(1);
      if (route !== "/") {
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          "href",
          `https://inba.dev${route}`,
        );
        await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
          "content",
          /https:\/\/inba\.dev\/assets\/inbase-editorial-portrait-1086\.webp/,
        );
        await expect(
          page.locator('meta[name="twitter:image"]'),
        ).toHaveAttribute(
          "content",
          /https:\/\/inba\.dev\/assets\/inbase-editorial-portrait-1086\.webp/,
        );
        await expect(
          page.locator(
            'nav[aria-label="Main navigation"] a[aria-current="page"]',
          ),
        ).toHaveText("Work");
      }
      const workflow = page.locator(".workflow-visual");
      if (await workflow.count()) {
        const clearance = await workflow.evaluate((figure) => {
          const title = figure
            .querySelector(".workflow-visual__context p")!
            .getBoundingClientRect();
          const repositoryScope = figure
            .querySelector(".workflow-visual__scope")!
            .getBoundingClientRect();
          return repositoryScope.top - title.bottom;
        });
        expect(clearance).toBeGreaterThanOrEqual(12);
        const bounds = await workflow.boundingBox();
        expect(bounds).not.toBeNull();
        for (const label of await workflow.locator("p, strong, li, span").all()) {
          const labelBounds = await label.boundingBox();
          expect(labelBounds).not.toBeNull();
          expect(labelBounds!.x).toBeGreaterThanOrEqual(bounds!.x - 1);
          expect(labelBounds!.x + labelBounds!.width).toBeLessThanOrEqual(bounds!.x + bounds!.width + 1);
          expect(labelBounds!.y + labelBounds!.height).toBeLessThanOrEqual(bounds!.y + bounds!.height + 1);
          expect(
            await label.evaluate(
              (element) => element.scrollWidth - element.clientWidth,
            ),
          ).toBeLessThanOrEqual(1);
        }
      }
      const images = page.locator("img[data-delivery-primary]");
      for (let i = 0; i < (await images.count()); i++) {
        await images.nth(i).scrollIntoViewIfNeeded();
        await images.nth(i).evaluate((img: HTMLImageElement) => img.decode());
        expect(
          await images
            .nth(i)
            .evaluate((img: HTMLImageElement) => img.naturalWidth),
        ).toBeGreaterThan(0);
      }
    }
    for (const name of navigation) {
      await page.goto("/work/ace-mcp/");
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name })
        .click();
      const hash = name.toLowerCase();
      await expect(page).toHaveURL(new RegExp(`#${hash}$`));
      await expect(
        page.locator(`nav[aria-label="Main navigation"] a[href="/#${hash}"]`),
      ).toHaveAttribute("aria-current", "location");
      const clearance = await page.evaluate((id) => {
        const header = document
          .querySelector(".site-header")!
          .getBoundingClientRect();
        const target = document.getElementById(id)!.getBoundingClientRect();
        return target.top - header.bottom;
      }, hash);
      expect(clearance).toBeGreaterThanOrEqual(-1);
    }
    for (const name of navigation) {
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name })
        .click();
      await expect(page).toHaveURL(new RegExp(`#${name.toLowerCase()}$`));
      await expect(
        page.locator(
          `nav[aria-label="Main navigation"] a[href="/#${name.toLowerCase()}"]`,
        ),
      ).toHaveAttribute("aria-current", "location");
    }
    await page.goto("/work/natural-language-filtering/");
    for (const slug of slugs.slice(1)) {
      await page
        .getByRole("navigation", { name: "Next project" })
        .getByRole("link")
        .click();
      await expect(page).toHaveURL(new RegExp(`/work/${slug}/$`));
    }
    await expect(page.getByRole("navigation", { name: "Next project" })).toHaveCount(0);
    await page.getByRole("navigation", { name: "More work" }).getByRole("link", { name: "Back to selected work" }).click();
    await expect(page).toHaveURL(/#work$/);
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    expect(
      await skip.evaluate((el) => getComputedStyle(el).outlineStyle),
    ).not.toBe("none");
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    for (const id of [
      "smart-filters",
      "ace",
      "visionguard",
      "open-source",
      "patent",
      "track-record",
    ]) {
      await page.goto(`/#${id}`);
      await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
    }
  });
}

test("navigation stays current after smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/work/ace-mcp/");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Research" })
    .click();
  await expect(page).toHaveURL(/#research$/);
  await page.waitForTimeout(1200);
  await expect(
    page.locator('nav[aria-label="Main navigation"] a[href="/#research"]'),
  ).toHaveAttribute("aria-current", "location");
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(
    page.locator('nav[aria-label="Main navigation"] a[href="/#experience"]'),
  ).toHaveAttribute("aria-current", "location");
});
