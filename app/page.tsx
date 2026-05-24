import { BlogPosts } from "app/components/posts";
import { author, createPageMetadata, siteDescription, siteName, siteUrl } from "./site";

export const metadata = createPageMetadata({
  path: "/",
  description: siteDescription,
});

export default function Page() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": `${author.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${author.url}/#person`,
        name: author.name,
        url: author.url,
      },
    ],
  }).replaceAll("<", "\\u003c");

  return (
    <section>
      <script type={"application/ld+json"} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <h1 className={"sr-only"}>{siteName}</h1>
      <BlogPosts />
    </section>
  );
}
