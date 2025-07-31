# Image Optimization Setup

This project uses a unified `ImageOptimization.astro` component that handles all types of images: Sanity CMS images, remote URLs, and local images.

## Features

- **Unified Component**: Single component for all image types
- **Sanity Image Support**: Automatic optimization for Sanity CMS images with responsive srcsets
- **WebP Conversion**: All images converted to WebP format
- **Responsive Images**: Automatic generation of multiple sizes
- **Quality Optimization**: 80% quality default with customizable settings

## Usage

### Import and Use

```astro
---
import ImageOptimization from '../components/ImageOptimization.astro';
---

<!-- Sanity image -->
<ImageOptimization 
  src="https://cdn.sanity.io/images/project/dataset/image-id.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>

<!-- Remote image -->
<ImageOptimization 
  src="https://images.unsplash.com/photo-123.jpg" 
  alt="Description" 
  width={400} 
  height={300} 
/>

<!-- Local image -->
<ImageOptimization 
  src="/local-image.jpg" 
  alt="Description" 
  width={600} 
  height={400} 
/>
```

## How It Works

1. **Sanity Images**: Automatically generates responsive srcsets and applies Sanity's image transformations
2. **Remote Images**: Uses picture element with WebP optimization
3. **Local Images**: Processed through Astro's Image component with WebP conversion
4. **Fallbacks**: Provides appropriate fallbacks for older browsers

## Configuration

The component accepts all standard image props plus:
- `quality`: Image quality (default: 80)
- `sizes`: Responsive sizes attribute
- Standard HTML image attributes

## Benefits

- **Single Source of Truth**: One component for all image optimization needs
- **Future-Ready**: Built for Sanity CMS integration
- **Performance**: Automatic WebP conversion and responsive images
- **Flexibility**: Handles any image source type

## Browser Support

WebP is supported by:
- Chrome 23+ (2013)
- Firefox 65+ (2019)
- Safari 14+ (2020)
- Edge 18+ (2018)

For older browsers, the system provides fallback images.

## Troubleshooting

### Images Not Converting
1. Ensure images are in the `public/` directory
2. Check that the image format is supported
3. Verify Sharp is properly installed

### Build Errors
1. Run `pnpm install` to ensure all dependencies are installed
2. Check that the `scripts/` directory exists
3. Ensure Node.js version is 16+ for ES modules support

### Performance Issues
1. Consider reducing image quality (currently set to 80%)
2. Use appropriate image dimensions
3. Implement lazy loading for images below the fold 
