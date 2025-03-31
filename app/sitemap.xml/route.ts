import { fetchPost } from "@/sanity/lib/fetchPost";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const news = await fetchPost();
  const staticUrls = ["", "/news", "/contact"];
  const newsUrls = news.map((article: any) => ({
    loc: `${baseUrl}/news/${article.slug.current}`,
    lastmod: new Date(article._updatedAt || article._createdAt).toISOString(),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls
        .map(
          (url) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`,
        )
        .join("")}
      ${newsUrls
        .map(
          (page: any) => `
        <url>
          <loc>${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
        </url>`,
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
