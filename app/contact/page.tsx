import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-gray-200 bg-mesh-light dark:border-gray-800 dark:bg-mesh-dark">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="section-label">Get in touch</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Let&apos;s talk about data, analytics, or your next project
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Open to roles, collaborations, and questions about my work. Email is the quickest way to
            reach me for now.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
