import { getServerSideSitemapIndexLegacy } from "next-sitemap";

const URLS_PER_SITEMAP = 1000;
const EXTERNAL_DATA_URL = `http://localhost:3000/api/posts?per_page=1000`;

export const getServerSideProps = async (ctx) => {
  const request = await fetch(EXTERNAL_DATA_URL);
  const count = await request.headers.get("x-cms-total");

  const sitemaps = Array(Math.ceil(count / URLS_PER_SITEMAP))
    .fill("")
    .map(
      (v, index) =>
        `https://yourdomain.com/sitemaps/posts/sitemap-${index + 1}.xml`
    );

  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=120"
  );

  return getServerSideSitemapIndexLegacy(ctx, sitemaps);
};

/**
 * Export Sitemap, shush Next.js errors
 */
export default function Sitemap() {}
