# Sanity Astro Template Schema Documentation

## Overview

This comprehensive Sanity schema is designed to support automated landing page generation for service-based businesses. The schema is structured to handle dynamic content injection from LLMs while maintaining flexibility for multiple template designs and business types.

## Schema Architecture

### Core Design Principles

1. **Modular Structure**: Each section is a separate object type for maximum flexibility
2. **Reference-Based Relationships**: Uses Sanity references for efficient data management
3. **Content Flexibility**: Supports variable content lengths and optional fields
4. **Image Optimization**: Centralized image management with categorization
5. **SEO Integration**: Built-in SEO fields for search engine optimization
6. **Business Type Agnostic**: Works for plumbing, electrical, HVAC, landscaping, etc.

## Main Document Types

### 1. `sanity-astro-template` (Main Template Document)

The primary document that represents a complete landing page template.

**Key Fields:**
- `templateId`: Unique identifier for template instance
- `documentId`: Unique document identifier
- `businessName`: Business name
- `businessType`: Type of service business
- `sections`: Ordered array of page sections
- `businessContact`: Reference to contact information
- `serviceAreas`: Array of service area references
- `socialLinks`: Array of social media references
- `theme`: Color customization settings

**Example Structure:**
```json
{
  "_type": "sanity-astro-template",
  "templateId": "plumbing-template-001",
  "documentId": "aquaflow-plumbing",
  "businessName": "AquaFlow Plumbing Services",
  "businessType": "plumbing",
  "sections": [
    { "_type": "heroSection", "title": "Professional Plumbing Solutions" },
    { "_type": "aboutSection", "title": "About Our Company" },
    { "_type": "servicesSection", "title": "Our Services" }
  ],
  "businessContact": { "_ref": "business-contact-001" },
  "serviceAreas": [
    { "_ref": "service-area-001" },
    { "_ref": "service-area-002" }
  ]
}
```

### 2. `seoSettings` (SEO Configuration)

Manages all SEO-related content and meta tags.

**Key Fields:**
- `title`: Page title (50-60 characters)
- `description`: Meta description (150-160 characters)
- `keywords`: SEO keywords array
- `ogTitle`, `ogDescription`, `ogImage`: Open Graph tags
- `favicon`: Favicon reference

### 3. `optimizedImage` (Image Management)

Centralized image management with categorization and usage tracking.

**Key Fields:**
- `title`: Descriptive image title
- `altText`: Accessibility description
- `image`: Sanity image field with hotspot
- `category`: Image categorization (hero-background, service, gallery, etc.)
- `usage`: Array of usage contexts
- `dimensions`: Recommended dimensions

**Image Categories:**
- `hero-background`: Hero section backgrounds
- `service`: Service-related images
- `gallery`: Gallery showcase images
- `testimonial`: Customer photos
- `about`: About section images
- `logo`: Business logos
- `team`: Team member photos
- `general`: General purpose images

### 4. `businessContact` (Contact Information)

Comprehensive business contact details.

**Key Fields:**
- `businessName`: Company name
- `logo`: Business logo reference
- `phone`, `emergencyPhone`: Contact numbers
- `email`, `emergencyEmail`: Email addresses
- `address`: Complete address object
- `coordinates`: Map coordinates
- `businessHours`: Array of business hours

## Section Types

### Hero Section (`heroSection`)
- `title`: Main hero title
- `subtitle`: Hero subtitle/tagline
- `description`: Hero description
- `backgroundImage`: Hero background image
- `ctaButtons`: Array of call-to-action buttons

### About Section (`aboutSection`)
- `title`: Section title
- `description`: About description
- `image`: About section image
- `features`: Array of key features
- `ctaButton`: Call-to-action button

### Services Section (`servicesSection`)
- `title`: Section title
- `description`: Section description
- `services`: Array of service references
- `ctaButton`: Section call-to-action

### Gallery Section (`gallerySection`)
- `title`: Section title
- `description`: Section description
- `items`: Array of gallery item references

### Testimonials Section (`testimonialsSection`)
- `title`: Section title
- `description`: Section description
- `testimonials`: Array of testimonial references

