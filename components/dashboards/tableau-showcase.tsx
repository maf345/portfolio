"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { ArrowRightIcon } from "@/components/icons";
import { TableauEmbed } from "@/components/dashboards/tableau-embed";
import { siteConfig, tableauVizUrl, tableauVizzes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TableauShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeViz = tableauVizzes[activeIndex];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
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

        <Link
          href={siteConfig.links.tableau}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex"
        >
          View all on Tableau
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <article className="bento-card mt-6 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-start sm:justify-between dark:border-gray-800">
          <div>
            <h2 className="font-display text-lg font-semibold text-gray-900 dark:text-gray-100">
              {activeViz.title}
            </h2>
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
            Open on Tableau Public
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
  );
}
