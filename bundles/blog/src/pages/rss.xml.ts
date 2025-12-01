import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  // Ordenar por fecha descendente
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Mi Blog',
    description: 'Descripción del blog para RSS readers',
    site: context.site ?? 'https://example.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author,
      customData: `<language>de-DE</language>`,
    })),
    customData: `<language>de-DE</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