### FAQ Section (`faqSection`)
- `title`: Section title
- `description`: Section description
- `faqs`: Array of FAQ item references

### Service Area Section (`serviceAreaSection`)
- `title`: Section title
- `description`: Section description
- `serviceAreas`: Array of service area references
- `ctaButton`: Section call-to-action

### Business Details Section (`businessDetailsSection`)
- `title`: Section title
- `sections`: Array of service detail sections
- `contactForm`: Contact form configuration
- `map`: Map settings and coordinates

### Company Overview Section (`companyOverviewSection`)
- `title`: Section title
- `description`: Section description
- `sections`: Array of company overview sections
- `ctaButton`: Call-to-action button

### Service Highlights Section (`serviceHighlightsSection`)
- `title`: Section title
- `statistics`: Array of statistic references

### Pre-Footer Section (`preFooterSection`)
- `logo`: Company logo
- `description`: Company description
- `socialLinks`: Array of social media references

### Footer Section (`footerSection`)
- `serviceAreas`: Array of footer service area references
- `copyright`: Copyright text

## Supporting Document Types

### Service (`service`)
Individual service offerings with details.

**Fields:**
- `title`: Service name
- `description`: Service description
- `image`: Service image
- `features`: Array of service features
- `category`: Service category (emergency, installation, maintenance, etc.)
- `ctaButton`: Service-specific call-to-action

### Gallery Item (`galleryItem`)
Individual gallery items for project showcases.

**Fields:**
- `title`: Item title
- `description`: Item description
- `image`: Gallery image
- `category`: Item category (before-after, project-showcase, process, etc.)
- `ctaButton`: Item call-to-action

### Testimonial (`testimonial`)
Customer testimonials and reviews.

**Fields:**
- `name`: Customer name
- `role`: Customer role/title
- `company`: Customer company
- `industry`: Customer industry
- `text`: Testimonial text
- `image`: Customer photo
- `link`: Profile/review link
- `verified`: Verification status
- `rating`: Customer rating (1-5)

### FAQ Item (`faqItem`)
Individual FAQ entries.

**Fields:**
- `question`: FAQ question
- `answer`: FAQ answer
- `category`: FAQ category (services, pricing, emergency, etc.)

### Service Area (`serviceArea`)
Geographic service areas.

**Fields:**
- `city`: City name
- `region`: State/province/district
- `description`: Area description
- `image`: Area image
- `ctaButton`: Area call-to-action

### Statistic (`statistic`)
Business statistics and metrics.

**Fields:**
- `value`: Statistic value
- `label`: Statistic label
- `icon`: SVG icon or emoji
- `image`: Icon image

### Social Link (`socialLink`)
Social media profiles and links.

**Fields:**
- `platform`: Social platform (Facebook, Twitter, LinkedIn, etc.)
- `url`: Profile URL
- `icon`: Platform icon
- `isActive`: Active status

## GROQ Query Examples

### 1. Fetch Complete Template with All Sections

