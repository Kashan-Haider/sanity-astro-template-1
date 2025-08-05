/**
 * Image Slots for Sanity Astro Template
 * 
 * This file defines all image slots used in the template.
 * Each slot has a unique ID that can be used for automated image assignment.
 * 
 * Usage:
 * - When uploading images via CLI, use these IDs as imageId
 * - When creating content, reference images by their slot ID
 * - Template isolation is handled by templateId and documentId fields
 */

const IMAGE_SLOTS = {
  // Hero Section
  HERO_BACKGROUND: 'hero-background-01',
  
  // About Section
  ABOUT_IMAGE: 'about-image-01',
  
  // Services Section (6 service boxes)
  SERVICE_IMAGE_01: 'service-image-01',
  SERVICE_IMAGE_02: 'service-image-02', 
  SERVICE_IMAGE_03: 'service-image-03',
  SERVICE_IMAGE_04: 'service-image-04',
  SERVICE_IMAGE_05: 'service-image-05',
  SERVICE_IMAGE_06: 'service-image-06',
  
  // Gallery Section (multiple gallery items)
  GALLERY_IMAGE_01: 'gallery-image-01',
  GALLERY_IMAGE_02: 'gallery-image-02',
  GALLERY_IMAGE_03: 'gallery-image-03',
  GALLERY_IMAGE_04: 'gallery-image-04',
  GALLERY_IMAGE_05: 'gallery-image-05',
  GALLERY_IMAGE_06: 'gallery-image-06',
  
  // Testimonials Section (customer photos)
  TESTIMONIAL_AVATAR_01: 'testimonial-avatar-01',
  TESTIMONIAL_AVATAR_02: 'testimonial-avatar-02',
  TESTIMONIAL_AVATAR_03: 'testimonial-avatar-03',
  TESTIMONIAL_AVATAR_04: 'testimonial-avatar-04',
  TESTIMONIAL_AVATAR_05: 'testimonial-avatar-05',
  TESTIMONIAL_AVATAR_06: 'testimonial-avatar-06',
  
  // Company Overview Section (3 alternating sections)
  COMPANY_IMAGE_01: 'company-image-01',
  COMPANY_IMAGE_02: 'company-image-02',
  COMPANY_IMAGE_03: 'company-image-03',
  
  // Pre-Footer Section (logo)
  LOGO: 'logo-01',
  
  // Business Contact (logo)
  BUSINESS_LOGO: 'business-logo-01',
  
  // SEO Images
  OG_IMAGE: 'og-image-01',
  FAVICON: 'favicon-01',
  
  // Statistics/Icons (if used)
  STATISTIC_ICON_01: 'statistic-icon-01',
  STATISTIC_ICON_02: 'statistic-icon-02',
  STATISTIC_ICON_03: 'statistic-icon-03',
  STATISTIC_ICON_04: 'statistic-icon-04',
};

/**
 * Get all image slots as an array
 */
const getAllImageSlots = () => Object.values(IMAGE_SLOTS);

/**
 * Get image slots by category
 */
const getImageSlotsByCategory = {
  hero: [IMAGE_SLOTS.HERO_BACKGROUND],
  about: [IMAGE_SLOTS.ABOUT_IMAGE],
  services: [
    IMAGE_SLOTS.SERVICE_IMAGE_01,
    IMAGE_SLOTS.SERVICE_IMAGE_02,
    IMAGE_SLOTS.SERVICE_IMAGE_03,
    IMAGE_SLOTS.SERVICE_IMAGE_04,
    IMAGE_SLOTS.SERVICE_IMAGE_05,
    IMAGE_SLOTS.SERVICE_IMAGE_06,
  ],
  gallery: [
    IMAGE_SLOTS.GALLERY_IMAGE_01,
    IMAGE_SLOTS.GALLERY_IMAGE_02,
    IMAGE_SLOTS.GALLERY_IMAGE_03,
    IMAGE_SLOTS.GALLERY_IMAGE_04,
    IMAGE_SLOTS.GALLERY_IMAGE_05,
    IMAGE_SLOTS.GALLERY_IMAGE_06,
  ],
  testimonials: [
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_01,
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_02,
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_03,
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_04,
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_05,
    IMAGE_SLOTS.TESTIMONIAL_AVATAR_06,
  ],
  company: [
    IMAGE_SLOTS.COMPANY_IMAGE_01,
    IMAGE_SLOTS.COMPANY_IMAGE_02,
    IMAGE_SLOTS.COMPANY_IMAGE_03,
  ],
  branding: [
    IMAGE_SLOTS.LOGO,
    IMAGE_SLOTS.BUSINESS_LOGO,
    IMAGE_SLOTS.FAVICON,
  ],
  seo: [
    IMAGE_SLOTS.OG_IMAGE,
    IMAGE_SLOTS.FAVICON,
  ],
  statistics: [
    IMAGE_SLOTS.STATISTIC_ICON_01,
    IMAGE_SLOTS.STATISTIC_ICON_02,
    IMAGE_SLOTS.STATISTIC_ICON_03,
    IMAGE_SLOTS.STATISTIC_ICON_04,
  ]
};

