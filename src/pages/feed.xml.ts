import { generateRssFeed } from "../lib/rss";

export function GET() {
  return generateRssFeed();
}
