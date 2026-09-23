# Sprint 01 — Portfolio Ready: PC Assembly Field Guide

| Campo | Valor |
|---|---|
| Estado | Release `v1.0.0` publicada; cierre integral pendiente de CV real y prueba manual con lector de pantalla |
| Responsable | Sergio |
| Duración recomendada | 3 semanas |
| Fechas | Por definir |
| Capacidad asumida | 60 horas |
| Trabajo planificado | 48 horas (80 %) |
| Margen | 12 horas (20 %) |

> Si el trabajo se realiza únicamente por las tardes o fines de semana, mantener el alcance y ampliar la duración a 4–6 semanas.

## Seguimiento

| ID | Estado | Fecha | Notas |
|---|---|---|---|
| FPG-01 | Completado | 2026-09-22 | Baseline documentado, archivos obsoletos retirados, ignores ampliados y build verificado |
| FPG-02 | Completado | 2026-09-22 | Astro 7 y Tailwind 4 migrados; integración Tailwind antigua retirada; React 18 y TypeScript 5.9 conservados deliberadamente |
| FPG-03 | Completado | 2026-09-22 | Contenido tipado, renderizado seguro y componentes Astro reutilizables |
| FPG-04 | Completado | 2026-09-22 | Revisión de instrucciones críticas en tres idiomas; fuentes oficiales y fecha visibles |
| FPG-05 | Completado | 2026-09-22 | Presentación de portfolio, contexto independiente, imagen original y enlace al repositorio |
| FPG-06 | Completado | 2026-09-22 | Navegación compacta validada en 320, 390, 768, 1024 y 1440 px |
| FPG-07 | Completado | 2026-09-22 | IDs estables, persistencia multilingüe versionada y reset con confirmación |
| FPG-08 | Completado con escucha pendiente | 2026-09-23 | Objetivo táctil móvil corregido; teclado, axe y Lighthouse Accessibility 100. Falta prueba real con lector de pantalla |
| FPG-09 | Completado | 2026-09-22 | Diagramas engañosos reemplazados; imágenes de la guía reducidas de 5,64 MB a unos 550 KB |
| FPG-10 | Completado con limitación | 2026-09-22 | Paridad automatizada; revisión nativa del alemán pendiente y declarada en README |
| FPG-11 | Completado | 2026-09-22 | Canonical, hreflang, metadatos sociales, sitemap, robots y favicon |
| FPG-12 | Completado | 2026-09-23 | 6 tests unitarios, 7 E2E y GitHub Actions verde en `5b52bcf` |
| FPG-13 | Parcial: publicación completada | 2026-09-23 | Vercel, CI y Lighthouse verificados; entrada CV preparada en `docs/CV-ENTRY.md`, pero faltan CV real y escucha con Narrador/NVDA |

## 1. Contexto

PC Assembly Field Guide es una miniguía multilingüe de montaje de ordenadores creada como proyecto de portfolio. Su finalidad no es competir con un manual exhaustivo ni convertirse en una plataforma de formación completa.

El proyecto debe demostrar de forma verificable tres competencias profesionales:

1. Conocimiento práctico del montaje, cableado, puesta en marcha y diagnóstico inicial de ordenadores.
2. Capacidad para transformar experiencia técnica en documentación y contenido formativo comprensible.
3. Capacidad para comunicar y estructurar información en inglés, español y alemán.

La guía está inspirada en experiencia profesional real, pero es un proyecto personal e independiente. No debe presentar procedimientos internos, material confidencial, marcas o recursos pertenecientes a empleadores anteriores.

## 2. Objetivo del sprint

Convertir el MVP actual en una pieza de portfolio profesional, técnicamente correcta, accesible, rápida y presentable ante empresas de soporte informático, hardware, IT operations, despliegue de equipos y documentación técnica, manteniendo su alcance de miniguía.

## 3. Resultado esperado

Al finalizar el sprint debe existir una versión pública que permita a un reclutador entender, en menos de 30 segundos:

- qué problema resuelve la guía;
- qué experiencia profesional la inspiró;
- quién es su público objetivo;
- qué competencias técnicas y documentales demuestra;
- cómo acceder a la guía en los tres idiomas;
- dónde consultar el código fuente.

La guía debe poder utilizarse correctamente con ratón, teclado y pantalla móvil, sin errores visibles, afirmaciones técnicas engañosas ni contenido de portfolio provisional.

## 4. Público objetivo

### Público principal

- Recruiters y responsables técnicos de soporte informático.
- Empresas de montaje, reparación y despliegue de equipos.
- Equipos de IT operations y workplace support.
- Responsables de formación interna y documentación técnica.

### Público secundario

