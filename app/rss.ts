import { getSortedBlogPosts, type Post } from "app/posts/utils";
import { absoluteUrl, postUrl, siteName, siteUrl } from "./site";

export function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export function buildRssFeed(posts: Post[] = getSortedBlogPosts()) {
  const itemsXml = posts
    .map((post) => {
      const url = postUrl(post.slug);
      return `<item>
        <title>${escapeXml(post.metadata.title)}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${escapeXml(post.metadata.description)}</description>
        <pubDate>${post.metadata.date.toUTCString()}</pubDate>
      </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${siteUrl}</link>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>Essays by JonLuca DeCaro about programming, reverse engineering, product systems, travel, and technology.</description>
    ${itemsXml}
  </channel>
</rss>`;
}

export async function generateRssFeed() {
  return new Response(buildRssFeed(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
