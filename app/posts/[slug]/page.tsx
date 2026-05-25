import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { Footer } from "app/components/footer";
import { formatDate, getAdjacentPosts, getPostFromSlug, getStaticPostSlugs } from "app/posts/utils";
import { getPostComponents } from "app/posts/widgets";
import { author, feedAlternates, postUrl, siteName, siteUrl, socialImageUrl } from "app/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getStaticPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostFromSlug(slug);
  if (!post) {
    return { title: "Not Found" };
  }

  const canonicalUrl = postUrl(post.slug);
  const image = socialImageUrl(post.metadata.image);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: canonicalUrl,
      types: feedAlternates(),
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      siteName,
      publishedTime: post.metadata.date.toISOString(),
      url: canonicalUrl,
      authors: [author.url],
      images: [{ url: image, width: 1200, height: 630, alt: post.metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: [{ url: image, alt: post.metadata.title }],
      creator: "@jonluca",
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const post = getPostFromSlug(slug);
  if (!post) {
    notFound();
  }

  const components = getPostComponents(post.slug);
  const adjacent = getAdjacentPosts(post.slug);
  const canonicalUrl = postUrl(post.slug);
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.date.toISOString(),
    dateModified: post.metadata.date.toISOString(),
    description: post.metadata.description,
    image: socialImageUrl(post.metadata.image),
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    isPartOf: {
      "@type": "Blog",
      name: siteName,
      url: `${siteUrl}/`,
    },
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
  }).replaceAll("<", "\\u003c");

  return (
    <section>
      <script type={"application/ld+json"} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <header className={"reading-column mb-10"}>
        <time className={"text-sm text-neutral-600"} dateTime={post.metadata.date.toISOString()}>
          {formatDate(post.metadata.date)}
        </time>
        <h1 className={"mt-2 mb-3 text-2xl font-semibold text-balance uppercase"}>{post.metadata.title}</h1>
        <p className={"text-base leading-relaxed text-neutral-600"}>{post.metadata.description}</p>
      </header>

      <article className={"prose text-black"}>
        <CustomMDX source={post.content} components={components} />
      </article>

      <div className={"reading-column"}>
        <Footer date={post.metadata.date} />
        {(adjacent.older || adjacent.newer) && (
          <nav className={"post-neighbors"} aria-label={"Adjacent posts"}>
            {adjacent.older ? (
              <a href={`/posts/${adjacent.older.slug}`}>
                <span>Older post</span>
                {adjacent.older.metadata.title}
              </a>
            ) : (
              <span />
            )}
            {adjacent.newer && (
              <a className={"text-right"} href={`/posts/${adjacent.newer.slug}`}>
                <span>Newer post</span>
                {adjacent.newer.metadata.title}
              </a>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
