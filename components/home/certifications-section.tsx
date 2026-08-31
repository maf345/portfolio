import Link from "next/link";
import { ExternalLinkIcon } from "@/components/social/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/site";

export function CertificationsSection() {
  return (
    <section className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-surface-dark-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          description="SnowPro Core certification and related credentials."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Link
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card group flex items-start justify-between gap-4 p-5 transition-colors hover:border-accent/40"
            >
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Earned {cert.year}</p>
              </div>
              <ExternalLinkIcon className="mt-1 h-4 w-4 shrink-0 text-gray-400 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
