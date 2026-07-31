"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const slugGradients: Record<string, string> = {
  "healthcare-analytics-assistant": "from-teal-600 via-emerald-700 to-cyan-900",
  "tableau-refresh-reliability": "from-orange-500 via-amber-600 to-blue-900",
  "ophelos": "from-slate-600 to-slate-800",
  "network-availability-dashboard": "from-blue-600 to-indigo-800",
  "bandwidth-management-tool": "from-violet-600 to-purple-900",
};

type ProjectCoverProps = {
  slug: string;
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProjectCover({ slug, src, alt, className, priority }: ProjectCoverProps) {
  const [failed, setFailed] = useState(false);
  const gradient = slugGradients[slug] ?? "from-accent to-indigo-800";
  const imageSrc = src ?? `/images/projects/${slug}.png`;

  if (failed) {
    return (
      <div
        className={cn(
          `absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`,
          className,
        )}
      >
        <svg className="h-16 w-16 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" d="M4 19V5M20 19H4M8 19V11M12 19V7M16 19V13" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 640px) 100vw, 50vw"
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
