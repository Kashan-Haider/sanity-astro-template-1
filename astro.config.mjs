// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '5kin5owf',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
  studioBasePath: '/studio'

  }), react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});