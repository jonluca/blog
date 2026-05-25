import assert from "node:assert/strict";
import test from "node:test";
import { slugifyHeading } from "./headings";
import { formatDate, normalizeRedirectFrom, parsePostDate } from "./post-metadata";
import type { Post } from "./posts";
import { buildRssFeed, escapeXml } from "./rss";
import { defaultSocialImagePath, postUrl, socialImageUrl } from "./site";
import { validatePostWidgetUsage } from "./widget-config";

test("normalizes post dates and redirects", () => {
  assert.equal(parsePostDate("2023-06-26 12:26:53 -0400").toISOString(), "2023-06-26T16:26:53.000Z");
  assert.equal(parsePostDate("2021-08-08 14:06:09").toISOString(), "2021-08-08T21:06:09.000Z");
  assert.deepEqual(normalizeRedirectFrom(["/posts/old-test/"]), ["/posts/old-test"]);
});

test("formats authored dates in Pacific time on any build server", () => {
  assert.equal(formatDate(new Date("2026-05-24T01:20:00.000Z")), "May 23, 2026");
  assert.throws(() => parsePostDate("not-a-date"), /valid date/);
  assert.throws(() => normalizeRedirectFrom(["/blog/old-post"]), /must match/);
});

test("generates canonical post and social-image URLs", () => {
  assert.equal(postUrl("example"), "https://jonlu.ca/posts/example");
  assert.equal(socialImageUrl("/images/example.png"), "https://jonlu.ca/images/example.png");
  assert.equal(socialImageUrl("https://assets.jonlu.ca/example.png"), "https://assets.jonlu.ca/example.png");
  assert.equal(socialImageUrl(), `https://jonlu.ca${defaultSocialImagePath}`);
});

test("generates rendered heading anchor slugs", () => {
  assert.equal(slugifyHeading("SPF & DKIM: Results"), "spf-and-dkim-results");
});

test("escapes feed content and publishes canonical item URLs", () => {
  const post = {
    id: "feed-test",
    data: {
      title: "A & B",
      description: 'A <useful> "summary".',
      date: new Date("2025-01-01T00:00:00Z"),
    },
  } as Post;
  const feed = buildRssFeed([post]);

  assert.equal(escapeXml("A & B"), "A &amp; B");
  assert.match(feed, /A &amp; B/);
  assert.match(feed, /A &lt;useful&gt; &quot;summary&quot;\./);
  assert.match(feed, /https:\/\/jonlu\.ca\/posts\/feed-test/);
});

test("optional widgets must be explicitly registered for their post", () => {
  assert.doesNotThrow(() => validatePostWidgetUsage("ryan-air", "<RyanairApp />"));
  assert.throws(() => validatePostWidgetUsage("plain-post", "<RyanairApp />"), /not registered/);
});
