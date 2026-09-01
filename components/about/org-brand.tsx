import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { cn } from "@/lib/utils";

type OrgBrandProps = {
  name: string;
  website?: string;
  logo?: string;
  subtitle?: string;
  meta?: string;
  logoSize?: "default" | "lg";
  className?: string;
  headingLevel?: "h2" | "h3";
};

function initialsFromName(name: string) {
  const words = name.replace(/[().,]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

export function OrgBrand({
  name,
  website,
  logo,
  subtitle,
  meta,
  logoSize = "default",
  className,
  headingLevel = "h3",
}: OrgBrandProps) {
  const Heading = headingLevel;
  const isLargeLogo = logoSize === "lg";

  const title = website ? (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-semibold text-gray-900 transition-colors hover:text-accent dark:text-gray-100"
    >
      <span>{name}</span>
      <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-gray-400 transition-colors group-hover:text-accent" />
    </Link>
  ) : (
    <Heading className="font-semibold text-gray-900 dark:text-gray-100">{name}</Heading>
  );

  return (
    <div className={cn("flex items-center gap-3.5 sm:gap-4", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-600",
          isLargeLogo ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11",
        )}
      >
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={isLargeLogo ? 52 : 36}
            height={isLargeLogo ? 52 : 36}
            className={cn("object-contain", isLargeLogo ? "h-12 w-12 sm:h-14 sm:w-14" : "h-9 w-9")}
          />
        ) : (
          <span className="text-xs font-bold text-accent">{initialsFromName(name)}</span>
        )}
      </div>
      <div className="min-w-0">
        {title}
        {subtitle && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        {meta && (
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">{meta}</p>
        )}
      </div>
    </div>
  );
}
