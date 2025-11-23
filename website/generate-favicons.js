const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'logo-dark.svg');
const outputDir = path.join(__dirname, 'public', 'favicon');

const sizes = [
  { name: 'android-icon-36x36.png', size: 36 },
  { name: 'android-icon-48x48.png', size: 48 },
  { name: 'android-icon-72x72.png', size: 72 },
  { name: 'android-icon-96x96.png', size: 96 },
  { name: 'android-icon-144x144.png', size: 144 },
  { name: 'android-icon-192x192.png', size: 192 },
  { name: 'apple-icon-57x57.png', size: 57 },
  { name: 'apple-icon-60x60.png', size: 60 },
  { name: 'apple-icon-72x72.png', size: 72 },
  { name: 'apple-icon-76x76.png', size: 76 },
  { name: 'apple-icon-114x114.png', size: 114 },
  { name: 'apple-icon-120x120.png', size: 120 },
  { name: 'apple-icon-144x144.png', size: 144 },
  { name: 'apple-icon-152x152.png', size: 152 },
  { name: 'apple-icon-180x180.png', size: 180 },
  { name: 'apple-icon-precomposed.png', size: 180 },
  { name: 'apple-icon.png', size: 180 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon.png', size: 512 },
  { name: 'ms-icon-70x70.png', size: 70 },
  { name: 'ms-icon-144x144.png', size: 144 },
  { name: 'ms-icon-150x150.png', size: 150 },
  { name: 'ms-icon-310x310.png', size: 310 },
];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(svgPath);

  console.log('Generating favicons...');

  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated: ${name}`);
  }

  // Generate ICO file (32x32 for compatibility)
  const icoPath = path.join(outputDir, 'favicon.ico');
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(icoPath.replace('.ico', '-temp.png'));

  // Rename to .ico (browsers accept PNG as ICO)
  fs.renameSync(icoPath.replace('.ico', '-temp.png'), icoPath);
  console.log('Generated: favicon.ico');

  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
