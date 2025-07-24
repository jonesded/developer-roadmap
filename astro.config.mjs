// https://astro.build/config
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import { serializeSitemap, shouldIndexPage } from './sitemap.mjs';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://doc.imoogleai.xyz/',
  redirects: {
    '/devops/devops-engineer': {
      status: 301,
      destination: '/devops',
    },
    '/ai-tutor': {
      status: 301,
      destination: '/ai',
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: function (element) {
            const href = element.properties.href;
            const whiteListedStarts = [
              '/',
              '#',
              'mailto:',
              'https://github.com/kamranahmedse',
              'https://thenewstack.io',
              'https://kamranahmed.info',
              'https://roadmap.sh',
            ];
            if (whiteListedStarts.some((start) => href.startsWith(start))) {
              return [];
            }
            return 'noopener noreferrer nofollow';
          },
        },
      ],
    ],
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: shouldIndexPage,
      serialize: serializeSitemap,
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['hnmdevs.com', 'localhost'],
    },
    resolve: {
      alias: [
        {
          find: '@roadmapsh/editor/style.css',
          replacement: new URL('./packages/editor/style.css', import.meta.url).pathname,
        },
        {
          find: '@roadmapsh/editor',
          replacement: new URL('./packages/editor/index.js', import.meta.url).pathname,
        },
      ],
    },
    ssr: {
      noExternal: [/^@roadmapsh\/editor.*$/],
    },
  },
});
