/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://yourdomain.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalSitemaps: ["https://yourdomain.com/sitemap/pages.xml"],
  },
};
