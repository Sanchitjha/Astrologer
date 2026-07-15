import fs from 'fs';
import path from 'path';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

// Server-only: looks for public/{dir}/{slug}.{jpg|jpeg|png|webp} and returns its
// public URL path if present, so uploaded photos are picked up automatically
// on the next build/deploy without any code changes.
export function findPublicImage(dir, slug) {
  for (const ext of EXTENSIONS) {
    const filePath = path.join(process.cwd(), 'public', dir, `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${dir}/${slug}.${ext}`;
    }
  }
  return null;
}
