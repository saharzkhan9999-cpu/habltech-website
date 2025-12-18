#!/bin/bash
echo "🚀 Simple Optimization Script"

# 1. Move large PDFs to external storage (most important!)
echo "📄 Handling large PDFs..."
if [ -f "src/assets/portfolio.pdf" ]; then
  mkdir -p public/docs
  echo "⚠️  WARNING: portfolio.pdf is 20MB - consider compressing or hosting elsewhere"
  echo "   Options:"
  echo "   1. Compress with: gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=compressed.pdf src/assets/portfolio.pdf"
  echo "   2. Host on Google Drive and link to it"
  echo "   3. Split into smaller files"
fi

# 2. Add lazy loading to all images
echo "📝 Adding lazy loading to images..."
find src -name "*.jsx" -type f -exec sed -i 's/<img \(.*\)src=/<img \1loading="lazy" src=/g' {} \;

# 3. Update Vite config without imagemin (troublesome)
echo "⚡ Updating Vite config..."
cat > vite.config.js << 'CONFIGEOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          if (ext === 'pdf') {
            return 'assets/docs/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
  css: {
    devSourcemap: false,
  },
});
CONFIGEOF

# 4. Build
echo "🔨 Building..."
npm run build

# 5. Check file sizes
echo "📊 File sizes after optimization:"
du -h dist/index.html 2>/dev/null || echo "No dist folder"
find dist -name "*.jpg" -o -name "*.png" -o -name "*.pdf" 2>/dev/null | xargs du -h 2>/dev/null | sort -hr | head -5

echo "✅ Done! Test with: npx serve dist -p 3000"
