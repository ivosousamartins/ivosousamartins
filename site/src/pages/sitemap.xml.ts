import { projects } from '../data/projects';
import { SITE } from '../data/site';
import { LANGS, href } from '../i18n';

// Every page in every language, each listing its translations (hreflang)
export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const paths = ['/', '/work/', ...projects.map((p) => `/work/${p.slug}/`), '/privacy/'];
  const alt = (path: string) =>
    LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l === 'pt' ? 'pt-PT' : l}" href="${SITE}${href(l, path)}"/>`).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}"/>`;
  const urls = paths
    .flatMap((path) => LANGS.map((l) => `  <url>\n    <loc>${SITE}${href(l, path)}</loc>\n    <lastmod>${today}</lastmod>\n${alt(path)}\n  </url>`))
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
