// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import sanityAstroTemplate, {
  ctaButton,
  optimizedImage,
  businessContact,
  socialLink,
  testimonial,
  service,
  galleryItem,
  videoItem,
  serviceArea,
  faqItem,
  statistic,
  footerServiceArea,
  seoSettings,
  // Section types
  heroSection,
  aboutSection,
  servicesSection,
  gallerySection,
  testimonialsSection,
  faqSection,
  serviceAreaSection,
  businessDetailsSection,
  companyOverviewSection,
  serviceHighlightsSection,
  preFooterSection,
  footerSection
} from './schemas/sanity-astro-template';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Sanity Astro Templates')
              .child(
                S.documentList()
                  .title('Templates')
                  .filter('_type == "sanity-astro-template"')
                  .defaultOrdering([{ field: 'templateId', direction: 'asc' }])
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['sanity-astro-template'].includes(listItem.getId() || '')
            ),
          ])
    })
  ],
  schema: {
    types: [
      sanityAstroTemplate,
      ctaButton,
      optimizedImage,
      businessContact,
      socialLink,
      testimonial,
      service,
      galleryItem,
      videoItem,
      serviceArea,
      faqItem,
      statistic,
      footerServiceArea,
      seoSettings,
      // Section types
      heroSection,
      aboutSection,
      servicesSection,
      gallerySection,
      testimonialsSection,
      faqSection,
      serviceAreaSection,
      businessDetailsSection,
      companyOverviewSection,
      serviceHighlightsSection,
      preFooterSection,
      footerSection
    ],
  },
  studioBasePath: '/studio'
});
