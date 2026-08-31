"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/icons";
import { TableauEmbed } from "@/components/home/tableau-embed";
import { siteConfig, tableauVizUrl, tableauVizzes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TableauShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeViz = tableauVizzes[activeIndex];

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

        <div className="mt-8 flex flex-wrap gap-2">
          {tableauVizzes.map((viz, index) => (
            <button
              key={viz.workbook}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                index === activeIndex
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-accent/40 hover:text-accent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
              )}
            >
              {viz.title}
            </button>
          ))}
        </div>

        <article className="bento-card mt-4 overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-start sm:justify-between dark:border-gray-800">
            <div>
              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-gray-100">
                {activeViz.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                {activeViz.description}
              </p>
            </div>
            <Link
              href={tableauVizUrl(activeViz.workbook, activeViz.view)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              View on Tableau Public
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <TableauEmbed
            key={`${activeViz.workbook}-${activeViz.view}`}
            workbook={activeViz.workbook}
            view={activeViz.view}
            title={activeViz.title}
          />
        </article>

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
