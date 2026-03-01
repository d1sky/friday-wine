/**
 * Оптимизация изображений: создаёт версии 480w, 800w, 1200w; оригиналы сохраняются в originals/.
 * Запуск: node scripts/optimize-images.js
 * Требует: npm install sharp --save-dev
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const ORIGINALS_DIR = path.join(IMAGES_DIR, 'originals');
const WIDTHS = [480, 800, 1200];
const QUALITY = 82;

function isGenerated(name) {
  return /-\d+w$/.test(name.replace(/\.[^.]+$/, ''));
}

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('Установите sharp: npm install sharp --save-dev');
    process.exit(1);
  }

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Папка не найдена:', IMAGES_DIR);
    process.exit(1);
  }

  if (!fs.existsSync(ORIGINALS_DIR)) {
    fs.mkdirSync(ORIGINALS_DIR, { recursive: true });
    console.log('Создана папка originals для хранения оригиналов.');
  }

  const files = fs.readdirSync(IMAGES_DIR).filter((f) => {
    if (f === 'originals' || f === 'README.md' || f === '.gitkeep') return false;
    if (isGenerated(f)) return false;
    return /\.(jpe?g|png|webp)$/i.test(f);
  });

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const inputPath = path.join(IMAGES_DIR, file);

    const originalPath = path.join(ORIGINALS_DIR, file);
    if (!fs.existsSync(originalPath)) {
      fs.copyFileSync(inputPath, originalPath);
      console.log('Оригинал сохранён: originals/' + file);
    }

    for (const width of WIDTHS) {
      const outName = `${baseName}-${width}w.jpg`;
      const outPath = path.join(IMAGES_DIR, outName);
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outPath);
    }
    console.log('Созданы варианты для:', baseName);
  }

  console.log('Готово.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
