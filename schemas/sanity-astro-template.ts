const sanityAstroTemplate = {
  name: 'sanity-astro-template',
  title: 'Sanity Astro Template',
  type: 'document',
  fields: [
    // Template Identification
    {
      name: 'templateId',
      title: 'Template ID',
      type: 'string',
      description: 'Unique identifier for the template type (e.g., "plumbing-template", "restaurant-template"). Used to identify which template to use when building the site.',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'documentId',
      title: 'Document ID',
      type: 'string',
      description: 'Unique identifier for this specific site instance (e.g., user ID, build ID, or custom identifier). Used to fetch the correct data for this specific deployment.',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      description: 'The name of the business or company that will appear throughout the website (e.g., "AquaFlow Plumbing", "John\'s Restaurant").',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'businessEmail',
      title: 'Business Email',
      type: 'string',
      description: 'Primary contact email address for the business. Used for contact forms and footer information.',
      validation: (Rule: any) => Rule.email()
    },

    // Theme Colors - Detailed descriptions for color usage
    {
      name: 'themeColors',
      title: 'Theme Colors',
      type: 'object',
      description: 'Primary color scheme for the website. These colors will be used throughout the site for branding, buttons, accents, and backgrounds.',
      fields: [
        {
          name: 'brand',
          title: 'Brand Color (Primary)',
          type: 'string',
          description: 'Primary brand color - should be a DARK color (hex code). Used for main branding elements, primary buttons, and important UI elements. Example: #1e3a8a (dark blue)',
          initialValue: '#1e3a8a'
        },
        {
          name: 'accent',
          title: 'Accent Color (Secondary)',
          type: 'string',
          description: 'Secondary accent color - should be a BRIGHT/VIBRANT color (hex code). Used for call-to-action buttons, highlights, and interactive elements. Example: #BF465A (bright rose)',
          initialValue: '#BF465A'
        },
        {
          name: 'surface',
          title: 'Surface Color (Background)',
          type: 'string',
          description: 'Background/surface color - should be a DARK color (hex code). Used for dark sections, navigation backgrounds, and card backgrounds. Example: #010819 (dark slate)',
          initialValue: '#010819'
        }
      ]
    },

    // Hero Section
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      description: 'The main hero section that appears at the top of the website. This is the first thing visitors see.',
      fields: [
        {
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'string',
          description: 'Main heading text for the hero section. This is the largest, most prominent text on the page (e.g., "Transform Your Plumbing Experience with Expert Plumbers").',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'heroSubtitle',
          title: 'Hero Subtitle',
          type: 'text',
          description: 'Subtitle text that appears below the main heading. Provides additional context or description about the business (e.g., "Fast, reliable, and affordable plumbing solutions for homes and businesses.").'
        },
        {
          name: 'heroBadge',
          title: 'Hero Badge',
          type: 'string',
          description: 'Small badge text that appears above the main title. Used for highlighting key selling points (e.g., "24/7 Emergency Service", "Licensed & Insured").'
        },
        {
          name: 'heroImage',
          title: 'Hero Background Image',
          type: 'image',
          description: 'Background image for the hero section. Should be a high-quality image that represents the business or service. Will be displayed with overlay effects.'
        },
        {
          name: 'ctaButtons',
          title: 'Call to Action Buttons',
          type: 'array',
          description: 'Primary action buttons in the hero section. Maximum of 2 buttons recommended for best UX.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'text', 
                type: 'string', 
                title: 'Button Text',
                description: 'Text to display on the button (e.g., "Get Free Quote", "Contact Us")'
              },
              { 
                name: 'href', 
                type: 'string', 
                title: 'Button Link',
                description: 'URL or anchor link where the button should navigate (e.g., "#contact", "/quote")'
              },
              { 
                name: 'primary', 
                type: 'boolean', 
                title: 'Primary Button',
                description: 'Whether this is the primary (main) button. Primary buttons use accent color, secondary buttons use outline style.',
                initialValue: false 
              }
            ]
          }],
          validation: (Rule: any) => Rule.max(2)
        }
      ]
    },

    // About Section
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      description: 'Section that introduces the business, its mission, and key benefits. Appears after the hero section.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for the about section (e.g., "Trusted Plumbing Experts for Your Home & Business").'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Main description text that explains what the business does and its value proposition.'
        },
        {
          name: 'image',
          title: 'About Image',
          type: 'image',
          description: 'Image that accompanies the about section. Should represent the business, team, or service being offered.'
        },
        {
          name: 'features',
          title: 'Features List',
          type: 'array',
          description: 'List of key features, benefits, or selling points. Each item will be displayed with a checkmark.',
          of: [{ type: 'string' }]
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          description: 'Call-to-action button at the end of the about section.',
          fields: [
            { 
              name: 'text', 
              type: 'string', 
              title: 'Button Text',
              description: 'Text for the CTA button (e.g., "Contact Our Team")'
            },
            { 
              name: 'href', 
              type: 'string', 
              title: 'Button Link',
              description: 'Where the button should link to (e.g., "#contact")'
            }
          ]
        }
      ]
    },

    // Company Overview Sections
    {
      name: 'companyOverview',
      title: 'Company Overview',
      type: 'object',
      description: 'Multiple subsections that provide detailed information about the company, its values, experience, and processes.',
      fields: [
        {
          name: 'sections',
          title: 'Overview Sections',
          type: 'array',
          description: 'Multiple subsections with alternating layout (text on left/right, image on opposite side). Each section covers a different aspect of the company.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'title', 
                type: 'string', 
                title: 'Section Title',
                description: 'Title for this subsection (e.g., "Our Mission", "Years of Experience", "Quality Assurance")'
              },
              { 
                name: 'description', 
                type: 'text', 
                title: 'Section Description',
                description: 'Detailed description explaining this aspect of the company'
              },
              { 
                name: 'image', 
                type: 'image', 
                title: 'Section Image',
                description: 'Image that represents this aspect of the company (e.g., team photo, work process, quality check)'
              },
              { 
                name: 'imageAlt', 
                type: 'string', 
                title: 'Image Alt Text',
                description: 'Alternative text for the image for accessibility purposes'
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(5)
        }
      ]
    },

    // Services Section
    {
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      description: 'Section showcasing the main services offered by the business. Each service includes details, features, and call-to-action.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for the services section (e.g., "Our Plumbing Services").'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle text that provides context about the services offered.'
        },
        {
          name: 'services',
          title: 'Services',
          type: 'array',
          description: 'List of services offered by the business. Each service includes image, title, description, features, and CTA.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'title', 
                type: 'string', 
                title: 'Service Title',
                description: 'Name of the service (e.g., "Emergency Repairs", "Installations")'
              },
              { 
                name: 'description', 
                type: 'text', 
                title: 'Service Description',
                description: 'Brief description of what this service includes'
              },
              { 
                name: 'image', 
                type: 'image', 
                title: 'Service Image',
                description: 'Image representing this service'
              },
              { 
                name: 'bullets', 
                type: 'array', 
                of: [{ type: 'string' }], 
                title: 'Service Features',
                description: 'List of key features or benefits of this service (e.g., ["24/7 rapid response", "Leak & burst pipe fixes"])'
              },
              { 
                name: 'cta', 
                type: 'object', 
                title: 'Service CTA',
                description: 'Call-to-action for this specific service',
                fields: [
                  { 
                    name: 'text', 
                    type: 'string', 
                    title: 'CTA Text',
                    description: 'Button text (e.g., "Learn More")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'CTA Link',
                    description: 'Link for the button (e.g., "#emergency-repairs")'
                  }
                ]
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(6)
        },
        {
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          description: 'Key statistics or achievements displayed in glass cards below the services. Used to build trust and credibility.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'image', 
                type: 'image', 
                title: 'Stat Image',
                description: 'Image representing this statistic (e.g., trophy image, shield image, clock image)'
              },
              { 
                name: 'value', 
                type: 'string', 
                title: 'Stat Value',
                description: 'The numerical value or text to display (e.g., "500+", "99.9%", "24/7")'
              },
              { 
                name: 'label', 
                type: 'string', 
                title: 'Stat Label',
                description: 'Description of what this statistic represents (e.g., "Projects Completed", "Uptime Guarantee")'
              }
            ]
          }],
          validation: (Rule: any) => Rule.max(4)
        }
      ]
    },

    // Gallery Section
    {
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      description: 'Interactive gallery showcasing recent projects, work examples, or portfolio items. Features a main display with thumbnail navigation.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for the gallery section (e.g., "Gallery Highlights").'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle explaining what the gallery showcases (e.g., "Explore our recent projects and see the difference our team makes.").'
        },
        {
          name: 'items',
          title: 'Gallery Items',
          type: 'array',
          description: 'Individual gallery items. Each item includes an image, heading, description, and optional CTA. The first item is featured prominently.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'image', 
                type: 'image', 
                title: 'Gallery Image',
                description: 'High-quality image of the project or work example'
              },
              { 
                name: 'heading', 
                type: 'string', 
                title: 'Item Heading',
                description: 'Title for this gallery item (e.g., "Modern Kitchen Renovation")'
              },
              { 
                name: 'description', 
                type: 'text', 
                title: 'Item Description',
                description: 'Brief description of the project or work shown'
              },
              { 
                name: 'cta', 
                type: 'object', 
                title: 'Item CTA',
                description: 'Optional call-to-action for this gallery item',
                fields: [
                  { 
                    name: 'label', 
                    type: 'string', 
                    title: 'CTA Label',
                    description: 'Button text (e.g., "View Project")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'CTA Link',
                    description: 'Link for the button (e.g., "/projects/kitchen-renovation")'
                  }
                ]
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(10)
        }
      ]
    },

    // Testimonials Section
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      description: 'Customer testimonials and reviews displayed in an interactive carousel. Builds trust and social proof.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for testimonials section (e.g., "What Our Clients Are Saying").'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle text that encourages trust (e.g., "Join thousands of satisfied customers who have transformed their businesses with our solutions.").'
        },
        {
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          description: 'Customer testimonials with profile information and review text. Each testimonial includes customer details and their feedback.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'image', 
                type: 'image', 
                title: 'Customer Image',
                description: 'Profile photo of the customer (if not provided, a default avatar will be generated)'
              },
              { 
                name: 'name', 
                type: 'string', 
                title: 'Customer Name',
                description: 'Full name of the customer providing the testimonial'
              },
              { 
                name: 'role', 
                type: 'string', 
                title: 'Customer Role',
                description: 'Job title or role of the customer (e.g., "Homeowner", "Property Manager")'
              },
              { 
                name: 'company', 
                type: 'string', 
                title: 'Customer Company',
                description: 'Company name if applicable (e.g., "ABC Properties", "Smith Family")'
              },
              { 
                name: 'industry', 
                type: 'string', 
                title: 'Industry',
                description: 'Industry or sector the customer represents (e.g., "Residential", "Commercial Real Estate")'
              },
              { 
                name: 'text', 
                type: 'text', 
                title: 'Testimonial Text',
                description: 'The actual testimonial or review text from the customer'
              },
              { 
                name: 'verified', 
                type: 'boolean', 
                title: 'Verified Customer',
                description: 'Whether this is a verified customer (can be used for special badges or trust indicators)',
                initialValue: false 
              },
              { 
                name: 'link', 
                type: 'url', 
                title: 'Customer Link',
                description: 'Optional link to customer\'s website, social media, or review platform'
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(10)
        }
      ]
    },

    // Video Gallery Section
    {
      name: 'videoGallerySection',
      title: 'Video Gallery Section',
      type: 'object',
      description: 'Section showcasing video content such as project highlights, tutorials, or customer stories. Videos are displayed in cards with thumbnails.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for video gallery section (e.g., "Watch Our Plumbing in Action").'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle explaining the video content (e.g., "See how our team solves real challenges and delivers quality results.").'
        },
        {
          name: 'videos',
          title: 'Videos',
          type: 'array',
          description: 'Video content with thumbnails, titles, descriptions, and optional CTAs. Each video opens in a new tab when clicked.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'title', 
                type: 'string', 
                title: 'Video Title',
                description: 'Title of the video (e.g., "Emergency Pipe Repair Process")'
              },
              { 
                name: 'description', 
                type: 'text', 
                title: 'Video Description',
                description: 'Brief description of what the video shows or explains'
              },
              { 
                name: 'videoUrl', 
                type: 'url', 
                title: 'Video URL',
                description: 'Link to the video (YouTube, Vimeo, or other video platform)'
              },
              { 
                name: 'thumbnail', 
                type: 'image', 
                title: 'Video Thumbnail',
                description: 'Thumbnail image for the video (if not provided, video platform will generate one)'
              },
              { 
                name: 'cta', 
                type: 'object', 
                title: 'Video CTA',
                description: 'Optional call-to-action for this video',
                fields: [
                  { 
                    name: 'label', 
                    type: 'string', 
                    title: 'CTA Label',
                    description: 'Button text (e.g., "Watch Now")'
                  },
                  { 
                    name: 'href', 
                    type: 'url', 
                    title: 'CTA Link',
                    description: 'Link for the button (usually same as video URL)'
                  }
                ]
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(6)
        }
      ]
    },

    // Service Areas Section
    {
      name: 'serviceAreasSection',
      title: 'Service Areas Section',
      type: 'object',
      description: 'Section showcasing geographic areas where the business provides services. Each area includes location details and contact information.',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: 'Main title for service areas section (e.g., "Service Areas").'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          description: 'Subtitle explaining the service coverage (e.g., "We proudly serve a wide range of neighborhoods and cities.").'
        },
        {
          name: 'areas',
          title: 'Service Areas',
          type: 'array',
          description: 'Geographic areas where services are provided. Each area includes city, region, description, and contact CTA.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'image', 
                type: 'image', 
                title: 'Area Image',
                description: 'Image representing the area (e.g., city skyline, neighborhood photo)'
              },
              { 
                name: 'city', 
                type: 'string', 
                title: 'City Name',
                description: 'Name of the city or neighborhood (e.g., "Downtown", "Greenfield")'
              },
              { 
                name: 'region', 
                type: 'string', 
                title: 'Region Name',
                description: 'Broader region or district name (e.g., "Central City", "North Suburbs")'
              },
              { 
                name: 'description', 
                type: 'text', 
                title: 'Area Description',
                description: 'Brief description of services in this area or what makes this area special'
              },
              { 
                name: 'cta', 
                type: 'object', 
                title: 'Area CTA',
                description: 'Call-to-action for this specific service area',
                fields: [
                  { 
                    name: 'label', 
                    type: 'string', 
                    title: 'CTA Label',
                    description: 'Button text (e.g., "Get Service", "Book Now")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'CTA Link',
                    description: 'Link for the button (e.g., "#contact", "/quote")'
                  }
                ]
              }
            ]
          }],
          validation: (Rule: any) => Rule.min(1).max(12)
        }
      ]
    },

    // Contact & Location
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      description: 'Business contact details and location information. Used throughout the site and in the map section.',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          description: 'Primary business phone number for customer contact (e.g., "(555) 123-4567").'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          description: 'Primary business email address for customer inquiries and contact forms.'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          description: 'Full business address including street, city, state, and zip code.'
        },
        {
          name: 'location',
          title: 'Map Location',
          type: 'object',
          description: 'Geographic coordinates for the business location. Used to display the business on the interactive map.',
          fields: [
            { 
              name: 'latitude', 
              type: 'number', 
              title: 'Latitude',
              description: 'Latitude coordinate for the business location (e.g., 32.7157)'
            },
            { 
              name: 'longitude', 
              type: 'number', 
              title: 'Longitude',
              description: 'Longitude coordinate for the business location (e.g., -117.1611)'
            },
            { 
              name: 'locationName', 
              type: 'string', 
              title: 'Location Name',
              description: 'Display name for the location on the map (e.g., "San Diego, CA")'
            }
          ]
        }
      ]
    },

    // Footer Section
    {
      name: 'footerSection',
      title: 'Footer Section',
      type: 'object',
      description: 'Footer content including company description, social media links, and organized link sections.',
      fields: [
        {
          name: 'companyDescription',
          title: 'Company Description',
          type: 'text',
          description: 'Brief company description that appears in the footer (e.g., "Reliable plumbing solutions for homes and businesses. Serving your area with certified experts and 24/7 support.").'
        },
        {
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          description: 'Social media profiles and links for the business. Each link includes platform name, URL, and icon.',
          of: [{
            type: 'object',
            fields: [
              { 
                name: 'platform', 
                type: 'string', 
                title: 'Platform Name',
                description: 'Name of the social media platform (e.g., "Facebook", "LinkedIn", "Instagram")'
              },
              { 
                name: 'url', 
                type: 'url', 
                title: 'Social Media URL',
                description: 'Link to the business profile on this platform'
              },
              { 
                name: 'icon', 
                type: 'string', 
                title: 'Icon Name',
                description: 'Icon identifier for the platform (used for displaying the correct social media icon)'
              }
            ]
          }]
        },
        {
          name: 'footerLinks',
          title: 'Footer Links',
          type: 'object',
          description: 'Organized link sections in the footer. Includes product, company, and support links.',
          fields: [
            {
              name: 'product',
              title: 'Product Links',
              type: 'array',
              description: 'Links related to products or services offered',
              of: [{ 
                type: 'object', 
                fields: [
                  { 
                    name: 'text', 
                    type: 'string', 
                    title: 'Link Text',
                    description: 'Display text for the link (e.g., "Features", "Pricing")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'Link URL',
                    description: 'URL or anchor link for the link (e.g., "#features", "/pricing")'
                  }
                ]
              }]
            },
            {
              name: 'company',
              title: 'Company Links',
              type: 'array',
              description: 'Links related to company information and pages',
              of: [{ 
                type: 'object', 
                fields: [
                  { 
                    name: 'text', 
                    type: 'string', 
                    title: 'Link Text',
                    description: 'Display text for the link (e.g., "About Us", "Careers")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'Link URL',
                    description: 'URL or anchor link for the link (e.g., "#about", "/careers")'
                  }
                ]
              }]
            },
            {
              name: 'support',
              title: 'Support Links',
              type: 'array',
              description: 'Links related to customer support and legal information',
              of: [{ 
                type: 'object', 
                fields: [
                  { 
                    name: 'text', 
                    type: 'string', 
                    title: 'Link Text',
                    description: 'Display text for the link (e.g., "Help Center", "Privacy Policy")'
                  },
                  { 
                    name: 'href', 
                    type: 'string', 
                    title: 'Link URL',
                    description: 'URL or anchor link for the link (e.g., "/help", "/privacy")'
                  }
                ]
              }]
            }
          ]
        }
      ]
    },

    // SEO & Meta
    {
      name: 'seo',
      title: 'SEO & Meta Information',
      type: 'object',
      description: 'Search engine optimization and meta information for the website. Important for search visibility and social media sharing.',
      fields: [
        {
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
          description: 'Title tag for the page (appears in browser tab and search results). Should be descriptive and include the business name (e.g., "AquaFlow Plumbing - Expert Plumbing Services in San Diego").'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Meta description for SEO (appears in search results). Should be compelling and describe what the business does (e.g., "Professional plumbing services in San Diego. 24/7 emergency repairs, installations, and maintenance. Licensed and insured plumbers.").'
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (Facebook, Twitter, LinkedIn). Should be high-quality and represent the business well. Recommended size: 1200x630 pixels.'
        },
        {
          name: 'favicon',
          title: 'Favicon',
          type: 'image',
          description: 'Website favicon (small icon that appears in browser tabs). Should be a simple, recognizable logo or icon. Recommended size: 32x32 pixels.'
        }
      ]
    },

    // Build Status (for workflow)
    {
      name: 'buildStatus',
      title: 'Build Status',
      type: 'string',
      description: 'Current status of the website build and deployment process. Used by the automation workflow to track progress.',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Building', value: 'building' },
          { title: 'Deployed', value: 'deployed' },
          { title: 'Failed', value: 'failed' }
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'deployedUrl',
      title: 'Deployed URL',
      type: 'url',
      description: 'URL where the website is deployed and accessible to visitors (e.g., "https://my-business.vercel.app").'
    },
    {
      name: 'deployedAt',
      title: 'Deployed At',
      type: 'datetime',
      description: 'Timestamp of when the website was successfully deployed. Used for tracking deployment history and troubleshooting.'
    }
  ]
};

export default sanityAstroTemplate;