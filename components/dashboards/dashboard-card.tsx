import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { tableauVizUrl, tableauVizzes } from "@/lib/site";
import { cn } from "@/lib/utils";

type DashboardViz = (typeof tableauVizzes)[number];

type DashboardCardProps = {
  viz: DashboardViz;
  className?: string;
};

export function DashboardCard({ viz, className }: DashboardCardProps) {
  return (
    <Link
      href={tableauVizUrl(viz.workbook, viz.view)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group bento-card flex flex-col overflow-hidden", className)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={viz.thumbnail}
          alt={viz.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          Tableau Public
          <ExternalLinkIcon className="h-3 w-3" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {viz.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-3 font-display text-lg font-semibold tracking-tight text-gray-900 group-hover:text-accent dark:text-gray-100">
          {viz.title}
        </h2>
        <p className="mt-2 flex-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {viz.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Open interactive dashboard
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