- Personas que montan su primer ordenador.
- Técnicos junior que necesitan una checklist de referencia.
- Usuarios internacionales que prefieren español, inglés o alemán.

## 5. Principios del producto

- **Sencillez:** debe seguir siendo una miniguía fácil de explorar.
- **Credibilidad:** cada afirmación técnica importante debe poder justificarse.
- **Claridad formativa:** explicar no solo qué hacer, sino por qué importa.
- **Uso real:** navegación y checklists cómodas en móvil y tablet.
- **Honestidad:** no atribuir resultados, afiliaciones o nivel lingüístico que no puedan demostrarse.
- **Mantenimiento:** evitar contenido duplicado, HTML manual y archivos residuales.
- **Privacidad:** no incorporar analítica, cookies ni recopilación de datos durante este sprint.

## 6. Alcance del sprint

### P0 — Debe estar terminado para publicar

- Posicionamiento del proyecto y explicación de su propósito profesional.
- Corrección de errores visibles de Markdown y navegación móvil.
- Revisión de precisión y seguridad del contenido técnico.
- Refactor mínimo que elimine HTML inseguro y duplicación crítica.
- Accesibilidad de checklists, navegación y selector de idioma.
- Optimización básica de imágenes y carga.
- Limpieza del repositorio y README profesional.
- Paridad estructural entre los tres idiomas.
- Compilación, pruebas esenciales y revisión final sin errores.

### P1 — Debe intentarse dentro del sprint

- Actualización controlada de dependencias principales.
- Metadatos SEO, Open Graph, `hreflang` y datos estructurados.
- Automatización de build y pruebas en CI.
- Despliegue público reproducible.
- Revisión externa del alemán.

### P2 — Backlog posterior, fuera de este sprint

- PWA y funcionamiento completamente offline.
- Modo paso a paso independiente de la página principal.
- Búsqueda avanzada.
- Exportación a PDF.
- Cuenta de usuario o sincronización en la nube.
- Backend, base de datos o panel de administración.
- Analítica de uso.
- CMS.
- Comentarios, comunidad o contenido generado por usuarios.
- Aplicación móvil nativa.

## 7. Capacidad

| Persona | Disponibilidad | Asignación planificada | Margen | Notas |
|---|---:|---:|---:|---|
| Sergio | 60 h | 48 h | 12 h | Desarrollo, contenido y QA |
| Revisor/a nativo/a de alemán | Por confirmar | No incluida | — | Dependencia externa opcional pero recomendada |
| **Total** | **60 h** | **48 h** | **12 h** | **80 % de carga** |

## 8. Backlog del sprint

| ID | Prioridad | Entregable | Estimación | Dependencias |
|---|---|---|---:|---|
| FPG-01 | P0 | Baseline, inventario y limpieza del repositorio | 2 h | Ninguna |
| FPG-02 | P1 | Actualización controlada de dependencias | 4 h | FPG-01 |
| FPG-03 | P0 | Modelo de contenido tipado y componentes reutilizables | 6 h | FPG-01; coordinar con FPG-02 |
| FPG-04 | P0 | Revisión técnica, seguridad y fuentes | 5 h | FPG-03 |
| FPG-05 | P0 | Posicionamiento de portfolio y presentación | 4 h | FPG-03 |
| FPG-06 | P0 | Navegación responsive y experiencia móvil | 4 h | FPG-03 |
| FPG-07 | P0 | Checklists robustas y persistencia multilingüe | 4 h | FPG-03 |
| FPG-08 | P0 | Accesibilidad y pulido visual | 4 h | FPG-05, FPG-06, FPG-07 |
| FPG-09 | P0 | Optimización de imágenes y rendimiento | 3 h | FPG-03 |
| FPG-10 | P0 | QA de traducciones y paridad de idiomas | 3 h | FPG-04, FPG-07 |
| FPG-11 | P1 | SEO, redes sociales y datos estructurados | 2 h | FPG-05, FPG-10 |
| FPG-12 | P1 | Pruebas automatizadas y CI | 4 h | FPG-06, FPG-07, FPG-10 |
| FPG-13 | P0 | Despliegue y QA final | 3 h | Todos los P0; preferiblemente FPG-11 y FPG-12 |
|  |  | **Total** | **48 h** |  |

---

## 9. Detalle de historias y criterios de aceptación

### FPG-01 — Baseline, inventario y limpieza del repositorio

**Historia**  
Como mantenedor, quiero partir de un repositorio limpio y reproducible para que el código publicado transmita cuidado profesional.

**Trabajo**

- Registrar el estado inicial de build, tamaño de salida y dependencias.
- Eliminar del control de versiones los archivos de backup y temporales:
  - `src/data/translations.js.backup`
  - `src/data/translations-before-multilang.js.backup`
  - `src/data/translations-expanded.js.old`
  - `src/data/translations-new-en.js`, si no contiene trabajo que deba integrarse.
  - `error.log`
