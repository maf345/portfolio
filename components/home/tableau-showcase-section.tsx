import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { TableauIcon } from "@/components/social/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig, tableauVizzes } from "@/lib/site";

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
            <Link
              key={viz.title}
              href={viz.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card group overflow-hidden transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="px-5 py-4">
                <h3 className="font-display text-base font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
                  {viz.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{viz.description}</p>
              </div>

              <div
                className={`relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${viz.accent} p-5`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90">
                      Tableau
                    </span>
                    <TableauIcon className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end gap-1.5">
                      {[40, 65, 50, 80, 55].map((h, i) => (
                        <span
                          key={i}
                          className="w-4 rounded-sm bg-white/30"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <div className="h-1.5 w-3/4 rounded-full bg-white/25" />
                    <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 border-t border-gray-100 px-5 py-3 text-sm font-medium text-accent dark:border-gray-800">
                Open interactive dashboard
                <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
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
