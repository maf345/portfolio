import { experience } from "@/lib/site";

export function ExperienceTimeline() {
  return (
    <div className="relative mt-8 space-y-6">
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

      {experience.map((job) => (
        <div key={job.company} className="relative pl-8">
          <div className="absolute left-0 top-5 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white dark:bg-gray-950">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          <div className="bento-card p-5 sm:p-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{job.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
            </div>

            <div className="mt-5 space-y-5">
              {job.roles.map((role, roleIndex) => (
                <div
                  key={role.title + role.period}
                  className={roleIndex > 0 ? "border-t border-gray-200 pt-5 dark:border-gray-800" : ""}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="font-medium text-gray-800 dark:text-gray-200">{role.title}</p>
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {role.period}
                    </span>
                  </div>
                  {role.highlights[0] && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {role.highlights[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
