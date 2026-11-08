export const SITE = 'https://www.helloivo.pt';
export const EMAIL = 'ivo@helloivo.pt';
export const PHONE = '+351 962 918 268';
export const GA_ID = 'G-QP2V1HVMGL';

export const person = {
  name: 'Ivo Sousa Martins',
  role: 'Creative director',
  roleLine: 'Creative director · Brand, photography and film · Lisbon',
  description:
    'Ivo Sousa Martins is a creative director in Lisbon. Brand identity, photography and film for brands, agencies and institutions in Portugal and abroad.',
};

export const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/ivosousamartins' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ivosousamartins/' },
  { label: 'Unsplash', href: 'https://unsplash.com/@ivosouzamartins' },
  { label: 'Pexels', href: 'https://www.pexels.com/@ivosousamartins/' },
];

// Answers in plain text (schema, llms.txt); html, when present, is what the page shows
export const faq: { q: string; a: string; html?: string }[] = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Brand identities and campaigns, films and documentary series, short form video for social, photography and websites. Often several at once, so a campaign, its films and its pages come from one idea.',
  },
  {
    q: 'Do you work with agencies and consultancies?',
    a: 'Yes. Part of my work comes through agencies, studios and consultancies, such as Judas, Bored Ape and AMP Associates, as well as directly with brands and public institutions.',
    html: 'Yes. Part of my work comes through agencies, studios and consultancies, such as <a href="https://www.judas.rocks/" target="_blank" rel="noopener">Judas</a>, Bored Ape and <a href="https://www.ampassociates.pt/" target="_blank" rel="noopener">AMP Associates</a>, as well as directly with brands and public institutions.',
  },
  {
    q: 'Where are you based, and do you work outside Portugal?',
    a: 'I am based in Lisbon and work across Portugal and abroad, in English, Portuguese and Spanish. Lightfoot Travel, for example, has offices in Singapore, Hong Kong, Dubai and London.',
    html: 'I am based in Lisbon and work across Portugal and abroad, in English, Portuguese and Spanish. <a href="https://www.lightfoottravel.com/" target="_blank" rel="noopener">Lightfoot Travel</a>, for example, has offices in Singapore, Hong Kong, Dubai and London.',
  },
  {
    q: 'How do we start?',
    a: 'Send a few lines through the contact form or to ivo@helloivo.pt: what you need, for whom and by when. I reply within two working days.',
  },
];
