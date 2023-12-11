import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Jan Dorn´s Blog',
    description: 'Hey I´m Jan 👋. I´m a web developer, designer, and tech enthusiast. In my blog I write about things that excite me.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