- Añadir `*.log`, `*.backup` y `*.old` al `.gitignore` cuando corresponda.
- Confirmar que `dist`, `.astro` y `node_modules` siguen ignorados.
- Revisar el nombre del repositorio y recomendar uno descriptivo, por ejemplo `pc-assembly-field-guide`.
- Crear una estructura mínima para documentación y contenido si la refactorización la requiere.

**Criterios de aceptación**

- [x] No quedan backups, logs o archivos obsoletos versionados.
- [x] El repositorio tiene un nombre y una estructura comprensibles.
- [x] `npm install` y `npm run build` son reproducibles desde un clon limpio.
- [x] No se pierden datos válidos al retirar archivos antiguos.

### FPG-02 — Actualización controlada de dependencias

**Historia**  
Como mantenedor, quiero usar versiones soportadas de las herramientas para evitar que el portfolio parezca abandonado.

**Trabajo**

- Crear una rama o commit de migración independiente.
- Actualizar Astro y sus integraciones siguiendo las guías oficiales versión a versión.
- Evaluar React 19 y Tailwind 4 por separado; no introducir ambos saltos si comprometen el sprint.
- Mover herramientas de desarrollo a `devDependencies` cuando corresponda:
  - TypeScript.
  - Tipos de React.
  - Astro Check.
  - Herramientas de test, lint y formato.
- Actualizar Browserslist/caniuse cuando sea necesario.
- Ejecutar `npm audit`, `astro check` y build después de cada salto principal.
- Documentar cualquier dependencia que se mantenga temporalmente en una versión anterior.

**Criterios de aceptación**

- [x] Astro está en una versión mantenida o existe una justificación documentada.
- [x] El build no contiene errores ni warnings relevantes del proyecto.
- [x] No existen vulnerabilidades conocidas de severidad alta o crítica.
- [x] La aplicación conserva navegación, idiomas y persistencia.
- [x] El lockfile refleja exclusivamente la migración aprobada.

### FPG-03 — Modelo de contenido tipado y componentes reutilizables

**Historia**  
Como desarrollador, quiero separar contenido, presentación e interacción para que la guía sea segura y mantenible.

**Trabajo**

- Convertir `translations.js` a TypeScript o a un formato validado mediante esquema.
- Definir tipos estables para:
  - idiomas;
  - navegación;
  - secciones;
  - pasos;
  - avisos;
  - figuras;
  - checklists;
  - fuentes y fecha de revisión.
- Sustituir arrays de strings ambiguos por objetos semánticos cuando exista título y descripción.
- Eliminar la función de Markdown basada en regex.
- Eliminar todos los `set:html` que renderizan strings de traducción.
- Renderizar énfasis mediante propiedades estructuradas y elementos `<strong>` reales.
- Extraer como mínimo estos componentes Astro:
  - `SidebarNavigation.astro`
  - `GuideSection.astro`
  - `Callout.astro`
  - `StepList.astro`
  - `GuideFigure.astro`
- Mantener React solo para interacciones que lo necesiten.
- Consolidar islands de React si se puede evitar hidratar múltiples instancias independientes.
- Usar identificadores estables en vez de índices para contenido interactivo.

**Criterios de aceptación**

- [x] No aparece `**texto**` de forma literal en ninguna página.
- [x] No se usa `set:html` con contenido procedente de traducciones.
- [x] Los tres idiomas cumplen el mismo esquema en compilación.
- [x] La página principal deja de contener bloques visuales repetidos.
- [x] Los cambios de contenido no requieren modificar el layout.
- [x] TypeScript detecta claves o secciones ausentes.

### FPG-04 — Revisión técnica, seguridad y fuentes

**Historia**  
Como lector, quiero recibir instrucciones correctas y prudentes para no dañar componentes ni tomar decisiones basadas en información desactualizada.

**Trabajo**

- Revisar todas las instrucciones con documentación oficial actual.
- Corregir o matizar, como mínimo:
  - XMP/EXPO como perfil de overclocking validado, no como “no overclocking”.
  - Velocidad JEDEC por defecto sin afirmar que toda RAM funciona a 2133 MHz.
  - 12VHPWR frente al conector 12V-2x6 actual.
  - Requisitos TPM 2.0, UEFI y Secure Boot de Windows 11.
  - Uso de Rufus para hardware no compatible; moverlo a nota avanzada o retirarlo.
  - Selección de controladores desde OEM, fabricante de placa, AMD, Intel o NVIDIA según el dispositivo.
  - Procedimiento de Clear CMOS, incluida la necesidad de desconectar alimentación y consultar el manual.
  - Montaje de I/O shield, aclarando que muchas placas lo integran.
  - Uso de cables PCIe/CPU y prohibición de mezclar cables modulares de distintas fuentes.
  - Inserción completa y sin dobleces extremos de conectores de alta potencia para GPU.
