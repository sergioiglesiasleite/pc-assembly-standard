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
- [x] Confirm release commit `7dcfe0f` and green CI on GitHub.

## Publish and smoke test

- [x] Push the release commit to the repository.
- [x] Verify the Vercel production deployment uses that commit; the commit status reports success.
- [x] Open `/`, `/en/`, `/es/` and `/de/` directly over HTTPS and check mobile rendering.
- [x] Check language switching and checklist persistence; anchors and reset are covered by E2E against the production build.
- [x] Check image assets, `favicon.svg`, `robots.txt` and `sitemap.xml` return successfully.
- [x] Inspect console and network for script errors and 404/5xx responses.
- [x] Verify canonical, `hreflang` and Open Graph metadata on production.
- [x] Run a production Lighthouse mobile audit and compare with the local baseline in `docs/QA.md`.
- [x] Confirm GitHub Actions is green.

## Rollback triggers and recovery

Return to the previous Vercel deployment or revert the release commit if any language route is unavailable, the guide or illustrations are missing, a checklist cannot be used, there is a serious browser error, or critical assembly guidance is incorrect. A red CI run also blocks marking the sprint complete until explained and corrected. Preserve the failing URL, commit and error details before rollback. The previous known production state is commit `7eaf75e`.

## After publishing

- [x] Update the sprint status and QA notes with production findings.
- [x] Publish tag `v1.0.0` after smoke tests and CI passed.
- [x] Share the final demo URL for CV use, noting that native German editing remains pending. The owner still needs to update the external CV.
