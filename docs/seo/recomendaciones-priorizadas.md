# Recomendaciones Priorizadas — THIASA Reformas SEO

> Tareas ordenadas por impacto y urgencia para preparar la web antes de escalar contenido.

> **Estado:** los puntos de Alta prioridad han sido corregidos el 2026-07-10. Quedan pendientes mejoras de Media y Baja prioridad.

---

## Alta prioridad

> Cosas que conviene corregir antes de empezar fuerte con el blog.

### 1. ✅ Arreglar metadata de las páginas de servicio sin metadata propia

**Estado:** Completado.

**Archivos modificados:**
- `src/app/servicios/reformas-integrales/page.tsx` → Server Component con metadata.
- `src/app/servicios/reformas-integrales/service-client.tsx` → componente cliente con la lógica interactiva.
- `src/app/servicios/reformas-banos-cocinas/page.tsx` → Server Component con metadata.
- `src/app/servicios/reformas-banos-cocinas/service-client.tsx` → componente cliente con la lógica interactiva.

**Metadata aplicada:**
- Reformas integrales: "Reformas Integrales de Viviendas en Madrid | THIASA"
- Baños y cocinas: "Reforma de Baños y Cocinas en Madrid | THIASA"

**Impacto:** alto. Estas son las páginas más importantes para captar reformas integrales y baños/cocinas.

---

### 2. ✅ Corregir typo de email en la sección de contacto

**Estado:** Completado.

**Archivo:** `src/components/contact.tsx`

**Cambio realizado:** `mailto:info@thasa.es` → `mailto:info@thiasa.es`

**Impacto:** alto. Un email incorrecto puede hacer perder consultas y daña la imagen profesional.

---

### 3. ✅ Acortar meta description de la home

**Estado:** Completado.

**Archivo:** `src/app/layout.tsx`

**Description final:** "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería y carpintería. Presupuesto gratis en 24h."

**Impacto:** medio-alto. Mejora CTR en resultados de búsqueda.

---

### 4. ✅ Crear la página `/servicios/reformas-locales-comerciales`

**Estado:** Completado.

**Archivos creados:**
- `src/app/servicios/reformas-locales-comerciales/page.tsx` (metadata inline + contenido)

**Contenido:** H1 claro, tipos de locales (tiendas, restaurantes, oficinas), CTA de WhatsApp/teléfono y schema Service.

**Impacto:** alto. Habilita un nuevo nicho comercial y evita enlaces rotos desde el blog.

---

### 5. ✅ Preparar la estructura del blog

**Estado:** Completado.

**Archivos creados:**
- `src/app/blog/page.tsx` (índice)
- `src/app/blog/[slug]/page.tsx` (artículo dinámico)
- `src/lib/posts.ts` (utilidad para leer posts desde `/content/blog`)

**Dependencias instaladas:** `gray-matter`, `remark`, `remark-html`

**Requisitos técnicos cumplidos:**
- Lectura de archivos `.md` desde `/content/blog/`.
- Metadata dinámica desde frontmatter.
- Schema `Article` y `BreadcrumbList`.
- URL `/blog` añadida al `sitemap.ts`.

**Impacto:** alto. Sin esto no se pueden publicar artículos.

---

### 6. ✅ Mejorar datos estructurados

**Estado:** Completado (base).

**Archivo:** `src/app/layout.tsx`

**Acciones realizadas:**
- Cambiado `HomeAndConstructionBusiness` por `LocalBusiness` completo.
- Añadido `areaServed` con Madrid y municipios del entorno.
- Añadido `contactPoint` con teléfono.
- Añadida dirección postal completa (Av. De Los Apóstoles 53ºA, 28011 Madrid).

**Acciones en páginas de servicio:**
- Añadido schema `Service` en las 6 páginas de servicio.
- Añadido `BreadcrumbList` en las 6 páginas de servicio y en el blog.

**Impacto:** medio-alto. Mejora la interpretación de Google y la aparición en rich results.

---

## Media prioridad

> Mejoras importantes pero no bloqueantes para empezar.

### 7. Crear página "Sobre nosotros" / empresa

**Ruta sugerida:** `/sobre-nosotros`

**Contenido:** historia desde 2010, equipo, valores, proceso de trabajo, fotos reales del equipo si es posible.

**Impacto:** medio. Refuerza E-E-A-T y confianza.

---

### 8. Añadir sección de FAQ o página `/preguntas-frecuentes`

**Formato:** 8–10 preguntas clave con respuestas breves.

**Ejemplos:**
- ¿Cuánto cuesta una reforma integral en Madrid?
- ¿Necesito licencia para reformar mi piso?
- ¿Cuánto tarda una reforma de baño?

**Impacto:** medio. Puede generar rich snippets y captar tráfico informativo.

---

### 9. Optimizar imágenes principales

