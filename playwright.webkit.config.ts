import { defineConfig } from "@playwright/test";
import base from "./playwright.config";

export default defineConfig({
  ...base,
  testMatch: ["safari.spec.ts", "chapters.spec.ts", "annotation-followup.spec.ts"],
  use: { ...base.use, browserName: "webkit", channel: undefined },
});
