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
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
      description: 'Image for social media sharing',
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
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
      description: 'Favicon for the website',
    }),
  ],
});

// Image (formerly Optimized Image)
export const image = defineType({
  name: 'image',
  title: 'Image',
  type: 'document',
  fields: [
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
    }),
    defineField({
      name: 'slot',
      title: 'Image Slot',
      type: 'string',
      description: 'Where this image is used (e.g., hero-background, about-image, service-1)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Recommended Dimensions',
      type: 'object',
      fields: [
        defineField({
          name: 'width',
          title: 'Width',
          type: 'number',
        }),
        defineField({
          name: 'height',
          title: 'Height',
          type: 'number',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'imageId',
      media: 'image',
    },
  },
});

// Business Contact Information
export const businessContact = defineType({
  name: 'businessContact',
  title: 'Business Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Business Logo',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [{ type: 'ctaButton' }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
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
      name: 'image',
      title: 'About Image',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});

// Service
export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
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
      name: 'image',
      title: 'Service Image',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
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
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Emergency', value: 'emergency' },
          { title: 'Installation', value: 'installation' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Repair', value: 'repair' },
          { title: 'Inspection', value: 'inspection' },
          { title: 'Upgrade', value: 'upgrade' },
        ],
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});

// Gallery Item
export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
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
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryItem' }] }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});

// Testimonial
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
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
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
        defineField({
          name: 'isActive',
          title: 'Show Contact Form',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'map',
      title: 'Map Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'isActive',
          title: 'Show Map',
          type: 'boolean',
          initialValue: true,
        }),
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
            defineField({
              name: 'image',
              title: 'Section Image',
              type: 'reference',
              to: [{ type: 'optimizedImage' }],
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'SVG icon or emoji',
    }),
    defineField({
      name: 'image',
      title: 'Icon Image',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
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
      name: 'logo',
      title: 'Logo',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
    }),
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
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
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});

// Video Item (for future use)
export const videoItem = defineType({
  name: 'videoItem',
  title: 'Video Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video URL',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'reference',
      to: [{ type: 'optimizedImage' }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Video duration (e.g., "2:30")',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'thumbnail',
    },
  },
});

export default sanityAstroTemplate;
