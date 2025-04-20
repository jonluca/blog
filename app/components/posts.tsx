import Link from "next/link";
import { formatDate, getBlogPosts } from "app/posts/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className={"flex flex-col space-y-2"}>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className={"flex py-1"} href={`/posts/${post.slug}`}>
            <div className={"flex items-center justify-start pr-40 text-[14px]"}>
              <p className={"link hover-mid-gray block text-[#244ebc]"}>{post.metadata.title}</p>
              <p className={"absolute right-8 float-right text-[#737373] uppercase"}>{formatDate(post.metadata.date, false)}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