- Evitar tiempos absolutos de instalación o pruebas cuando dependan del hardware.
- Añadir avisos que diferencien recomendación general y manual específico del fabricante.
- Añadir a cada sección una fecha de última revisión o una fecha global visible.
- Crear una sección de fuentes con enlaces oficiales y fecha de consulta.
- Añadir aviso de que la guía no sustituye el manual de cada componente.

**Criterios de aceptación**

- [x] No quedan afirmaciones técnicas conocidas como falsas o engañosas tras la revisión documentada.
- [x] Las acciones con riesgo de daño incluyen advertencias claras.
- [x] Las fuentes principales son fabricantes, Microsoft, Intel, AMD, PCI-SIG u otras entidades oficiales.
- [x] La fecha de revisión es visible.
- [x] El contenido deja claro cuándo debe consultarse el manual de la placa, caja, PSU o disipador.

### FPG-05 — Posicionamiento de portfolio y presentación

**Historia**  
Como recruiter, quiero entender rápidamente el contexto del proyecto para relacionarlo con las capacidades profesionales del candidato.

**Trabajo**

- Rediseñar el encabezado inicial para incluir:
  - nombre del proyecto;
  - descripción de una frase;
  - propósito;
  - selector de idioma;
  - CTA “Abrir la guía” o salto a la primera sección;
  - enlace al repositorio, cuando se proporcione.
- Añadir una sección breve “Sobre este proyecto” que explique:
  - que surge de experiencia práctica montando ordenadores;
  - que demuestra conocimiento de hardware y documentación técnica;
  - que está pensada para técnicos junior y primeros montajes;
  - que es un proyecto personal e independiente.
- Añadir el aviso:

  > Independent portfolio project. Not affiliated with or endorsed by any previous employer.

- Evitar logos, nombres comerciales o afirmaciones que sugieran afiliación con Mindfactory, Bechtle u otros empleadores.
- Añadir una sección compacta de tecnologías: Astro, React, TypeScript y Tailwind.
- Añadir enlaces profesionales solo cuando el propietario facilite las URLs definitivas.
- Sustituir el pie genérico por autoría, propósito y enlaces relevantes.
- Mantener una identidad visual técnica y sobria, sin convertir la guía en una landing comercial exagerada.

**Criterios de aceptación**

- [x] El propósito se comprende antes de hacer scroll.
- [x] La experiencia profesional se comunica sin revelar información privada ni empresarial.
- [x] Se distinguen claramente la presentación del proyecto y la guía formativa.
- [x] No hay enlaces provisionales, `YOUR_USERNAME` ni textos genéricos.
- [x] El proyecto no se presenta como producto oficial de un antiguo empleador.

### FPG-06 — Navegación responsive y experiencia móvil

**Historia**  
Como usuario móvil, quiero acceder rápidamente a la guía sin que la navegación ocupe la primera pantalla completa.

**Trabajo**

- Implementar menú móvil mediante botón hamburguesa.
- Usar los iconos `Menu` y `X` o eliminarlos si se elige otra solución.
- Añadir nombre y estado accesible al botón.
- Cerrar el menú al:
  - elegir una sección;
  - pulsar Escape;
  - pulsar fuera del panel, si se usa overlay.
- Mantener el encabezado móvil compacto y sticky.
- Evitar scroll del fondo cuando un panel modal esté abierto.
- Mantener sidebar sticky en escritorio.
- Señalar visualmente la sección activa si puede hacerse sin complejidad excesiva.
- Corregir offsets de anclas teniendo en cuenta el header sticky.
- Verificar layouts de 320, 390, 768, 1024 y 1440 px.
- Comprobar que títulos y listas no generan overflow horizontal.

**Criterios de aceptación**

- [x] En 390 × 844 px el contenido principal aparece en la primera pantalla.
- [x] El menú se puede abrir, cerrar y operar con teclado.
- [x] Todos los enlaces internos llevan a la sección correcta.
- [x] No hay scroll horizontal en los breakpoints definidos.
- [x] La navegación sigue siendo legible con textos alemanes largos.

### FPG-07 — Checklists robustas y persistencia multilingüe

**Historia**  
Como usuario, quiero que mi progreso se conserve al recargar y al cambiar de idioma para poder usar la guía durante un montaje real.

**Trabajo**

