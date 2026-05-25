import { getCollection, type CollectionEntry } from "astro:content";
import { validatePostWidgetUsage } from "./widget-config";

interface PostData {
  title: string;
  date: Date;
  description: string;
  image?: string;
  redirectFrom?: string[];
}

export type Post = Omit<CollectionEntry<"posts">, "data"> & {
  data: PostData;
};

export interface AdjacentPosts {
  newer?: Post;
  older?: Post;
}

export async function getBlogPosts(): Promise<Post[]> {
  const posts = (await getCollection("posts")) as Post[];

  for (const post of posts) {
    validatePostWidgetUsage(post.id, post.body ?? "");
  }

  return posts;
}

export async function getSortedBlogPosts(): Promise<Post[]> {
  return (await getBlogPosts()).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostSlugs(post: Post) {
  return [post.id, ...(post.data.redirectFrom || []).map((redirect) => redirect.replace(/^\/posts\//, ""))];
}

export function getAdjacentPosts(posts: readonly Post[], slug: string): AdjacentPosts {
  const index = posts.findIndex((post) => post.id === slug);

  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
