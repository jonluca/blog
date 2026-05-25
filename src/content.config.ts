import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { normalizeRedirectFrom, parsePostDate } from "./lib/post-metadata";

const requiredText = z.string().trim().min(1);

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/posts",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, "").replace(/^(\d+-)+/, ""),
    retainBody: true,
  }),
  schema: z
    .object({
      title: requiredText,
      date: z.unknown(),
      description: requiredText,
      image: requiredText.optional(),
      redirect_from: z.unknown().optional(),
      redirectFrom: z.unknown().optional(),
    })
    .transform((frontmatter, context) => {
      try {
        const redirectFrom = normalizeRedirectFrom(frontmatter.redirect_from ?? frontmatter.redirectFrom);

        return {
          title: frontmatter.title,
          date: parsePostDate(frontmatter.date),
          description: frontmatter.description,
          ...(frontmatter.image ? { image: frontmatter.image } : {}),
          ...(redirectFrom ? { redirectFrom } : {}),
        };
      } catch (error) {
        context.addIssue({
          code: "custom",
          message: error instanceof Error ? error.message : "Invalid post metadata",
        });
        return z.NEVER;
      }
    }),
});

export const collections = { posts };
