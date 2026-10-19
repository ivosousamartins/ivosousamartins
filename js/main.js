document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Sticky nav shrink + mobile toggle ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- Scroll indicator: the "SCROLL" button travels down a fixed
   track as you scroll through the whole page (the inner line keeps its
   own looping animation via CSS). It fades out near the contact/footer
   section so it doesn't sit on top of it, fades out once the hero itself
   has scrolled out of view (so it never overlaps mid-page content like the
   Video section on mobile), and also fades out whenever the user stops
   scrolling, reappearing on the next scroll. */
const contactSection = document.getElementById('contact');
const heroSection = document.querySelector('.hero');
let scrollIdleTimer = null;
function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0
    ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
    : 0;
  document.documentElement.style.setProperty('--page-scroll-progress', progress);

  let opacity = 1;
  if (contactSection) {
    const top = contactSection.getBoundingClientRect().top;
    const fadeStart = window.innerHeight * 0.9; // contact section approaching from below
    const fadeEnd = window.innerHeight * 0.35;  // contact section mostly in view
    if (top <= fadeStart) {
      opacity = Math.min(1, Math.max(0, (top - fadeEnd) / (fadeStart - fadeEnd)));
    }
  }
  if (heroSection) {
    // Fade out over the second half of the hero's own scroll range, fully
    // gone by the time its bottom edge nears the top of the viewport --
    // keeps the indicator scoped to the hero instead of roaming the page.
    const heroHeight = heroSection.offsetHeight || window.innerHeight;
    const heroTop = heroSection.getBoundingClientRect().top;
    const heroProgress = Math.min(Math.max(-heroTop / heroHeight, 0), 1);
    const heroOpacity = heroProgress <= 0.5 ? 1 : Math.max(0, 1 - (heroProgress - 0.5) / 0.5);
    opacity = Math.min(opacity, heroOpacity);
  }
  document.documentElement.style.setProperty('--scroll-indicator-opacity', opacity);

  // Show while actively scrolling, fade out shortly after it stops.
  document.documentElement.style.setProperty('--scroll-idle-opacity', 1);
  clearTimeout(scrollIdleTimer);
  scrollIdleTimer = setTimeout(() => {
    document.documentElement.style.setProperty('--scroll-idle-opacity', 0);
  }, 900);
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.classList.toggle('open', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

/* ---------- Services dropdown (accordion) ---------- */
const capGroups = document.querySelectorAll('.cap-group');
function setPanelHeight(group, open) {
  const panel = group.querySelector('.cap-panel');
  panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
}
capGroups.forEach(group => {
  const toggle = group.querySelector('.cap-toggle');
  const isOpen = group.classList.contains('open');
  setPanelHeight(group, isOpen);
  toggle.addEventListener('click', () => {
    const willOpen = !group.classList.contains('open');
    capGroups.forEach(g => {
      g.classList.remove('open');
      g.querySelector('.cap-toggle').setAttribute('aria-expanded', 'false');
      setPanelHeight(g, false);
    });
    if (willOpen) {
      group.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      setPanelHeight(group, true);
    }
  });
});
window.addEventListener('resize', () => {
  capGroups.forEach(g => setPanelHeight(g, g.classList.contains('open')));
});

/* ---------- Language switcher ---------- */
// Some browsers throw when touching localStorage on a file:// page (opaque
// origin) or in strict private-browsing modes — guard every access so a
// storage failure can never take down the rest of the page.
const safeStorage = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ignore */ } },
  remove(key) { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }
};
// Each page is now pre-translated and served at its own URL (/, /pt/, /es/),
// so the active language always comes from the page's own <html lang="">
// attribute, never from localStorage (which would let a language choice
// made on one page silently override the URL's actual language elsewhere).
let currentLang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);

/* ---------- Cookie consent (GDPR/ePrivacy) ----------
   Google Analytics is never loaded until the visitor explicitly accepts.
   "Decline" (or ignoring the banner) means no analytics script ever runs. */
const GA_ID = 'G-QP2V1HVMGL';
function loadAnalytics() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');
const cookieConsent = safeStorage.get('cookie-consent');
if (cookieConsent === 'accepted') {
  loadAnalytics();
} else if (cookieConsent !== 'rejected' && cookieBanner) {
  cookieBanner.classList.add('show');
}
if (cookieAccept) cookieAccept.addEventListener('click', () => {
  safeStorage.set('cookie-consent', 'accepted');
  loadAnalytics();
  cookieBanner.classList.remove('show');
});
// Withdrawing consent must stop tracking and remove any GA cookies already set.
function clearAnalyticsCookies() {
  window['ga-disable-' + GA_ID] = true;
  const host = location.hostname;
  const domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
  document.cookie.split(';').forEach(c => {
    const name = c.split('=')[0].trim();
    if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid' || name.indexOf('_gat') === 0) {
      domains.forEach(d => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    }
  });
}
if (cookieReject) cookieReject.addEventListener('click', () => {
  safeStorage.set('cookie-consent', 'rejected');
  clearAnalyticsCookies();
  cookieBanner.classList.remove('show');
});
if (cookieConsent === 'rejected') clearAnalyticsCookies();
// "Manage cookie preferences" link on the privacy page re-opens the banner.
const manageCookiesBtn = document.getElementById('manageCookiesBtn');
if (manageCookiesBtn && cookieBanner) manageCookiesBtn.addEventListener('click', () => {
  cookieBanner.classList.add('show');
});
// Same control from the footer of every page, so consent can be changed or withdrawn anywhere.
const manageCookiesFooter = document.getElementById('manageCookiesFooter');
if (manageCookiesFooter && cookieBanner) manageCookiesFooter.addEventListener('click', () => {
  cookieBanner.classList.add('show');
});

