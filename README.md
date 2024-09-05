# Dynamic Sitemaps with Next.js and Pages Router

[![Banner image showcasing Cuttlesoft's Next.js development expertise. Text reads 'Cuttlesoft Unlock Next-Level Performance with Next.js Experts'. Background features modern web design elements, emphasizing speed and efficiency. Highlights professional Next.js services for optimized web applications and superior user experiences.](https://static.cuttlesoft.com/wp-content/uploads/2024/09/05162508/970x250-banner-variation-19.png)](https://cuttlesoft.com/services/nextjs/)

This repository demonstrates how to implement dynamic sitemaps in a Next.js application using the Pages Router. It covers creating individual dynamic sitemaps, splitting sitemaps for large websites, and implementing caching for improved performance.

For a more detailed explanation, see our blog post [Advanced Sitemaps with Next.js](https://cuttlesoft.com/blog/2024/08/30/advanced-sitemaps-with-next-js/).

## ⬅️ Prerequisites

- Node.js v18 or later
- NPM 9.x or later

## ✨ Features

- Dynamic sitemap generation using Next.js API routes
- Sitemap index generation for large websites
- Splitting sitemaps into multiple files
- Caching of dynamic sitemaps for improved performance
- Rewrite rules for clean sitemap URLs

## ⬆️ Quick start

1. Clone this repository:
   ```bash
   git clone https://github.com/cuttlesoft/nextjs-dynamic-sitemaps.git
   cd nextjs-dynamic-sitemaps
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## 🧱 Project Structure

- `pages/sitemaps/pages.xml.js`: Generates dynamic sitemap for pages
- `pages/sitemaps/posts/index.xml.js`: Generates sitemap index for posts
- `pages/sitemaps/posts/[page].js`: Generates individual post sitemaps
- `next.config.js`: Contains rewrite rules for clean sitemap URLs

This project uses Faker.js to simulate data for demonstration purposes. In a real-world scenario, you would fetch this data from your actual CMS or database. The simulated data allows you to see how the dynamic sitemap generation works without needing to set up a full CMS backend.

## ⚙️ Customizing

- Adjust the `URLS_PER_SITEMAP` constant in `pages/sitemaps/posts/index.xml.js` and `pages/sitemaps/posts/[page].js` to change the number of URLs per sitemap.
- Modify the caching duration in the `Cache-Control` header in the sitemap generation files.

## 🤝 Need Help with Your Next.js Project?

At Cuttlesoft, we specialize in [Next.js development](https://cuttlesoft.com/services/nextjs/), including advanced SEO techniques like dynamic sitemaps. Whether you need help implementing complex SEO strategies, optimizing performance, or scaling your Next.js application, our team of expert developers is here to assist.

Contact us to discuss how we can take your Next.js project to the next level!