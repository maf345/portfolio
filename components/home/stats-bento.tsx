import { careerHighlights } from "@/lib/site";
import { ChartIcon, DatabaseIcon, SparkIcon, UsersIcon } from "@/components/icons";

const icons = [ChartIcon, UsersIcon, SparkIcon, DatabaseIcon];
const accents = [
  "from-blue-500/10 to-blue-600/5",
  "from-emerald-500/10 to-emerald-600/5",
  "from-violet-500/10 to-violet-600/5",
  "from-amber-500/10 to-amber-600/5",
];
const iconColors = ["text-blue-500", "text-emerald-500", "text-violet-500", "text-amber-500"];

export function StatsBento() {
  return (
    <section className="border-y border-gray-200 dark:border-gray-800">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
        {careerHighlights.map((item, i) => {
          const Icon = icons[i] ?? ChartIcon;
          return (
            <div
              key={item.label}
              className={`bento-card bg-gradient-to-br ${accents[i]} p-5 sm:p-6`}
            >
              <Icon className={`mb-3 h-6 w-6 ${iconColors[i]}`} />
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                {item.metric}
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