- Definir un ID estable para cada elemento de checklist.
- Sustituir persistencia basada en índices por persistencia basada en IDs.
- Usar una clave común entre idiomas para que el progreso no se pierda al cambiar de lengua.
- Versionar el formato de `localStorage` para permitir futuras migraciones.
- Validar los datos recuperados antes de aplicarlos.
- Evitar escribir un estado vacío antes de terminar la hidratación.
- Usar checkboxes nativos o semántica equivalente correctamente anunciada.
- Añadir barra de progreso con:
  - `role="progressbar"`;
  - `aria-valuemin`;
  - `aria-valuemax`;
  - `aria-valuenow`;
  - etiqueta localizada.
- Añadir “Reiniciar progreso” con confirmación local no destructiva accidental.
- Decidir y documentar qué ocurre si cambia o desaparece un paso.

**Criterios de aceptación**

- [x] El progreso persiste tras recargar.
- [x] El progreso se conserva al cambiar entre EN, ES y DE.
- [x] Reordenar un checklist no asigna checks a pasos incorrectos.
- [x] Datos corruptos en `localStorage` no rompen la interfaz.
- [x] El estado seleccionado/no seleccionado se anuncia a lectores de pantalla.
- [x] El usuario puede reiniciar el progreso de forma deliberada.

### FPG-08 — Accesibilidad y pulido visual

**Historia**  
Como usuario con distintas necesidades de acceso, quiero navegar y comprender la guía sin depender del ratón, del color o de una visión perfecta.

**Trabajo**

- Añadir enlace “Saltar al contenido”.
- Revisar jerarquía `h1`–`h4` sin saltos incorrectos.
- Añadir estilos de foco visibles y consistentes.
- Corregir el contraste del verde principal para alcanzar WCAG 2.1 AA en texto normal.
- No depender solo del rojo o verde para comunicar estado.
- Marcar iconos decorativos con `aria-hidden="true"`.
- Proporcionar nombre accesible a los iconos informativos cuando transmitan significado.
- Mejorar el selector de idioma con:
  - enlaces reales;
  - nombre localizado;
  - `aria-current` para el idioma activo;
  - `aria-expanded` y `aria-controls` si mantiene formato desplegable;
  - operación mediante teclado.
- Verificar targets táctiles de al menos 44 × 44 px.
- Respetar `prefers-reduced-motion`.
- Revisar texto alternativo para que describa la información del diagrama, no solo su título.
- Permitir ampliar diagramas con texto pequeño o proporcionar descripción textual equivalente.

**Criterios de aceptación**

- [x] Los controles principales se pueden operar solo con teclado; ver pruebas E2E.
- [x] No se observaron trampas de foco en la revisión de navegación.
- [x] El contraste de texto cumple WCAG AA en la revisión automatizada.
- [x] Lighthouse Accessibility local alcanza 100.
- [x] Una revisión con axe no presenta incidencias críticas o serias.
- [x] El estado de los controles interactivos resulta comprensible sin color.

### FPG-09 — Optimización de imágenes y rendimiento

**Historia**  
Como usuario móvil, quiero que la guía cargue rápidamente sin descargar todas las ilustraciones de inmediato.

**Trabajo**

- Confirmar propiedad, licencia o procedencia de cada ilustración.
- Sustituir imágenes que contengan texto incorrecto, ilegible o estilos incoherentes.
- Mover imágenes optimizables desde `public` a `src/assets`.
- Usar el componente `Image` de Astro.
- Generar WebP o AVIF manteniendo un fallback cuando sea necesario.
- Definir `width`, `height`, `sizes` y variantes responsive.
- Usar lazy loading para imágenes fuera de la primera pantalla.
- Evitar que texto formativo esencial exista únicamente dentro de una imagen.
- Comprimir las ilustraciones sin degradar etiquetas o conectores.
- Añadir captions consistentes y localizados.

**Objetivos de rendimiento**

- Peso total de imágenes optimizadas claramente inferior a los 5,64 MB actuales.
- Payload inicial móvil inferior a 500 KB siempre que las mediciones reales lo permitan.
- Lighthouse Performance móvil ≥ 90 en build de producción.
- Sin cambios de layout perceptibles causados por imágenes.

**Criterios de aceptación**

- [x] Todas las imágenes tienen dimensiones intrínsecas.
- [x] Las imágenes fuera del viewport usan lazy loading.
- [x] La procedencia de los recursos está documentada en el README.
- [x] Los diagramas esquemáticos se revisaron en móvil y el texto esencial está también fuera de la imagen.
- [x] Se registran métricas antes y después de la optimización en `docs/BASELINE.md` y `docs/QA.md`.

