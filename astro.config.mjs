// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import dotenv from 'dotenv';

dotenv.config(); // default loads `.env`

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
  studioBasePath: '/studio'

  }), react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});