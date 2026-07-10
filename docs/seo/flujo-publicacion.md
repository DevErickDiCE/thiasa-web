# Flujo de publicación SEO — THIASA Reformas (Madrid)

> Proceso para pasar de la planificación a la publicación de cada artículo del calendario SEO.
> Fase actual: solo documentación. **No se publica contenido del blog todavía.**

Última actualización: 2026-07-10

---

## Etapas del flujo

### 1. Planificación
- Revisar el artículo siguiente en `calendario-publicaciones.csv`.
- Confirmar keyword principal, secundaria, intención de búsqueda y cluster.
- Validar que el pilar (página de servicio) está activo y accesible.
- Identificar 1–2 artículos relacionados ya publicados para enlazar (ver `enlaces-internos.md`).

### 2. Brief rápido
- Definir H1, estructura de H2/H3 y puntos clave a cubrir.
- Elegir CTA (WhatsApp, formulario o ambos).
- Confirmar que no se inventarán precios, casos, fotos ni datos sin validar.

### 3. Redacción
- Seguir `guia-estilo-articulos.md`.
- Longitud: 800–1.500 palabras según tipo.
- Incluir intro, índice, H2/H3, conclusión, enlaces internos y CTA final.
- Escribir title y meta description.

### 4. Revisión SEO y técnica
- [ ] Keyword principal en H1, intro y conclusión.
- [ ] Estructura de encabezados correcta (H1 → H2 → H3).
- [ ] Enlaces internos al pilar y a artículos relacionados.
- [ ] Title (50–60 caracteres) y meta description (150–160 caracteres).
- [ ] Slug sin tildes ni espacios.
- [ ] Sin datos inventados ni precios sin validar.
- [ ] Imágenes solo si son reales y autorizadas; alt text descriptivo.
- [ ] CTA con enlace a WhatsApp (`https://wa.me/34604154746`) o formulario.

### 5. Publicación técnica
- Añadir artículo como entrada en `src/lib/posts.ts` o sistema de contenido acordado.
- Subir a `/blog/[slug]`.
- Comprobar que la URL, title y meta description se renderizan correctamente.
- Verificar enlaces internos y CTA.

### 6. Enlaces internos post-publicación
- Añadir enlace al nuevo artículo desde su pilar si es coherente.
- Revisar artículos publicados recientemente para enlazar al nuevo spoke.
- Actualizar `enlaces-internos.md` si cambian las conexiones.

### 7. Medición
- Esperar 7–14 días tras la indexación.
- Revisar en Google Search Console: impresiones, clicks y posición.
- Anotar resultados en una hoja de seguimiento.
- Ajustar próximos artículos según aprendizajes.

---

## Ritmo editorial

- **3 artículos por semana.**
- **Lunes:** comercial o presupuesto.
- **Miércoles:** educativo o errores frecuentes.
- **Viernes:** local, servicio específico o comparativo.

---

## Roles y responsabilidades

| Rol | Tareas |
|---|---|
| Estratega SEO | Aprobar calendario, keywords, clusters y prioridades. |
| Redactor | Crear el artículo siguiendo el brief y la guía de estilo. |
| Revisor SEO | Validar on-page, enlaces internos y metadatos. |
| Técnico web | Publicar el artículo, verificar renderizado y enlaces. |
| THIASA (cliente) | Validar precios, datos técnicos y disponibilidad comercial. |

---

## Checklist final antes de dar por publicado un artículo

- [ ] Artículo redactado y revisado.
- [ ] Title y meta description definidos.
- [ ] Slug validado.
- [ ] Enlaces internos al pilar y artículos relacionados incluidos.
- [ ] CTA final con WhatsApp o formulario.
- [ ] Publicado en `/blog/[slug]`.
- [ ] Pilar actualizado con enlace al nuevo artículo si aplica.
- [ ] Indexación solicitada en Search Console (opcional).
- [ ] Estado actualizado en `calendario-publicaciones.csv` (de `pendiente` a `publicado`).

---

## Notas importantes

- **No se publica contenido del blog en esta fase.** El flujo queda documentado para su ejecución posterior.
- Antes de escalar el calendario, validar resultados de los primeros 4–6 artículos.
- Las zonas de Madrid (cluster 9) son propuestas SEO, no confirmadas por la empresa: validar con THIASA antes de publicar y evaluar tráfico/conversiones antes de ampliarlas. No afirmar sede, oficina ni proyectos confirmados en esas zonas.
