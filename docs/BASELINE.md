# Technical Baseline

**Captured:** 2026-09-22  
**Sprint:** [Sprint 01 — Portfolio Ready](../SPRINT-01-PORTFOLIO-READY.md)  
**Source commit:** `7eaf75e` (`Initial relase : Field Ops Guide MVP`)  
**Environment:** Node.js 24.18.0, npm 11.16.0

This document records the state of the project before the Portfolio Ready implementation. It provides a measurable comparison point for the final release.

## Build and runtime

- `npm run build`: passes when Astro telemetry is disabled and the build process is allowed to spawn Vite subprocesses.
- Astro check: 0 errors and 2 hints.
- Current hints: unused `Menu` and `X` imports in `src/pages/[lang].astro`.
- Generated routes: `/`, `/en`, `/es`, and `/de`.
- Browser console during manual review: no warnings or errors.
- `npm audit --omit=dev`: 0 known vulnerabilities at capture time.

## Installed core versions

| Package | Installed | Latest reported by `npm outdated` |
|---|---:|---:|
| Astro | 4.16.19 | 7.3.3 |
| `@astrojs/react` | 3.6.3 | 6.0.6 |
| `@astrojs/tailwind` | 5.1.5 | 6.0.2 |
| React | 18.3.1 | 19.3.0 |
| Tailwind CSS | 3.4.19 | 4.3.3 |
| TypeScript | 5.9.3 | 7.0.2 |
| `lucide-react` | 0.307.0 | 1.47.0 |

These versions are a snapshot, not a requirement to upgrade every dependency in a single operation. Major upgrades must be evaluated independently.

## Production output

| Metric | Baseline |
|---|---:|
| Generated files | 23 |
| Total `dist` size | 5.96 MB |
| Image payload | 5.64 MB |
| English HTML document | 53.3 KB |
| Largest client runtime chunk | 132.4 KB |
| Checklist client chunk | 2.2 KB |
| Language selector client chunk | 1.6 KB |

All 11 guide images are 1024 × 1024 PNG files. Individual file sizes range from approximately 288 KB to 725 KB. Images are currently served without responsive variants, explicit dimensions, or lazy-loading attributes in the source templates.

## Source structure

| File | Lines | Size |
|---|---:|---:|
| `src/pages/[lang].astro` | 517 | 23.9 KB |
| `src/data/translations.js` | 1,092 | 69.1 KB |
| `src/components/Checklist.tsx` | 93 | 3.6 KB |
| `src/components/LanguageSelector.tsx` | 55 | 2.2 KB |

Observed maintainability issues:

- Repeated figure, list, callout, and section markup in the language page.
- Content and layout are tightly coupled.
- Translations are not type-checked against a shared schema.
- Rich text is represented by Markdown-like strings and rendered inconsistently with `set:html`.
- Several obsolete translation experiments and a compiler error log were committed with the MVP.

## Functional baseline

Confirmed working:

- Static generation for English, Spanish, and German.
- Language switching.
- Per-section checklists.
- Checklist persistence after a reload.
- Desktop sidebar navigation.
- Image loading and alternative text on guide figures.

Known functional or UX issues:

- The complete navigation is always visible above the content on mobile.
- Some rich text displays literal `**bold markers**`.
- Checklist storage uses translated-language and array-index based keys.
- Progress appears to reset when the language changes.
- The English boot checklist has 7 items; Spanish and German have 6.
- The language control uses buttons and JavaScript navigation instead of language links.
- No reset-progress control exists.

## Accessibility baseline

- Brand green `#008a5e` has an approximate contrast ratio of 4.38:1 on white, below WCAG AA for normal-sized text.
- Checklist progress bars do not expose progressbar semantics or values.
- Checklist buttons do not expose a checked/pressed state.
- The language menu does not expose expanded state or full keyboard behavior.
- Decorative Lucide icons appear as unnamed images in the accessibility tree.
- No skip link is present.

## Content baseline

Items requiring correction or qualification include:

- XMP/EXPO described as not being overclocking.
- A fixed 2133 MHz default claimed for all memory.
- 12VHPWR described as the new connector without covering 12V-2x6.
- TPM/Secure Boot bypass presented too prominently for a professional Windows 11 deployment guide.
- No visible last-reviewed date or consolidated source list.
- No disclaimer clarifying that the guide is an independent portfolio project.

## Repository baseline

- Branch: `main`.
- Commit history: one MVP commit.
- Git object size before cleanup: approximately 5.65 MiB.
- README contains a placeholder clone URL.
- README claims Nano Stores even though the project does not use it.
- No automated test suite or CI workflow is present.
- No code license or image-credit document is present.
- No public production URL is documented.

## Target comparison

The final sprint QA should update or supersede this document with:

- final package versions;
- build/check/test results;
- final output and image payload sizes;
- Lighthouse scores;
- accessibility audit results;
- translation parity results;
- production URL and release tag.
