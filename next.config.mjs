/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Rewrites
  // https://nextjs.org/docs/api-reference/next.config.js/rewrites
  rewrites: async () => {
    return [
      {
        source: "/sitemaps/posts/sitemap.xml",
        destination: "/sitemaps/posts/index.xml",
      },
      {
        source: "/sitemaps/posts/sitemap-:page.xml",
        destination: "/sitemaps/posts/:page",
      },
    ];
  },
};

export default nextConfig;
