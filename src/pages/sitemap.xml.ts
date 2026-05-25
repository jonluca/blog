import { getBlogPosts } from "../lib/posts";
import { absoluteUrl, postUrl } from "../lib/site";
import { escapeXml } from "../lib/rss";

export async function GET() {
  const routes = ["/", "/about", "/contact", "/interesting-snippets"].map((route) => `<url><loc>${absoluteUrl(route)}</loc></url>`);
  const posts = (await getBlogPosts()).map(
    (post) => `<url><loc>${postUrl(post.id)}</loc><lastmod>${post.data.date.toISOString()}</lastmod></url>`,
  );
  const urls = [...routes, ...posts].map(escapeXmlSafely).join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}

function escapeXmlSafely(urlElement: string) {
  return urlElement.replace(/>([^<]+)</g, (_, value: string) => `>${escapeXml(value)}<`);
}
