const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'src/assets/logisticai.png', output: 'src/assets/logisticai-opt.jpg', width: 1200, quality: 75 },
  { input: 'src/assets/leadview.jpg', output: 'src/assets/leadview-opt.jpg', width: 1200, quality: 75 },
  { input: 'src/assets/medicalhub.jpg', output: 'src/assets/medicalhub-opt.jpg', width: 1000, quality: 75 },
  { input: 'src/assets/edutech.jpg', output: 'src/assets/edutech-opt.jpg', width: 1000, quality: 75 },
  { input: 'src/assets/shopex.jpg', output: 'src/assets/shopex-opt.jpg', width: 1000, quality: 75 },
  { input: 'src/assets/hero.png', output: 'src/assets/hero-opt.jpg', width: 1500, quality: 80 },
  { input: 'src/assets/oalan.jpg', output: 'src/assets/oalan-opt.jpg', width: 1200, quality: 75 },
];

async function compressImages() {
  console.log('🖼️ Compressing images...');
  
  for (const img of images) {
    try {
      if (fs.existsSync(img.input)) {
        await sharp(img.input)
          .resize({ width: img.width })
          .jpeg({ quality: img.quality })
          .toFile(img.output);
        
        const stats = fs.statSync(img.input);
        const newStats = fs.statSync(img.output);
        console.log(`✅ ${path.basename(img.input)}: ${(stats.size/1024/1024).toFixed(2)}MB → ${(newStats.size/1024/1024).toFixed(2)}MB`);
      }
    } catch (error) {
      console.log(`❌ Error compressing ${img.input}:`, error.message);
    }
  }
  
  console.log('🎉 Image compression complete!');
}

compressImages();
