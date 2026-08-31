import Link from "next/link";
import { DashboardCard } from "@/components/dashboards/dashboard-card";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig, tableauVizzes } from "@/lib/site";

export function DashboardGallery() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tableauVizzes.map((viz) => (
          <DashboardCard key={viz.workbook} viz={viz} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Each card opens the live workbook on{" "}
        <Link
          href={siteConfig.links.tableau}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:underline"
        >
          Tableau Public
        </Link>
        . Browse{" "}
        <Link
          href={siteConfig.links.tableau}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          all visualizations
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
        .
      </p>
    </div>
  );
}
