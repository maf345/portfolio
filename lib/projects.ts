import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  metrics?: string[];
  coverImage?: string;
  gallery?: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type Project = ProjectMeta & {
  content: string;
};

function parseProject(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(contentDirectory, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    featured: data.featured as boolean | undefined,
    metrics: (data.metrics as string[]) ?? [],
    coverImage: (data.coverImage as string) ?? `/images/projects/${slug}.png`,
    gallery: (data.gallery as string[]) ?? [],
    repoUrl: data.repoUrl as string | undefined,
    liveUrl: data.liveUrl as string | undefined,
    content,
  };
}

function toMeta(project: Project): ProjectMeta {
  const { slug, title, description, tags, featured, metrics, coverImage, gallery, repoUrl, liveUrl } =
    project;
  return { slug, title, description, tags, featured, metrics, coverImage, gallery, repoUrl, liveUrl };
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => toMeta(parseProject(file)));
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseProject(`${slug}.mdx`);
}
