#!/bin/bash
echo "🖼️ Manual Image Optimization"

# Install required tools
echo "📦 Checking/installing tools..."
sudo apt-get update
sudo apt-get install -y webp jpegoptim optipng 2>/dev/null || true

# Create optimized directory
mkdir -p public/optimized

# Find and optimize images
echo "🔍 Finding large images..."
find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -size +500k 2>/dev/null | while read img; do
  echo "Processing: $img"
  filename=$(basename "$img")
  extension="${filename##*.}"
  name="${filename%.*}"
  
  case $extension in
    jpg|jpeg)
      if command -v jpegoptim &> /dev/null; then
        jpegoptim --max=80 --strip-all --all-progressive -d public/optimized "$img"
      else
        cp "$img" "public/optimized/${name}-opt.jpg"
      fi
      ;;
    png)
      if command -v optipng &> /dev/null; then
        optipng -o5 -strip all -out "public/optimized/${name}-opt.png" "$img"
      else
        cp "$img" "public/optimized/${name}-opt.png"
      fi
      # Also create WebP version
      if command -v cwebp &> /dev/null; then
        cwebp -q 80 "$img" -o "public/optimized/${name}.webp"
      fi
      ;;
  esac
done

echo "✅ Images optimized in public/optimized/"
echo "   Replace src attributes in your components to use optimized images"
