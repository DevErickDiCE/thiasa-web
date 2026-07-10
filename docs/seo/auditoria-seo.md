# Auditoría SEO — THIASA Reformas (Madrid)

> Auditoría del estado SEO actual del sitio web antes de lanzar la estrategia de contenido.
> Fecha: 2026-07-10
> Dominio auditado: https://www.thiasa.es

> **Última actualización de correcciones:** 2026-07-10
> Se han corregido los puntos de prioridad ALTA detectados: metadata de servicios, email, estructura de blog, página de locales comerciales, datos estructurados y ajustes básicos de imágenes. Ver `recomendaciones-priorizadas.md` para el estado actual.

---

## 1. Resumen ejecutivo

El sitio web de THIASA es una web comercial de reformas en Madrid construida con **Next.js 16 (App Router)**, **Tailwind CSS** y desplegada en **Vercel**. Tiene una base técnica sólida pero presenta **problemas SEO importantes** que conviene corregir antes de invertir fuerte en contenido de blog.

### Estado general

| Aspecto | Estado | Nota |
|---|---|---|
| Base técnica Next.js | ✅ Buena | App Router, metadata, sitemap, robots, manifest |
| Títulos y meta descriptions | ✅ Corregido | Todas las páginas de servicio tienen metadata propia |
| Estructura de encabezados | ⚠️ Aceptable | Home con H1 dividido; servicios con H1 correcto |
| SEO local | ✅ Mejorado | Schema LocalBusiness con área de servicio y datos de contacto |
| Contenido | ⚠️ Escaso | Sin artículos publicados todavía; estructura de blog lista |
| Conversión | ✅ Buena | WhatsApp, teléfono y formulario presentes en múltiples puntos |
| Datos estructurados | ✅ Mejorado | LocalBusiness, Service y BreadcrumbList en páginas principales |
| Rendimiento visual | ⚠️ Mejorable | Imágenes principales con `sizes`; optimización completa pendiente |

### Veredicto inicial
**La web es funcional y tiene buena conversión, pero no está lista para escalar SEO local sin corregir primero los fallos técnicos y de contenido.** Se recomienda una fase de arreglos rápidos (1–2 semanas) antes de publicar el blog en serio.

---

## 2. Estructura de la web

### Páginas existentes

| Ruta | Tipo | Estado SEO |
|---|---|---|
| `/` | Home | ✅ Indexable, metadata OK, H1 OK |
| `/servicios/reformas-integrales` | Servicio | ✅ Metadata propia y schema Service |
| `/servicios/reformas-banos-cocinas` | Servicio | ✅ Metadata propia y schema Service |
| `/servicios/instalaciones-electricas-fontaneria` | Servicio | ✅ Metadata.ts propia y schema Service |
| `/servicios/carpinteria-madera-aluminio` | Servicio | ✅ Metadata.ts propia y schema Service |
| `/servicios/pintura-pladur-albanileria` | Servicio | ✅ Metadata.ts propia y schema Service |
| `/servicios/reformas-locales-comerciales` | Servicio | ✅ Creada con metadata inline y schema Service |
| `/blog` | Blog | ✅ Creada, lista para artículos |
| `/blog/[slug]` | Artículo | ✅ Creada, lee desde `/content/blog` |
| `/aviso-legal` | Legal | ✅ Metadata propia |
| `/politica-privacidad` | Legal | ✅ Metadata propia |
| `/politica-cookies` | Legal | ✅ Metadata propia |

**Total:** 9 páginas indexables.

### Servicios principales detectados

1. Reformas integrales de viviendas
2. Reformas de baños y cocinas (agrupadas)
3. Instalaciones eléctricas y fontanería
4. Carpintería de madera, aluminio y PVC
5. Pintura, pladur y albañilería

### Páginas comerciales que faltan

| Página sugerida | Motivo | Prioridad |
|---|---|---|
| `/servicios/reformas-locales-comerciales` | Servicio explícitamente demandado por el negocio | Alta |
| `/servicios/reformas-de-banos` (separada) | Keyword propia de alto valor | Media |
| `/servicios/reformas-de-cocinas` (separada) | Keyword propia de alto valor | Media |
| `/sobre-nosotros` o `/empresa` | Refuerza E-E-A-T y confianza | Media |
| `/blog` | Base para estrategia de contenido | Alta |
| `/contacto` (página dedicada) | Mejor conversión local | Baja |

