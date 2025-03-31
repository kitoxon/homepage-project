export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://nextstairs.co.jp/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
