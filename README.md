# Mariana Vega — Portafolio

Portafolio personal de desarrolladora full stack, bilingüe (ES/EN).

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **Motion** para animaciones · **lucide-react** para iconos
- i18n propio basado en diccionarios tipados, con rutas por idioma (`/es`, `/en`)

## Características

- Versión completa (`/es`, `/en`) y versión compacta de una sola vista (`/es/express`, `/en/express`)
- Casos de estudio por proyecto con galería de capturas (lightbox)
- SEO: metadatos por idioma, `hreflang`, `sitemap.xml`, `robots.txt`
- Imágenes Open Graph generadas dinámicamente (global y por proyecto)
- CV descargable por idioma, favicon generado y página 404 personalizada

## Desarrollo

Requiere Node 20+ y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción
pnpm lint
```

## Estructura

```
app/[lang]/              Rutas por idioma (home, express, projects/[slug])
components/              Componentes de UI
content/dictionaries/    Textos en español e inglés
content/projects.ts      Datos de los proyectos (stack, enlaces, estado)
proxy.ts                 Redirige / al idioma del navegador
public/                  CVs y capturas de proyectos
```

## Despliegue

Configura la variable de entorno `NEXT_PUBLIC_SITE_URL` con el dominio final
(por ejemplo `https://tu-dominio.com`). Se usa para URLs canónicas, sitemap e
imágenes Open Graph.