### Blog

- ❌ **No existe.** No hay ruta `/blog`, ni `[slug]`, ni sistema de artículos.
- La carpeta `/content/blog/` solo contiene el `README.md` recién creado.

---

## 3. SEO técnico

### 3.1 Titles y meta descriptions

#### Home (`/`)
- **Title:** "THIASA | Reformas Integrales Madrid - Baños, Cocinas, Electricidad y Carpintería" (69 caracteres, ligeramente largo)
- **Description:** "Empresa de reformas integrales en Madrid. Especialistas en baños, cocinas, instalaciones eléctricas, fontanería, suelo radiante, carpintería de madera y aluminio. ✓ Presupuesto gratis ✓ Garantía profesional." (211 caracteres, **demasiado larga**, Google la truncará)
- **Keywords meta:** presente (obsoleta pero no dañina)

#### Problema crítico: páginas sin metadata

`/servicios/reformas-integrales` y `/servicios/reformas-banos-cocinas` son componentes `"use client"` sin exportar `metadata`. Heredan el title/description de `layout.tsx`.

**Impacto:**
- Ambas páginas comparten el mismo title/description genérico.
- Pérdida de posicionamiento para keywords específicas.
- Menor CTR en resultados de búsqueda.

**Solución:** mover el metadata a `metadata.ts` o refactorizar el componente para que no sea "use client" a nivel de page (extraer la lógica de cliente a subcomponentes).

#### Páginas con metadata.ts

Las otras 3 páginas de servicio tienen metadata adecuada:
- Titles entre 50–65 caracteres.
- Descriptions entre 145–160 caracteres.
- Keywords relevantes.
- OpenGraph configurado.

### 3.2 H1, H2 y H3

| Página | H1 | Observación |
|---|---|---|
| `/` | "Reformas Integrales" + "con garantía profesional" | H1 válido pero dividido en dos spans; la keyword principal está presente |
| `/servicios/reformas-integrales` | "Reformas Integrales de Viviendas en Madrid" | ✅ Correcto |
| `/servicios/reformas-banos-cocinas` | "Reforma de Baños y Cocinas en Madrid" | ✅ Correcto |
| `/servicios/instalaciones-electricas-fontaneria` | "Instalaciones Eléctricas y Fontanería" | ⚠️ Falta "Madrid" en el H1 |
| `/servicios/carpinteria-madera-aluminio` | "Carpintería de Madera, Aluminio y PVC en Madrid" | ✅ Correcto |
| `/servicios/pintura-pladur-albanileria` | "Pintura, Pladur y Albañilería en Madrid" | ✅ Correcto |

**Observaciones generales:**
- Jerarquía de encabezados lógica en la mayoría de páginas.
- Algunos H2 genéricos ("Nuestros Servicios", "¿Qué Hacemos Diferente?") podrían ser más descriptivos.
- No se detectan saltos de jerarquía graves.

### 3.3 Slugs

| Página | Slug | Valoración |
|---|---|---|
| Home | `/` | ✅ |
| Reformas integrales | `/servicios/reformas-integrales` | ✅ |
| Baños y cocinas | `/servicios/reformas-banos-cocinas` | ✅ |
| Instalaciones | `/servicios/instalaciones-electricas-fontaneria` | ✅ |
| Carpintería | `/servicios/carpinteria-madera-aluminio` | ✅ |
| Pintura/pladur | `/servicios/pintura-pladur-albanileria` | ✅ |

Todos los slugs son cortos, descriptivos, en minúsculas y con guiones.

### 3.4 Sitemap

- Archivo: `src/app/sitemap.ts`
- URLs incluidas: 9 (home + 5 servicios + 3 legales)
- Frecuencias: home weekly, servicios monthly, legales yearly
- Prioridades: home 1.0, servicios 0.9, legales 0.3
- ❌ **No incluye blog** (lógico, porque aún no existe)
- ❌ No incluye prioridad/canonical para futuras páginas

### 3.5 Robots.txt

- Archivo: `src/app/robots.ts`
- `User-agent: *`
- `Allow: /`
- `Disallow: /api/, /admin/`
- Sitemap apunta a `https://www.thiasa.es/sitemap.xml`
- ✅ Correcto. Ninguna página importante bloqueada.

### 3.6 Canonicals

- `metadataBase` definido en `layout.tsx`: `https://www.thiasa.es`
- Next.js genera automáticamente canonicals self-referencing.
- No se detectan problemas de contenido duplicado.