/**
 * Validate if an image slot exists
 */
const isValidImageSlot = (slotId) => {
  return Object.values(IMAGE_SLOTS).includes(slotId);
};

/**
 * Get slot information for automation
 */
const getSlotInfo = (slotId) => {
  const slot = Object.entries(IMAGE_SLOTS).find(([key, value]) => value === slotId);
  if (!slot) return null;
  
  const [key, value] = slot;
  const category = Object.entries(getImageSlotsByCategory).find(([cat, slots]) => 
    slots.includes(value)
  )?.[0];
  
  return {
    key,
    value,
    category,
    description: getSlotDescription(key),
  };
};

/**
 * Get human-readable description for each slot
 */
const getSlotDescription = (slotKey) => {
  const descriptions = {
    HERO_BACKGROUND: 'Hero section background image',
    ABOUT_IMAGE: 'About section main image',
    SERVICE_IMAGE_01: 'Service box 1 image',
    SERVICE_IMAGE_02: 'Service box 2 image',
    SERVICE_IMAGE_03: 'Service box 3 image',
    SERVICE_IMAGE_04: 'Service box 4 image',
    SERVICE_IMAGE_05: 'Service box 5 image',
    SERVICE_IMAGE_06: 'Service box 6 image',
    GALLERY_IMAGE_01: 'Gallery item 1 image',
    GALLERY_IMAGE_02: 'Gallery item 2 image',
    GALLERY_IMAGE_03: 'Gallery item 3 image',
    GALLERY_IMAGE_04: 'Gallery item 4 image',
    GALLERY_IMAGE_05: 'Gallery item 5 image',
    GALLERY_IMAGE_06: 'Gallery item 6 image',
    TESTIMONIAL_AVATAR_01: 'Testimonial customer 1 photo',
    TESTIMONIAL_AVATAR_02: 'Testimonial customer 2 photo',
    TESTIMONIAL_AVATAR_03: 'Testimonial customer 3 photo',
    TESTIMONIAL_AVATAR_04: 'Testimonial customer 4 photo',
    TESTIMONIAL_AVATAR_05: 'Testimonial customer 5 photo',
    TESTIMONIAL_AVATAR_06: 'Testimonial customer 6 photo',
    COMPANY_IMAGE_01: 'Company overview section 1 image',
    COMPANY_IMAGE_02: 'Company overview section 2 image',
    COMPANY_IMAGE_03: 'Company overview section 3 image',
    LOGO: 'Pre-footer logo',
    BUSINESS_LOGO: 'Business contact logo',
    OG_IMAGE: 'Open Graph social media image',
    FAVICON: 'Website favicon',
    STATISTIC_ICON_01: 'Statistics icon 1',
    STATISTIC_ICON_02: 'Statistics icon 2',
    STATISTIC_ICON_03: 'Statistics icon 3',
    STATISTIC_ICON_04: 'Statistics icon 4'
  };
  
  return descriptions[slotKey] || 'Unknown image slot';
};

module.exports = {
  IMAGE_SLOTS,
  getAllImageSlots,
  getImageSlotsByCategory,
  isValidImageSlot,
  getSlotInfo,
  getSlotDescription,
}; 