#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = 'public';
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

/**
 * Recursively finds all image files in a directory
 */
async function findImageFiles(dir) {
  const files = [];
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        files.push(...await findImageFiles(fullPath));
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (SUPPORTED_FORMATS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}:`, error.message);
  }
  
  return files;
}

/**
 * Optimizes a single image file
 */
async function optimizeImageFile(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    
    // Skip if already WebP
    if (ext === '.webp') {
      console.log(`Skipping ${filePath} (already WebP)`);
      return;
    }
    
    const inputBuffer = await fs.readFile(filePath);
    const outputPath = path.join(dir, `${name}.webp`);
    
    // Convert to WebP
    await sharp(inputBuffer)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✓ Optimized ${filePath} → ${outputPath}`);
    
    // Optionally remove original file (uncomment if desired)
    // await fs.unlink(filePath);
    // console.log(`  Removed original: ${filePath}`);
    
  } catch (error) {
    console.error(`✗ Error optimizing ${filePath}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔧 Starting image optimization...\n');
  
  try {
    // Check if public directory exists
    try {
      await fs.access(PUBLIC_DIR);
    } catch {
      console.log(`Creating ${PUBLIC_DIR} directory...`);
      await fs.mkdir(PUBLIC_DIR, { recursive: true });
    }
    
    // Find all image files
    const imageFiles = await findImageFiles(PUBLIC_DIR);
    
    if (imageFiles.length === 0) {
      console.log('No image files found to optimize.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} image files to optimize:\n`);
    
    // Optimize each image
    for (const file of imageFiles) {
      await optimizeImageFile(file);
    }
    
    console.log('\n✅ Image optimization complete!');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run the script
main(); 