### 3.7 Open Graph

- ✅ Configurado en `layout.tsx` (home).
- ✅ Configurado en 3 páginas de servicio con `metadata.ts`.
- ❌ **Falta en `/servicios/reformas-integrales` y `/servicios/reformas-banos-cocinas`** (mismo problema de "use client").
- Imagen OG: `/og-image.jpg` (1024x1024, 371KB). Dimensiones correctas.

### 3.8 Datos estructurados (Schema.org)

**Presente:**
- `HomeAndConstructionBusiness` en `layout.tsx` con:
  - name: THIASA
  - url, telephone, email
  - address: Madrid, España
  - logo
  - foundingDate: 2010
  - priceRange: $$

**Ausente (oportunidades):**
- `LocalBusiness` con `areaServed`, `geo`, `openingHoursSpecification`
- `Service` por cada página de servicio
- `BreadcrumbList`
- `FAQPage`
- `Article` (cuando exista blog)
- `AggregateRating` (si se añaden reseñas)

### 3.9 Indexabilidad

- Todas las páginas importantes son indexables.
- No hay `noindex` accidental.
- No hay páginas de error 404 personalizadas visibles en el código.

### 3.10 Configuración general

- `manifest.ts`: presente, descripción correcta.
- `next.config.ts`: vacío, sin redirecciones ni headers de seguridad.
- `globals.css`: sin problemas SEO visibles.
- `lang="es"` en `<html>`: ✅ correcto.

---

## 4. SEO local

### 4.1 Señales locales actuales

| Elemento | Estado | Detalle |
|---|---|---|
| Mención de Madrid en title home | ✅ | Sí |
| Mención de Madrid en titles servicio | ⚠️ | 2 de 5 no tienen metadata propia; las otras 3 sí |
| Mención de Madrid en H1s | ⚠️ | 1 servicio no incluye Madrid en H1 |
| Dirección postal | ✅ | Av. De Los Apóstoles 53ºA, 28011 Madrid (en legales) |
| Teléfono | ✅ | +34 604 154 746 |
| WhatsApp | ✅ | wa.me/34604154746 |
| Email | ⚠️ | info@thiasa.es correcto en footer; **typo info@thasa.es en contact.tsx** |
| JSON-LD dirección | ✅ | addressLocality: Madrid |
| Zonas de trabajo | ❌ | Solo "Madrid y alrededores", sin barrios |
| Google Maps | ❌ | No hay mapa incrustado |
| Google Business Profile | ❌ | No hay enlace ni schema asociado |
| Página de contacto dedicada | ❌ | Solo sección en home |

### 4.2 NAP (Nombre, Dirección, Teléfono)

- **Consistencia:** el teléfono y la dirección son consistentes en aviso legal y política de privacidad.
- **Email inconsistente:** `contacto@thiasa.es` aparece en política de privacidad para ejercer derechos; el resto del sitio usa `info@thiasa.es`.
- **Bug detectado:** en `src/components/contact.tsx` el enlace mailto apunta a `info@thasa.es` (falta la "i").

### 4.3 Oportunidad local

El sitio deja claro que opera en Madrid, pero no profundiza en barrios ni municipios del entorno. Esto es lógico en una home, pero se puede explotar con:
- Landing de zona (fase 2).
- Artículos del blog por barrios (cluster 9 del plan SEO).
- Schema `areaServed` con lista de municipios/barrios.

---

## 5. Contenido

### 5.1 Contenido actual por página

| Página | Texto aproximado | Valoración |
|---|---|---|
| Home | Medio-alto | Buenos mensajes, trust indicators, galería |
| Reformas integrales | Alto | Carrusel, proceso, beneficios, garantía |
| Baños y cocinas | Alto | Carrusel, features, marcas, garantía |
| Instalaciones | Medio | Lista de servicios + trust badges |
| Carpintería | Medio-alto | Lista + tipos de carpintería |
| Pintura/pladur | Medio-alto | Lista + servicios especializados |

### 5.2 Contenido que falta

- ❌ Blog / artículos útiles
- ❌ Página FAQ
- ❌ Página "Sobre nosotros" / empresa
- ❌ Sección de testimonios / reseñas
- ❌ Casos de estudio detallados (la galería es visual pero sin texto SEO)
- ❌ Información de precios (rangos orientativos)
- ❌ Guía de proceso de reforma
- ❌ Certificaciones, socios o marcas destacadas

