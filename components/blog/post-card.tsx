import Link from "next/link";
import { BlogCover } from "@/components/blog/blog-cover";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format-date";
import { ArrowRightIcon } from "@/components/icons";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bento-card flex flex-col overflow-hidden"
    >
      <BlogCover category={post.category} compact />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-3 font-display text-lg font-bold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-accent dark:text-white dark:group-hover:text-accent">
          {post.title}
        </h3>
        
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-surface-dark-elevated dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read article
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
