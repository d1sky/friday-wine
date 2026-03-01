const ASSETS = 'assets/images';

export function getImageBase(imagePath: string): string | null {
  if (!imagePath || !imagePath.startsWith(ASSETS + '/')) return null;
  const name = imagePath.slice(ASSETS.length + 1);
  return name.replace(/\.(jpe?g|png|webp)$/i, '');
}

export function getResponsiveDefault(imagePath: string): string {
  const base = getImageBase(imagePath);
  return base ? `${ASSETS}/${base}-800w.jpg` : imagePath;
}

export function getSrcSet(imagePath: string): string {
  const base = getImageBase(imagePath);
  if (!base) return '';
  return `${ASSETS}/${base}-480w.jpg 480w, ${ASSETS}/${base}-800w.jpg 800w, ${ASSETS}/${base}-1200w.jpg 1200w`;
}

export function isLocalAsset(src: string): boolean {
  return typeof src === 'string' && src.startsWith(ASSETS);
}