**Acciones:**
- Renombrar `hero-bg.png`, `consultation.png`, `projects/*.png` a `.jpg`.
- Generar hero background de mayor resolución (mínimo 1920x1080, comprimido).
- Subir resolución de imágenes de proyecto para desktop (mínimo 1200–1600px de ancho).
- Verificar compresión y formatos (WebP/AVIF si es viable).

**Impacto:** medio. Mejora percepción de calidad y posiblemente Core Web Vitals.

---

### 10. Mejorar contenido de las páginas de servicio más finas

**Páginas:** instalaciones, carpintería, pintura/pladur.

**Acciones:**
- Añadir más texto descriptivo (proceso, beneficios, marcas/materiales).
- Incluir CTA adicionales.
- Añadir enlaces internos entre servicios.

**Impacto:** medio. Mejora relevancia semántica y conversión.

---

### 11. Añadir testimonios o reseñas

**Opciones:**
- Sección en home con 3 testimonios reales.
- Enlace a reseñas de Google.
- Schema `AggregateRating` si se dispone de puntuación media real.

**Impacto:** medio. Aumenta confianza y CTR.

---

### 12. Configurar Google Business Profile y enlazarlo

**Acciones:**
- Verificar/crear perfil de THIASA en Madrid.
- Añadir enlace en footer y/o contacto.
- Incluir el perfil en schema `sameAs`.

**Impacto:** medio-alto para SEO local a medio plazo.

---

### 13. Implementar tracking de conversiones

**Eventos recomendados:**
- Click en WhatsApp
- Click en teléfono
- Envío de formulario
- Click en "Ver proyectos"

**Herramientas:** Google Analytics 4, Google Tag Manager o eventos directos.

**Impacto:** medio. Permite medir el retorno del contenido.

---

## Baja prioridad

> Mejoras recomendadas para más adelante.

### 14. Separar baños y cocinas en páginas propias

**Rutas:** `/servicios/reformas-de-banos`, `/servicios/reformas-de-cocinas`

**Motivo:** cada uno tiene su propia keyword de alto valor.

**Impacto:** medio, pero requiere trabajo de diseño y contenido.

---

### 15. Añadir mapa de Google Maps en contacto

**Impacto:** bajo-medio. Refuerza señal local.

---

### 16. Headers de seguridad en next.config.ts

**Ejemplo:** HSTS, X-Frame-Options, X-Content-Type-Options.

**Impacto:** bajo. Señal de confianza técnica.

---

### 17. Página 404 personalizada

**Impacto:** bajo. Mejora experiencia de usuario.

---

### 18. Landings por zona/municipio

**Formato:** `/reformas-madrid/chamberi` o `/reformas-en-chamberi`.

**Impacto:** medio-alto, pero solo si el blog de zonas demuestra tracción.

---

## Orden de ejecución recomendado

### Semana 1 — Fundamentos técnicos (completado)
1. ✅ Corregir metadata de reformas-integrales y reformas-banos-cocinas.
2. ✅ Corregir typo de email en contact.tsx.
3. ✅ Acortar meta description de la home.
4. ✅ Actualizar sitemap con nuevas páginas.

### Semana 2 — Estructura y servicios (completado)
5. ✅ Crear `/servicios/reformas-locales-comerciales`.
6. ✅ Implementar estructura del blog (`/blog` y `/blog/[slug]`).
7. ✅ Añadir schema mejorado en layout y Service en páginas de servicio.

### Semana 3 — Contenido y confianza (pendiente)
8. Publicar los primeros 3 artículos del calendario.
9. Añadir sección FAQ en home.
10. Añadir testimonios si se disponen de ellos.

### Mes 2 — Optimización continua
11. Optimizar imágenes.
12. Mejorar contenido de servicios finos.
13. Configurar Google Business Profile.
14. Implementar tracking.

### Mes 3 — Escalado
15. Evaluar resultados del blog.
16. Decidir si se crean landings por zona o páginas separadas de baño/cocina.

---

## Criterio para empezar con contenido

**Se cumplen las condiciones para empezar a publicar artículos:**
- ✅ Las 2 páginas de servicio sin metadata tienen metadata propia.
- ✅ Existe la estructura del blog para publicar artículos.
- ✅ El typo del email está corregido.
- ✅ El sitemap incluye las nuevas páginas.
- ✅ La página de locales comerciales está creada.
- ✅ Los schemas básicos están implementados.

**No es obligatorio esperar a:**
- Tener todas las imágenes optimizadas.
- Tener testimonios.
- Tener Google Business Profile perfecto.
- Tener landings por zona.

**Recomendación final:** la base SEO técnica y comercial está lista. Se puede empezar a crear la estrategia SEO y el calendario editorial, y publicar los primeros artículos en paralelo con las mejoras de Media prioridad.
