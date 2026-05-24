import type { MetadataRoute } from "next";
import { getBlogPosts } from "app/posts/utils";
import { absoluteUrl, postUrl } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: postUrl(post.slug),
    lastModified: post.metadata.date,
  }));

  const routes = ["/", "/about", "/contact", "/interesting-snippets"].map((route) => ({
    url: absoluteUrl(route),
  }));

  return [...routes, ...posts];
}
