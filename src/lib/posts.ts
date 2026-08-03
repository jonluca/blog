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

export interface PostRedirect {
  from: string;
  status: 301;
  to: string;
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

function getPostPath(post: Post) {
  return `/posts/${post.id}`;
}

export function getPostRedirects(posts: readonly Post[]): PostRedirect[] {
  const canonicalPaths = new Set(posts.map(getPostPath));
  const redirectsBySource = new Map<string, string>();
  const redirects: PostRedirect[] = [];

  for (const post of posts) {
    const to = getPostPath(post);

    for (const from of post.data.redirectFrom || []) {
      if (from === to) {
        throw new Error(`post "${post.id}" redirects from its canonical path`);
      }

      if (canonicalPaths.has(from)) {
        throw new Error(`post "${post.id}" redirect "${from}" conflicts with a canonical post path`);
      }

      const existingTarget = redirectsBySource.get(from);
      if (existingTarget) {
        if (existingTarget !== to) {
          throw new Error(`redirect "${from}" points to both "${existingTarget}" and "${to}"`);
        }

        continue;
      }

      redirectsBySource.set(from, to);
      redirects.push({ from, to, status: 301 });
    }
  }

  return redirects;
}

export function getAdjacentPosts(posts: readonly Post[], slug: string): AdjacentPosts {
  const index = posts.findIndex((post) => post.id === slug);

  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
