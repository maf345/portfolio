import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { MdxContent } from "@/components/mdx-content";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { buildPageMetadata, projectJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return buildPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    images: [`/projects/${slug}/opengraph-image`],
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={projectJsonLd({
          title: project.title,
          description: project.description,
          path: `/projects/${slug}`,
        })}
      />
      <ReadingProgress targetId="project-article" />
      <article id="project-article">
        <div className="relative aspect-[21/9] max-h-80 w-full overflow-hidden bg-card-gradient">
          <ProjectCover slug={slug} src={project.coverImage} alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-4 pb-8 sm:px-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              ← All projects
            </Link>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-10 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-xl border border-success/20 bg-success/5 px-4 py-3 text-center text-sm font-medium text-success"
                >
                  {metric}
                </div>
              ))}
            </div>
          )}
          <MdxContent source={project.content} />
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}
        </div>
      </article>
    </>
  );
}
