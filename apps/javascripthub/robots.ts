import * as express from 'express';

const router = express.Router();

router.get('/robots.txt', async (req, res) => {
  const robots = `
User-agent: *
Disallow:

Sitemap: https://javascripthub.dev/sitemap.xml`;

  res.type('text/plain');
  res.send(robots.trim());
});

router.get('/sitemap.xml', async (req, res) => {
  const siteMap = generateSiteMap();

  res.type('application/xml');
  res.send(siteMap.trim());
});

const generateSiteMap = (): string => {
  const siteMap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://javascripthub.dev/</loc>
    <lastmod>2024-11-30T21:18:13+00:00</lastmod>
  </url>
    <url>
    <loc>https://javascripthub.dev/authors</loc>
    <lastmod>2024-11-30T21:18:13+00:00</lastmod>
  </url>
</urlset>`;

  return siteMap;
};

export { router as robotsRouter };
