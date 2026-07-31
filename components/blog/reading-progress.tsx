"use client";

import { useEffect, useState } from "react";

type ReadingProgressProps = {
  targetId?: string;
};

export function ReadingProgress({ targetId = "blog-article" }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const update = () => {
      const rect = target.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = target.scrollHeight;
      const scrolled = viewport - rect.top;
      const pct = (scrolled / (total + viewport * 0.25)) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-gray-200/80 dark:bg-gray-800/80"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <span className="sr-only">{Math.round(progress)}% read</span>
    </div>
  );
}
