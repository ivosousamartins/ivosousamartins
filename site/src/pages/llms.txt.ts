// Plain-text summary for AI assistants, built from the same project data as the site
import { projects, casePages, KIND_LABEL } from '../data/projects';
import { SITE, EMAIL, person, social, faq } from '../data/site';

export function GET() {
  const work = projects
    .map((p) => {
      const facts = casePages[p.slug].facts.filter(([k]) => k !== 'Year').map(([k, v]) => `${k}: ${v}`).join('; ');
      return `- [${p.title}](${SITE}/work/${p.slug}/) (${KIND_LABEL[p.kind]}, ${p.year}): ${casePages[p.slug].line} ${facts}.`;
    })
    .join('\n');
  const body = `# ${person.name}

> ${person.description} More than 20 years of work across branding, digital design, photography and video. Works in English, Portuguese and Spanish.

## What Ivo does

- Creative direction: from first brief to final delivery, with hands-on design and production
- Brand identity and design systems for companies, events and political campaigns
- Film and video: branded series, documentaries, short form for social, editing and motion graphics
- Photography: travel and editorial photography, published on Unsplash and Pexels
- Web and UX: landing pages and website redesigns

## Projects

${work}

## Questions

${faq.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Contact

- Email: ${EMAIL}
- Website: ${SITE}/ (all work at ${SITE}/work/), also in Portuguese at ${SITE}/pt/ and Spanish at ${SITE}/es/
${social.map((s) => `- ${s.label}: ${s.href}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
