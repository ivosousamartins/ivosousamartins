#!/usr/bin/env node
/*
 * Static multilingual page generator.
 *
 * Ivo's site content lives in one place (js/translations.js) and two HTML
 * templates (index.html, privacy.html), both written in English with
 * data-i18n / data-i18n-html / data-i18n-aria / data-i18n-alt attributes
 * (the same attributes js/main.js already knows how to read at runtime).
 *
 * This script bakes that into three fully separate, crawlable, indexable
 * static pages per template — EN at the site root, PT and ES under /pt/
 * and /es/ — so Google can see and rank each language on its own URL
 * instead of one URL whose text is swapped client-side by JS (which search
 * engines mostly can't credit as a distinct page).
 *
 * Run automatically by Vercel on every deploy (see vercel.json). Never edit
 * the generated index.html / privacy.html files inside pt/ or es/ directly —
 * they're overwritten on every build. Edit the root index.html, privacy.html,
 * or js/translations.js instead, and the build step regenerates the rest.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cheerio = require('cheerio');

const ROOT = __dirname;
const SITE = 'https://www.helloivo.pt';
const LANGS = ['en', 'pt', 'es'];

/* ---------- Load js/translations.js's window.i18n without a browser ---------- */
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/translations.js'), 'utf8'), sandbox);
const i18n = sandbox.window.i18n;
if (!i18n || !i18n.en || !i18n.pt || !i18n.es) {
  throw new Error('build.js: could not load window.i18n (en/pt/es) from js/translations.js');
}

function getPath(obj, p) {
  return p.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

// '' for en (root), 'pt/' / 'es/' for the others — used as an output subdirectory.
function langDir(lang) {
  return lang === 'en' ? '' : `${lang}/`;
}
// Absolute homepage URL path for a given language: '/', '/pt/', '/es/'.
function langHome(lang) {
  return lang === 'en' ? '/' : `/${lang}/`;
}

function applyI18n($, dict) {
  $('[data-i18n]').each((_, el) => {
    const val = getPath(dict, $(el).attr('data-i18n'));
    if (val !== undefined) $(el).text(val);
  });
  $('[data-i18n-html]').each((_, el) => {
    const val = getPath(dict, $(el).attr('data-i18n-html'));
    if (val !== undefined) $(el).html(val);
  });
  $('[data-i18n-aria]').each((_, el) => {
    const val = getPath(dict, $(el).attr('data-i18n-aria'));
    if (val !== undefined) $(el).attr('aria-label', val);
  });
  $('[data-i18n-alt]').each((_, el) => {
    const val = getPath(dict, $(el).attr('data-i18n-alt'));
    if (val !== undefined) $(el).attr('alt', val);
  });
}

function setPrivacyLinks($, lang) {
  const href = lang === 'en' ? '/privacy.html' : `/${lang}/privacy.html`;
  $('a[data-privacy-link]').attr('href', href);
}

function setLangSwitchActive($, lang) {
  $('.lang-btn').each((_, el) => {
    $(el).toggleClass('active', $(el).attr('data-lang') === lang);
  });
}

// Remove elements together with the line break after them, so rebuilding never piles up blank lines.
function removeTags($, selector) {
  $(selector).each((_, el) => {
    const next = el.next;
    if (next && next.type === 'text' && !next.data.trim()) $(next).remove();
    $(el).remove();
  });
}

const OG_LOCALE = { en: 'en_GB', pt: 'pt_PT', es: 'es_ES' };

// Title, description and social cards in the page's own language, so /pt/ and /es/
// rank for local searches instead of repeating the English copy.
function setHomeMeta($, lang, dict) {
  const { title, description } = dict.meta;
  $('head title').text(title);
  $('meta[name="description"]').attr('content', description);
  $('meta[property="og:title"], meta[name="twitter:title"]').attr('content', title);
  $('meta[property="og:description"], meta[name="twitter:description"]').attr('content', description);
  $('meta[property="og:image:alt"]').attr('content', title);
  removeTags($, 'meta[property="og:locale"]');
  $('meta[property="og:type"]').after(`\n<meta property="og:locale" content="${OG_LOCALE[lang]}">`);
}

// Structured data: who Ivo is, what he offers and where, for search engines and AI answers.
function setStructuredData($, lang, dict) {
  const url = SITE + langHome(lang);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#ivo`,
        name: 'Ivo Sousa Martins',
        jobTitle: dict.meta.jobTitle,
        description: dict.meta.description,
        url: `${SITE}/`,
        image: `${SITE}/assets/ivo-portrait.png`,
        email: 'mailto:ivo@helloivo.pt',
        address: { '@type': 'PostalAddress', addressLocality: 'Lisbon', addressCountry: 'PT' },
        knowsLanguage: ['en', 'pt', 'es'],
        knowsAbout: ['Creative direction', 'Brand identity', 'Graphic design', 'UI/UX design', 'Photography', 'Video production', 'Video editing', 'Motion graphics'],
        sameAs: [
          'https://www.linkedin.com/in/ivosousamartins/',
          'https://www.instagram.com/ivosousamartins',
          'https://unsplash.com/@ivosouzamartins',
          'https://www.pexels.com/@ivosousamartins/',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#service`,
        name: 'Ivo Sousa Martins',
        description: dict.meta.description,
        url,
        image: `${SITE}/assets/og-image.jpg`,
        founder: { '@id': `${SITE}/#ivo` },
        address: { '@type': 'PostalAddress', addressLocality: 'Lisbon', addressCountry: 'PT' },
        areaServed: [{ '@type': 'Country', name: 'Portugal' }, 'Europe'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'Ivo Sousa Martins',
        inLanguage: lang,
        publisher: { '@id': `${SITE}/#ivo` },
      },
    ],
  };
  removeTags($, 'head script[type="application/ld+json"]');
  $('head').append(`<script type="application/ld+json">${JSON.stringify(graph)}</script>\n`);
}

