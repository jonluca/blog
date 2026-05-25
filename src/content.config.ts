import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./app/posts/posts",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, "").replace(/^(\d+-)+/, ""),
  }),
});

export const collections = { posts };
