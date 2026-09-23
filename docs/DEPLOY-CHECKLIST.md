# Deploy checklist — PC Assembly Field Guide

**Date:** 2026-09-23  
**Repository:** https://github.com/sergioiglesiasleite/pc-assembly-standard  
**Production:** https://pc-assembly-standard.vercel.app/

This is a static Astro site on Vercel. There is no database, feature flag, API, analytics pipeline or on-call team. The release changes the guide text, assets and browser-local checklist storage.

## Before publishing

- [x] Confirm all local changes belong to this sprint and no secrets are staged.
- [x] Complete a clean `npm ci` and check `npm audit`.
- [x] Run `npm run test`, `npm run build` and `npm run test:e2e`.
- [x] Document the deliberately reset old checklist progress and pending native German review.
- [x] Review the presentation, images, technical sources and independent-project disclaimer.
- [ ] Confirm the final commit and CI status on GitHub.

## Publish and smoke test

- [ ] Push the release commit to the repository.
- [ ] Verify the Vercel production deployment uses that commit.
- [ ] Open `/`, `/en/`, `/es/` and `/de/` directly over HTTPS, on desktop and mobile.
- [ ] Check language switching, navigation anchors and checklist persistence/reset.
- [ ] Check image assets, `favicon.svg`, `robots.txt` and `sitemap.xml` return successfully.
- [ ] Inspect console and network for script errors and 404/5xx responses.
- [ ] Verify canonical, `hreflang` and Open Graph metadata on production.
- [ ] Run a production Lighthouse mobile audit and compare with the local baseline in `docs/QA.md`.
- [ ] Confirm GitHub Actions is green.

## Rollback triggers and recovery

Return to the previous Vercel deployment or revert the release commit if any language route is unavailable, the guide or illustrations are missing, a checklist cannot be used, there is a serious browser error, or critical assembly guidance is incorrect. A red CI run also blocks marking the sprint complete until explained and corrected. Preserve the failing URL, commit and error details before rollback. The previous known production state is commit `7eaf75e`.

## After publishing

- [ ] Update the sprint status and QA notes with production findings.
- [ ] Add the release tag only after smoke tests and CI pass.
- [ ] Share the final demo URL for CV use, noting that native German editing remains pending.
