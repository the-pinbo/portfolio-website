import { expect, test } from "@playwright/test";

const chapters = ["#smart-filters", "#ai-native-engineering", "#ace", "#visionguard", "#research .research-row:first-of-type", "#open-source", "#patent", "#contact"];

for (const viewport of [{ width: 1440, height: 900 }, { width: 1185, height: 1071 }, { width: 768, height: 900 }]) {
  test(`chapters keep neighboring stories outside the resting viewport at ${viewport.width}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    for (const selector of chapters) {
      const chapter = page.locator(selector);
      await chapter.evaluate((element) => {
        const header = document.querySelector(".site-header")!.getBoundingClientRect().height;
        window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - header, behavior: "instant" });
      });
      const bounds = await chapter.evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const header = document.querySelector(".site-header")!.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, header: header.bottom, width: window.innerWidth, height: window.innerHeight };
      });
      expect(bounds.top).toBeGreaterThanOrEqual(bounds.header - 1);
      expect(bounds.top).toBeLessThanOrEqual(bounds.header + 1);
      expect(bounds.bottom).toBeGreaterThanOrEqual(bounds.height - 1);
      expect(Math.abs(bounds.left - (bounds.width - bounds.right))).toBeLessThanOrEqual(2);
    }
    for (const visual of await page.locator(".project-visual").all()) {
      expect(await visual.evaluate((element) => element.scrollHeight - element.clientHeight), "Project diagram content must fit its figure").toBeLessThanOrEqual(2);
    }
    await expect(page.locator(".recognition")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Selected work", exact: true })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Research and open source", exact: true })).toHaveCount(0);
  });
}

for (const width of [390, 320]) {
  test(`narrow chapters preserve media labels and left-side actions at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    for (const panel of await page.locator(".fractal-precision-plate__panels > div").all()) {
      expect(await panel.evaluate((element) => element.scrollWidth - element.clientWidth)).toBeLessThanOrEqual(1);
    }
    for (const selector of ["#smart-filters", "#ace", "#visionguard", "#research .research-row:first-of-type", "#open-source", "#patent"]) {
      const chapter = page.locator(selector);
      await expect(chapter.locator(".linked-artifact").first()).toBeVisible();
      expect(await chapter.locator(".research-row__visual .linked-artifact, .work-preview__visual .linked-artifact").count()).toBe(0);
    }
    expect(errors).toEqual([]);
  });
}

test("timeline dates share the role baseline", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#experience");
  for (const row of await page.locator("#track-record > li").all()) {
    const offset = await row.evaluate((element) => {
      const role = element.querySelector(".role")!.getBoundingClientRect();
      const date = element.querySelector("time, :scope > span")!.getBoundingClientRect();
      return Math.abs(role.top - date.top);
    });
    expect(offset).toBeLessThanOrEqual(3);
  }
});

test("opening reveals identity reversibly and hands back to vertical scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator(".opening-sequence--animated")).toHaveCount(1);
  const opening = page.locator(".opening-sequence");
  const moveTo = async (progress: number) => {
    await opening.evaluate((element, progress) => {
      const header = document.querySelector(".site-header")!.getBoundingClientRect().height;
      const start = window.scrollY + element.getBoundingClientRect().top - header;
      const distance = element.getBoundingClientRect().height - (innerHeight - header);
      window.scrollTo({ top: start + distance * progress, behavior: "instant" });
    }, progress);
  };
  const progressValue = () => opening.evaluate((element) => Number(getComputedStyle(element).getPropertyValue("--opening-progress")));
  const statement = page.locator(".opening-statement");
  const start = await statement.boundingBox();
  await moveTo(0.4);
  await expect.poll(progressValue).toBeGreaterThan(0.45);
  await expect.poll(progressValue).toBeLessThan(0.55);
  await expect.poll(async () => (await statement.boundingBox())!.x).toBeLessThan(start!.x - 200);
  await moveTo(1);
  await expect.poll(progressValue).toBeGreaterThan(0.99);
  const action = page.locator(".hero-actions").getByRole("link", { name: "Explore my work" });
  await expect(action).toBeInViewport();
  await expect.poll(async () => { const box = (await statement.boundingBox())!; return box.x + box.width; }).toBeLessThanOrEqual(0);
  await expect(page.locator(".hero .portrait-triptych")).toBeInViewport();
  await moveTo(0.9);
  const heldPosition = await page.evaluate(() => scrollY);
  await action.focus();
  expect(await page.evaluate(() => scrollY)).toBe(heldPosition);
  await moveTo(0);
  await expect.poll(progressValue).toBeLessThan(0.01);
  await expect.poll(async () => (await statement.boundingBox())!.x).toBeGreaterThanOrEqual(start!.x - 1);
  // Start a new focus traversal after manually reversing the scroll.
  await action.evaluate((element) => (element as HTMLAnchorElement).blur());
  await action.focus();
  await expect(action).toBeInViewport();
  await action.click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator('#smart-filters .work-preview__copy')).toBeInViewport();
});

test("reduced-motion opening is readable without a pin", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator(".opening-sequence--animated")).toHaveCount(0);
  await expect(page.locator(".opening-statement h1")).toBeVisible();
  await page.locator(".hero").scrollIntoViewIfNeeded();
  await expect(page.locator(".hero-actions")).toBeInViewport();
});

for (const viewport of [{ width: 1440, height: 900 }, { width: 901, height: 650 }]) {
  test(`normal scrolling crosses the opening handoff and returns at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator(".opening-sequence--animated")).toHaveCount(1);
    await page.locator(".opening-sequence").evaluate((element) => window.scrollTo({ top: scrollY + element.getBoundingClientRect().bottom - innerHeight, behavior: "instant" }));
    await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
    const before = await page.locator("#work").boundingBox();
    await page.mouse.wheel(0, 220);
    await expect.poll(async () => (await page.locator("#work").boundingBox())!.y).toBeLessThan(before!.y - 100);
    const header = await page.locator(".site-header").boundingBox();
    await expect.poll(async () => (await page.locator(".opening-sticky").boundingBox())!.y).toBeLessThan(header!.height - 100);
    await page.mouse.wheel(0, -400);
    await expect.poll(async () => Math.abs((await page.locator(".opening-sticky").boundingBox())!.y - header!.height)).toBeLessThan(2);
    await expect(page.locator(".hero-actions")).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  });
}

test("enhancement preserves direct fragment and cross-route landings", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const id of ["work", "research", "experience", "contact"]) {
    await page.goto("/work/ace-mcp/");
    await page.locator(`header a[href="/#${id}"]`).click();
    await expect.poll(async () => page.locator(`#${id}`).evaluate((element) => Math.abs(element.getBoundingClientRect().top - document.querySelector(".site-header")!.getBoundingClientRect().bottom))).toBeLessThan(2);
    await expect(page.locator(`header a[href="/#${id}"]`)).toHaveAttribute("aria-current", "location");
  }
  await page.goto("/#identity-frame");
  await expect(page.locator(".hero-actions")).toBeInViewport();
  await expect(page.locator("#identity-frame .portrait-triptych")).toBeInViewport();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".opening-sequence--animated")).toHaveCount(0);
});
