# Flujo de Publicación SEO — THIASA Reformas (Madrid)

> Proceso para pasar de la planificación a la publicación de cada artículo del calendario SEO aplicando un flujo de lectura y análisis escalable.
> Fase actual: solo documentación. **No se publica contenido del blog todavía.**

Última actualización: 2026-07-19

---

## Modos de Operación SEO

Para optimizar el uso de contexto y agilizar el trabajo del agente, el flujo editorial se divide en tres modos distintos de operación:

### 1. SEO SIGUIENTE ARTÍCULO (Modo por defecto)
*   **Propósito:** Redacción y edición diaria de contenidos individuales sin sobrecargar el contexto.
*   **Alcance:** El agente lee únicamente el calendario, el registro ligero, la página pilar y como máximo **5 artículos relacionados**.
*   **Flujo:**
    1.  Consultar [calendario-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/calendario-publicaciones.csv) para identificar el próximo contenido a redactar.
    2.  Consultar [registro-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/registro-publicaciones.csv) para analizar títulos, keywords y slugs existentes.
    3.  Realizar búsquedas dirigidas (ej. `rg` o `grep`) en `content/blog/` para descartar solapamientos semánticos.
    4.  Seleccionar hasta 5 artículos del mismo cluster o muy relacionados y leerlos completos junto a la página pilar correspondiente.
    5.  Si se detecta riesgo de canibalización insoluble con esta muestra, detenerse y pedir autorización para una revisión ampliada.
    6.  Redactar el artículo y ejecutar la indexación para actualizar el registro:
        ```bash
        npm run seo:index
        ```

### 2. SEO REVISIÓN EDITORIAL
*   **Propósito:** Mantener la salud editorial, actualizar el registro ligero, y evitar desviaciones del plan.
*   **Frecuencia:** Cada 25 artículos creados/publicados o cada tres meses.
*   **Alcance:** Revisa solapamientos menores, oportunidades de enlazado interno cruzado, contenidos desactualizados y canibalización en el registro.
*   **Acciones:** Ejecuta `npm run seo:index`, valida la unicidad de slugs y IDs en el registro, y produce un informe de oportunidades.

### 3. SEO AUDITORÍA COMPLETA
*   **Propósito:** Análisis estructural y completo de toda la biblioteca de contenidos.
*   **Alcance:** Permite la lectura completa de todos los artículos y pilares del blog.
*   **Activación:** **Únicamente bajo orden explícita del usuario** (ej. auditorías semánticas periódicas, migraciones o cambios de arquitectura del blog).

---

## Etapas del flujo (Modo "Siguiente Artículo")

### 1. Planificación e Inspección Ligera
- Consultar el siguiente artículo `pendiente` en `calendario-publicaciones.csv`.
- Leer [registro-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/registro-publicaciones.csv) para obtener el estado de la biblioteca y comparar keywords.
- Hacer una búsqueda rápida en `content/blog/` con palabras clave para comprobar que no existan borradores o artículos similares.
- Identificar la página pilar activa del clúster (columna `pagina_pilar` del registro ligero).

### 2. Selección de Candidatos y Lectura Directa
- Seleccionar hasta **5 artículos** con la relación temática más estrecha.
- Leer únicamente esos archivos y la página pilar asociada.
- Desarrollar el H1, estructura de H2/H3 y puntos clave a cubrir basándose en la información extraída, evitando la lectura de cualquier otro artículo.

### 3. Redacción y SEO On-Page
- Seguir las pautas de [guia-estilo-articulos.md](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/guia-estilo-articulos.md).
- Longitud: 800–1.500 palabras.
- Incluir la keyword principal en H1, introducción (primeros 2 párrafos) y conclusión.
- Redactar un título SEO (≤ 60 caracteres) y meta descripción (140-155 caracteres).
- Guardar el borrador en `/content/blog/[slug].md`.

### 4. Revisión y Control de Canibalización
- Verificar que la keyword principal no está en uso en otros artículos del registro.
- Enlazar al pilar de su clúster y añadir 1 o 2 enlaces internos hacia artículos relacionados de la lista de candidatos.
- Si se detecta un posible solapamiento de intenciones o canibalización que no pueda resolverse entre los 5 candidatos seleccionados, **parar el flujo** y consultar al usuario.

### 5. Publicación Técnica y Regeneración de Índice
- Cambiar el estado del artículo en el frontmatter a `estado: publicado` (cuando proceda la fase de publicación).
- Registrar la publicación ejecutando:
  ```bash
  npm run seo:index
  ```
- Modificar el estado del contenido en `calendario-publicaciones.csv` de `pendiente` a `publicado`.
- Actualizar enlaces en la página pilar si aplica.

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
| Redactor | Crear el artículo siguiendo el flujo escalable de consulta de registros. |
| Revisor SEO | Validar on-page, evitar canibalización y coordinar enlaces internos. |
| Técnico web | Publicar el artículo, verificar renderizado y ejecutar `npm run seo:index`. |
| THIASA (cliente) | Validar precios, datos técnicos y disponibilidad comercial. |

---

## Checklist final antes de dar por publicado un artículo

- [ ] Registro rápido [registro-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/registro-publicaciones.csv) consultado para evitar duplicidades.
- [ ] No se han leído más de 5 artículos de referencia en el proceso.
- [ ] Keyword principal en H1, intro y conclusión.
- [ ] Enlaces internos al pilar y artículos relacionados incluidos con anchor semántico.
- [ ] CTA final con WhatsApp o formulario.
- [ ] Publicado en `/blog/[slug]`.
- [ ] Script `npm run seo:index` ejecutado para actualizar el registro ligero.
- [ ] Estado actualizado en `calendario-publicaciones.csv`.
