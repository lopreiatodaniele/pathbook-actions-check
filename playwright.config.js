import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  workers: 1,
  globalTimeout: 120000,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4191",
    browserName: "chromium",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    // This suite inspects the existing build. Never rebuild after the gate.
    command: "bun run preview",
    url: "http://127.0.0.1:4191",
    reuseExistingServer: false,
  },
});
