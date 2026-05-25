import { getBlogPosts } from "../../app/posts/utils";
import { absoluteUrl, postUrl } from "../lib/site";
import { escapeXml } from "../lib/rss";

export function GET() {
  const routes = ["/", "/about", "/contact", "/interesting-snippets"].map((route) => `<url><loc>${absoluteUrl(route)}</loc></url>`);
  const posts = getBlogPosts().map(
    (post) => `<url><loc>${postUrl(post.slug)}</loc><lastmod>${post.metadata.date.toISOString()}</lastmod></url>`,
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
