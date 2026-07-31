"use client";

import { useCallback, useEffect, useState } from "react";

export function ScrollJumpButton() {
  const [nearTop, setNearTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      setNearTop(window.scrollY < mid);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-lg shadow-lg backdrop-blur transition-all hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-surface-dark-elevated dark:text-gray-200 dark:hover:border-accent dark:hover:text-accent ${
          nearTop ? "scale-90 opacity-60" : "scale-100 opacity-100"
        }`}
      >
        ↑
      </button>
      <button
        type="button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-lg shadow-lg backdrop-blur transition-all hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-surface-dark-elevated dark:text-gray-200 dark:hover:border-accent dark:hover:text-accent ${
          nearTop ? "scale-100 opacity-100" : "scale-90 opacity-60"
        }`}
      >
        ↓
      </button>
    </div>
  );
}