### 5.3 Calidad del contenido

**Puntos fuertes:**
- Lenguaje claro y orientado a la conversión.
- Se mencionan marcas (Roca, Grohe, Silestone, Santos) en baños/cocinas.
- Se destaca "+15 años de experiencia", "garantía por escrito", "presupuesto en 24h".

**Puntos débiles:**
- Poco texto en las páginas de instalaciones, carpintería y pintura.
- No hay contenido que responda a búsquedas informativas (precios, plazos, permisos).
- La galería no está acompañada de texto que ayude a posicionar.

### 5.4 Oportunidades de contenido

Ver archivo `oportunidades-seo.md` para el detalle completo. Resumen:
- Reformas integrales Madrid
- Precios de reformas (baño, cocina, integral)
- Licencias y permisos en Madrid
- Reformas por zonas de Madrid
- Antes/después con explicación

---

## 6. Conversión

### 6.1 CTAs

| Tipo | Ubicación | Estado |
|---|---|---|
| WhatsApp | Navbar, Hero, Servicios, ConvertSection, Galería, Footer | ✅ Muy presente |
| Teléfono | Hero (algunas), CTA final servicios, Contacto | ✅ Presente |
| Formulario | Sección Contacto | ✅ Funcional (Resend) |
| "Presupuesto Gratis en 24h" | Repetido | ✅ Mensaje claro |

### 6.2 Formulario

- Campos: nombre, email, teléfono, mensaje.
- Envía a `/api/contact` vía Resend.
- Destinatario: `info@thiasa.es`.
- Validación básica de campos y email.
- ✅ Buen funcionamiento técnico.

### 6.3 Confianza

**Elementos presentes:**
- +15 años experiencia
- +200 proyectos finalizados
- 100% clientes satisfechos
- Garantía por escrito
- Marcas de calidad mencionadas
- Galería de proyectos reales

**Elementos ausentes:**
- Testimonios de clientes con nombre/foto
- Reseñas de Google
- Certificaciones o afiliaciones
- Casos antes/después narrados
- Fotos del equipo

### 6.4 Fotos de trabajos

- 7 proyectos en galería.
- Carruseles en páginas de reformas integrales y baños/cocinas.
- Alt text generalmente descriptivo y con "Madrid".
- ⚠️ Las imágenes son de baja resolución para escritorio (ver sección 7).

---

## 7. Rendimiento básico

### 7.1 Imágenes

| Imagen | Dimensiones | Peso | Uso | Problema |
|---|---|---|---|---|
| `hero-bg.png` | 1024x1024 | 653KB | Fondo home | Extensión .png pero es JPEG; resolución baja para fondo fullscreen |
| `consultation.png` | 1024x1024 | 670KB | Sección "Por qué elegirnos" | Extensión .png pero es JPEG |
| `projects/*.png` | 1024x1024 | ~650KB cada una | Posiblemente no usadas o usadas en móvil | Extensión .png pero es JPEG |
| `og-image.jpg` | 1024x1024 | 371KB | Open Graph | ✅ Correcto |
| `project-*.jpg` | ~768–1024px de ancho | 80–180KB | Galerías y carruseles | Resolución insuficiente para escritorio; se verán borrosas al escalar |
| `thiasa-logo-full.jpg` | 502x266 | 16KB | Logo | ✅ Correcto |
| `icon.png` / `apple-icon.png` | 500x500 | - | Favicon/app | ✅ Correcto |

### 7.2 Problemas de imagen detectados

1. **Extensión inconsistente:** `hero-bg.png`, `consultation.png` y `projects/*.png` son archivos JPEG renombrados. Aunque los navegadores modernos suelen renderizarlos, puede confundir a CDNs, herramientas de compresión y auditors.
2. **Resolución baja:** las imágenes de proyecto (~768–800px de ancho) se usan en contenedores de hasta 1200px o más en desktop. Next.js las escalará y perderán calidad.
3. **Hero background:** 1024x1024 para un fondo a pantalla completa en desktop es insuficiente (recomendable mínimo 1920x1080).
4. **Falta lazy loading explícito:** algunas imágenes usan `priority`, lo cual es correcto para LCP, pero otras podrían beneficiarse de `loading="lazy"`.

### 7.3 Mobile

