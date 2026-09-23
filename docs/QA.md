# Quality checks — 2026-09-22

The checks below were run against the local production build, not Vercel. Production needs a separate smoke test after deployment.

| Check | Result |
|---|---|
| `npm run check` | 0 errors, warnings or hints |
| `npm run test` | 6 passing |
| `npm run build` | Passing; EN, ES, DE and sitemap generated |
| `npm run test:e2e` | 6 passing, including keyboard controls, mobile navigation, metadata/asset checks, cross-language checklist persistence and axe WCAG 2.1 AA smoke tests |
| `npm audit` | 0 known vulnerabilities at review time |

Lighthouse 13.5.0, mobile profile, local `/es/` production preview: **Performance 99, Accessibility 100, Best Practices 100, SEO 100**. It reported a 2.1 s largest-contentful paint, 0 ms total blocking time, 0 cumulative layout shift and about 290 KiB of page weight in its own audit. Scores fluctuate by machine and run; these are observations, not guarantees. The report was generated successfully, although Lighthouse's Windows launcher returned an `EPERM` while cleaning up its temporary profile after writing the JSON.

Visual smoke checks were made at 1440 × 900 and 390 × 844. The screenshots are [`guide-desktop.png`](guide-desktop.png) and [`guide-mobile.png`](guide-mobile.png). The page should still receive a manual screen-reader check and a native-speaker review of the German copy.

On 2026-09-23, the unit tests and production build passed again. Playwright's local Chromium executable was missing at first, so the initial E2E attempt could not launch a browser; after `npx playwright install chromium`, all six E2E tests passed. This was an environment issue, not a site regression.
