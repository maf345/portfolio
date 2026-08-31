"use client";

import { useState } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon } from "@/components/icons";
import { SocialLinks } from "@/components/social/social-links";
import { CvLink } from "@/components/ui/cv-link";
import { OpenToWorkBadge } from "@/components/ui/open-to-work-badge";
import { siteConfig, socialLinks } from "@/lib/site";

export function ContactInfo() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="bento-card p-6 sm:p-7">
        <OpenToWorkBadge className="mb-5" />

        <h2 className="font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Direct contact
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          The fastest way to reach me — especially while the form is being wired up.
        </p>

        <Link
          href={`mailto:${siteConfig.email}`}
          className="group mt-5 flex items-start gap-4 rounded-xl border border-gray-200 bg-surface-muted/80 p-4 transition-all hover:border-accent/40 hover:shadow-md dark:border-gray-700 dark:bg-surface-dark-muted/80"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <MailIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Email
            </span>
            <span className="mt-0.5 block break-all text-sm font-semibold text-gray-900 group-hover:text-accent dark:text-gray-100">
              {siteConfig.email}
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={copyEmail}
          className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-accent hover:text-accent dark:border-gray-700 dark:text-gray-300"
        >
          {copied ? "Copied to clipboard" : "Copy email address"}
        </button>

        <div className="mt-5 flex items-start gap-4 border-t border-gray-100 pt-5 dark:border-gray-800">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Location
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-gray-900 dark:text-gray-100">
              {siteConfig.location}
            </span>
          </span>
        </div>

        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          Connect on LinkedIn →
        </Link>
      </div>

      <div className="bento-card flex flex-wrap items-center gap-3 p-5">
        <CvLink variant="secondary" className="px-4 py-2.5" />
        <SocialLinks links={socialLinks} variant="icon" />
      </div>
    </div>
  );
}
