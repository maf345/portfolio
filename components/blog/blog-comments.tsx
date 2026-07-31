"use client";

import { useEffect, useRef } from "react";

type BlogCommentsProps = {
  slug: string;
};

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? "",
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "Comments",
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
};

function isGiscusConfigured() {
  return Boolean(giscusConfig.repo && giscusConfig.repoId && giscusConfig.categoryId);
}

export function BlogComments({ slug }: BlogCommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGiscusConfigured() || !commentsRef.current) return;
    if (commentsRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", giscusConfig.repo);
    script.setAttribute("data-repo-id", giscusConfig.repoId);
    script.setAttribute("data-category", giscusConfig.category);
    script.setAttribute("data-category-id", giscusConfig.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    commentsRef.current.appendChild(script);
  }, [slug]);

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">Comments</h2>
      <div
        ref={commentsRef}
        className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark"
      >
        {!isGiscusConfigured() && (
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-2">Comments powered by GitHub Discussions (Giscus)</p>
            <p className="text-xs">
              Set{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">NEXT_PUBLIC_GISCUS_*</code>{" "}
              env vars to enable. Get values at{" "}
              <a href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                giscus.app
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
