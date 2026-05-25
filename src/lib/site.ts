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

function postPath(slug: string) {
  return `/posts/${slug}`;
}

export function postUrl(slug: string) {
  return absoluteUrl(postPath(slug));
}

export function socialImageUrl(image?: string) {
  return absoluteUrl(image || defaultSocialImagePath);
}