```groq
*[_type == "sanity-astro-template" && templateId == $templateId && documentId == $documentId][0]{
  _id,
  templateId,
  documentId,
  businessName,
  businessType,
  theme,
  seoSettings->{
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage->{
      "url": image.asset->url,
      altText
    },
    favicon->{
      "url": image.asset->url
    }
  },
  businessContact->{
    businessName,
    phone,
    emergencyPhone,
    email,
    emergencyEmail,
    address,
    coordinates,
    businessHours,
    logo->{
      "url": image.asset->url,
      altText
    }
  },
  sections[]{
    _type,
    _key,
    title,
    description,
    isActive,
    // Hero Section
    _type == "heroSection" => {
      subtitle,
      backgroundImage->{
        "url": image.asset->url,
        altText
      },
      ctaButtons[]{
        label,
        href,
        style,
        icon
      }
    },
    // About Section
    _type == "aboutSection" => {
      image->{
        "url": image.asset->url,
        altText
      },
      features,
      ctaButton{
        label,
        href,
        style,
        icon
      }
    },
    // Services Section
    _type == "servicesSection" => {
      services[]->{
        _id,
        title,
        description,
        image->{
          "url": image.asset->url,
          altText
        },
        features,
        category,
        ctaButton{
          label,
          href,
          style,
          icon
        }
      },
      ctaButton{
        label,
        href,
        style,
        icon
      }
    },
    // Gallery Section
    _type == "gallerySection" => {
      items[]->{
        _id,
        title,
        description,
        image->{
          "url": image.asset->url,
          altText
        },
        category,
        ctaButton{
          label,
          href,
          style,
          icon
        }
      }
    },
    // Testimonials Section
    _type == "testimonialsSection" => {
      testimonials[]->{
        _id,
        name,
        role,
        company,
        industry,
        text,
        image->{
          "url": image.asset->url,
          altText
        },
        link,
        verified,
        rating
      }
    },
    // FAQ Section
    _type == "faqSection" => {
      faqs[]->{
        _id,
        question,
        answer,
        category
      }
    },
    // Service Area Section
    _type == "serviceAreaSection" => {
      serviceAreas[]->{
        _id,
        city,
        region,
        description,
        image->{
          "url": image.asset->url,
          altText
        },
        ctaButton{
          label,
          href,
          style,
          icon
        }
      },
      ctaButton{
        label,
        href,
        style,
        icon
      }
    },
    // Business Details Section
    _type == "businessDetailsSection" => {
      sections[]{
        title,
        description,
        ctaButton{
          label,
          href,
          style,
          icon
        }
      },
      contactForm{
        title,
        isActive
      },
      map{
        isActive,
        latitude,
        longitude,
        locationName
      }
    },
    // Company Overview Section
    _type == "companyOverviewSection" => {
      sections[]{
        title,
        description,
        image->{
          "url": image.asset->url,
          altText
        }
      },
      ctaButton{
        label,
        href,
        style,
        icon
      }
    },
    // Service Highlights Section
    _type == "serviceHighlightsSection" => {
      statistics[]->{
        _id,
        value,
        label,
        icon,
        image->{
          "url": image.asset->url,
          altText
        }
      }
    },
    // Pre-Footer Section
    _type == "preFooterSection" => {
      logo->{
        "url": image.asset->url,
        altText
      },
      description,
      socialLinks[]->{
        _id,
        platform,
        url,
        icon
      }
    },
    // Footer Section
    _type == "footerSection" => {
      serviceAreas[]->{
        _id,
        region,
        services
      },
      copyright
    }
  },
  serviceAreas[]->{
    _id,
    city,
    region,
    description,
    image->{
      "url": image.asset->url,
      altText
    },
    ctaButton{
      label,
      href,
      style,
      icon
    }
  },
  socialLinks[]->{
    _id,
    platform,
    url,
    icon
  }
}
```

### 2. Fetch Only Active Sections

```groq
*[_type == "sanity-astro-template" && templateId == $templateId && documentId == $documentId][0]{
  sections[isActive == true]{
    _type,
    _key,
    title,
    description
  }
}
```

### 3. Fetch Images by Category

```groq
*[_type == "optimizedImage" && category == $category]{
  _id,
  title,
  altText,
  "url": image.asset->url,
  category,
  usage
}
```

### 4. Fetch Services by Category

```groq
*[_type == "service" && category == $category && isActive == true]{
  _id,
  title,
  description,
  image->{
    "url": image.asset->url,
    altText
  },
  features,
  category,
  ctaButton{
    label,
    href,
    style,
    icon
  }
}
```

### 5. Fetch Testimonials with Images

```groq
*[_type == "testimonial" && isActive == true]{
  _id,
  name,
  role,
  company,
  industry,
  text,
  image->{
    "url": image.asset->url,
    altText
  },
  link,
  verified,
  rating
}
```

## Content Mapping Guide

### LLM-Generated Content to Schema Mapping

When generating content with an LLM, map the output to schema fields as follows:

**Business Information:**
- Company name → `businessName`
- Business type → `businessType`
- Services offered → `service` documents
- Contact details → `businessContact` document

