import { projects } from '../data/projects';
import { SITE } from '../data/site';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const paths = ['/', '/work/', ...projects.map((p) => `/work/${p.slug}/`), '/privacy/'];
  const urls = paths.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
