"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/blog/post-card";
import type { PostMeta } from "@/lib/posts";
import type { BlogCategory } from "@/lib/blog-categories";
import { ALL_CATEGORIES } from "@/lib/blog-categories";
import { cn } from "@/lib/utils";

type BlogPostListProps = {
  posts: PostMeta[];
};

export function BlogPostList({ posts }: BlogPostListProps) {
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const map = new Map<string, number>([["All", posts.length]]);
    for (const cat of ALL_CATEGORIES) map.set(cat, 0);
    for (const post of posts) {
      map.set(post.category, (map.get(post.category) ?? 0) + 1);
    }
    return map;
  }, [posts]);

  const filtered = useMemo(() => {
    let result = active === "All" ? posts : posts.filter((post) => post.category === active);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    return result;
  }, [posts, active, searchQuery]);

  const filters: Array<BlogCategory | "All"> = [
    "All",
    ...ALL_CATEGORIES.filter((cat) => (counts.get(cat) ?? 0) > 0),
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === cat
                  ? "border-accent bg-accent text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-accent/40 hover:text-accent dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-300 dark:hover:border-accent",
              )}
            >
              {cat}
              <span className="ml-1.5 opacity-70">({counts.get(cat) ?? 0})</span>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm transition-colors placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-100 dark:placeholder:text-gray-500 sm:w-64"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Clear search"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Found {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          {searchQuery && (
            <>
              {" "}
              for &ldquo;<span className="font-medium text-accent">{searchQuery}</span>&rdquo;
            </>
          )}
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">No posts found</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {searchQuery
              ? "Try adjusting your search or filters"
              : "No posts in this category yet."}
          </p>
          {(searchQuery || active !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActive("All");
              }}
              className="mt-4 text-sm font-medium text-accent hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
