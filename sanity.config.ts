// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import sanityAstroTemplate from './schemas/sanity-astro-template';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: [sanityAstroTemplate],
  },
  studioBasePath: '/studio'
});