# Primera optimización basada en GSC · 2026-07-31

## Objetivo

Aplicar la primera ronda de optimización sobre URLs que ya reciben impresiones en Google, sin crear páginas duplicadas ni añadir experiencia, cifras o garantías no documentadas.

Los datos de partida corresponden al export de Search Console de los tres meses analizados en PotencIA SEO Core. Deben conservarse como baseline y compararse de nuevo a 30, 60 y 90 días desde el despliegue.

## Prioridades y baseline

| Orden | URL | Clics | Impresiones | CTR | Posición media |
|---:|---|---:|---:|---:|---:|
| 1 | `/blog/licencia-obra-menor-madrid` | 2 | 412 | 0,49 % | 14,19 |
| 2 | `/blog/cuanto-cuesta-reforma-integral-madrid` | 0 | 1.143 | 0 % | 29,01 |
| 3 | `/blog/cuanto-cuesta-reformar-bano-madrid` | 0 | 1.094 | 0 % | 28,44 |
| 4 | `/servicios/reformas-integrales` | 1 | 150 | 0,67 % | 41,89 |
| 4 | `/servicios/instalaciones-electricas-fontaneria` | 0 | 273 | 0 % | 45,19 |
| 4 | `/servicios/reformas-banos-cocinas` | 0 | 255 | 0 % | 57,02 |
| 5 | `/` | 5 | 183 | 2,73 % | 28,72 |

Consultas destacadas:

- `licencia obra menor`: posición 10,2;
- `licencia de obras ayuntamiento de madrid`: posición 11,83;
- `cuanto cuesta reformar un baño`: posición 10,2;
- `reformas integrales madrid precios`: posición 30,09;
- `thiasa`: posición 4,94, 34 impresiones y 4 clics.

El export disponible no incluye un cruce consulta-página. La asignación se basa en intención y en el mapa keyword-URL de PotencIA SEO Core.

## Cambios aplicados

### Artículos

- títulos y descripciones alineados con las consultas observadas;
- respuesta directa al inicio y estructura de encabezados revisada;
- fecha de modificación visible y `dateModified` en Article;
- FAQ visible reflejada mediante `FAQPage` cuando existe en frontmatter;
- canonicals conservados;
- enlaces hacia las páginas comerciales y artículos relacionados;
- eliminación de enlaces editoriales a URLs todavía no publicadas.

### Páginas comerciales

- metadata, H1 y canonical alineados con cada servicio;
- copy centrado en alcance, partidas y proceso;
- FAQ visible y schema coherente con el contenido;
- bloque de guías para recibir enlaces desde los contenidos informativos;
- referencia del proveedor mediante `https://www.thiasa.es/#organization`;
- retirada de claims no documentados en las páginas objetivo.

### Marca

- `THIASA` pasa al inicio del title de la home;
- el nombre de marca queda visible en el H1;
- se añade `WebSite` enlazado con la entidad `LocalBusiness` existente.

## Validación

- `npm run lint`: correcto;
- `npx tsc --noEmit`: correcto;
- `npm run build`: correcto;
- rutas objetivo: HTTP 200;
- revisión visual completa en 1440 px y 390 px;
- title, canonical, H1 y JSON-LD comprobados en HTML renderizado.

## Pendientes separados

- actualizar `next` y `eslint-config-next` desde 16.1.1 a una versión corregida; a fecha de esta revisión npm ofrece 16.2.12 y el cambio requiere PR técnica propia con lockfile y regresión completa;
- confirmar el NAP antes de unificar schema, páginas legales y Google Business Profile;
- documentar antigüedad, volumen de proyectos, satisfacción, marcas, certificaciones y garantías antes de volver a utilizarlos como señales SEO;
- aportar casos, fotos, decisiones y experiencia real de THIASA para enriquecer los contenidos sin inventar hidden gems.

## Medición posterior

Comparar la misma ventana en GSC a 30, 60 y 90 días. Revisar por URL:

- clics, impresiones, CTR y posición;
- consultas nuevas y consultas en posiciones 4–15;
- cambios de CTR solo cuando exista una muestra suficiente;
- conversión a WhatsApp, llamada y formulario cuando GA4 tenga histórico útil.