/* ---------- GA4 conversion events: phone / email clicks ----------
   GA4's Enhanced Measurement "outbound clicks" only fires for links to a
   different domain, so tel: and mailto: links (e.g. the contact section)
   need an explicit event. Guarded on window.gtag, which loadAnalytics()
   only defines after the visitor accepts cookies — so, same as every other
   analytics call on this site, nothing is ever sent before consent. */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
  if (!link || !window.gtag) return;
  window.gtag('event', 'contact_click', {
    contact_method: link.href.startsWith('tel:') ? 'phone' : 'email',
    link_url: link.href
  });
});
let openProjectKey = null; // tracks which project-modal card is currently open, so it can be re-rendered on language change

function getI18nPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function applyTranslations(lang) {
  const dict = (window.i18n && window.i18n[lang]) || (window.i18n && window.i18n.en);
  if (!dict) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getI18nPath(dict, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getI18nPath(dict, el.dataset.i18nHtml);
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = getI18nPath(dict, el.dataset.i18nAria);
    if (val !== undefined) el.setAttribute('aria-label', val);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const val = getI18nPath(dict, el.dataset.i18nAlt);
    if (val !== undefined) el.setAttribute('alt', val);
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // Re-flow any open capabilities accordion panel, since translated text can change its height
  capGroups.forEach(g => {
    if (g.classList.contains('open')) setPanelHeight(g, true);
  });

  // Refresh an open project-detail modal in place, if one is showing
  if (openProjectKey) openProject(openProjectKey, true);
}

// .lang-btn elements are now real <a href="/pt/"> etc. links to the sibling
// per-language page (each with its own URL for SEO), not client-side
// togglers — the browser just navigates. The nav-links click handler above
// (line ~65) already closes the mobile menu for any link inside #navLinks,
// including these, so no extra handler is needed here.

/* ---------- Scroll reveal ---------- */
const revealTargets = document.querySelectorAll('.work-card, .cap-group, .about-photo, .about-copy, .video-card, .photo-head');
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));

/* ---------- Work filters ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    workCards.forEach(card => {
      const show = f === 'all' || card.dataset.cat.includes(f);
      card.style.display = show ? '' : 'none';
    });
  });
});

/* ---------- Reel tabs (Uriage / Oz Energia) ---------- */
const reelTabs = document.querySelectorAll('.reel-tab');
const reelPanels = document.querySelectorAll('.reel-panel');
reelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    reelTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const key = tab.dataset.reelTab;
    reelPanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.reelPanel === key);
    });
  });
});

/* ---------- Project detail data ----------
   Titles, tags and body text are language-dependent and live in js/translations.js
   (window.i18n[lang].projects[key]); only the image lists are fixed here. */
/* Image ids are original, individually-exported source files (not auto-split
   composites) — sequential per project, e.g. 'lightfoot-1' .. 'lightfoot-14'. */
