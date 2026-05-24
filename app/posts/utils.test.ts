import assert from "node:assert/strict";
import test from "node:test";
import { buildRssFeed, escapeXml } from "../rss";
import { defaultSocialImagePath, postUrl, socialImageUrl } from "../site";
import { slugifyHeading } from "./headings";
import { formatDate, normalizeRedirectFrom, parsePostDate, parsePostSource, type Post } from "./utils";
import { validatePostWidgetUsage } from "./widget-config";

test("parses and validates normalized post metadata", () => {
  const parsed = parsePostSource(
    `---
title: Test Post
date: 2023-06-26 12:26:53 -0400
description: A useful description.
image: /images/test.png
redirect_from:
  - /posts/old-test
---

## One

Text.`,
    "test.mdx",
  );

  assert.equal(parsed.metadata.title, "Test Post");
  assert.equal(parsed.metadata.description, "A useful description.");
  assert.equal(parsed.metadata.date.toISOString(), "2023-06-26T16:26:53.000Z");
  assert.deepEqual(parsed.metadata.redirectFrom, ["/posts/old-test"]);
});

test("parses timezone-less post dates as Pacific time", () => {
  const summerPost = parsePostSource("---\ntitle: Summer\ndate: 2021-08-08 14:06:09\ndescription: A useful description.\n---\nText");

  assert.equal(summerPost.metadata.date.toISOString(), "2021-08-08T21:06:09.000Z");
  assert.equal(parsePostDate("2026-02-01 20:34:03").toISOString(), "2026-02-02T04:34:03.000Z");
});

test("formats authored dates in Pacific time on any build server", () => {
  assert.equal(formatDate(new Date("2026-05-24T01:20:00.000Z")), "May 23, 2026");
});

test("rejects incomplete or invalid published metadata", () => {
  assert.throws(() => parsePostSource("---\ntitle: Missing description\ndate: 2024-01-01\n---\nText"), /description/);
  assert.throws(() => parsePostDate("not-a-date"), /valid date/);
  assert.throws(() => normalizeRedirectFrom(["/blog/old-post"]), /must match/);
});

test("generates canonical post and social-image URLs", () => {
  assert.equal(postUrl("example"), "https://blog.jonlu.ca/posts/example");
  assert.equal(socialImageUrl("/images/example.png"), "https://blog.jonlu.ca/images/example.png");
  assert.equal(socialImageUrl("https://assets.jonlu.ca/example.png"), "https://assets.jonlu.ca/example.png");
  assert.equal(socialImageUrl(), `https://blog.jonlu.ca${defaultSocialImagePath}`);
});

test("generates rendered heading anchor slugs", () => {
  assert.equal(slugifyHeading("SPF & DKIM: Results"), "spf-and-dkim-results");
});

test("escapes feed content and publishes canonical item URLs", () => {
  const post: Post = {
    slug: "feed-test",
    content: "",
    metadata: {
      title: "A & B",
      description: 'A <useful> "summary".',
      date: new Date("2025-01-01T00:00:00Z"),
    },
  };
  const feed = buildRssFeed([post]);

  assert.equal(escapeXml("A & B"), "A &amp; B");
  assert.match(feed, /A &amp; B/);
  assert.match(feed, /A &lt;useful&gt; &quot;summary&quot;\./);
  assert.match(feed, /https:\/\/blog\.jonlu\.ca\/posts\/feed-test/);
});

test("optional widgets must be explicitly registered for their post", () => {
  assert.doesNotThrow(() => validatePostWidgetUsage("ryan-air", "<RyanairApp />"));
  assert.throws(() => validatePostWidgetUsage("plain-post", "<RyanairApp />"), /not registered/);
});
