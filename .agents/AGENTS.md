# Reglas del Agente: Flujo Editorial SEO Escalable

Este archivo contiene reglas y restricciones de comportamiento obligatorias para todos los agentes de IA que trabajen en este repositorio.

## Regla de Oro: Evitar Cargar Toda la Biblioteca

Para prevenir el consumo innecesario de contexto y optimizar los costes y límites del modelo, **está estrictamente prohibido leer todos los artículos del blog completos** de forma automática al crear, auditar o actualizar un contenido.

---

## Flujo Editorial para Creación y Edición de Artículos

Cuando se reciba la orden de trabajar con un artículo del blog (ej. redactar, revisar, corregir), el agente DEBE seguir estrictamente estos pasos:

1.  **Consulta del Registro Ligero:**
    *   Leer el calendario en [calendario-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/calendario-publicaciones.csv) y el registro ligero en [registro-publicaciones.csv](file:///Users/mypro/Workspace/Webs/reformas/docs/seo/registro-publicaciones.csv) para obtener metadatos de los artículos existentes (títulos, keywords, clústeres, slugs, descripción SEO).
2.  **Análisis de Solapamientos:**
    *   Comparar el título, slug, descripción, keyword, intención de búsqueda y clúster del artículo objetivo con los registros ligeros.
    *   Realizar búsquedas dirigidas en el directorio `content/blog/` usando comandos de búsqueda rápida como `rg` (ripgrep) o `grep` para detectar palabras clave o temas coincidentes.
3.  **Selección Restringida (Máximo 5):**
    *   Seleccionar como máximo los **5 artículos** del blog más relacionados semánticamente o del mismo clúster.
    *   Identificar la página pilar correspondiente (generalmente en `/servicios/...`).
4.  **Lectura Dirigida:**
    *   Cargar y leer completos **únicamente** los archivos de esos 5 artículos seleccionados y la página pilar. No leer el resto de los archivos de la carpeta `content/blog/`.
5.  **Control de Canibalización:**
    *   Si durante la comparación se detecta riesgo de canibalización de palabras clave o intenciones de búsqueda con artículos existentes que no pueda resolverse con los 5 candidatos seleccionados, **detenerse inmediatamente** y pedir autorización al usuario para ampliar la revisión.
6.  **Regeneración del Índice:**
    *   Inmediatamente después de crear, actualizar o publicar cualquier contenido del blog, el agente DEBE ejecutar el script generador para mantener actualizado el índice ligero:
        ```bash
        npm run seo:index
        ```

---

## Modos de Operación SEO y Comandos

El agente debe operar bajo uno de estos tres modos definidos:

### 1. SEO AUDITORÍA COMPLETA
*   **Permiso:** Puede leer y analizar toda la biblioteca de contenidos.
*   **Activación:** **Solo bajo orden explícita** del usuario para realizar auditorías globales, reestructuraciones o migraciones de clusters.

### 2. SEO SIGUIENTE ARTÍCULO
*   **Permiso:** Restringido a la lectura de metadatos rápidos y un máximo de 5 artículos + 1 pilar.
*   **Activación:** Modo por defecto para la creación y edición diaria de artículos.

### 3. SEO REVISIÓN EDITORIAL
*   **Permiso:** Auditoría programada cada 25 artículos redactados o trimestralmente.
*   **Activación:** Sirve para evaluar canibalización acumulada, consistencia de enlaces cruzados y optimizaciones puntuales del registro.
