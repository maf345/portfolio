import type { Metadata } from "next";
import { BlogPostList } from "@/components/blog/blog-post-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical notes on Python, Snowflake, Tableau, Excel, and analytics workflows.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        label="Writing"
        title="Blog"
        description="Tutorials and notes from my analytics toolkit — filter by topic to find what you need."
      />
      <div className="mt-10">
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
