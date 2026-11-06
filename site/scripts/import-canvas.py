"""Import the case study pages from the Design canvas (Case*.dc.html) into src/data/cases.json.

Each page body is split into raw HTML parts and device parts (IgPhone, MacBook) so the
Astro route can render the HTML as is and the devices as components. Header, dock and the
placeholder quotes are dropped: the layout supplies the first two, and no dummy copy ships.

Usage: python3 scripts/import-canvas.py <folder with the .dc.html files>
"""
import html
import json
import re
import sys
from pathlib import Path

SRC = Path(sys.argv[1])
ROOT = Path(__file__).resolve().parent.parent
DIMS = json.loads((ROOT / 'src/data/images.json').read_text())

SLUGS = {
    'CasePS': 'partido-socialista',
    'CaseCitizen': 'citizen-diaries-and-momentum',
    'CaseJudas': 'judas',
    'CaseOz': 'oz-energia',
    'CaseMadamBo': 'madam-bo',
    'CaseNowCanal': 'now-canal',
    'CaseLightfoot': 'lightfoot-travel',
    'CaseUriage': 'uriage',
    'CaseCML': 'camara-municipal-de-lisboa',
    'CaseAcademia': 'academia-socialista',
    'CasePraca': 'praca-beato',
    'CaseDireito': '50-anos-do-direito-em-portugal',
    'CaseUTPR': 'utpr-seminar',
}
SIZES = {'reelW': 'reel', 'phoneW': 'post', 'phoneWBig': 'big', 'macW': 'small', 'macBig': 'big'}
# IgPhone defaults on the canvas (the first case page relied on them)
PHONE_DEFAULTS = {'handle': 'partido_socialista', 'avatar': '/_blob/8b87d1ad467c02897cc71121042682b9'}


def text(fragment):
    return html.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


def blob(url):
    """/_blob/<id> -> /img/<id>.webp"""
    return re.sub(r'/_blob/([0-9a-f]{32})', r'/img/\1.webp', url)


def links(s):
    s = re.sub(r'href="(Case[A-Za-z]+)\.dc\.html"', lambda m: f'href="/work/{SLUGS[m.group(1)]}/"', s)
    s = s.replace('href="AllWork.dc.html"', 'href="/work/"')
    s = re.sub(r'href="Combined\.dc\.html(#[a-z]+)?"', lambda m: f'href="/{m.group(1) or ""}"', s)
    return s


def attrs(tag):
    return {k: html.unescape(v) for k, v in re.findall(r'([\w-]+)="([^"]*)"', tag)}


def slide_lists(page):
    """Carousel slide arrays defined in the page script, by prop name."""
    script = page.split('data-dc-script', 1)[1]
    out = {}
    m = re.search(r'const SLIDES = (\[.*?\]);', script, re.S)
    if m:
        out['carouselSlides'] = [blob(u) for u in json.loads(m.group(1))]
    for name, arr in re.findall(r'(\w+Slides): (\[[^\]]*\])\.map\(B\)', script):
        out[name] = [f'/img/{i}.webp' for i in re.findall(r'[0-9a-f]{32}', arr)]
    return out


def fix_images(s, title, first_hero):
    """Local WebP, intrinsic size (no layout shift), lazy loading and a descriptive alt."""
    label = {'v': 'project image'}
    hero = {'done': not first_hero}

    def section_label(pos):
        before = s[:pos]
        heads = re.findall(r'<h2[^>]*>(.*?)</h2>', before, re.S)
        return text(heads[-1]) if heads else 'project image'

    def one(m):
        tag = m.group(0)
        a = attrs(tag)
        src = a.get('src', '')
        mid = re.search(r'([0-9a-f]{32})', src)
        new = blob(tag)
        extra = ''
        if mid and mid.group(1) in DIMS and 'width=' not in tag:
            w, h = DIMS[mid.group(1)]
            extra += f' width="{w}" height="{h}"'
        alt = a.get('alt', '')
        if not hero['done']:
            hero['done'] = True
            extra += ' fetchpriority="high"'
            alt = alt or f'{title}, key visual'
        else:
            extra += ' loading="lazy" decoding="async"'
            if 'max-width: 760px' in tag:
                alt = ''  # next-project teaser: the link text already names it
            elif not alt or alt.endswith(','):
                alt = f'{title}: {section_label(m.start())}'
        new = re.sub(r'alt="[^"]*"', f'alt="{html.escape(alt, quote=True)}"', new)
        return new.replace('<img ', '<img' + extra + ' ', 1)

    return re.sub(r'<img\b[^>]*>', one, s)