- Diseño responsive con Tailwind.
- Menú hamburguesa funcional.
- Tamaños de fuente adecuados.
- CTA adaptados a pantalla táctil.
- ⚠️ El hero usa `min-h-[650px]` en móvil; no debería ser un problema de SEO, pero conviene verificar LCP.

### 7.4 Componentes que pueden afectar SEO

- `"use client"` en 2 páginas de servicio principales → impide metadata SSR.
- Carruseles automáticos con `setInterval` → pueden afectar CLS si no están bien contenidos.
- Animaciones de escala larga en hero → generalmente inofensivas para SEO pero pueden ralentizar percepción de carga.

### 7.5 Core Web Vitals (estimación visual)

Sin mediciones reales, los riesgos son:
- **LCP:** posiblemente alto por el fondo del hero y las imágenes grandes.
- **CLS:** bajo, los layouts parecen estables.
- **INP/TBT:** los carruseles y animaciones podrían añadir algo de interacción lenta en móvil.

**Recomendación:** ejecutar Lighthouse/PageSpeed Insights una vez corregidos los metadatos para tener datos reales.

---

## 8. Problemas encontrados (resumen)

### Críticos
1. ✅ **Corregido:** Páginas `/servicios/reformas-integrales` y `/servicios/reformas-banos-cocinas` tienen metadata propia y schema Service.
2. ✅ **Corregido:** Typo en email de contacto (`info@thasa.es` → `info@thiasa.es`).
3. ✅ **Corregido:** Meta description de la home acortada a ≤ 155 caracteres.

### Importantes
4. ✅ **Corregido:** Creada página `/servicios/reformas-locales-comerciales`.
5. ✅ **Corregido:** Datos estructurados mejorados: LocalBusiness, Service, BreadcrumbList.
6. ✅ **Corregido:** Creada estructura del blog (`/blog` e `/blog/[slug]`).
7. ❌ **Pendiente:** Testimonios, reseñas y casos antes/después narrados.
8. ⚠️ **Parcial:** Imágenes de proyecto de baja resolución para escritorio (se añadió `sizes`; optimización completa pendiente).

### Medios
9. H1 de instalaciones no incluye "Madrid".
10. ❌ **Pendiente:** Página "Sobre nosotros" para reforzar E-E-A-T.
11. ❌ **Pendiente:** FAQ o contenido informativo.
12. ❌ **Pendiente:** Menciones de barrios/zonas específicas de Madrid en el sitio.

### Bajos
13. Keywords meta obsoletas (no dañinas, pero innecesarias).
14. Extensión .png en archivos JPEG.
15. Faltan headers de seguridad en `next.config.ts`.

---

## 9. Oportunidades

- Aprovechar la buena base de conversión para captar tráfico informativo (blog) y derivarlo a presupuesto.
- Crear contenido local por barrios de Madrid sin duplicar.
- Mejorar el schema local para aparecer en búsquedas "reformas cerca de mí".
- Publicar casos prácticos con antes/descripción textual para reforzar E-E-A-T.
- Separar baños y cocinas en páginas propias si el volumen lo justifica.

---

## 10. Riesgos

- **Riesgo alto:** si se publica mucho contenido de blog sin arreglar los metadatas de las páginas de servicio, el link juice interno fluirá hacia páginas con títulos genéricos, desperdiciando autoridad.
- **Riesgo medio:** el typo de email puede generar consultas perdidas o mala imagen profesional.
- **Riesgo medio:** imágenes borrosas en desktop pueden aumentar tasa de rebote y reducir confianza.
- **Riesgo bajo:** la descripción larga de la home se mostrará truncada en Google.

---

## 11. Qué mejorar antes de publicar muchos artículos

1. ✅ **Corregido:** Metadata de las 2 páginas de servicio sin metadata.
2. ✅ **Corregido:** Typo del email en contact.tsx.
3. ✅ **Corregido:** Meta description de la home acortada.
4. ✅ **Corregido:** Crear `/servicios/reformas-locales-comerciales`.
5. ✅ **Corregido:** Añadir Schema Service y mejorar LocalBusiness con `areaServed`.
6. ✅ **Corregido:** Preparar la estructura del blog (`src/app/blog/[slug]`).
7. ⚠️ **Pendiente:** Optimizar resolución de imágenes de proyecto para escritorio.
8. ⚠️ **Pendiente:** Añadir testimonios o casos narrados para reforzar E-E-A-T.

Estas mejoras se detallan en `recomendaciones-priorizadas.md`.
