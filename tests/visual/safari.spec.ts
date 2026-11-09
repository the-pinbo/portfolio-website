import { expect, test } from "@playwright/test";
import sharp from "sharp";

const routes = [
  "/",
  "/work/natural-language-filtering/",
  "/work/ai-native-engineering/",
  "/work/ace-mcp/",
  "/work/visionguard/",
];

for (const width of [1440, 390, 320]) {
  test(`WebKit paints clipped portrait and usable pages at ${width}px`, async ({
    page,
    browserName,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });

    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("main h1")).toBeVisible();
      expect(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        ),
      ).toBeLessThanOrEqual(1);

      for (const image of await page.locator("img[data-delivery-primary]").all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((node: HTMLImageElement) => node.decode());
        expect(
          await image.evaluate((node: HTMLImageElement) => node.naturalWidth),
        ).toBeGreaterThan(0);
        // A decoded resource alone does not prove that WebKit painted it.
        const painted = await sharp(await image.screenshot()).stats();
        expect(
          painted.channels.slice(0, 3).some((channel) => channel.stdev > 12),
          "Informative media must paint rather than leave a quiet fallback",
        ).toBe(true);
      }

      if (route === "/") {
        const portrait = page.locator(".portrait-triptych");
        await portrait.scrollIntoViewIfNeeded();
        const png = await portrait.screenshot();
        await test.info().attach(`portrait-${browserName}-${width}`, {
          body: png,
          contentType: "image/png",
        });
        const { data, info } = await sharp(png)
          .removeAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });
        const pixel = (x: number, y: number) => {
          const offset =
            (Math.floor((y / 650) * info.height) * info.width +
              Math.floor((x / 650) * info.width)) *
            info.channels;
          return [...data.subarray(offset, offset + 3)];
        };
        const background = pixel(300, 15);
        for (const [x, y] of [[114, 500], [514, 500], [130, 64]]) {
          expect.soft(
            pixel(x, y).every(
              (value, channel) => Math.abs(value - background[channel]) < 8,
            ),
            `Portrait must respect the mask outside point (${x}, ${y})`,
          ).toBe(true);
        }
        const face = await sharp(png)
          .extract({
            left: Math.floor(info.width * 0.36),
            top: Math.floor(info.height * 0.43),
            width: Math.floor(info.width * 0.3),
            height: Math.floor(info.height * 0.28),
          })
          .stats();
        expect(
          face.channels.slice(0, 3).some((channel) => channel.stdev > 15),
          "The central portrait must paint a face rather than a blank field",
        ).toBe(true);
      }

      const name = route === "/" ? "home" : route.split("/")[2];
      await page.screenshot({
        path: test.info().outputPath(`${browserName}-${name}-${width}.png`),
        fullPage: true,
      });
    }

    expect(errors).toEqual([]);
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Research" })
      .click();
    await expect(page).toHaveURL(/#research$/);
    await expect(
      page.locator('nav[aria-label="Main navigation"] a[href="/#research"]'),
    ).toHaveAttribute("aria-current", "location");
  });
}
