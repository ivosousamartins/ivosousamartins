// Every project in one place: the home stage, All work, the case pages, schema, sitemap and llms.txt read from here.
// Case page bodies come from cases.json (imported from the Design canvas).
import cases from './cases.json';

export type Kind = 'design' | 'film' | 'web';
export type Audience = 'brands' | 'institutions';

// One image in the home stage's 16:9 area: r = its own width/height, natural keeps it whole
export interface Frame { img: string; r: number; natural?: boolean }

export interface Project {
  slug: string;
  title: string;
  kind: Kind;
  aud: Audience;
  meta: string;
  line: string;
  sub: string;
  year: string;
  cover: { img: string; r: number };
  frames: Frame[];
  featured?: boolean;
  genre?: string; // overrides the kind label in titles and schema
}

const I = (id: string) => `/img/${id}.webp`;
const F = (id: string, r: number, natural = false): Frame => ({ img: I(id), r, natural });

export const projects: Project[] = [
  { slug: 'partido-socialista', title: 'Partido Socialista', kind: 'design', aud: 'institutions', year: '2024', featured: true,
    meta: 'Brand · Campaigns · Politics · 2024',
    line: 'Visual and content strategy across every platform, and the lead design for two national election campaigns.',
    sub: 'Brand, campaigns and social for two national elections.',
    cover: { img: I('0451839ae0aaa02797e15323facfd52f'), r: 1.5625 }, frames: [F('0451839ae0aaa02797e15323facfd52f', 1.5625)] },
  { slug: 'citizen-diaries-and-momentum', title: 'Citizen Diaries and Momentum', kind: 'film', aud: 'institutions', year: '2020–2021',
    meta: 'Documentary series · Câmara Municipal de Lisboa · 24 episodes',
    line: 'Two documentary series for the city of Lisbon, produced and directed.',
    sub: 'Two documentary series for Lisbon, 24 episodes.',
    cover: { img: I('788a25d5b74bf9441c72f1b0a6272417'), r: 1.778 }, frames: [F('788a25d5b74bf9441c72f1b0a6272417', 1.778)] },
  { slug: 'judas', title: 'Judas', kind: 'film', aud: 'brands', year: '2026', featured: true,
    meta: 'Short form for social · amigo, Santander, Ron Barceló, Cofidis',
    line: 'Reels made with the creative agency Judas, from fake thriller to street vox pop.',
    sub: 'Reels for amigo, Santander, Ron Barceló and Cofidis.',
    cover: { img: I('26c0c60d6da9183de9b33bfd05bed53c'), r: 0.5625 },
    frames: [F('26c0c60d6da9183de9b33bfd05bed53c', 0.5625), F('6af3752e91f85432ff782764aee3f7f9', 0.5625), F('7f4fed60acd8f8948d76ef98e1cba6a0', 0.5625)] },
  { slug: 'lufthansa-group-and-tap', title: 'Lufthansa and TAP', kind: 'film', aud: 'brands', year: '2026', genre: 'Event photography',
    meta: 'Event photography and film · Aviation · with AMP Associates',
    line: 'The signing of Lufthansa’s stake in TAP, photographed in a hangar at Lisbon airport.',
    sub: 'Event photography for a signing at Lisbon airport.',
    cover: { img: I('145c13f889676099302448f031a1d53b'), r: 1.5 }, frames: [F('145c13f889676099302448f031a1d53b', 1.5)] },
  { slug: 'oz-energia', title: 'Oz Energia', kind: 'film', aud: 'brands', year: '2025', featured: true,
    meta: 'Branded series · Reels · with Kitchenette',
    line: 'Season 2 of a branded documentary series, produced, filmed and edited, plus chefs cooking over the OZ flame.',
    sub: 'A branded documentary series, reels and posts.',
    cover: { img: I('a38a70564e0f1892d2208bb0923b8e57'), r: 1.778 }, frames: [F('a38a70564e0f1892d2208bb0923b8e57', 1.778)] },
  { slug: 'madam-bo', title: 'Madam Bō', kind: 'design', aud: 'brands', year: '2025',
    meta: 'Posters and cards · Hospitality · with Kitchenette',
    line: 'Posters, cards and events for a dumpling bar with a loud, generous personality.',
    sub: 'Posters, cards and events for a dumpling bar.',
    cover: { img: I('7b85a6f247d8fc181f9faff0131158d1'), r: 1.6 }, frames: [F('7b85a6f247d8fc181f9faff0131158d1', 1.6)] },
  { slug: 'now-canal', title: 'Now Canal', kind: 'film', aud: 'brands', year: '2025',
    meta: 'Branded short film · with Kitchenette',
    line: 'A branded short about sourdough, and a channel that helps brands rise.',
    sub: 'A branded short film.',
    cover: { img: I('ae3420f14af1db183fe2285bbb7724b1'), r: 1.778 }, frames: [F('ae3420f14af1db183fe2285bbb7724b1', 1.778)] },
  { slug: 'lightfoot-travel', title: 'Lightfoot Travel', kind: 'web', aud: 'brands', year: '2025–2026', featured: true,
    meta: 'Landing pages · Luxury travel',
    line: 'Premium, conversion-driven pages and ads for a global luxury travel company.',
    sub: 'Landing pages and ads for a global luxury travel company.',
    cover: { img: I('1bad9ef9a4478a3dd5b6dcfb986b9924'), r: 1.5625 }, frames: [F('1bad9ef9a4478a3dd5b6dcfb986b9924', 1.5625)] },
  { slug: 'uriage', title: 'Uriage', kind: 'film', aud: 'brands', year: '2025',
    meta: 'Short form for social · 6 reels',
    line: 'Advice-led reels on baby care, sun care and skin.',
    sub: 'Six reels for a dermatology brand.',
    cover: { img: I('13731441e95ffb5bd6dfaa09442db47a'), r: 0.5625 },
    frames: [F('13731441e95ffb5bd6dfaa09442db47a', 0.5625), F('b1477f442525144606defc17ff815926', 0.5625), F('11a679779e3699c96ffd486a109c5cf8', 0.5625)] },
  { slug: 'camara-municipal-de-lisboa', title: 'Câmara Municipal de Lisboa', kind: 'web', aud: 'institutions', year: '2022', featured: true,
    meta: 'Website redesign · Public sector',
    line: 'A clearer, more accessible website for the city council, from architecture to UI.',
    sub: 'A clearer website for the city council.',
    cover: { img: I('c1c76e90a1a2383c4b62c3da0edc32a4'), r: 1.5625 }, frames: [F('d34785b2d9e077de36b7cd37d5ab6b0a', 1.5)] },
  { slug: 'academia-socialista', title: 'Academia Socialista', kind: 'design', aud: 'institutions', year: '2024',
    meta: 'Identity · Leadership programme',
    line: 'A bold, modern identity for a programme training young progressive leaders.',
    sub: 'An identity for young progressive leaders.',
    cover: { img: I('01bffba8d7159d9301b6ad692e1dd20c'), r: 0.8 },
    frames: [F('01bffba8d7159d9301b6ad692e1dd20c', 0.8, true), F('f7ed39a19ade604299aea607d77b81f2', 0.8, true)] },
  { slug: 'praca-beato', title: 'Praça Beato', kind: 'design', aud: 'brands', year: '2025–2026', featured: true,
    meta: 'Identity · Food market',
    line: 'An identity rebuilt from the ground up, plus a family of pop-up events.',
    sub: 'A food market identity and its pop-up events.',
    cover: { img: I('e2400aced9a6521c9092cfd949681945'), r: 0.8 }, frames: [F('5ac3b340659d70324dba88e8c404cd56', 1.5625)] },
  { slug: '50-anos-do-direito-em-portugal', title: '50 Anos do Direito em Portugal', kind: 'design', aud: 'institutions', year: '2025',
    meta: 'Identity · Book and event · Justice',
    line: 'A book and launch for the Provedoria de Justiça, fifty years after the 25th of April.',
    sub: 'An identity for a book and its launch.',
    cover: { img: I('eaa1d3c6f05f3db0178e9c9d8d0442c1'), r: 1.5625 }, frames: [F('eaa1d3c6f05f3db0178e9c9d8d0442c1', 1.5625)] },
  { slug: 'utpr-seminar', title: 'UTPR Seminar', kind: 'design', aud: 'institutions', year: '2025',
    meta: 'Identity · Academic event',
    line: 'A bold academic identity for an international tax-law seminar.',
    sub: 'An identity for a tax-law seminar.',
    cover: { img: I('c83bf114d6b13b7e02e069921a763489'), r: 1.5625 }, frames: [F('c83bf114d6b13b7e02e069921a763489', 1.5625)] },
];

export type CasePart = { html: string } | { phone: Record<string, any> } | { mac: Record<string, any> };
export interface CasePage {
  title: string; kicker: string; line: string; facts: [string, string][]; brief: string[]; hero: string; parts: CasePart[];
}
export const casePages = cases as unknown as Record<string, CasePage>;

export const KIND_LABEL: Record<Kind, string> = { design: 'Brand & design', film: 'Film', web: 'Web & UX' };
export const count = (kind: Kind) => projects.filter((p) => p.kind === kind).length;
