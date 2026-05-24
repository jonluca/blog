import Link from "next/link";
import { formatDate, getSortedBlogPosts, type Post } from "app/posts/utils";

function ArticleLink({ post }: { post: Post }) {
  return (
    <Link className={"archive-row"} href={`/posts/${post.slug}`} prefetch={false}>
      <span className={"text-[#244ebc]"}>{post.metadata.title}</span>
      <time className={"text-sm text-[#737373] uppercase sm:text-right"} dateTime={post.metadata.date.toISOString()}>
        {formatDate(post.metadata.date, false)}
      </time>
    </Link>
  );
}

export function BlogPosts() {
  const allPosts = getSortedBlogPosts();
  const latest = allPosts[0];

  return (
    <div className={"text-page reading-column space-y-14"}>
      <section aria-labelledby={"latest-post"}>
        <p className={"mb-3 text-sm tracking-wider text-neutral-500 uppercase"}>Latest</p>
        <h2 id={"latest-post"} className={"mb-2 text-2xl font-semibold"}>
          <Link href={`/posts/${latest.slug}`} prefetch={false}>
            {latest.metadata.title}
          </Link>
        </h2>
        <time className={"text-sm text-neutral-500"} dateTime={latest.metadata.date.toISOString()}>
          {formatDate(latest.metadata.date)}
        </time>
        <p className={"mt-4 max-w-[68ch] leading-relaxed text-black"}>{latest.metadata.description}</p>
      </section>

      <section aria-labelledby={"archive"}>
        <h2 id={"archive"} className={"mb-4 text-sm font-semibold tracking-wider text-neutral-500 uppercase"}>
          Archive
        </h2>
        <div className={"flex flex-col"}>
          {allPosts.map((post) => (
            <ArticleLink key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
