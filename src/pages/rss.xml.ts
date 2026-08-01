import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getPublishedPosts } from '../utils/blog';

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedPosts();

  return rss({
    title: `${site.name} · Blog`,
    description: site.blogDescription,
    site: context.site!,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      '<language>fr</language>',
      `<atom:link href="${new URL('/rss.xml', context.site)}" rel="self" type="application/rss+xml"/>`,
    ].join(''),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
};
