import { generateRssFeed } from "../rss";

export const dynamic = "force-static";

export async function GET() {
  return generateRssFeed();
}