function writeOut(lang, filename, $) {
  const outDir = path.join(ROOT, langDir(lang));
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, $.html());
  console.log('  wrote', path.relative(ROOT, outPath));
}

function buildHomepage(lang) {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });
  const dict = i18n[lang];

  applyI18n($, dict);
  $('html').attr('lang', lang);
  setLangSwitchActive($, lang);
  setPrivacyLinks($, lang);
  setHomeMeta($, lang, dict);
  setStructuredData($, lang, dict);

  const canonicalPath = langHome(lang);
  removeTags($, 'head link[rel="canonical"], head link[rel="alternate"]');
  LANGS.forEach(l => {
    $('head').append(`<link rel="alternate" hreflang="${l}" href="${SITE}${langHome(l)}">\n`);
  });
  $('head').append(`<link rel="alternate" hreflang="x-default" href="${SITE}/">\n`);
  $('head').append(`<link rel="canonical" href="${SITE}${canonicalPath}">\n`);
  $('meta[property="og:url"]').attr('content', SITE + canonicalPath);

  writeOut(lang, 'index.html', $);
}

function buildPrivacy(lang) {
  const html = fs.readFileSync(path.join(ROOT, 'privacy.html'), 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });
  const dict = i18n[lang];

  applyI18n($, dict);
  $('html').attr('lang', lang);
  setLangSwitchActive($, lang);
  setPrivacyLinks($, lang);

  // Rewrite the plain structural links back to the homepage (logo, nav
  // anchors, footer, "back to homepage") to point at THIS language's
  // homepage. The .lang-btn links are left untouched — they intentionally
  // always point at the sibling-language privacy page, already correct in
  // the template for every language build. The cookie-banner "Learn more"
  // link is baked in per-language directly from translations.js and needs
  // no rewriting here either.
  const prefix = lang === 'en' ? '' : `/${lang}`;
  $('a:not(.lang-btn)').each((_, el) => {
    const href = $(el).attr('href');
    if (href === '/') $(el).attr('href', langHome(lang));
    else if (href && href.startsWith('/#')) $(el).attr('href', prefix + href);
  });

  const canonicalPath = lang === 'en' ? '/privacy.html' : `/${lang}/privacy.html`;
  removeTags($, 'head link[rel="canonical"]');
  $('head').append(`<link rel="canonical" href="${SITE}${canonicalPath}">\n`);

  writeOut(lang, 'privacy.html', $);
}

console.log('Building multilingual static pages...');
LANGS.forEach(buildHomepage);
LANGS.forEach(buildPrivacy);
console.log('Done.');
