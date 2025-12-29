# Sitio Web de Reformas THASA

Este es el sitio web oficial para la empresa de reformas "THASA", construido con [Next.js](https://nextjs.org), Tailwind CSS y TypeScript.

## Características

- **Diseño Moderno y Responsivo**: Adaptado a móviles, tablets y escritorio.
- **Enfoque en Conversión**: Integración directa con WhatsApp para solicitudes de presupuesto.
- **Alto Rendimiento**: Optimizado para carga rápida y SEO.
- **Galería de Proyectos**: Visualización atractiva de trabajos realizados.

## Requisitos Previos

- Node.js 18.17 o superior
- npm (o yarn/pnpm/bun)

## Instalación y Desarrollo

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

- `src/app`: Rutas y layouts principales (App Router).
- `src/components`: Componentes reutilizables (Navbar, Hero, Servicios, etc.).
- `public`: Imágenes y activos estáticos.

## Despliegue

La forma más sencilla de desplegar este proyecto es utilizando la [Plataforma Vercel](https://vercel.com).

1. Sube tu código a un repositorio Git (GitHub/GitLab/Bitbucket).
2. Importa el proyecto en Vercel.
3. Vercel detectará automáticamente Next.js y configurará el despliegue.

## Personalización

- **WhatsApp**: Para cambiar el número de teléfono, edita la variable `whatsappUrl` en los componentes `src/components/navbar.tsx`, `src/components/hero.tsx`, `src/components/services.tsx`, `src/components/project-gallery.tsx` y `src/components/contact.tsx`.
- **Imágenes**: Reemplaza las imágenes en la carpeta `public/` con fotos reales de los proyectos.

---
Creado con ❤️ para THASA.
