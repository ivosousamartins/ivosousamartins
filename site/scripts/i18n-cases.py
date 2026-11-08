#!/usr/bin/env python3
"""Translate case pages: `extract` lists every visible string in cases.json (text nodes,
alt/aria-label, facts, line, brief, phone/mac captions) into src/i18n/strings-cases.json;
`build` writes cases.<lang>.json from src/i18n/cases.<lang>.json (a {english: translated} map),
prefixing internal links with /<lang>. Untranslated strings stay in English and are reported."""
import json, re, sys, html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'src/data/cases.json'
I18N = ROOT / 'src/i18n'
TEXT = re.compile(r'>([^<>]+)<')
ATTR = re.compile(r'\b(alt|aria-label|title)="([^"]*)"')
SKIP = re.compile(r'^[\s\d/·:.,%€+–\-]*$')

def keep(s):
    s = s.strip()
    return s and not SKIP.match(s) and not s.startswith('{')

def strings(case):
    out = [case['title'], case['kicker'], case['line'], *case['brief']]
    out += [v for f in case['facts'] for v in f]
    for p in case['parts']:
        if 'html' in p:
            h = p['html']
            out += [html.unescape(m.group(1)).strip() for m in TEXT.finditer(h)]
            out += [html.unescape(m.group(2)).strip() for m in ATTR.finditer(h)]
        for k in ('phone', 'mac'):
            if k in p:
                for f in ('caption', 'alt', 'title', 'label', 'url'):
                    v = p[k].get(f)
                    if isinstance(v, str) and k == 'phone' or f in ('caption', 'alt', 'title', 'label'):
                        if isinstance(v, str): out.append(v)
                for s in p[k].get('slides', []) or []:
                    if isinstance(s, dict) and s.get('alt'): out.append(s['alt'])
    return [s.strip() for s in out if isinstance(s, str) and keep(s)]

def extract():
    cases = json.load(open(SRC))
    seen = {}
    for slug, c in cases.items():
        for s in strings(c):
            seen.setdefault(s, slug)
    I18N.mkdir(exist_ok=True)
    json.dump(seen, open(I18N / 'strings-cases.json', 'w'), ensure_ascii=False, indent=1)
    print(len(seen), 'strings')

def build(lang):
    cases = json.load(open(SRC))
    tr = json.load(open(I18N / f'cases.{lang}.json'))
    missing = set()
    def t(s):
        if not isinstance(s, str) or not keep(s): return s
        k = s.strip()
        if k not in tr: missing.add(k); return s
        lead, trail = s[:len(s) - len(s.lstrip())], s[len(s.rstrip()):]
        return lead + tr[k] + trail
    def th(h):
        h = TEXT.sub(lambda m: '>' + html.escape(t(html.unescape(m.group(1))), quote=False) + '<', h)
        h = ATTR.sub(lambda m: f'{m.group(1)}="' + html.escape(t(html.unescape(m.group(2)))) + '"', h)
        h = re.sub(r'href="/(?!/|img/|film/)', f'href="/{lang}/', h)
        return h
    out = {}
    for slug, c in cases.items():
        c = json.loads(json.dumps(c))
        for k in ('title', 'kicker', 'line'): c[k] = t(c[k])
        c['brief'] = [t(b) for b in c['brief']]
        c['facts'] = [[t(a), t(b)] for a, b in c['facts']]
        for p in c['parts']:
            if 'html' in p: p['html'] = th(p['html'])
            for k in ('phone', 'mac'):
                if k in p:
                    for f in ('caption', 'alt', 'title', 'label'):
                        if isinstance(p[k].get(f), str): p[k][f] = t(p[k][f])
                    for s in p[k].get('slides', []) or []:
                        if isinstance(s, dict) and s.get('alt'): s['alt'] = t(s['alt'])
        out[slug] = c
    json.dump(out, open(ROOT / f'src/data/cases.{lang}.json', 'w'), ensure_ascii=False, indent=1)
    print(lang, 'missing', len(missing))
    for m in sorted(missing)[:40]: print('  -', m[:100])

if __name__ == '__main__':
    extract() if sys.argv[1] == 'extract' else build(sys.argv[2])