Se optó por SVG y WebP de dimensiones fijas en `public/images/` en vez de introducir variantes generadas por Astro: las ilustraciones son cuadradas y los diagramas SVG son vectoriales. Es una desviación deliberada del método previsto, no del objetivo de optimización.

### FPG-10 — QA de traducciones y paridad de idiomas

**Historia**  
Como usuario internacional, quiero recibir la misma guía y calidad independientemente del idioma elegido.

**Trabajo**

- Corregir la diferencia actual de la checklist de arranque: 7 pasos en inglés frente a 6 en español y alemán.
- Automatizar la comprobación de claves, IDs y número de elementos equivalentes.
- Localizar todos los textos de interfaz, incluidos:
  - selector de idioma;
  - checklist;
  - progreso;
  - reinicio;
  - navegación móvil;
  - fechas y fuentes;
  - mensajes de error.
- Revisar consistencia terminológica:
  - motherboard / placa base / Mainboard;
  - power supply / fuente de alimentación / Netzteil;
  - headers / cabezales o conectores / Header o Anschlüsse;
  - deployment / preparación o entrega / Bereitstellung.
- Revisar gramática y estilo en español e inglés.
- Solicitar revisión del alemán a una persona nativa o declarar visiblemente que está pendiente de revisión profesional.
- Mantener IDs internos independientes del texto traducido.

**Criterios de aceptación**

- [x] Los tres idiomas tienen la misma estructura funcional.
- [x] Los textos de interfaz traducibles están en el modelo de contenido; nombres propios y tecnologías se comparten.
- [x] Cambiar de idioma no provoca redirects innecesarios ni pérdida del anchor cuando sea posible.
- [x] El atributo `lang` del documento coincide con la página.
- [x] La revisión nativa del alemán está pendiente y documentada honestamente en el README.

### FPG-11 — SEO, redes sociales y datos estructurados

**Historia**  
Como recruiter que recibe el enlace, quiero obtener una vista previa profesional y encontrar la versión lingüística correcta.

**Trabajo**

- Definir título y descripción únicos por idioma.
- Añadir URL canonical.
- Añadir `hreflang` para `en`, `es`, `de` y `x-default`.
- Añadir Open Graph y Twitter Card.
- Crear una imagen social 1200 × 630 original y coherente con el proyecto.
- Añadir `robots.txt` y sitemap.
- Evaluar schema.org `HowTo`; usarlo solo si la página y el contenido cumplen realmente el formato.
- Añadir `theme-color` y favicon final.
- Definir comportamiento de `/`: página de presentación o redirección documentada al idioma por defecto.
- No realizar redirecciones invasivas basadas únicamente en el idioma del navegador.

**Criterios de aceptación**

- [x] Cada idioma tiene metadatos coherentes.
- [x] Las URLs canonical y alternates apuntan a producción.
- [x] La vista previa social contiene título, descripción e imagen correctos en el build local.
- [x] Sitemap y robots se generan correctamente; falta comprobar sus respuestas en Vercel.
- [x] No se publica schema engañoso o incompleto.

### FPG-12 — Pruebas automatizadas y CI

**Historia**  
Como mantenedor, quiero detectar regresiones antes de publicar para que una modificación de contenido no rompa idiomas o interacción.

**Trabajo**

- Añadir pruebas unitarias para:
  - esquema y paridad de traducciones;
  - IDs duplicados;
  - cálculo de progreso;
  - recuperación de datos corruptos;
  - migración de `localStorage`.
- Añadir pruebas E2E para:
  - carga de `/en`, `/es` y `/de`;
  - apertura y cierre del menú móvil;
  - navegación a una sección;
  - cambio de idioma;
  - marcar un paso, recargar y conservarlo;
  - conservar progreso al cambiar de idioma;
  - reiniciar progreso.
- Añadir scripts claros:
  - `npm run check`
  - `npm run test`
  - `npm run test:e2e`
  - `npm run build`
- Configurar CI para instalación limpia, check, tests y build.
- Activar caché de npm sin comprometer reproducibilidad.

**Criterios de aceptación**

- [x] El pipeline se ejecuta en push y pull request; primera ejecución remota verde.
- [x] Un idioma incompleto hace fallar el pipeline.
- [x] Las rutas y checklists principales tienen cobertura E2E.
- [x] El build de producción es obligatorio para aprobar CI.
- [x] No se incorporan snapshots frágiles de toda la página.

### FPG-13 — Despliegue y QA final

**Historia**  
Como candidato, quiero compartir una URL estable y profesional que funcione igual que la versión revisada localmente.

**Trabajo**

- Elegir hosting estático:
  - recomendado: GitHub Pages si se busca sencillez y relación directa con el repositorio;
  - alternativa: Cloudflare Pages, Netlify o Vercel.
