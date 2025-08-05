import { defineType, defineField } from 'sanity';

// Main Template Document
export const sanityAstroTemplate = defineType({
  name: 'sanity-astro-template',
  title: 'Sanity Astro Template',
  type: 'document',
  fields: [
    defineField({
      name: 'templateId',
      title: 'Template ID',
      type: 'string',
      description: 'Unique identifier for this template instance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'documentId',
      title: 'Document ID',
      type: 'string',
      description: 'Unique document identifier',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      description: 'The name of the business',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'reference',
      to: [{ type: 'seoSettings' }],
      description: 'SEO and meta information for the landing page',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'aboutSection' },
        { type: 'servicesSection' },
        { type: 'gallerySection' },
        { type: 'testimonialsSection' },
        { type: 'faqSection' },
        { type: 'serviceAreaSection' },
        { type: 'businessDetailsSection' },
        { type: 'companyOverviewSection' },
        { type: 'serviceHighlightsSection' },
        { type: 'preFooterSection' },
        { type: 'footerSection' },
      ],
      description: 'Ordered list of sections for the landing page',
    }),
    defineField({
      name: 'businessContact',
      title: 'Business Contact Information',
      type: 'reference',
      to: [{ type: 'businessContact' }],
      description: 'Contact details for the business',
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'serviceArea' }] }],
      description: 'Areas where the business provides services',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'socialLink' }] }],
      description: 'Social media profiles and links',
    }),
    defineField({
      name: 'theme',
      title: 'Theme Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Primary brand color (hex code)',
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Secondary brand color (hex code)',
        })
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'businessType',
      media: 'businessContact.logo',
    },
  },
});

// SEO Settings
export const seoSettings = defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  description: 'SEO settings use image slots "og-image-01" for Open Graph image and "favicon-01" for favicon',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main page title (50-60 characters recommended)',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Page description for search engines (150-160 characters recommended)',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'SEO keywords for the page',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Description for social media sharing',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'string',
      description: 'Uses image slot "og-image-01" for social media sharing',
      readOnly: true,
    }),
    defineField({
      name: 'ogUrl',
      title: 'Open Graph URL',
      type: 'url',
      description: 'Canonical URL for the page',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'string',
      description: 'Uses image slot "favicon-01" for website favicon',
      readOnly: true,
    }),
  ],
});

// Optimized Image
export const optimizedImage = defineType({
  name: 'optimizedImage',
  title: 'Optimized Image',
  type: 'document',
  description: 'Centralized image pool for template images using slot-based assignment',
  fields: [
    defineField({
      name: 'templateId',
      title: 'Template ID',
      type: 'string',
      description: 'Template identifier for isolation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'documentId',
      title: 'Document ID',
      type: 'string',
      description: 'Document identifier for isolation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageId',
      title: 'Image ID',
      type: 'string',
      description: 'Unique identifier for this image slot (e.g., hero-bg-001, about-image-001)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      description: 'Descriptive title for the image',
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Accessibility description for the image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'imageId',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
});

// Business Contact Information
export const businessContact = defineType({
  name: 'businessContact',
  title: 'Business Contact',
  type: 'document',
  description: 'Business contact uses image slot "business-logo-01" for logo',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emergencyPhone',
      title: 'Emergency Phone',
      type: 'string',
      description: '24/7 emergency contact number',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emergencyEmail',
      title: 'Emergency Email',
      type: 'email',
      description: 'Emergency contact email',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
        }),
        defineField({
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'coordinates',
      title: 'Map Coordinates',
      type: 'object',
      fields: [
        defineField({
          name: 'latitude',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'longitude',
          title: 'Longitude',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                ],
              },
            }),
            defineField({
              name: 'hours',
              title: 'Hours',
              type: 'string',
            }),
            defineField({
              name: 'isClosed',
              title: 'Closed',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
  ],
});

// Social Link
export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' }
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
  },
});

// CTA Button
export const ctaButton = defineType({
  name: 'ctaButton',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      description: 'URL or anchor link',
    })
  ],
});

