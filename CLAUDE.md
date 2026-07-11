# THIASA — Web de reformas (www.thiasa.es)

Sitio Next.js (App Router) + Tailwind CSS v4 para THIASA, empresa de reformas
integrales en Madrid. Blog en markdown en `content/blog/` renderizado con
remark + remark-gfm ([src/lib/posts.ts](src/lib/posts.ts)).

## Regla nº 1: NO inventar diseños nuevos

Toda página o componente nuevo debe usar la identidad visual existente del
sitio. **Prohibido** introducir paletas, fuentes o estéticas propias
("editorial", "revista", "minimalista", etc.) que no existan ya en el sitio.
Antes de crear UI, mirar componentes existentes en `src/components/` y copiar
su lenguaje visual.

### Identidad de marca (fuente de verdad: `src/app/globals.css`)

- Azul primario: `#004AAD` (`--primary-blue`, clase `text-primary` / `bg-primary`)
- Azul acento: `#38B6FF` (`--accent-blue`, clase `text-accent` / `bg-accent`)
- Fondo claro: `#F2F1ED` (`bg-background`); texto: `#1D1D1D`
- Secciones oscuras: `#1D1D1D` / `#0D1117` con texto blanco
- Tipografía: la del sistema definida en globals.css — NO añadir fuentes de Google nuevas
- Tarjetas: `bg-white rounded-2xl shadow` con hover suave; chips `rounded-full`
- CTA: botones `bg-accent` con hover, casi siempre enlazando al WhatsApp
  `https://wa.me/34604154746`

### Reglas técnicas de CSS

- Las reglas globales de `h1-h6` viven en `@layer base` en globals.css para
  que las utilidades de Tailwind (`text-white`, etc.) puedan sobreescribirlas.
  NO sacar reglas de elemento fuera de `@layer base`: CSS sin capa pisa las
  utilidades de Tailwind v4 y rompe los títulos de las secciones oscuras.
- Títulos sobre fondo oscuro o imagen: poner SIEMPRE clase de color explícita
  (`text-white`), no confiar en la herencia.
- Estilos del contenido markdown del blog: `src/app/blog/blog.module.css`
  (clase `.content`). Mantenerlos alineados con la paleta de marca.

## Verificación obligatoria antes de dar por buena una UI

No basta con que compile. Tras cambiar cualquier página:

1. `npm run dev` y capturar la página con Playwright (escritorio 1440px y
   móvil 390px, `fullPage`).
2. **Mirar la captura**: contraste de títulos (nada de azul sobre oscuro),
   tablas de markdown renderizadas como `<table>` reales, imágenes cargando.
3. `npx next build` debe pasar sin errores.

## Blog

- Artículos en `content/blog/*.md` con frontmatter; solo se publican los que
  tienen `estado: publicado`.
- Las tablas de los artículos son GFM: el pipeline necesita `remark-gfm`.
- Mantener el SEO existente: metadata, canonical, OpenGraph y JSON-LD
  (Article + BreadcrumbList) en las páginas del blog.

## Git

- Mensajes de commit en español, estilo convencional (`fix:`, `feat:`, `docs:`).
- Remoto: https://github.com/DevErickDiCE/thiasa-web (rama `main`).
