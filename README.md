# Blog de Diego Sánchez — tutorial "Build your first Astro blog"

Blog construido siguiendo las **6 unidades** del tutorial oficial de Astro
([docs.astro.build/en/tutorial](https://docs.astro.build/en/tutorial/0-introduction/)),
incluida la lección opcional de **colecciones de contenido**. Cada lección tiene su propio
commit en el historial (`git log`).

**Sitio publicado:** https://diegosanchez-astro-blog.netlify.app

| Unidad | Qué se hizo |
|---|---|
| 1. Setup | Proyecto con la plantilla *minimal*, repositorio en GitHub y despliegue en Netlify |
| 2. Pages | Páginas `.astro`, posts en Markdown, variables, renderizado condicional, estilos con `define:vars` y `global.css` |
| 3. Components | `Navigation`, `Footer`, `Social` (props), `Header` responsivo y menú con `<script>` |
| 4. Layouts | `BaseLayout` con `<slot />`, `MarkdownPostLayout` y layouts anidados |
| 5. Astro API | Lista de posts con `import.meta.glob()`, etiquetas con `getStaticPaths()`, índice de etiquetas y RSS |
| 6. Islands | Isla de Preact con `client:load`, modo oscuro sin framework y colección de contenido con Zod |

## Correrlo

Requiere **Node.js 22.23.4 o más nuevo** (Astro 7).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Estructura

```text
src/
├── blog/                 # posts en Markdown (colección de contenido)
├── components/           # Navigation, Header, Menu, Footer, Social, BlogPost, ThemeIcon, Greeting.jsx
├── layouts/              # BaseLayout, MarkdownPostLayout
├── pages/
│   ├── index.astro, about.astro, blog.astro, rss.xml.js
│   ├── posts/[...slug].astro
│   └── tags/index.astro, tags/[tag].astro
├── scripts/menu.js
├── styles/global.css
└── content.config.ts     # schema de la colección "blog"
```
