import { getServerSideSitemapLegacy } from "next-sitemap";

const EXTERNAL_DATA_URL = `http://localhost:3000/api/pages`;

const generateSiteMap = (res, pages) => {
  const fields = [];

  pages.map((page) => {
    fields.push({
      loc: `https://yourdomain.com/${page.link}`,
      lastmod: new Date(page.modified).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  return getServerSideSitemapLegacy(res, fields);
};

export const getServerSideProps = async (ctx) => {
  const request = await fetch(EXTERNAL_DATA_URL);
  const pages = await request.json();

  generateSiteMap(ctx, pages);

  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=120"
  );

  return {
    props: {},
  };
};

/**
 * Export Sitemap, shush Next.js errors
 */
export default function Sitemap() {}
