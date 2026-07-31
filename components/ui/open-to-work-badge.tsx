import { siteConfig } from "@/lib/site";

export function OpenToWorkBadge({ className = "" }: { className?: string }) {
  if (!siteConfig.openToWork) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Open to work
    </span>
  );
}