// Hero Section
export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Subtitle or tagline below the main title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description text',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [{ type: 'ctaButton' }],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  description: 'Hero section uses image slot "hero-background-01" for background image',
});

// About Section
export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key features or benefits',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'ctaButton',
    }),
  ],
  description: 'About section uses image slot "about-image-01" for main image',
});

// Service
export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  description: 'Service documents can use image slots "service-image-01" through "service-image-06" for their images',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features or benefits of this service',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'ctaButton',
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});

// Services Section
export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Section CTA',
      type: 'ctaButton',
    }),
  ],
});

// Gallery Item
export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  description: 'Gallery items can use image slots "gallery-image-01" through "gallery-image-06" for their images',
  fields: [
    defineField({
      name: 'title',
      title: 'Item Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Gallery Image',
      type: 'string',
      description: 'Uses image slots "gallery-image-01" through "gallery-image-06"',
      readOnly: true,
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'ctaButton',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Before & After', value: 'before-after' },
          { title: 'Project Showcase', value: 'project-showcase' },
          { title: 'Process', value: 'process' },
          { title: 'Equipment', value: 'equipment' },
          { title: 'Team', value: 'team' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});

// Gallery Section
export const gallerySection = defineType({
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
  ],
  description: 'Gallery section uses image slots "gallery-image-01" through "gallery-image-06" for gallery images',
});

// Testimonial
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  description: 'Testimonials can use image slots "testimonial-avatar-01" through "testimonial-avatar-06" for customer photos',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Customer Photo',
      type: 'string',
      description: 'Uses image slots "testimonial-avatar-01" through "testimonial-avatar-06"',
      readOnly: true,
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
    },
  },
});

// Testimonials Section
export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});

// FAQ Item
export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Services', value: 'services' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Emergency', value: 'emergency' },
          { title: 'Scheduling', value: 'scheduling' },
          { title: 'Warranty', value: 'warranty' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
});

// FAQ Section
export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faqItem' }] }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});

// Service Area
export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'State, province, or district',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of services in this area',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'ctaButton',
    })
  ],
  preview: {
    select: {
      title: 'city',
      subtitle: 'region',
      media: 'image',
    },
  },
});

// Service Area Section
export const serviceAreaSection = defineType({
  name: 'serviceAreaSection',
  title: 'Service Area Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'serviceArea' }] }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Section CTA',
      type: 'ctaButton',
    })
  ],
});

// Business Details Section
export const businessDetailsSection = defineType({
  name: 'businessDetailsSection',
  title: 'Business Details Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Service Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'ctaButton',
              title: 'Call to Action',
              type: 'ctaButton',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Form Title',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'map',
      title: 'Map Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'latitude',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'longitude',
          title: 'Longitude',
          type: 'number',
        }),
        defineField({
          name: 'locationName',
          title: 'Location Name',
          type: 'string',
        }),
      ],
    }),
  ],
});

// Company Overview Section
export const companyOverviewSection = defineType({
  name: 'companyOverviewSection',
  title: 'Company Overview Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Company Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'ctaButton',
    }),
  ],
  description: 'Company overview sections use image slots "company-image-01", "company-image-02", "company-image-03"',
});

// Service Highlights Section
export const serviceHighlightsSection = defineType({
  name: 'serviceHighlightsSection',
  title: 'Service Highlights Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'statistic' }] }],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
});

// Statistic
export const statistic = defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }) 
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
    },
  },
});

// Pre-Footer Section
export const preFooterSection = defineType({
  name: 'preFooterSection',
  title: 'Pre-Footer Section',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'socialLink' }] }],
    }),
  ],
  description: 'Pre-footer section uses image slot "logo-01" for logo',
});

// Footer Service Area
export const footerServiceArea = defineType({
  name: 'footerServiceArea',
  title: 'Footer Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services offered in this region',
    }),
  ],
  preview: {
    select: {
      title: 'region',
    },
  },
});

// Footer Section
export const footerSection = defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'object',
  fields: [
    defineField({
      name: 'serviceAreas',
      title: 'Footer Service Areas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'footerServiceArea' }] }],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      description: 'Copyright notice (year will be automatically added)',
    }),
  ],
});

export default sanityAstroTemplate;

