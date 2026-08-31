import Link from "next/link";
import type { SocialIconKey } from "@/components/social/social-icons";
import { ExternalLinkIcon, brandColoredIcons, socialIconMap } from "@/components/social/social-icons";
import { cn } from "@/lib/utils";

export type SocialLinkItem = {
  href: string;
  label: string;
  icon: SocialIconKey;
};

type SocialLinksProps = {
  links: readonly SocialLinkItem[];
  variant?: "pill" | "row" | "icon";
  className?: string;
  limit?: number;
  compact?: boolean;
  nowrap?: boolean;
  gridOnMobile?: boolean;
};

export function SocialLinks({
  links,
  variant = "pill",
  className,
  limit,
  compact,
  nowrap,
  gridOnMobile,
}: SocialLinksProps) {
  const items = limit ? links.slice(0, limit) : links;

  if (variant === "icon") {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        {items.map((link) => {
          const Icon = socialIconMap[link.icon];
          const isBrand = brandColoredIcons.has(link.icon);
          return (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              aria-label={`${link.label} (opens in new tab)`}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all hover:border-accent/40 hover:shadow-md dark:border-gray-700 dark:bg-surface-dark-muted"
            >
              <Icon
                className={`h-5 w-5 ${isBrand ? "" : "text-gray-700 group-hover:text-accent dark:text-gray-300 dark:group-hover:text-accent"}`}
              />
            </Link>
          );
        })}
      </div>
    );
  }

  if (variant === "row") {
    return (
      <div className={cn("grid gap-2", className)}>
        {items.map((link) => {
          const Icon = socialIconMap[link.icon];
          const isBrand = brandColoredIcons.has(link.icon);
          return (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-all hover:border-accent hover:bg-accent/5 hover:shadow-sm dark:border-gray-700 dark:hover:border-accent"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-accent/10 dark:bg-surface-dark-elevated">
                <Icon
                  className={`h-5 w-5 ${isBrand ? "" : "text-gray-700 group-hover:text-accent dark:text-gray-300"}`}
                />
              </span>
              <span className="flex-1 text-sm font-medium text-gray-800 group-hover:text-accent dark:text-gray-200">
                {link.label}
              </span>
              <ExternalLinkIcon className="h-4 w-4 shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:text-accent group-hover:opacity-100" />
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        gridOnMobile ? "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center" : "flex gap-2",
        !gridOnMobile && (nowrap ? "flex-nowrap justify-center" : "flex-wrap justify-center"),
        className,
      )}
    >
      {items.map((link) => {
        const Icon = socialIconMap[link.icon];
        let label = link.label;
        if (compact && label === "Tableau Public") label = "Tableau";
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className={cn(
              "group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/60 font-medium text-gray-600 transition-all hover:border-accent hover:bg-accent/5 hover:text-accent hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-400 dark:hover:border-accent dark:hover:text-accent",
              gridOnMobile ? "w-full justify-center px-2 py-2 text-[11px] sm:w-auto sm:shrink-0" : "shrink-0",
              !gridOnMobile && (compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"),
            )}
          >
            <Icon className={compact ? "h-3 w-3 shrink-0" : "h-3.5 w-3.5 shrink-0"} />
            <span className="truncate">{label}</span>
            {!nowrap && !gridOnMobile && (
              <ExternalLinkIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
