import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { ProjectCover } from "@/components/projects/project-cover";
import { TechStack } from "@/components/projects/tech-stack";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

type ProjectCardProps = {
  project: ProjectMeta;
  className?: string;
  featured?: boolean;
};

export function ProjectCard({ project, className, featured }: ProjectCardProps) {
  const primaryMetric = project.metrics?.[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group bento-card flex flex-col overflow-hidden",
        featured && "sm:col-span-1",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-card-gradient">
        <ProjectCover
          slug={project.slug}
          src={project.coverImage}
          alt={project.title}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <TechStack tags={project.tags} variant="overlay" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 group-hover:text-accent dark:text-gray-100">
          {project.title}
        </h3>
        {primaryMetric && (
          <p className="mt-3 text-sm font-medium text-success">{primaryMetric}</p>
        )}
        <p className="mt-2 flex-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          View case study
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
