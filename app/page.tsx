import Link from "next/link";
import { PostCard } from "@/components/blog/post-card";
import { CertificationsSection } from "@/components/home/certifications-section";
import { HeroSection } from "@/components/home/hero-section";
import { StatsBento } from "@/components/home/stats-bento";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProjectCard } from "@/components/projects/project-card";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/icons";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <div>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <HeroSection />
      <StatsBento />

      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 scroll-mt-20">
        <SectionHeading
          label="Work"
          title="Featured projects"
          description="Case studies from healthcare analytics, BI reporting, and internal tools."
          action={
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex"
            >
              View all
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline sm:hidden"
        >
          View all projects
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </section>

      {latestPosts.length > 0 && (
        <section className="border-t border-gray-200 bg-surface-muted dark:border-gray-800 dark:bg-surface-dark-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              label="Writing"
              title="Latest from the blog"
              description="Notes on Python, Snowflake, Tableau, and SQL from recent work."
              action={
                <Link
                  href="/blog"
                  className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex"
                >
                  View blog
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              }
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CertificationsSection />
      <TestimonialsSection />
    </div>
  );
}
