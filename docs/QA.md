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

## Production verification — 2026-09-23

Commit [`7dcfe0f`](https://github.com/sergioiglesiasleite/pc-assembly-standard/commit/7dcfe0f9e785f3695785f33e22a10c1815497e9d) passed [GitHub Actions CI](https://github.com/sergioiglesiasleite/pc-assembly-standard/actions/runs/35884582055). GitHub's commit status reports the Vercel deployment as successful for the same commit.

The release was marked with the published Git tag [`v1.0.0`](https://github.com/sergioiglesiasleite/pc-assembly-standard/tree/v1.0.0).

The production domain returned HTTP 200 for `/`, `/en/`, `/es/`, `/de/`, `robots.txt`, `sitemap.xml`, the favicon, hero and social preview. The root page redirects visitors to English. All three language pages showed the new guide, correct `lang`, canonical URL, four `hreflang` links and absolute social image URL. A browser smoke test at 390 × 844 found no horizontal overflow, console errors or failed site requests; checklist progress persisted from English to German.

Lighthouse 13.5.0, mobile profile, production `/es/`: **Performance 99, Accessibility 100, Best Practices 100, SEO 100**. The generated report recorded 1.8 s LCP, 0 CLS and about 293 KiB of page weight. As on the local run, Lighthouse returned `EPERM` during Windows temporary-profile cleanup *after* writing the valid report; the JSON is retained locally as `docs/lighthouse-production.json` and intentionally excluded from Git. Metrics are a point-in-time observation, not a guarantee.

No manual screen-reader or native German-language review was performed. The latter is disclosed in the README and remains a follow-up.

## Accessibility follow-up — 2026-09-23

Commit [`5b52bcf`](https://github.com/sergioiglesiasleite/pc-assembly-standard/commit/5b52bcf24ae9f77e7a1111e251c862a24f37dd7b) raised the mobile brand touch target to 44 px, added its localized accessible name, corrected the body text color variable and added a 320 px keyboard/selector regression test. The seven E2E tests, CI and Vercel deployment passed. A fresh production Lighthouse mobile run returned **97 Performance, 100 Accessibility, 100 Best Practices and 100 SEO**. Its valid JSON report is stored locally as `docs/lighthouse-production-after-a11y.json` and ignored by Git; the CLI again returned `EPERM` only during temporary-profile cleanup. See [`ACCESSIBILITY-AUDIT.md`](ACCESSIBILITY-AUDIT.md) for findings and the outstanding real screen-reader listening checklist.
