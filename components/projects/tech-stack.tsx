type TechStackProps = {
  tags: string[];
  variant?: "overlay" | "card";
};

export function TechStack({ tags, variant = "card" }: TechStackProps) {
  if (tags.length === 0) return null;

  if (variant === "overlay") {
    return (
      <p className="text-xs font-medium text-white/90">{tags.join(" · ")}</p>
    );
  }

  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Tech stack
      </p>
      <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">{tags.join(" · ")}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
