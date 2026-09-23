import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx astro preview --ignore-lock --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321/en/',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
