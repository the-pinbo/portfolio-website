import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: false,
  forbidOnly: true,
  retries: 0,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    channel: "chrome",
    colorScheme: "light",
    contextOptions: { reducedMotion: "reduce" },
    deviceScaleFactor: 1,
    locale: "en-US",
    serviceWorkers: "block",
  },
  webServer: {
    command: "node tests/visual/static-server.mjs",
    port: 4173,
    reuseExistingServer: false,
    timeout: 15_000,
  },
});
