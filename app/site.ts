import type { Metadata } from "next";

export const siteName = "JonLuca's Blog";
export const siteUrl = "https://jonlu.ca";
export const siteDescription = "Essays by JonLuca DeCaro about programming, reverse engineering, product systems, travel, and technology.";
export const author = {
  name: "JonLuca DeCaro",
  url: "https://jonlu.ca",
};
export const defaultSocialImagePath = "/images/default-og.png";
export const rssFeedPath = "/feed.xml";

export function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, `${siteUrl}/`).toString();
}

export function postPath(slug: string) {
  return `/posts/${slug}`;
}

export function postUrl(slug: string) {
  return absoluteUrl(postPath(slug));
}

export function socialImageUrl(image?: string) {
  return absoluteUrl(image || defaultSocialImagePath);
}

export function feedAlternates() {
  return {
    "application/rss+xml": absoluteUrl(rssFeedPath),
  };
}

interface PageMetadataOptions {
  description: string;
  image?: string;
  path: string;
  title?: string;
}

export function createPageMetadata({ description, image, path, title }: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title ? `${title} | ${siteName}` : siteName;
  const socialImage = socialImageUrl(image);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
      types: feedAlternates(),
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      creator: "@jonluca",
      images: [{ url: socialImage, alt: socialTitle }],
    },
  };
}
