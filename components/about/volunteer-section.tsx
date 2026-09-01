import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { VolunteerLogo } from "@/components/about/volunteer-logos";
import { volunteerWork } from "@/lib/site";
export function VolunteerSection() {
  return (
    <section className="border-t border-gray-200 bg-surface-muted dark:border-gray-800 dark:bg-surface-dark-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="Community"
          title="Volunteer & contributions"
          description="Community work outside day-to-day analytics — improving public data and local discovery."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {volunteerWork.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bento-card flex flex-col p-5 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                    <VolunteerLogo id={item.logo} className="h-8 w-8" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {item.organization}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <ExternalLinkIcon className="mt-1 h-4 w-4 shrink-0 text-gray-400 group-hover:text-accent" />
              </div>
              <p className="mt-1 text-xs font-medium text-accent">{item.period}</p>
              {"metrics" in item && item.metrics && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-surface-muted px-2 py-2 text-center dark:bg-gray-900/60"
                    >
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {"badges" in item && item.badges && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-medium text-accent">{item.linkLabel} →</span>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Google Maps icon by{" "}
          <Link
            href="https://icons8.com/icon/DcygmpZqBEd9/google-maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Icons8
          </Link>
        </p>
      </div>
    </section>
  );
}
