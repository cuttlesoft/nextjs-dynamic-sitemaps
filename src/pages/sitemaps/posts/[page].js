import { getServerSideSitemapLegacy } from "next-sitemap";

const URLS_PER_SITEMAP = 1000;
const EXTERNAL_DATA_URL = `http://localhost:3000/api/posts`;

const generateSiteMap = (res, posts) => {
  const fields = [];

  posts.map((post) => {
    fields.push({
      loc: `https://yourdomain.com/${post.link}`,
      lastmod: new Date(post.modified).toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    });
  });

  return getServerSideSitemapLegacy(res, fields);
};

export const getServerSideProps = async (ctx) => {
  if (!ctx.params?.page || isNaN(Number(ctx.params?.page))) {
    return { notFound: true };
  }

  const page = Number(ctx.params?.page);
  const params = new URLSearchParams({
    page: page,
    per_page: URLS_PER_SITEMAP,
  });
  const request = await fetch(`${EXTERNAL_DATA_URL}?${params}`);

  const posts = await request.json();

  if (posts.length === 0) {
    return { notFound: true };
  }

  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=120"
  );

  generateSiteMap(ctx, posts);

  return {
    props: {},
  };
};

/**
 * Export Sitemap, shush Next.js errors
 */
export default function Sitemap() {}
