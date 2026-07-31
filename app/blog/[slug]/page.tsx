import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { ScrollJumpButton } from "@/components/blog/scroll-jump-button";
import { BlogCover } from "@/components/blog/blog-cover";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogActions } from "@/components/blog/blog-actions";
import { BlogComments } from "@/components/blog/blog-comments";
import { MdxContent } from "@/components/mdx-content";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format-date";
import { articleJsonLd, buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts(true).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    images: [`/blog/${slug}/opengraph-image`],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const allPosts = getAllPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);
  const prev = index < allPosts.length - 1 ? allPosts[index + 1] : null;
  const next = index > 0 ? allPosts[index - 1] : null;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${slug}`,
          date: post.date,
        })}
      />
      <ReadingProgress />
      <ScrollJumpButton />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex gap-8">
          <article id="blog-article" className="mx-auto w-full max-w-3xl">
            <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
              ← All posts
            </Link>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <BlogCover category={post.category} compact />
            </div>

            <header className="mt-8">
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: BLOG_CATEGORIES[post.category].accent }}
                >
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {post.description}
              </p>
            </header>
            <div className="mt-10">
              <MdxContent source={post.content} />
            </div>
            
            <div className="mt-12">
              <BlogActions slug={post.slug} title={post.title} />
            </div>

            <BlogComments slug={post.slug} />

            {(prev || next) && (
              <nav className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between dark:border-gray-800">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="group max-w-xs">
                    <p className="text-xs uppercase tracking-wide text-gray-500">Previous</p>
                    <p className="mt-1 font-medium text-accent group-hover:underline">{prev.title}</p>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={`/blog/${next.slug}`} className="group max-w-xs sm:text-right">
                    <p className="text-xs uppercase tracking-wide text-gray-500">Next</p>
                    <p className="mt-1 font-medium text-accent group-hover:underline">{next.title}</p>
                  </Link>
                ) : null}
              </nav>
            )}
          </article>
          <TableOfContents source={post.content} />
        </div>
      </div>
    </>
  );
}
