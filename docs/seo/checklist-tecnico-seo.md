# Checklist Técnico SEO — THIASA Reformas

> Lista accionable para corregir y mantener el SEO técnico del sitio.
> Marcar cada ítem a medida que se complete.

---

## Nivel CRÍTICO (arreglar antes de escalar contenido)

### Metadata de páginas de servicio
- [x] Crear `src/app/servicios/reformas-integrales/metadata.ts` con title, description y OpenGraph específicos.
- [x] Crear `src/app/servicios/reformas-banos-cocinas/metadata.ts` con title, description y OpenGraph específicos.
- [x] Refactorizar ambas páginas para que `page.tsx` no sea `"use client"` a nivel de exportación de metadata (extraer lógica cliente a subcomponentes si es necesario).
- [ ] Verificar en el HTML renderizado que cada servicio tiene title único.
- [ ] Verificar que las meta descriptions de servicio miden entre 140–155 caracteres.

### Corrección de errores
- [x] Corregir typo de email en `src/components/contact.tsx`: cambiar `mailto:info@thasa.es` por `mailto:info@thiasa.es`.
- [x] Corregir email inconsistente en `src/app/politica-privacidad/page.tsx`: usar `info@thiasa.es` en lugar de `contacto@thiasa.es`.
- [x] Acortar meta description de la home a ≤ 155 caracteres.

### Indexabilidad
- [ ] Confirmar que ninguna página importante tiene `noindex`.
- [ ] Confirmar que `robots.ts` permite indexar `/servicios/*`.
- [ ] Confirmar que `sitemap.ts` incluye todas las URLs indexables.

---

## Nivel ALTO (mejorar antes del lanzamiento del blog)

### Páginas faltantes
- [x] Crear `/servicios/reformas-locales-comerciales` con metadata, H1, contenido y CTA.
- [x] Crear `/blog` (índice de artículos).
- [x] Crear `/blog/[slug]` (página dinámica para artículos).
- [ ] Crear al menos una página de artículo de prueba para validar el render.

### Datos estructurados
- [x] Ampliar JSON-LD en `layout.tsx` a `LocalBusiness` completo con:
  - [x] `areaServed` (Madrid + municipios del entorno)
  - [ ] `geo` (latitud/longitud aproximada de Madrid)
  - [ ] `openingHoursSpecification`
  - [x] `contactPoint` con opciones de contacto
- [x] Añadir schema `Service` en cada página de servicio.
- [x] Añadir `BreadcrumbList` en todas las páginas (home, servicios, artículos, legales).
- [ ] Cuando exista blog, añadir schema `Article` con author, datePublished, dateModified, image.
- [ ] Validar schemas en [Google Rich Results Test](https://search.google.com/test/rich-results) y [Schema.org Validator](https://validator.schema.org/).

### Sitemap
- [x] Actualizar `sitemap.ts` para incluir `/servicios/reformas-locales-comerciales`.
- [x] Preparar `sitemap.ts` para incluir dinámicamente las URLs del blog.
- [ ] Enviar/verificar sitemap en Google Search Console.

### Enlaces internos
- [x] Añadir enlace al nuevo servicio de locales comerciales en navbar, footer y home.
- [ ] Asegurar que cada servicio enlaza a los demás servicios relacionados.
- [x] Crear estructura de breadcrumbs visibles o schema.

### SEO on-page
- [ ] Añadir "Madrid" al H1 de `/servicios/instalaciones-electricas-fontaneria`.
- [ ] Revisar que cada página tenga un único `<h1>`.
- [ ] Revisar jerarquía lógica de H2/H3 en todas las páginas.
- [ ] Mejorar alt text de imágenes decorativas que usan textos genéricos.

---

## Nivel MEDIO (mejoras importantes, no bloqueantes)

### Contenido y E-E-A-T
- [ ] Crear página `/sobre-nosotros` o `/empresa` con historia, equipo, valores.
- [ ] Añadir sección de testimonios/reseñas en home o página dedicada.
- [ ] Añadir sección FAQ en home o página `/preguntas-frecuentes`.
- [ ] Incluir rangos orientativos de precios en las páginas de servicio.
- [ ] Añadir casos prácticos narrados (texto + imágenes).

### Imágenes
- [ ] Renombrar archivos con extensión incorrecta (`hero-bg.png`, `consultation.png`, `projects/*.png` → `.jpg`).
- [ ] Generar versiones de imágenes de proyecto de mayor resolución para desktop (mínimo 1200–1600px de ancho).
- [ ] Optimizar `hero-bg` a resolución adecuada para fullscreen (1920x1080 mínimo) y peso < 300KB.
- [ ] Revisar que todas las imágenes usen `next/image` con `width`/`height` o `fill` + contenedor.
- [ ] Añadir `loading="lazy"` a imágenes below the fold.
- [ ] Comprimir imágenes sin pérdida visible (WebP/AVIF si es posible).

### Local SEO
- [ ] Verificar/crear Google Business Profile para THIASA.
- [ ] Añadir enlace al Google Business Profile en footer/contacto.
- [ ] Incrustar mapa de Google Maps en sección de contacto.
- [ ] Añadir schema `areaServed` con barrios/municipios.
- [ ] Mantener NAP consistente en todo el sitio.

### Rendimiento
- [ ] Ejecutar Lighthouse y PageSpeed Insights en home y páginas de servicio.
- [ ] Medir LCP, CLS, INP.
- [ ] Optimizar LCP reduciendo peso del hero background.
- [ ] Revisar animaciones que puedan afectar INP en móvil.
- [ ] Configurar headers de seguridad en `next.config.ts` (HSTS, X-Frame-Options, etc.).

---

## Nivel BAJO (mejoras para más adelante)

### Contenido avanzado
- [ ] Separar `/servicios/reformas-de-banos` y `/servicios/reformas-de-cocinas` si el volumen de búsqueda lo justifica.
- [ ] Crear landings por zona (`/reformas-madrid/[barrio]`) si el blog de zonas funciona.
- [ ] Añadir vídeos de proyectos (optimizados).

### Técnico avanzado
- [ ] Implementar Internationalization si se amplía a otras provincias.
- [ ] Añadir página 404 personalizada.
- [ ] Implementar Service Worker/PWA si aporta valor.
- [ ] Configurar redirecciones 301 si se renombran slugs.
- [ ] Implementar canonicals explícitos si se duplican URLs por parámetros.

### Analytics y medición
- [ ] Verificar dominio en Google Search Console.
- [ ] Configurar Google Analytics 4 o similar.
- [ ] Añadir eventos de seguimiento en clicks de WhatsApp, teléfono y formulario.
- [ ] Crear informe mensual de KPIs.

---

## Verificación final pre-lanzamiento

Antes de declarar el sitio "listo para escalar SEO":

- [ ] Todas las páginas de servicio tienen metadata única y correcta.
- [ ] El sitemap incluye todas las URLs públicas.
- [ ] Los schemas validan sin errores.
- [ ] No hay enlaces rotos.
- [ ] El email de contacto es correcto en todo el sitio.
- [ ] Las imágenes principales no se pixelan en desktop.
- [ ] El blog renderiza correctamente un artículo de prueba.
- [ ] Lighthouse SEO ≥ 90 en home y servicios principales.
