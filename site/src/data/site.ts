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

// FAQ text lives in i18n (all three languages); English is used for llms.txt
import { ui } from '../i18n';
export const faq = ui.en.faq;
