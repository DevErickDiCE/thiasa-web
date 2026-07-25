# Auditoría SEO operativa — THIASA

Fecha: 2026-07-25
Dominio: https://www.thiasa.es/

Este documento actualiza el estado operativo sin borrar la auditoría histórica del 2026-07-10.

## Resumen ejecutivo

THIASA ya tiene una base SEO técnica funcional: Next.js 16, metadata por servicios, sitemap dinámico, robots, LocalBusiness/Service/BreadcrumbList, blog en Markdown, Google Search Console verificado en código y GA4 con eventos de conversión. El registro del repositorio contiene 9 artículos publicados.

El cuello de botella actual no es crear más infraestructura ni publicar contenido sin límite. Las prioridades son:

1. reforzar entidad/E-E-A-T con información verificable;
2. normalizar NAP y datos estructurados;
3. obtener baseline privado GSC/GA4/GBP;
4. reforzar páginas comerciales con keywords de alta intención;
5. enriquecer contenidos con experiencia propia y casos reales;
6. construir autoridad local y menciones externas;
7. usar GSC para striking distance y refresh.

## Estado técnico actual

### Correcto / implementado

- metadataBase: https://www.thiasa.es;
- metadata propia en páginas prioritarias;
- robots permite el rastreo y declara sitemap;
- sitemap incluye home, 6 servicios, blog, posts y legales;
- canonical en páginas de servicio revisadas;
- schema LocalBusiness en layout;
- schema Service + BreadcrumbList en servicios;
- Article/BreadcrumbList en blog según la arquitectura existente;
- eventos GA4 para page_view, WhatsApp, teléfono, email y generate_lead;
- Consent Mode / consentimiento de analítica;
- 9 artículos publicados en el registro SEO;
- arquitectura de 14 clusters existente.

### Issues prioritarios detectados el 25/07

#### Alta — entidad legal vs antigüedad

El LocalBusiness declaraba foundingDate 2010. El BORME registra DISEÑOS E INTERIORISMO THIASA SL con comienzo de operaciones el 19/06/2025. La web comunica +15 años de experiencia, dato que puede corresponder a experiencia profesional previa, pero no debe codificarse como fecha de constitución legal sin documentación.

Acción en rama SEO: retirar foundingDate y declarar legalName.

#### Alta — NAP / dirección

La web muestra “Avenida De Los Apóstoles 53ºA”. El BORME registra “AVDA DE LOS APOSTOLES 5 - 3ºA”. Se normaliza el schema a “Avenida de los Apóstoles 5, 3ºA”. Antes de modificar todas las políticas/perfiles externos, confirmar el formato con el cliente.

#### Alta — falta página de entidad

No existía una página dedicada a la empresa. Se crea `/sobre-nosotros` en la rama SEO con información verificable y sin reutilizar claims no confirmados.

#### Media — FAQ / GEO

La home no contenía un bloque de respuestas breves. Se añade FAQ visible y FAQPage usando únicamente datos que ya están soportados por la web.

#### Alta — Google Business Profile

El flujo necesita URL/ID exactos del perfil real, NAP, categorías, horario, servicios, fotografías, reseñas y acciones. No se debe inventar `sameAs`.

#### Alta — baseline privado

El repositorio demuestra que GSC/GA4 están instrumentados, pero este entorno no tiene lectura de las propiedades privadas. Falta importar:

- GSC: query, página, clics, impresiones, CTR, posición, indexación;
- GA4: usuarios/sesiones orgánicas, leads, click_whatsapp, click_phone, generate_lead;
- GBP: búsquedas, visualizaciones, llamadas/acciones y reseñas.

## Keyword research live — Ubersuggest ES

Seed: `reformas integrales Madrid`.

| Keyword | Volumen/mes | SEO Difficulty | CPC |
|---|---:|---:|---:|
| reformas integrales Madrid | 2400 | 24 | 7,455 € |
| empresa de reformas integrales madrid | 320 | 10 | 3,74 € |
| empresas de reformas integrales madrid | 260 | 11 | 7,51 € |
| empresas reformas integrales madrid | 90 | 18 | 4,84 € |
| reformas integrales madrid precios | 70 | 18 | 2,185 € |
| reformas integrales madrid centro | 30 | 6 | 0 € |

Lectura:

- La intención principal tiene demanda comercial suficiente para priorizar la página `/servicios/reformas-integrales`.
- Variantes “empresa/empresas” deben reforzar la misma landing mediante copy, confianza, entidad y casos; no necesitan páginas duplicadas.
- “precios” está alineada con el contenido ya publicado de precio de reforma integral.
- Madrid Centro es una posible oportunidad local de baja dificultad, pero una landing solo debe crearse si THIASA atiende realmente la zona y puede aportar contenido/evidencia específica.

## Competencia — gap principal

El análisis de competidores orgánicos en Madrid muestra patrones repetidos:

- página de empresa/equipo fuerte;
- casos con ubicación y datos reales;
- explicación del proceso;
- FAQs;
- mayor profundidad de servicios;
- cobertura local explícita;
- profesionales/titulaciones cuando realmente existen;
- reseñas y prueba social.

THIASA no debe copiar claims ni servicios ajenos. La oportunidad es documentar mejor lo que realmente hace y convertir esa experiencia en señales de entidad, páginas comerciales y contenido.

## Contenido actual

El registro SEO contiene 9 artículos publicados entre el 10 y el 24 de julio de 2026. La estructura editorial ya incluye fuentes, enlaces internos y CTA.

Siguiente evolución:

- incorporar hidden gems reales;
- identificar autor/equipo cuando se disponga de datos;
- añadir ejemplos/casos propios;
- enriquecer artículos de alta intención antes de multiplicar volumen;
- programar refresh a partir de rendimiento real GSC.

## Prioridad operativa

### P0 — completar datos privados

- conectar/importar GSC;
- conectar/importar GA4;
- verificar GBP exacto;
- registrar baseline en Airtable.

### P1 — entidad + local

- validar NAP;
- publicar `/sobre-nosotros`;
- documentar experiencia/equipo/casos;
- obtener reseñas reales;
- vincular GBP real a entidad.

### P2 — conversión y páginas comerciales

- reforzar `/servicios/reformas-integrales` con intención “empresa de reformas integrales Madrid”;
- revisar CTR/titles cuando GSC tenga suficiente muestra;
- evaluar separar baños y cocinas solo con datos de demanda/canibalización.

### P3 — contenido

- continuar calendario, pero priorizar gaps comerciales y clusters que apoyan servicios;
- enriquecer posts existentes antes de escalar a 36 artículos por inercia;
- actualizar pilares con enlaces a nuevos spokes.

### P4 — autoridad

- directorios relevantes y consistencia NAP;
- menciones locales/profesionales;
- partners/proveedores reales;
- casos de estudio y PR digital cuando exista material noticiable.

## Criterio de éxito

No medir el servicio solo por artículos publicados o tráfico. El cuadro de mando debe responder:

- ¿qué queries comerciales ganan visibilidad?;
- ¿qué URLs entran en Top 10/Top 3?;
- ¿qué páginas convierten?;
- ¿cuántos leads orgánicos llegan por formulario, WhatsApp y teléfono?;
- ¿qué contenidos están en posiciones 4–15 y pueden optimizarse?;
- ¿qué autoridad/entidad nueva se ha creado?;
- ¿aparece THIASA en resultados generativos para prompts controlados?
