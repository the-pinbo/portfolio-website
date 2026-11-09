import { expect, test } from "@playwright/test";

for (const width of [1920, 2560, 3440]) {
  test(`identity stays outside the initial intro on a ${width}px screen`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1071 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator(".opening-sequence--animated")).toHaveCount(1);
    await expect.poll(() => page.locator(".hero").evaluate((element) => element.getBoundingClientRect().left)).toBeGreaterThanOrEqual(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    await page.locator(".opening-sequence").evaluate((element) => window.scrollTo({ top: scrollY + element.getBoundingClientRect().bottom - innerHeight, behavior: "instant" }));
    await expect.poll(() => page.locator(".opening-statement").evaluate((element) => element.getBoundingClientRect().right)).toBeLessThanOrEqual(0);
    await expect(page.locator(".hero-actions")).toBeInViewport();
    await expect(page.locator(".portrait-triptych")).toBeInViewport();
  });
}

test("resizing the opening keeps its initial identity outside the viewport", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 861, height: 1071 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator(".opening-sequence--animated")).toHaveCount(0);
  expect((await page.locator(".hero").boundingBox())!.y).toBeGreaterThanOrEqual(1071 - 1);
  for (const width of [1920, 2560]) {
    await page.setViewportSize({ width, height: 1071 });
    await expect(page.locator(".opening-sequence--animated")).toHaveCount(1);
    await expect.poll(() => page.locator(".hero").evaluate((element) => element.getBoundingClientRect().left)).toBeGreaterThanOrEqual(width);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".opening-sequence--animated")).toHaveCount(0);
  await page.locator(".hero-actions").scrollIntoViewIfNeeded();
  await expect(page.locator(".hero-actions")).toBeInViewport();
});

test("experience is a compact timeline with inline education details", async ({ page }) => {
  await page.setViewportSize({ width: 1345, height: 1071 });
  await page.goto("/#experience");
  await page.evaluate(() => document.fonts.ready);
  const rows = page.locator("#track-record > li");
  await expect(rows).toHaveCount(8);
  await expect(page.locator(".experience-list__content > p")).toHaveCount(0);
  await expect(rows.last().locator(".role")).toHaveText("B.Tech, Electronics and Communication Engineering | CGPA 9.19/10 | Class rank 4/138");
  const firstRole = (await rows.nth(0).locator(".role").boundingBox())!;
  const secondRole = (await rows.nth(1).locator(".role").boundingBox())!;
  expect(secondRole.y - firstRole.y - firstRole.height).toBeGreaterThanOrEqual(8);
  expect(secondRole.y - firstRole.y - firstRole.height).toBeLessThanOrEqual(20);
  await expect(rows.nth(1).locator("h3")).toHaveCount(0);
  expect((await rows.last().locator(".role").boundingBox())!.height).toBeLessThanOrEqual(24);
  await expect(page.locator(".reporting-visual figcaption")).toHaveCount(0);
});

for (const width of [1345, 390]) {
  test(`case pages keep a clear hierarchy and a finite reading sequence at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1071 });
    const slugs = ["natural-language-filtering", "ai-native-engineering", "ace-mcp", "visionguard"];
    for (let i = 0; i < slugs.length; i++) {
      await page.goto(`/work/${slugs[i]}/`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator(".case-header .eyebrow")).toHaveCount(0);
      await expect(page.locator(".reporting-visual figcaption")).toHaveCount(0);
      if (slugs[i] === "ace-mcp") await expect(page.locator("h1")).toHaveText("ACE MCP");
      const footer = page.locator(".next-project");
      const link = footer.getByRole("link");
      await expect(link).toHaveClass(/linked-artifact/);
      if (i < slugs.length - 1) await expect(link).toHaveAttribute("href", `/work/${slugs[i + 1]}/`);
      else {
        await expect(link).toHaveAttribute("href", "/#work");
        await expect(link).toHaveAccessibleName("Back to selected work");
      }
      const fontSize = await link.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      expect(fontSize).toBeLessThanOrEqual(24);
      const headingSize = await page.locator("h1").evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      const supportingSize = await page.locator(".case-headline").evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
      expect(headingSize).toBeGreaterThan(supportingSize);
      expect(supportingSize).toBeGreaterThan(17);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    }
  });
}
