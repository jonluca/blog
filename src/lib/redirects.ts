import type { PostRedirect } from "./posts";

function redirectSources(from: string) {
  return [from, `${from}/`];
}

export function buildCloudflareRedirects(redirects: readonly PostRedirect[]) {
  if (redirects.length === 0) {
    return "";
  }

  return `${redirects
    .flatMap((redirect) => redirectSources(redirect.from).map((from) => `${from} ${redirect.to} ${redirect.status}`))
    .join("\n")}\n`;
}
