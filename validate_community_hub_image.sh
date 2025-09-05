#!/bin/bash

# Community Hub Preview Image Validation Script
# This script validates that the preview image is properly integrated

set -e

echo "🔍 Community Hub Preview Image Validation"
echo "=========================================="

# Check if image file exists
if [ ! -f "public/media/allthingswetPreview.png" ]; then
    echo "❌ ERROR: Preview image file not found at public/media/allthingswetPreview.png"
    exit 1
fi

echo "✅ Preview image file exists"

# Get image details
echo "📏 Image details:"
file "public/media/allthingswetPreview.png"
ls -lh "public/media/allthingswetPreview.png"

# Check references in code
echo ""
echo "🔍 Checking code references..."

if grep -q "allthingswetPreview.png" src/App.tsx; then
    echo "✅ Found reference in src/App.tsx"
else
    echo "❌ ERROR: Reference missing in src/App.tsx"
    exit 1
fi

if grep -q "allthingswetPreview.png" public/sitemap.xml; then
    echo "✅ Found reference in public/sitemap.xml"
else
    echo "❌ ERROR: Reference missing in public/sitemap.xml"
    exit 1
fi

# Build test
echo ""
echo "🔨 Testing build process..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ ERROR: Build failed"
    exit 1
fi

# Run tests
echo ""
echo "🧪 Running tests..."
npm test > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ All tests passed"
else
    echo "❌ ERROR: Tests failed"
    exit 1
fi

echo ""
echo "🎉 All validations passed! The Community Hub preview image is properly integrated."