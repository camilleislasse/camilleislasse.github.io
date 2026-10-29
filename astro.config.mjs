// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://camilleislasse.github.io',
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      transformers: [
        {
          span(node) {
            const style = node.properties?.style;
            if (typeof style === 'string' && style.includes('#758575DD')) {
              node.properties.style = style.replace('#758575DD', '#8F9F8F');
            }
          },
        },
      ],
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales/') &&
        !page.includes('/blog/tag/') &&
        !page.includes('/cv/'),
    }),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