**SEO Content:**
- Page title → `seoSettings.title`
- Meta description → `seoSettings.description`
- Keywords → `seoSettings.keywords`

**Section Content:**
- Hero title → `heroSection.title`
- About description → `aboutSection.description`
- Service descriptions → `service.description`
- FAQ questions/answers → `faqItem.question` and `faqItem.answer`
- Testimonials → `testimonial` documents

**Image Requirements:**
- Hero background → `optimizedImage` with category "hero-background"
- Service images → `optimizedImage` with category "service"
- Gallery images → `optimizedImage` with category "gallery"
- Customer photos → `optimizedImage` with category "testimonial"

## Image Strategy

### Image Categorization System

The schema uses a dual categorization system:

1. **Category**: Primary image type (hero-background, service, gallery, etc.)
2. **Usage**: Where the image is used (hero, about, services, etc.)

### Image Assignment Logic

1. **Business-Specific Images**: Upload business-specific images and assign appropriate categories
2. **Template Images**: Use template-specific images for consistent design
3. **Fallback Images**: Provide fallback images for missing content
4. **Optimization**: Use Sanity's image optimization features for responsive images

### Image Requirements by Section

- **Hero Section**: High-resolution background images (1920x1080 minimum)
- **Service Images**: Square or 4:3 aspect ratio (600x450 recommended)
- **Gallery Images**: Various aspect ratios for visual interest
- **Testimonial Photos**: Square profile photos (200x200 recommended)
- **Logo**: PNG with transparent background (200x200 recommended)

## Performance Optimization

### Query Optimization Strategies

1. **Selective Field Loading**: Only fetch required fields
2. **Reference Resolution**: Use Sanity's reference resolution efficiently
3. **Image Optimization**: Leverage Sanity's image transformation API
4. **Caching**: Implement appropriate caching strategies

### Schema Design for Performance

1. **Minimal Nesting**: Avoid deeply nested queries
2. **Reference Efficiency**: Use references appropriately
3. **Indexed Fields**: Ensure frequently queried fields are indexed
4. **Batch Loading**: Load related content in single queries

## Extensibility

### Adding New Business Types

1. Add new business type to `businessType` options
2. Create business-specific service categories
3. Add business-specific FAQ categories
4. Customize image categories as needed

### Adding New Sections

1. Create new section object type
2. Add to `sections` array in main template
3. Update GROQ queries to include new section
4. Add section-specific image categories

### Adding New Content Types

1. Create new document type
2. Add to schema configuration
3. Update relevant queries
4. Add to Sanity Studio structure

## Best Practices

### Content Management

1. **Consistent Naming**: Use consistent naming conventions
2. **Validation Rules**: Implement appropriate validation
3. **Required Fields**: Mark essential fields as required
4. **Default Values**: Provide sensible defaults

### Image Management

1. **Alt Text**: Always provide descriptive alt text
2. **Categories**: Use consistent categorization
3. **Optimization**: Optimize images before upload
4. **Backup**: Keep original images as backup

### SEO Optimization

1. **Title Length**: Keep titles under 60 characters
2. **Description Length**: Keep descriptions under 160 characters
3. **Keywords**: Use relevant, targeted keywords
4. **Open Graph**: Complete all Open Graph fields

### Performance

1. **Query Efficiency**: Minimize query complexity
2. **Image Optimization**: Use appropriate image sizes
3. **Caching**: Implement effective caching
4. **CDN**: Use Sanity's CDN for images

## Migration and Updates

### Schema Updates

1. **Backward Compatibility**: Maintain backward compatibility
2. **Gradual Migration**: Migrate content gradually
3. **Testing**: Test updates thoroughly
4. **Documentation**: Update documentation with changes

### Content Migration

1. **Data Backup**: Always backup before migration
2. **Validation**: Validate migrated content
3. **Testing**: Test with real content
4. **Rollback Plan**: Have rollback strategy ready

This schema provides a robust foundation for automated landing page generation while maintaining flexibility for customization and future expansion. 