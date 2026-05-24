import { BlogPosts } from "app/components/posts";
import { createPageMetadata } from "./site";

export const metadata = createPageMetadata({
  path: "/",
  description: "Essays by JonLuca DeCaro about programming, reverse engineering, product systems, travel, and technology.",
});

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
