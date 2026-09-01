import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrgBrand } from "@/components/about/org-brand";
import { VolunteerSection } from "@/components/about/volunteer-section";
import { ExperienceTimeline } from "@/components/about/experience-timeline";
import { SkillsShowcase } from "@/components/about/skills-showcase";
import { SectionHeading } from "@/components/ui/section-heading";
import { CvLink } from "@/components/ui/cv-link";
import { certifications, education, siteConfig } from "@/lib/site";
import { ExternalLinkIcon } from "@/components/social/social-icons";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} — ${siteConfig.title}. Data, BI, and AI analytics.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-mesh-light dark:bg-mesh-dark">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:py-20">
          <div className="lg:col-span-3">
            <p className="section-label">About</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-accent">Mehedi</span>{" "}
              <span className="text-gray-500 dark:text-gray-400">Afzal Farazi</span>
            </h1>
            <p className="mt-3 text-xl text-accent">{siteConfig.title}</p>
            <p className="mt-5 max-w-lg text-lg text-balance text-gray-600 dark:text-gray-400">
              {siteConfig.tagline} — SQL, Snowflake, Tableau, and AI-assisted analytics
              across healthcare, telecom, and commercial data.
            </p>
            <CvLink className="mt-8" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
            <div className="relative mx-auto w-48 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-800 sm:w-56">
              <Image
                src="/images/profile.png"
                alt={siteConfig.name}
                width={224}
                height={224}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading label="Career" title="Experience" />
        <ExperienceTimeline />
      </section>

      <section className="border-t border-gray-200 bg-surface-muted dark:border-gray-800 dark:bg-surface-dark-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading label="Expertise" title="Skills" />
          <SkillsShowcase />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <SectionHeading label="Background" title="Education" />
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="bento-card p-5">
                  <OrgBrand
                    name={item.institution}
                    website={item.website}
                    logo={item.logo}
                    subtitle={item.credential}
                    meta={`${item.period} · ${item.location}`}
                    logoSize="lg"
                    headingLevel="h3"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading label="Credentials" title="Certifications" />
            <div className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <Link
                  key={cert.name}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 transition-all hover:border-gray-300 hover:shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500"
                >
                  {"logo" in cert && cert.logo && (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-600">
                      <Image
                        src={cert.logo}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-gray-900 group-hover:text-accent dark:text-gray-100">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</p>
                  </div>
                  <ExternalLinkIcon className="h-4 w-4 shrink-0 text-gray-400 opacity-60 transition-opacity group-hover:opacity-100 group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VolunteerSection />
    </div>
  );
}