function seq(prefix, count) {
  return Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`);
}
const projectImages = {
  lightfoot: seq('lightfoot', 14),
  kitchennete: seq('kitchennete', 13),
  'praca-beato': seq('praca-beato', 14),
  'partido-socialista': [
    'partido-socialista-1', 'partido-socialista-2',
    'partido-socialista-insta-esconde', 'partido-socialista-irs-jovem',
    'partido-socialista-17', 'partido-socialista-18', 'partido-socialista-19',
    'partido-socialista-20', 'partido-socialista-21'
  ],
  'academia-socialista': seq('academia-socialista', 14),
  'camara-lisboa': seq('camara-lisboa', 4),
  'direito-50anos': seq('direito-50anos', 5),
  utpr: seq('utpr', 5)
};

/* ---------- Project modal ---------- */
const projectModal = document.createElement('div');
projectModal.className = 'project-modal';
projectModal.innerHTML = `
  <div class="project-modal-inner">
    <button class="project-modal-close" data-i18n-aria="common.close" aria-label="Close">✕</button>
    <div class="project-modal-images"></div>
    <div class="project-modal-body">
      <span class="project-modal-tags"></span>
      <h3></h3>
      <p></p>
    </div>
  </div>`;
document.body.appendChild(projectModal);

function openProject(key, isRefresh) {
  const dict = (window.i18n && window.i18n[currentLang]) || (window.i18n && window.i18n.en);
  const p = dict && dict.projects && dict.projects[key];
  const images = projectImages[key];
  if (!p || !images) return;
  projectModal.querySelector('h3').textContent = p.title;
  projectModal.querySelector('p').textContent = p.text;
  projectModal.querySelector('.project-modal-tags').textContent = p.tags;
  const imgWrap = projectModal.querySelector('.project-modal-images');
  const srcs = images.map(id => `/assets/case-studies/${id}.webp`);
  imgWrap.innerHTML = srcs.map((src, i) =>
    `<button class="project-modal-thumb" type="button" data-i="${i}" aria-label="View image ${i + 1} of ${srcs.length} full size">
       <img src="${src}" alt="${p.title} – image ${i + 1} of ${srcs.length}" loading="lazy">
     </button>`
  ).join('');
  imgWrap.querySelectorAll('.project-modal-thumb').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(srcs, Number(btn.dataset.i)));
  });
  openProjectKey = key;
  if (!isRefresh) {
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeProject() {
  projectModal.classList.remove('open');
  document.body.style.overflow = '';
  openProjectKey = null;
}
projectModal.querySelector('.project-modal-close').addEventListener('click', closeProject);
projectModal.addEventListener('click', (e) => { if (e.target === projectModal) closeProject(); });

document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

/* ---------- Photography grid ---------- */
const unsplashIds = [
  '1762430353525-8f91d9c3f2d5','1762425614381-cc85865bb3aa',
  '1758800636727-124ce973d931','1758800819308-c06c1c76b9f9',
  '1758800783113-0394be4ae98b','1758800152744-167ad3e2365d',
  '1758800869607-25e4a16dcee5','1758800983745-1bf2f8ddc4c9',
  '1758801148317-7ba97f79087b','1758800521872-8ee0940b1023',
  '1762424146670-d0124027f39a','1758800172053-66564cb532e1'
];
const pexelsIds = [
  '37328596','37320799','37320796','37328594','37320800','37320794',
  '37328595','37320797'
];

const photos = [
  ...unsplashIds.map(id => ({
    thumb: `https://images.unsplash.com/photo-${id}?w=700&q=75&auto=format&fit=crop`,
    full: `https://images.unsplash.com/photo-${id}?w=1800&q=85&auto=format&fit=crop`,
    source: 'Unsplash'
  })),
  ...pexelsIds.map(id => ({
    thumb: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=700`,
    full: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`,
    source: 'Pexels'
  }))
];

// shuffle deterministically-ish for variety
for (let i = photos.length - 1; i > 0; i--) {
  const j = (i * 7 + 3) % (i + 1);
  [photos[i], photos[j]] = [photos[j], photos[i]];
}

const photoGrid = document.getElementById('photoGrid');
photoGrid.innerHTML = photos.map((p, i) => `
  <button class="photo-item" data-index="${i}" aria-label="Open photo ${i+1}">
    <img src="${p.thumb}" alt="Photography by Ivo Sousa Martins" loading="lazy">
    <span class="photo-source">${p.source}</span>
  </button>`).join('');

/* ---------- Lightbox (shared: photography grid + project modal images) ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentGallery = [];
let currentPhoto = 0;

function showPhoto(i) {
  if (!currentGallery.length) return;
  currentPhoto = (i + currentGallery.length) % currentGallery.length;
  lightboxImg.src = currentGallery[currentPhoto];
}
function openLightbox(images, i) {
  currentGallery = images;
  showPhoto(i);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('.photo-item').forEach(btn => {
  btn.addEventListener('click', () => {
    openLightbox(photos.map(p => p.full), parseInt(btn.dataset.index, 10));
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  if (!projectModal.classList.contains('open')) document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => showPhoto(currentPhoto - 1));
document.getElementById('lightboxNext').addEventListener('click', () => showPhoto(currentPhoto + 1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showPhoto(currentPhoto + 1);
  if (e.key === 'ArrowLeft') showPhoto(currentPhoto - 1);
});

/* ---------- YouTube video links ----------
   Opens the video on YouTube in a new tab instead of embedding it inline.
   YouTube's embedded player rejects playback ("Error 153" / "video player
   configuration error") when the embed is loaded from a file:// origin,
   which is unavoidable until the site is served over http/https — so we
   link out instead, which works everywhere regardless of hosting. */
document.querySelectorAll('.video-embed').forEach(embed => {
  embed.addEventListener('click', () => {
    const playlist = embed.dataset.playlist;
    const video = embed.dataset.video;
    const params = new URLSearchParams({ v: video });
    if (playlist) params.set('list', playlist);
    window.open(`https://www.youtube.com/watch?${params.toString()}`, '_blank', 'noopener');
  });
});

/* ---------- Apply initial translations ----------
   Runs last so every element that exists on the page — including the
   JS-injected project modal — is present and gets translated on first paint. */
applyTranslations(currentLang);
