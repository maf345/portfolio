import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/icons";
import { TableauEmbed } from "@/components/home/tableau-embed";
import { siteConfig, tableauVizUrl, tableauVizzes } from "@/lib/site";

export function TableauShowcaseSection() {
  return (
    <section className="border-t border-gray-200 bg-surface-muted dark:border-gray-800 dark:bg-surface-dark-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          label="Dashboards"
          title="Tableau Public"
          description="Interactive dashboards from HR analytics, ecommerce, and churn analysis."
          action={
            <Link
              href={siteConfig.links.tableau}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex"
            >
              View all on Tableau
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {tableauVizzes.map((viz) => (
            <article key={viz.workbook} className="bento-card overflow-hidden">
              <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
                <h3 className="font-display text-base font-semibold text-gray-900 dark:text-gray-100">
                  {viz.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{viz.description}</p>
              </div>

              <TableauEmbed workbook={viz.workbook} view={viz.view} title={viz.title} />

              <div className="border-t border-gray-100 px-5 py-3 dark:border-gray-800">
                <Link
                  href={tableauVizUrl(viz.workbook, viz.view)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Open full screen
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link
          href={siteConfig.links.tableau}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline sm:hidden"
        >
          View all on Tableau
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
