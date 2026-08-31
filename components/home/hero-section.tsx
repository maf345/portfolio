import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { ScrollIndicator } from "@/components/home/scroll-indicator";
import { SocialLinks } from "@/components/social/social-links";
import { CvLink } from "@/components/ui/cv-link";
import { OpenToWorkBadge } from "@/components/ui/open-to-work-badge";
import { siteConfig, socialLinks } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mesh-light pb-20 dark:bg-mesh-dark sm:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up w-full min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-label">Data · BI · AI Analytics</p>
            <OpenToWorkBadge />
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Mehedi
            </span>
            <span className="text-gray-900 dark:text-white"> Afzal Farazi</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-300">{siteConfig.title}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-accent/40"
            >
              See my work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <CvLink variant="secondary" />
          </div>
        </div>

        <div
          className="relative flex w-full min-w-0 animate-fade-up flex-col items-center lg:justify-self-end"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-accent-light/10 blur-2xl" />
            <div className="relative mx-auto w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-accent/20 dark:border-surface-dark-elevated sm:w-72 lg:w-80">
              <Image
                src="/images/profile.png"
                alt="Mehedi Afzal Farazi"
                width={320}
                height={320}
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg dark:border-gray-700 dark:bg-surface-dark-elevated sm:-right-4">
              <p className="text-2xl font-bold text-accent">7.5+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Years in analytics</p>
            </div>
          </div>
          <SocialLinks
            links={socialLinks}
            variant="pill"
            compact
            gridOnMobile
            className="mt-6 w-full sm:max-w-md"
          />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
