import { getBlogPosts, getPostRedirects } from "../lib/posts";
import { buildCloudflareRedirects } from "../lib/redirects";

export function getStaticPaths() {
  return [{ params: { asset: "_redirects" } }];
}

export async function GET() {
  const redirects = getPostRedirects(await getBlogPosts());

  return new Response(buildCloudflareRedirects(redirects), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
