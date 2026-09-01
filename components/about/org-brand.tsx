import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { cn } from "@/lib/utils";

type OrgBrandProps = {
  name: string;
  website?: string;
  logo?: string;
  subtitle?: string;
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
  className,
  headingLevel = "h3",
}: OrgBrandProps) {
  const Heading = headingLevel;

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
    <div className={cn("flex items-start gap-3", className)}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        ) : (
          <span className="text-xs font-bold text-accent">{initialsFromName(name)}</span>
        )}
      </div>
      <div className="min-w-0">
        {title}
        {subtitle && (
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
