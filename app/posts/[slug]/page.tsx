import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { Footer } from "app/components/footer";
import { formatDate, getAdjacentPosts, getPostFromSlug, getStaticPostSlugs } from "app/posts/utils";
import { getPostComponents } from "app/posts/widgets";
import { author, postUrl, siteName, socialImageUrl } from "app/site";

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
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      siteName,
      publishedTime: post.metadata.date.toISOString(),
      url: canonicalUrl,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: [image],
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

  const components = await getPostComponents(post.slug);
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
    author: {
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
              <Link href={`/posts/${adjacent.older.slug}`} prefetch={false}>
                <span>Older post</span>
                {adjacent.older.metadata.title}
              </Link>
            ) : (
              <span />
            )}
            {adjacent.newer && (
              <Link className={"text-right"} href={`/posts/${adjacent.newer.slug}`} prefetch={false}>
                <span>Newer post</span>
                {adjacent.newer.metadata.title}
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
