# Blog SEO — THIASA Reformas (Madrid)

Carpeta de contenido del blog. Aquí se redactan y almacenan los artículos del calendario editorial SEO.

> **Estado actual:** sistema preparado, sin artículos publicados todavía.
> El plan editorial vive en [`/docs/seo/calendario-publicaciones.csv`](../../docs/seo/calendario-publicaciones.csv).

---

## Documentos de referencia (leer antes de redactar)

| Doc | Para qué sirve |
|---|---|
| `/docs/seo/brief-negocio.md` | Identidad, servicios, público, datos de contacto y CTA |
| `/docs/seo/estrategia-seo.md` | Estrategia global, cadencia, KPIs, roadmap |
| `/docs/seo/clusters-seo.md` | Definición de los 10 clusters y sus spokes |
| `/docs/seo/keywords.csv` | Lista inicial de keywords por cluster y prioridad |
| `/docs/seo/guia-estilo-articulos.md` | Tono, estructura, SEO on-page, reglas de precios |
| `/docs/seo/enlaces-internos.md` | Mapeo de servicios y reglas de enlazado |
| `/docs/seo/calendario-publicaciones.csv` | Calendario de 36 artículos (12 semanas) |

---

## Estructura de archivos de artículo

Cada artículo se guarda como un archivo Markdown/MDX con el `slug` del calendario.

```
/content/blog/
  README.md                         <- este archivo
  reformas-integrales-madrid.md     <- ejemplo (cuando se redacte)
  cuanto-cuesta-reformar-bano-madrid.md
  ...
```

> El nombre del archivo **debe coincidir** con el `slug` del calendario.

---

## Frontmatter obligatorio de cada artículo

```md
---
id: "1"                                  # coincide con el calendario
slug: "reformas-integrales-madrid"       # coincide con el nombre de archivo
title: "Reformas Integrales en Madrid..."# meta title ≤ 60 chars
description: "..."                       # meta description 140-155 chars
keyword_principal: "reformas integrales Madrid"
keywords_secundarias: ["empresa reformas Madrid", "reforma integral piso"]
tipo_articulo: "comercial"
cluster: "1-reformas-integrales"
fecha: "2026-07-13"
autor: "THIASA"
estado: "publicado"                      # pendiente | redactando | revisando | publicado
servicio_asociado: "reformas-integrales"
enlaces_internos:
  - "/servicios/reformas-integrales"
  - "/blog/reforma-integral-piso-tiempos-fases"
cta: "Pide presupuesto gratis por WhatsApp"
imagen: "/images/blog/reformas-integrales-madrid.jpg"
imagen_alt: "Reforma integral de vivienda en Madrid"
---
```

---

## Flujo de publicación (semi-automatizado)

1. **Elegir artículo:** tomar la siguiente fila `pendiente` del calendario.
2. **Brief:** usar la fila del CSV + `guia-estilo-articulos.md` + `clusters-seo.md`.
3. **Redactar:** crear el archivo `.md` aquí con el frontmatter y el contenido siguiendo la guía de estilo.
4. **Cambiar estado:** en el calendario, `pendiente` → `redactando` → `revisando`.
5. **Revisión:** checklist de `guia-estilo-articulos.md` (sección 11).
6. **Publicar:**
   - Mover/confirmar el archivo en `/content/blog/`.
   - Asegurar el render en `src/app/blog/[slug]/` (implementación pendiente).
   - Añadir la URL al `src/app/sitemap.ts`.
   - En el calendario, `revisando` → `publicado`.
7. **Enlazado:** revisar 1–2 artículos ya publicados del mismo cluster y añadir un enlace al nuevo (evitar artículos huérfanos).
8. **Medición:** a las 2–4 semanas revisar impresiones/CTR en Search Console.

---

## Implementación técnica pendiente

El render del blog en el sitio (`src/app/blog/[slug]/page.tsx`) **no existe todavía**. Tareas para habilitar la publicación:

- [ ] Crear ruta dinámica `src/app/blog/[slug]/page.tsx` que lea los `.md`/`.mdx` de `/content/blog/`.
- [ ] Generar metadata (title, description, OpenGraph) desde el frontmatter.
- [ ] Añadir schema.org `Article` + `BreadcrumbList`.
- [ ] Actualizar `src/app/sitemap.ts` para listar las URLs del blog.
- [ ] Crear página índice `/blog` (lista de artículos por cluster o por fecha).
- [ ] Componente de CTA reutilizable (WhatsApp).
- [ ] Crear la página `/servicios/reformas-locales-comerciales` (bloqueante para los artículos del cluster 5).

> **No publicar** artículos del cluster 5 hasta tener su página pilar creada.

---

## Reglas rápidas

- Sin precios exactos: rangos orientativos + "depende del proyecto".
- Sin artículos repetidos cambiando solo la zona.
- Mínimo 1 enlace a página de servicio + 1 a otro artículo.
- CTA de presupuesto en todos.
- Tono profesional, cercano y local de Madrid.