- Configurar `site`, base path y generación de URLs absolutas.
- Añadir dominio personalizado solo si ya existe uno apropiado.
- Probar la URL de producción en móvil y escritorio.
- Verificar enlaces, anchors, assets y rutas de idioma con acceso directo.
- Ejecutar Lighthouse en producción.
- Revisar consola y red sin errores 404 o JavaScript.
- Probar teclado, contraste y lector de pantalla básico.
- Revisar el contenido final como recruiter durante 30 segundos.
- Crear tag/release `v1.0.0` cuando se cumpla la Definition of Done.

**Criterios de aceptación**

- [x] Existe una URL pública estable con HTTPS.
- [x] Las rutas profundas `/en`, `/es` y `/de` funcionan al abrirlas directamente.
- [x] No hay errores en consola ni recursos ausentes en el smoke test de producción.
- [x] Lighthouse alcanza los objetivos acordados en la medición móvil de producción.
- [ ] El README utiliza la URL definitiva; el CV externo debe actualizarlo Sergio.
- [x] La release publicada corresponde al commit `7dcfe0f`.
- [ ] Prueba de escucha básica con Narrador o NVDA realizada y documentada; ver `docs/ACCESSIBILITY-AUDIT.md`.

---

## 10. README requerido

El README final debe contener:

1. Nombre y captura principal del proyecto.
2. Descripción del problema y motivación profesional.
3. Demo pública.
4. Características reales, sin mencionar Nano Stores si no se utiliza.
5. Tecnologías y arquitectura breve.
6. Idiomas disponibles.
7. Instalación y scripts verificados.
8. Estructura del proyecto.
9. Decisiones de accesibilidad y rendimiento.
10. Fuentes técnicas y política de revisión.
11. Licencia del código.
12. Créditos/licencias de imágenes.
13. Estado de las traducciones.
14. Disclaimer de proyecto independiente.
15. Roadmap corto con elementos realmente previstos.

No debe contener:

- `YOUR_USERNAME`;
- funcionalidades inexistentes;
- badges falsos;
- métricas no medidas;
- claims de afiliación empresarial;
- instrucciones que no funcionen desde un clon limpio.

## 11. Definition of Done global

- [ ] Los P0 técnicos del sitio están terminados; falta actualizar el CV real y escuchar el flujo con Narrador/NVDA.
- [x] `npm ci` funciona desde una instalación limpia en CI.
- [x] `npm run check` termina sin errores.
- [x] Tests unitarios y E2E pasan.
- [x] Build de producción correcto.
- [x] CI verde.
- [x] Sin errores ni warnings relevantes en consola.
- [x] EN, ES y DE tienen paridad estructural.
- [x] No se muestran marcadores Markdown literales.
- [x] No se renderiza HTML sin sanitizar desde traducciones.
- [x] Navegación móvil validada desde 320 px.
- [x] Flujo principal operable solo con teclado en los controles verificados.
- [x] Sin problemas críticos/serios en axe.
- [x] Lighthouse móvil en producción tras el último ajuste: Performance 97, Accessibility 100, Best Practices 100 y SEO 100.
- [x] Imágenes optimizadas, con dimensiones, alt y procedencia documentada.
- [x] Contenido técnico revisado y fechado.
- [x] README actualizado con demo y capturas reales.
- [x] URL pública HTTPS disponible.
- [x] Disclaimer de proyecto independiente visible.
- [x] Revisión del texto realizada; revisión nativa del alemán pendiente y documentada.
- [x] Tag `v1.0.0` creado y publicado.

## 12. Plan de ejecución recomendado

### Semana 1 — Base técnica y contenido

- FPG-01: baseline y limpieza.
- FPG-02: actualización de dependencias.
- FPG-03: modelo de contenido y componentes.
- Inicio de FPG-04: revisión técnica.

**Hito:** build estable con contenido tipado y sin Markdown roto.

### Semana 2 — Experiencia y presentación

- Finalizar FPG-04.
- FPG-05: posicionamiento de portfolio.
- FPG-06: navegación responsive.
- FPG-07: checklists.
- FPG-08: accesibilidad y pulido.
- FPG-09: optimización de imágenes.

**Hito:** versión visualmente presentable y usable en móvil.

### Semana 3 — Calidad y publicación

- FPG-10: QA multilingüe.
- FPG-11: SEO y previews.
- FPG-12: tests y CI.
- FPG-13: despliegue y QA final.

**Hito:** release pública `v1.0.0` lista para CV.

## 13. Estrategia de commits recomendada

Mantener commits pequeños y explicativos. Ejemplo:

