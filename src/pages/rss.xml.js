import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Diego Sánchez | Blog',
    description: 'Mi camino aprendiendo Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-mx</language>`,
  });
}
