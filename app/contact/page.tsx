import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { MailIcon, MapPinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        label="Get in touch"
        title="Contact"
        description="Open to analytics, BI, and data engineering roles."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="bento-card group flex flex-col items-center p-8 text-center transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <MailIcon className="h-7 w-7" />
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
          <p className="mt-1 font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
            {siteConfig.email}
          </p>
        </Link>

        <div className="bento-card flex flex-col items-center p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
            <MapPinIcon className="h-7 w-7" />
          </div>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
          <p className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
            {siteConfig.location}
          </p>
        </div>

        {siteConfig.calendlyUrl ? (
          <Link
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card group flex flex-col items-center p-8 text-center transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500 group-hover:text-white">
              <span className="text-xl font-bold">📅</span>
            </div>
            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Schedule</p>
            <p className="mt-1 font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
              Book a 30-min call
            </p>
          </Link>
        ) : null}
      </div>

      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}