def convert(path):
    page = path.read_text()
    key = path.name.replace('.dc.html', '')
    slug = SLUGS[key]
    body = page.split('<x-dc>', 1)[1].split('</x-dc>', 1)[0]
    body = body.split('</helmet>', 1)[1]
    body = re.sub(r'^\s*<div style="background: #f4f4f1;[^"]*">', '', body)
    body = body.rsplit('</div>', 1)[0]
    body = re.sub(r'<header class="wrap".*?</header>', '', body, flags=re.S)
    body = re.sub(r'<nav class="dock".*?</nav>', '', body, flags=re.S)
    body = re.sub(r'<section class="wrap" style="padding-top: 120px">\s*<blockquote.*?</section>', '', body, flags=re.S)
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)

    kicker = text(re.search(r'<p style="margin: 0 0 14px; font-size: 14px; color: #5c5c58">(.*?)</p>', body, re.S).group(1))
    title = text(re.search(r'<h1[^>]*>(.*?)</h1>', body, re.S).group(1))
    line = text(re.search(r'</h1>\s*<p[^>]*>(.*?)</p>', body, re.S).group(1))
    facts = [(text(k), text(v)) for k, v in re.findall(r'<dt[^>]*>(.*?)</dt><dd[^>]*>(.*?)</dd>', body, re.S)]
    brief_html = re.search(r'and what I did</span></h2>\s*<div[^>]*>(.*?)</div>', body, re.S).group(1)
    brief = [text(p) for p in re.findall(r'<p[^>]*>(.*?)</p>', brief_html, re.S)]
    hero_img = re.search(r'/_blob/([0-9a-f]{32})', body).group(1)

    body = links(body)
    body = fix_images(body, title, True)
    slides = slide_lists(page)

    parts = []
    pos = 0
    for m in re.finditer(r'<dc-import name="(IgPhone|MacBook)"([^>]*)></dc-import>', body):
        parts.append({'html': body[pos:m.start()]})
        a = attrs(m.group(2))
        size = SIZES.get(a.get('width', '').strip('{}'), 'post')
        if m.group(1) == 'IgPhone':
            props = {**PHONE_DEFAULTS, **{k: v for k, v in a.items() if k in ('img', 'mode', 'handle', 'avatar', 'caption', 'ratio', 'finish')}}
            props = {k: blob(v) for k, v in props.items()}
            props['size'] = size
            props['alt'] = props.get('caption') or f'{title} on Instagram'
            if 'slides' in a:
                props['slides'] = slides[a['slides'].strip('{}')]
            parts.append({'phone': props})
        else:
            parts.append({'mac': {'img': blob(a['img']), 'size': size, 'alt': f'{title} on a laptop'}})
        pos = m.end()
    parts.append({'html': body[pos:]})
    leftover = [p['html'] for p in parts if 'html' in p and '{{' in p['html']]
    if leftover:
        raise SystemExit(f'{path.name}: unresolved template holes')

    return slug, {
        'key': key,
        'title': title,
        'kicker': kicker,
        'line': line,
        'facts': facts,
        'brief': brief,
        'hero': f'/img/{hero_img}.webp',
        'parts': parts,
    }


cases = dict(convert(p) for p in sorted(SRC.glob('Case*.dc.html')))
(ROOT / 'src/data/cases.json').write_text(json.dumps(cases, ensure_ascii=False, indent=1))
print(f'{len(cases)} case pages imported')
