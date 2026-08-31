import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLinkIcon } from "@/components/social/social-icons";
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
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {item.organization}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
                    {item.title}
                  </h3>
                </div>
                <ExternalLinkIcon className="mt-1 h-4 w-4 shrink-0 text-gray-400 group-hover:text-accent" />
              </div>

              <p className="mt-1 text-xs font-medium text-accent">{item.period}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-medium text-accent">{item.linkLabel} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
