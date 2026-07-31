"use client";

export function ScrollIndicator() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToWork}
      aria-label="Scroll to featured work"
      className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-gray-500 transition-colors hover:text-accent dark:text-gray-400 dark:hover:text-accent"
    >
      <span className="text-xs font-medium uppercase tracking-widest">Continue</span>
      <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-current p-1">
        <span className="h-1.5 w-1 animate-bounce rounded-full bg-current" />
      </span>
    </button>
  );
}
