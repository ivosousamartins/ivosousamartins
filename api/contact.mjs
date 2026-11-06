// Contact form endpoint (Vercel function). Sends the message to Ivo through Resend.
// Needs RESEND_API_KEY in the Vercel project; without it the form falls back to opening an email.
const TO = 'ivo@helloivo.pt';
const FROM = process.env.CONTACT_FROM || 'helloivo.pt <site@helloivo.pt>';
const NEEDS = ['Brand or campaign', 'Film or content', 'Website', 'Photography'];

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: 'Email is not configured' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  // Honeypot: real visitors never see this field
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const need = NEEDS.includes(body.need) ? body.need : 'Other';
  const message = String(body.message ?? '').trim().slice(0, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Name, a valid email and a message are required' });
  }

  const text = `${message}\n\n${name}${company ? `, ${company}` : ''}\n${email}\nNeed: ${need}`;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: email, subject: `New project: ${need} · ${name}`, text }),
  });
  if (!r.ok) return res.status(502).json({ error: 'Could not send' });
  return res.status(200).json({ ok: true });
}
