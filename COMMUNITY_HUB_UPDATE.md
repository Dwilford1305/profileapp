# Community Hub Preview Image Update Documentation

## Overview
This document provides complete information about updating the Community Hub preview image to reflect the current state of https://allthingswetaskiwin.ca.

## Current State Analysis ✅

### Existing Preview Image
- **File**: `public/media/allthingswetPreview.png`
- **Last Modified**: September 5, 2021
- **Dimensions**: 1278 x 786 pixels
- **File Size**: 1.7MB
- **Format**: PNG (8-bit/color RGBA, non-interlaced)

### Code References Found
1. **src/App.tsx** (line 136)
   ```tsx
   <img src="/media/allthingswetPreview.png" 
        alt="All Things Wetaskiwin Community Hub PWA - React Node.js project showcase" 
        className="project-screenshot" />
   ```

2. **public/sitemap.xml** (lines 32-35)
   ```xml
   <image:image>
     <image:loc>https://derekwilford.ca/media/allthingswetPreview.png</image:loc>
     <image:caption>Community Hub PWA Project Screenshot</image:caption>
     <image:title>All Things Wetaskiwin Community Hub</image:title>
   </image:image>
   ```

3. **dist/sitemap.xml** (automatically generated during build)

## Current Limitation ⚠️

The target website https://allthingswetaskiwin.ca is **not accessible** from this development environment:
- DNS resolution fails
- Browser access is blocked (ERR_BLOCKED_BY_CLIENT)
- Cannot capture new screenshot for comparison

## Update Process (When Site Access is Available) 🔄

### Prerequisites
- Access to https://allthingswetaskiwin.ca
- Screenshot tool (browser developer tools, Playwright, etc.)
- Image editing software (optional, for optimization)

### Step-by-Step Update Process

1. **Capture New Screenshot**
   ```bash
   # Navigate to https://allthingswetaskiwin.ca
   # Take high-quality screenshot (recommended: 1280x800 or similar)
   # Save as PNG format
   ```

2. **Use the Update Script**
   ```bash
   # Copy the update script to the project root
   cp /tmp/update_community_hub_image.sh ./
   
   # Run the update script
   ./update_community_hub_image.sh path/to/new_screenshot.png
   ```

3. **Manual Update (Alternative)**
   ```bash
   # Backup current image
   cp public/media/allthingswetPreview.png public/media/allthingswetPreview_backup.png
   
   # Replace with new image
   cp new_screenshot.png public/media/allthingswetPreview.png
   ```

4. **Validate Changes**
   ```bash
   # Copy validation script to project root
   cp /tmp/validate_community_hub_image.sh ./
   
   # Run validation
   ./validate_community_hub_image.sh
   ```

5. **Test and Deploy**
   ```bash
   # Test locally
   npm run dev
   # Visit http://localhost:5173/#projects
   # Verify new image displays correctly
   
   # Build for production
   npm run build
   
   # Run tests
   npm test
   
   # Commit changes
   git add public/media/allthingswetPreview.png
   git commit -m "Update Community Hub preview image to reflect current site"
   ```

## Validation Checklist ✅

After updating the image, verify:
- [ ] Image file exists at `public/media/allthingswetPreview.png`
- [ ] Image displays correctly in the project carousel
- [ ] Build process completes successfully
- [ ] All tests pass
- [ ] Image is properly referenced in sitemap.xml
- [ ] No broken links or missing images

## Technical Specifications

### Recommended Image Specifications
- **Format**: PNG (for quality) or optimized JPEG
- **Dimensions**: 1280x800 pixels (or similar aspect ratio)
- **File Size**: < 2MB (for performance)
- **Content**: Should showcase the main features of the Community Hub site

### Browser Compatibility
The image is displayed using standard HTML `<img>` tag and should work across all modern browsers.

## Files Prepared for Update

1. **Update Script**: `/tmp/update_community_hub_image.sh`
   - Automated image replacement with backup
   - Comprehensive status reporting

2. **Validation Script**: `/tmp/validate_community_hub_image.sh`
   - Tests image integration
   - Verifies build and test processes

3. **Documentation**: This file provides complete guidance

## Next Steps

1. **Coordinate with Team**: Contact the team maintaining allthingswetaskiwin.ca for:
   - Site access or current screenshot
   - Information about recent design changes
   - Preferred image specifications

2. **Alternative Approaches**:
   - Request direct access to the site
   - Ask for a current screenshot from the maintainers
   - Use archived versions for comparison (if available)

## Current Status: Ready for Image Update

All infrastructure is in place. Once a new screenshot is available, the update can be completed in minutes using the provided scripts and documentation.