import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/posts/utils";
import { baseUrl } from "app/sitemap";
import type { Metadata } from "next";
import { Footer } from "../../components/footer";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function getPostFromSlug(slug: string) {
  const blogPosts = getBlogPosts();
  const post = blogPosts.find(
    (post) => post.slug === slug || (post.metadata.redirect_from && post.metadata.redirect_from?.some((l) => l.endsWith(slug))),
  );

  return post;
}
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getPostFromSlug(params.slug);
  if (!post) {
    return {
      title: "Not Found",
    };
  }

  const { title, date: publishedTime, summary: description, image } = post.metadata;
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedTime.toISOString(),
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: Props) {
  const p = await params;
  const post = getPostFromSlug(p.slug);
  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type={"application/ld+json"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image ? `${baseUrl}${post.metadata.image}` : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className={"mb-8"}>
        <p className={"text-sm text-neutral-600 dark:text-neutral-400"} title={post.metadata.date.toISOString()}>
          {formatDate(post.metadata.date)}
        </p>
        <h1 className={"mb-2 text-2xl font-bold text-balance uppercase"}>{post.metadata.title}</h1>
      </div>

      <article className={"prose text-black"}>
        <CustomMDX source={post.content} />
      </article>
      <Footer date={post.metadata.date} />
    </section>
  );
}
