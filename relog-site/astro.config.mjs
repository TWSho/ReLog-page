import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://twsho.github.io',
  base: '/ReLog-page',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
});