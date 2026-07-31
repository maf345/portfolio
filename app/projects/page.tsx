import type { Metadata } from "next";
import { ProjectList } from "@/components/projects/project-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies in data analytics, BI, and automation.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        label="Portfolio"
        title="Projects"
        description="Selected work with measurable impact — filter by category or search to find what you need."
      />
      <div className="mt-10">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
