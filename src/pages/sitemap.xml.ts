import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response('Site URL not configured', { status: 500 });
  const urls = ['en', 'es', 'de'].map((lang) => {
    const loc = new URL(`/${lang}/`, site).href;
    return `  <url><loc>${loc}</loc></url>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
