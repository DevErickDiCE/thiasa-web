# Estrategia SEO Local — THIASA Reformas (Madrid)

> Estrategia de crecimiento orgánico de 3 meses basada en contenido útil, 12 clusters temáticos y SEO local.
> Documento de referencia para planificar, priorizar y medir.

Última actualización: 2026-07-10

---

## 1. Objetivos

### Objetivo principal
Captar clientes en Madrid que buscan contratar una reforma, mediante contenido útil y posicionamiento orgánico local.

### Objetivos cuantitativos (3 meses)
- Publicar **36 artículos** (3/semana × 12 semanas) siguiendo el calendario editorial.
- Posicionar **6 páginas de servicio** existentes + reforzar con contenido de apoyo.
- Crear **14 clusters temáticos** con arquitectura de enlaces internos (pillar → spokes).
- Incrementar solicitudes de presupuesto vía WhatsApp y formulario (métrica de negocio).
- Mejorar visibilidad en búsquedas con intención local/transaccional de Madrid.

> Nota: los volúmenes de búsqueda y posiciones reales requieren validación con herramientas (Search Console, Semrush, Ahrefs, Sistrix, etc.). Esta estrategia define la dirección y prioridades, no promesas de posicionamiento.

---

## 2. Público e intención de búsqueda

Ver detalle en `brief-negocio.md` (sección 4). Resumen de intenciones a cubrir:

| Intención | Qué busca el usuario | Tipo de contenido |
|---|---|---|
| Información | Cuánto cuesta, cómo se hace, qué incluye | Educativo, guía, presupuesto |
| Comparación | A vs B, qué material elegir, plataforma vs empresa | Comparativo |
| Local | Reformas en [barrio/madrid] | Local |
| Transaccional | Empresa / presupuesto / contratar | Comercial, presupuesto |
| Errores / evitar problemas | Qué no hacer en una reforma | Errores frecuentes |

---

## 3. Estrategia de clusters (topic clusters)

El contenido se organiza en **14 clusters temáticos** (ver `clusters-seo.md` para el detalle de cada uno).

Cada cluster tiene:
- **Página pilar (pillar):** la página de servicio o un artículo fundacional amplio.
- **Spokes (artículos de apoyo):** artículos del blog que enlazan al pillar y entre sí.
- **Keywords principales y secundarias** asignadas al cluster.

Los 14 clusters:

1. Reformas integrales en Madrid
2. Reformas de baños
3. Reformas de cocinas
4. Reformas de locales comerciales
5. Precios y presupuestos
6. Permisos, licencias y planificación
7. Consejos antes de reformar
8. Reformas por tipo de vivienda
9. Reformas por zonas de Madrid
10. Materiales, acabados y decisiones prácticas
11. Errores frecuentes
12. Comparativas y dudas comunes
13. Instalaciones eléctricas y fontanería
14. Carpintería, ventanas y armarios a medida

> Clusters 13 y 14 añadidos el 2026-07-10 tras la revisión crítica del calendario: los servicios de instalaciones eléctricas/fontanería y carpintería de madera/aluminio no recibían ningún enlace desde el blog. Ver `enlaces-internos.md` para el detalle de los artículos sustituidos.

**Principio:** cada artículo pertenece a un cluster, enlaza a su pillar (página de servicio) y a 1–2 artículos relacionados del mismo o de cluster complementario.

---

## 4. Cadencia de publicación

3 artículos por semana durante 12 semanas = 36 artículos.

| Día | Tipo editorial | Tipos de artículo permitidos |
|---|---|---|
| Lunes | Comercial | `comercial`, `presupuesto` |
| Miércoles | Educativo | `educativo`, `guía`, `errores frecuentes` |
| Viernes | Local / servicio específico / comparativo | `local`, `servicio específico`, `comparativo` |

> El campo `dia_semana` marca la categoría editorial amplia; `tipo_articulo` es la clasificación concreta de cada artículo.

Inicio del calendario: placeholders `SEMANA_01_LUNES`, `SEMANA_01_MIERCOLES`, `SEMANA_01_VIERNES`, etc. (ver `calendario-publicaciones.csv`). Las fechas reales se asignarán cuando se confirme el inicio de la campaña.

---

## 5. Páginas de servicio a reforzar

Prioridad de refuerzo con contenido y enlaces internos:

| Prioridad | Página de servicio | Clusters principales que la refuerzan |
|---|---|---|
| Alta | `/servicios/reformas-integrales` | 1, 5, 6, 7, 8, 11, 12 |
| Alta | `/servicios/reformas-banos-cocinas` | 2, 3, 11 |
| Media | `/servicios/reformas-locales-comerciales` | 4, 9 |
| Media | `/servicios/pintura-pladur-albanileria` | 10 |
| Media | `/servicios/carpinteria-madera-aluminio` | 14 |
| Media | `/servicios/instalaciones-electricas-fontaneria` | 13 |

> Actualizado el 2026-07-10: carpintería e instalaciones pasan de "enlaces contextuales" a clusters propios (13 y 14) con artículos dedicados, tras detectar que no recibían ningún enlace desde el blog.

> La prioridad se asigna según potencial comercial, margen y capacidad de THIASA para atender esa demanda.

---

## 6. Estructura de enlaces internos

Ver detalle completo en `enlaces-internos.md`. Reglas generales:

1. **Cada artículo enlaza a su pilar** con anchor semántico (ej: "reformas integrales en Madrid").
2. **Cada artículo enlaza a 1–2 artículos relacionados** del mismo cluster o de clusters complementarios.
3. **Evitar exceso de enlaces:** máximo 4–5 enlaces internos relevantes por artículo.
4. **CTA fija al final:** botón de WhatsApp y/o formulario de presupuesto.
5. **Actualizar pilares periódicamente:** añadir enlaces desde el pilar a los nuevos spokes publicados.

---

## 7. Tono y estilo

Ver `guia-estilo-articulos.md`. Resumen:

- Técnico pero comprensible para un cliente no experto.
- Madrid como ubicación principal; zonas solo cuando aporten valor local real.
- Cada artículo incluye: intro, índice, desarrollo con H2/H3, conclusión y CTA.
- Sin inventar precios, casos, reseñas ni fotografías.
- Datos generales de mercado con fuentes contrastadas o como orientación.

---

## 8. Flujo de publicación

Ver `flujo-publicacion.md`. Etapas: planificación → redacción → revisión SEO → publicación técnica → enlaces internos → medición.

---

## 9. Medición y KPIs

| KPI | Herramienta | Frecuencia |
|---|---|---|
| Tráfico orgánico | Google Analytics 4 + Search Console | Mensual |
| Impresiones / clicks por artículo | Google Search Console | Semanal |
| Posiciones objetivo | Search Console / herramientas externas | Mensual |
| Solicitudes de presupuesto | Formulario + WhatsApp + llamadas | Semanal |
| Enlaces internos publicados | Revisión manual / scrape | Tras cada publicación |

> No se usan volúmenes de búsqueda inventados. Las métricas se basan en datos reales de las herramientas disponibles.

---

## 10. Riesgos y consideraciones

- **No se publica contenido del blog todavía.** Esta fase solo genera la estrategia, calendario y documentación.
- **Las zonas de Madrid (cluster 9) son propuestas SEO, no confirmadas por la empresa:** validar con THIASA y con datos reales de demanda antes de publicar. Ningún artículo debe afirmar sede, oficina o proyectos confirmados en esos barrios.
- **Las páginas de servicio existentes deben mantenerse:** no se rediseñan ni se reescriben salvo metadatos y enlaces internos.
