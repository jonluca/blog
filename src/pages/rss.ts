import { generateRssFeed } from "../lib/rss";

export async function GET() {
  return generateRssFeed();
}
