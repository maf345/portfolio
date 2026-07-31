import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogCategory } from "@/lib/blog-categories";
import { inferCategory, isBlogCategory } from "@/lib/blog-categories";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: BlogCategory;
  draft?: boolean;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(contentDirectory, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const categoryRaw = data.category as string | undefined;
  const category =
    categoryRaw && isBlogCategory(categoryRaw)
      ? categoryRaw
      : inferCategory((data.tags as string[]) ?? [], slug);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    category,
    draft: data.draft as boolean | undefined,
    readingTime: stats.text,
    content,
  };
}

function toMeta(post: Post): PostMeta {
  const { slug, title, date, description, tags, category, draft, readingTime } = post;
  return { slug, title, date, description, tags, category, draft, readingTime };
}

export function getAllPosts(includeDrafts = false): PostMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => toMeta(parsePost(file)))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(`${slug}.mdx`);
}

export function getAllCategories(): BlogCategory[] {
  const categories = getAllPosts().map((post) => post.category);
  return [...new Set(categories)].sort();
}
