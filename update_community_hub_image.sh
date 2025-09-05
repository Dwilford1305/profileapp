#!/bin/bash

# Community Hub Preview Image Update Script
# This script helps update the preview image for the Community Hub project

set -e

NEW_IMAGE_PATH="$1"
BACKUP_DIR="./backup_$(date +%Y%m%d_%H%M%S)"

if [ -z "$NEW_IMAGE_PATH" ]; then
    echo "Usage: $0 <path_to_new_image>"
    echo "Example: $0 ./new_community_hub_screenshot.png"
    exit 1
fi

if [ ! -f "$NEW_IMAGE_PATH" ]; then
    echo "Error: Image file '$NEW_IMAGE_PATH' not found"
    exit 1
fi

echo "🔍 Community Hub Preview Image Update Process"
echo "============================================="

# Create backup directory
echo "📁 Creating backup directory: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

# Backup current image
echo "💾 Backing up current preview image..."
cp "public/media/allthingswetPreview.png" "$BACKUP_DIR/"

# Copy new image
echo "🖼️  Installing new preview image..."
cp "$NEW_IMAGE_PATH" "public/media/allthingswetPreview.png"

# Get image info
echo "📏 New image details:"
file "public/media/allthingswetPreview.png"
ls -lh "public/media/allthingswetPreview.png"

echo ""
echo "✅ Preview image updated successfully!"
echo ""
echo "📋 Files that reference this image:"
echo "   - src/App.tsx (line 136)"
echo "   - public/sitemap.xml (line 32)"
echo "   - dist/sitemap.xml (will be updated on next build)"
echo ""
echo "🚀 Next steps:"
echo "   1. Test the changes: npm run dev"
echo "   2. Build for production: npm run build"
echo "   3. Run tests: npm test"
echo "   4. Commit changes: git add . && git commit -m 'Update Community Hub preview image'"
echo ""
echo "💾 Backup saved in: $BACKUP_DIR"