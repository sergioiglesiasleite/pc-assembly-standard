# Punto de continuación — guardado el 2026-09-22

Este documento conserva el estado del cierre del 2026-09-22. El propietario pidió parar entonces y **reanudó el trabajo el 2026-09-23**. El intento de `git commit` del día 22 fue interrumpido y no llegó a ejecutarse. En ese punto `HEAD` y `origin/main` seguían en `7eaf75e` (`Initial relase : Field Ops Guide MVP`), con 67 rutas preparadas en el índice. Para el estado actual, consultar `git status` y `docs/DEPLOY-CHECKLIST.md`; no descartar ni resetear los cambios.

## Contexto y decisiones

- Objetivo: convertir la antigua guía multilingüe de montaje de PC en una pieza de portfolio que demuestre experiencia práctica de hardware y capacidad para redactar documentación formativa. Es un proyecto personal, no una obra oficial de Mindfactory ni de otro empleador.
- Repositorio: https://github.com/sergioiglesiasleite/pc-assembly-standard
- Producción actual: https://pc-assembly-standard.vercel.app/es/ (todavía muestra la versión antigua; no se ha publicado este sprint).
- Nombre público usado: **PC Assembly Field Guide**. El repositorio conserva su nombre actual.
- El alemán aún necesita revisión de una persona nativa; el README lo declara honestamente.
- No se eligió licencia open-source. README indica que se debe solicitar permiso para reutilización.
- El progreso antiguo basado en índices no se migra: no es seguro asociarlo a los nuevos IDs. La nueva clave es `pc-assembly-field-guide:checklist:v1:<sección>`.

## Trabajo ya realizado localmente

- FPG-01/02/03/06: baseline, limpieza de backups y logs, Astro 7/Tailwind 4, contenido TypeScript tipado, componentes Astro, navegación responsive.
- FPG-04: contenido EN/ES/DE revisado para RAM/XMP/EXPO, cableado GPU y PSU, Clear CMOS, Windows 11 y seguridad; fuentes oficiales y fecha visibles. Ver `docs/TECHNICAL-REVIEW.md`.
- FPG-05: cabecera y contexto de portfolio, disclaimer, tecnologías, enlace GitHub, imagen hero propia para este proyecto.
- FPG-07: checklists con IDs estables, persistencia compartida entre idiomas, validación de almacenamiento y reinicio confirmado.
- FPG-08: enlace de salto, foco, contraste, navegación con teclado, selector de idioma accesible, axe y Lighthouse local.
- FPG-09: de 11 PNG anteriores generados por IA, cinco se conservaron como WebP optimizado y seis diagramas potencialmente engañosos se sustituyeron por SVG esquemáticos. Los PNG retirados siguen recuperables en Git. Imágenes de la guía reducidas de unos 5,64 MB a 550 KB. Hero en `public/images/assembly-hero.webp`, preview social en `public/images/social-preview.webp`.
- FPG-10/11/12: paridad estructural automatizada, SEO multilingüe, sitemap/robots, seis pruebas unitarias, seis E2E y workflow CI preparado.
- README, capturas desktop/móvil y notas de QA en `docs/QA.md`.

La imagen hero se generó con `imagegen` en modo **photorealistic-natural**, para una escena editorial panorámica de montaje de PC en banco de trabajo: torre abierta, placa, disipador, RAM y manos ordenando un cable; luz natural y colores neutros/verdes, sin logos, texto ni conectores inventados. Luego se convirtió a WebP con Sharp. Se usa solo como imagen ilustrativa, no como diagrama técnico.

## Verificaciones realizadas

- Tras un `npm ci` limpio: 342 paquetes instalados, auditoría con cero vulnerabilidades.
- `npm run test`: 6/6.
- `npm run build`: correcto; Astro check con 0 errores, 0 warnings y 0 hints; EN/ES/DE y sitemap generados.
- `npm run test:e2e`: 6/6, incluyendo teclado, navegación móvil, metadatos, consola/assets, persistencia entre idiomas y axe.
- Lighthouse 13.5.0 en build local `/es/`, perfil móvil: Performance 99, Accessibility 100, Best Practices 100, SEO 100. El informe JSON quedó ignorado en `docs/lighthouse-mobile.json`. Lighthouse escribió el informe pero acabó con `EPERM` al limpiar su perfil temporal de Chrome en Windows. No son todavía métricas de producción.
- Capturas en `docs/guide-desktop.png` y `docs/guide-mobile.png`; revisión visual satisfactoria. Un diagrama de panel frontal se comprobó a tamaño móvil.

## Pasos previstos al reanudar

1. Leer esta nota y `SPRINT-01-PORTFOLIO-READY.md`; ejecutar `git status --short` y confirmar que los cambios siguen ahí.
2. Si se quiere cerrar el sprint, revisar el índice de Git. `git diff --cached --check` señala espacios de final de línea usados como saltos duros de Markdown en el sprint/baseline; decidir si normalizarlos antes del commit. No hay errores de código conocidos.
3. Repetir `npm run test`, `npm run build` y `npm run test:e2e` si hubo más cambios.
4. Con autorización renovada del usuario para continuar, crear commit, subir a GitHub y comprobar CI. No asumir que Vercel despliega automáticamente hasta verificarlo.
5. Probar `/en/`, `/es/`, `/de/`, `/`, sitemap, robots, metadatos, imágenes, enlaces, consola y móvil en Vercel. Medir Lighthouse en producción; actualizar criterios FPG-12/13 y el README si la URL cambia.
6. Crear tag/release `v1.0.0` solo cuando la publicación y la definición de terminado estén realmente cumplidas. La revisión nativa del alemán sigue como limitación explícita.

No hay servidor de vista previa local en ejecución; se cerró antes de `npm ci`.