1. `chore: remove obsolete files and document baseline`
2. `chore: upgrade astro and official integrations`
3. `refactor: introduce typed multilingual guide content`
4. `refactor: extract reusable guide components`
5. `docs: correct hardware guidance and add official sources`
6. `feat: add portfolio introduction and project context`
7. `feat: implement accessible mobile navigation`
8. `feat: persist checklist progress with stable ids`
9. `fix: improve accessibility and color contrast`
10. `perf: optimize responsive guide images`
11. `fix: align english spanish and german content`
12. `feat: add localized seo metadata`
13. `test: cover navigation languages and checklist persistence`
14. `ci: validate checks tests and production build`
15. `docs: finalize readme for portfolio release`

Evitar un único commit que mezcle contenido, dependencias, diseño y tests.

## 14. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Actualización de varias versiones mayores de Astro | Puede romper integración, build o estilos | Migrar por etapas y aislar en commit propio |
| Revisión técnica más amplia de lo previsto | Retrasa UX y publicación | Priorizar afirmaciones de seguridad y contenido visible |
| Alemán no revisado por una persona nativa | Reduce credibilidad ante empresas alemanas | Marcar revisión pendiente o contratar/intercambiar revisión breve |
| Imágenes sin licencia o procedencia demostrable | Impide una publicación profesional | Sustituirlas por diagramas originales o documentar licencia |
| Scope creep | El sprint se convierte en una plataforma completa | Respetar explícitamente el apartado “fuera de alcance” |
| Refactor de contenido demasiado grande | Consume el margen y retrasa la release | Priorizar esquema tipado y componentes repetidos; posponer MDX/CMS |
| Persistencia incompatible con datos antiguos | El progreso previo se pierde o se asigna mal | Versionar storage y definir una migración o reset controlado |
| Fuentes oficiales cambian | El contenido vuelve a quedar obsoleto | Mostrar fecha de revisión y centralizar referencias |

## 15. Decisiones pendientes del propietario

Estas decisiones no bloquean el inicio del sprint, pero deben resolverse antes de FPG-13:

- [x] Nombre público usado: PC Assembly Field Guide.
- [x] Nombre del repositorio conservado: `pc-assembly-standard`.
- [x] URL de GitHub proporcionada y enlazada.
- [x] Hosting elegido: Vercel.
- [ ] Dominio propio, si existe.
- [ ] Nombre que aparecerá como autor.
- [ ] Enlaces a portfolio, GitHub o LinkedIn.
- [ ] Licencia del código; MIT es una opción razonable para portfolio.
- [x] Procedencia de las imágenes documentada; se usan recursos originales del proyecto, generados por IA o SVG propios.
- [x] Se usa una formulación genérica de experiencia práctica, sin atribuir el proyecto a Mindfactory.
- [ ] Persona disponible para revisar el alemán.

## 16. Métricas de éxito

### Calidad técnica

- Build y CI verdes.
- Cero errores de consola.
- Cero diferencias estructurales entre idiomas.
- Cero incidencias críticas/serias de accesibilidad.
- Dependencias sin vulnerabilidades altas o críticas conocidas.

### Rendimiento

- Lighthouse móvil Performance ≥ 90.
- Payload inicial móvil inferior a 500 KB cuando sea viable.
- Reducción significativa respecto a los 5,64 MB actuales de imágenes.

### Portfolio

- Un recruiter entiende el propósito en menos de 30 segundos.
- Demo, código y contexto están accesibles desde el README.
- La relación entre experiencia en hardware y documentación formativa es explícita.
- El proyecto puede describirse honestamente en una línea de CV.

## 17. Copy base para el proyecto

### Español

> Guía compacta y multilingüe basada en mi experiencia práctica montando ordenadores. El proyecto combina conocimientos de hardware, documentación técnica y creación de contenido formativo accesible para equipos internacionales.

### Inglés

> A concise, multilingual training guide based on my hands-on experience assembling desktop computers. The project combines practical hardware knowledge, technical documentation and accessible learning content for international teams.

### Alemán

> Eine kompakte, mehrsprachige Montageanleitung, die auf meiner praktischen Erfahrung in der PC-Montage basiert. Das Projekt verbindet technisches Hardwarewissen mit verständlicher Dokumentation und Schulungsmaterialien für internationale Teams.

> El texto alemán debe considerarse copy inicial y pasar por revisión nativa antes de la publicación definitiva.

## 18. Texto propuesto para el CV tras completar el sprint

> **PC Assembly Field Guide — Proyecto personal**  
> Diseñé y desarrollé una guía formativa multilingüe de montaje, cableado y configuración de ordenadores basada en mi experiencia profesional. Estructuré procedimientos técnicos, advertencias y checklists interactivas para usuarios con distintos niveles de experiencia. Desarrollada con Astro, React y TypeScript.
