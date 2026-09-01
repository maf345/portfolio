import Image from "next/image";
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Link
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card group flex items-center gap-3 p-5 transition-colors hover:border-accent/40"
            >
              {"logo" in cert && cert.logo && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-600">
                  <Image
                    src={cert.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-gray-900 group-hover:text-accent dark:text-gray-100">
                  {cert.name}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Earned {cert.year}</p>
              </div>
              <ExternalLinkIcon className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
