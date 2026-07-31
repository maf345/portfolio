import { skills } from "@/lib/site";

const categoryColors = [
  "border-blue-200 bg-blue-50 dark:border-blue-800/40 dark:bg-blue-950/20",
  "border-emerald-200 bg-emerald-50 dark:border-emerald-800/40 dark:bg-emerald-950/20",
  "border-violet-200 bg-violet-50 dark:border-violet-800/40 dark:bg-violet-950/20",
  "border-amber-200 bg-amber-50 dark:border-amber-800/40 dark:bg-amber-950/20",
  "border-rose-200 bg-rose-50 dark:border-rose-800/40 dark:bg-rose-950/20",
  "border-cyan-200 bg-cyan-50 dark:border-cyan-800/40 dark:bg-cyan-950/20",
];

export function SkillsShowcase() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, i) => (
        <div
          key={group.category}
          className={`rounded-2xl border p-5 ${categoryColors[i % categoryColors.length]}`}
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {group.category}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-md bg-white/80 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-surface-dark-elevated/80 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
