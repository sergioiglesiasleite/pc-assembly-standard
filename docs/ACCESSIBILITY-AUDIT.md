# Accessibility audit — 2026-09-23

| Field | Value |
|---|---|
| Target | PC Assembly Field Guide, EN/ES/DE |
| Standard used | WCAG 2.1 AA, plus the sprint's 44 × 44 px touch-target goal |
| Scope | Local production build after the mobile-brand fix. A real screen-reader listening session is still required; browser accessibility-tree inspection is not a substitute. |

## Summary

No critical or serious violations were reported by axe in the three languages. The browser E2E suite passes seven tests, including keyboard navigation, checklist interaction and the 320 px layout. After deploying commit `5b52bcf`, production Lighthouse scored 97 Performance, 100 Accessibility, 100 Best Practices and 100 SEO. CI and Vercel both reported success for that commit.

One minor issue was found and fixed: the mobile brand link's visible hit area was only 28 px high. It now has a minimum height of 44 px and its accessible name is the localized full site title. A missing CSS body-color variable was also corrected to the declared dark brand color.

| Check | Evidence | Result |
|---|---|---|
| Text contrast | `#007c54` on white 5.24:1; `#1a1a1a` on white 17.40:1; `#4b5563` on white 7.56:1 | Passes 4.5:1 minimum for normal text |
| Mobile touch targets | Brand 44 px after fix; language and navigation summaries 44 px; checklist labels at least 44 px | Passes sampled controls |
| Keyboard | Skip link, menu, language selector and checklist exercised in E2E | Passes tested flows |
| Narrow reflow | No horizontal overflow at 320 px in EN/ES/DE | Passes sampled pages |
| Accessible names and states | Chromium accessibility tree: language and navigation summaries are named disclosure controls with `expanded` state; checklist has named checkboxes with `checked` state and a named progressbar | Passes browser-tree inspection |
| Automated scan | axe WCAG 2.1 AA tags on EN/ES/DE | No serious or critical findings |

## Manual Narrator check still needed

Open the published `/es/` page with Windows Narrator (or NVDA) and listen while using only the keyboard:

1. Confirm the first Tab reaches “Saltar al contenido” and Enter moves to the main content.
2. Focus “Elegir idioma”. Confirm its name and collapsed/expanded state are spoken, open it with Enter and reach the three language links.
3. Focus “Navegación de la guía”. Open it with Enter, follow a section link and confirm the menu closes. Repeat with Escape.
4. In the first checklist, confirm each checkbox announces its full instruction and checked state. Toggle one with Space; confirm the section progress changes from zero to one.
5. Confirm the reset button is named and its confirmation dialog is understandable. Cancel once, then accept and verify the progress returns to zero.
6. Browse the first diagram and its caption; confirm the image description is useful and does not imply the drawing is a model-specific pinout.

Record the screen reader, browser and any incorrect announcement. Do not mark this check complete solely from axe or Chromium's accessibility tree.
