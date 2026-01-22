import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/cbl_nethive_demo',
  integrations: [react(), tailwind()],
  output: 'static',
});
