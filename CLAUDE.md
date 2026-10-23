# helloivo.pt (Ivo Sousa Martins portfolio)

Multilingual (EN/PT/ES) static portfolio. Plain HTML/CSS/JS plus a Node build step. Hosted on Vercel.

## Stack and build
- Source of truth: `index.html`, `privacy.html`, `js/translations.js` (`window.i18n`), `js/main.js`, `css/style.css`.
- `node build.js` (cheerio, loads translations via `vm`) bakes `data-i18n`, `data-i18n-html`, `data-i18n-aria`, `data-i18n-alt` into `/index.html` (EN, overwritten in place), `/pt/`, `/es/`, plus privacy pages. It also adds canonical, hreflang and og:url.
- Never edit `pt/` or `es/` by hand: they are generated and listed in `.gitignore` (as is `.claude/`). Vercel runs `npm install && node build.js` (see `vercel.json`, outputDirectory ".").
- Use root-absolute asset paths (`/assets/...`).
- Canonical host is `https://www.helloivo.pt` (the apex redirects to www). Keep `SITE` in `build.js`, `sitemap.xml`, `robots.txt` and `index.html` meta in sync.

## Deploy
- Vercel project `helloivo`, team slug `helloivo`. GitHub repo `ivosousamartins/ivosousamartins`, production branch `main`.
- Every push to `main` deploys to production automatically. Use the `preview` branch to test first (bring it up to date with `main` before using it).
- Before any push to `main`, tell Ivo what will be published and wait for confirmation.
- Flow: `git add -A && git commit -m "..."`, then (after confirmation) `git push origin HEAD:main`.

## Analytics and privacy
- GA4 `G-QP2V1HVMGL`, loaded only after cookie consent. `contact_click` event. Cookies are cleared on consent withdrawal.
- Fonts are self-hosted (@fontsource woff2). RGPD policy lives in `privacy.html`.

## Video section: short form for social
- Tabs and panels use `data-reel-tab` / `data-reel-panel` (generic logic in `js/main.js`). Each reel is a link-out card to Instagram (no hosted video), with a cover in `assets/reels/*.webp`.
- To add a reel: add a `.reel-card` in the right panel, add the caption key under `video.reels*` in all three languages in `js/translations.js`, add the cover webp.
- Brands: Oz Energia, Uriage Portugal, Santander (5 reels), Ron Barcelo, Cofidis. Covers come from Instagram (360 to 480 px wide); the Vox Pop 2 cover is a client still.
- Pending: Santander Vox Pop 3 is not yet published by the brand. Add it once there is a reel link.

## Writing rules (site copy and replies)
- Never use em dashes. Use commas, colons or parentheses.
- Be direct, flag uncertainty, no flattery.
- Reply to Ivo in Portuguese.

## Local testing
- `npm install && node build.js`, then serve the folder statically and check `/`, `/pt/`, `/es/` and the privacy pages (all should return 200).
