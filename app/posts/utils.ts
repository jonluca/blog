import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { validatePostWidgetUsage } from "./widget-config";

export interface PostMetadata {
  title: string;
  date: Date;
  description: string;
  image?: string;
  redirectFrom?: string[];
}

export interface Post {
  content: string;
  metadata: PostMetadata;
  slug: string;
}

export function parsePostDate(value: unknown, fileName = "post") {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  if (typeof value !== "string") {
    throw new Error(`${fileName}: metadata.date must be a valid date string`);
  }

  const date = value.includes("T") || value.includes(" ") ? new Date(value) : new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${fileName}: metadata.date must be a valid date string`);
  }

  return date;
}

function requiredText(value: unknown, key: string, fileName: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${fileName}: metadata.${key} must be a non-empty string`);
  }

  return value.trim();
}

function optionalText(value: unknown, key: string, fileName: string) {
  if (value === undefined) {
    return undefined;
  }

  return requiredText(value, key, fileName);
}

export function normalizeRedirectFrom(value: unknown, fileName = "post") {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value)) {
    throw new Error(`${fileName}: metadata.redirect_from must be an array of post paths`);
  }

  return value.map((redirect) => {
    const route = requiredText(redirect, "redirect_from", fileName).replace(/\/$/, "");
    if (!/^\/posts\/[a-z0-9-]+$/.test(route)) {
      throw new Error(`${fileName}: redirect path "${route}" must match /posts/{slug}`);
    }

    return route;
  });
}

export function parsePostSource(fileContent: string, fileName = "post") {
  const parsed = matter(fileContent);
  const title = requiredText(parsed.data.title, "title", fileName);
  const description = requiredText(parsed.data.description, "description", fileName);
  const date = parsePostDate(parsed.data.date, fileName);
  const image = optionalText(parsed.data.image, "image", fileName);
  const redirectFrom = normalizeRedirectFrom(parsed.data.redirect_from ?? parsed.data.redirectFrom, fileName);

  return {
    content: parsed.content.trim(),
    metadata: {
      title,
      date,
      description,
      ...(image ? { image } : {}),
      ...(redirectFrom ? { redirectFrom } : {}),
    },
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function slugFromFile(file: string) {
  return path.basename(file, path.extname(file)).replace(/^(\d+-)+/, "");
}

function getMDXData(dir: string): Post[] {
  return getMDXFiles(dir).map((file) => {
    const slug = slugFromFile(file);
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    const { metadata, content } = parsePostSource(rawContent, file);
    validatePostWidgetUsage(slug, content);

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "posts", "posts"));
}

export function getSortedBlogPosts() {
  return getBlogPosts().sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
}

export function getPostFromSlug(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug || post.metadata.redirectFrom?.includes(`/posts/${slug}`));
}

export function getStaticPostSlugs() {
  return getBlogPosts().flatMap((post) => [
    post.slug,
    ...(post.metadata.redirectFrom || []).map((redirect) => redirect.replace(/^\/posts\//, "")),
  ]);
}

export function getAdjacentPosts(slug: string) {
  const posts = getSortedBlogPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function formatDate(targetDate: Date, includeRelative = false) {
  if (Number.isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  const currentDate = new Date();
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  if (monthsAgo < 0) {
    yearsAgo--;
    monthsAgo += 12;
  }

  if (daysAgo < 0) {
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    daysAgo += lastMonth.getDate();
    monthsAgo--;

    if (monthsAgo < 0) {
      yearsAgo--;
      monthsAgo += 12;
    }
  }

  const relativeDate = yearsAgo > 0 ? `${yearsAgo}y ago` : monthsAgo > 0 ? `${monthsAgo}mo ago` : daysAgo > 0 ? `${daysAgo}d ago` : "Today";
  return `${fullDate} (${relativeDate})`;
}
