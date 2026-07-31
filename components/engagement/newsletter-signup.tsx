import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function NewsletterSignup() {
  if (!siteConfig.newsletterUrl) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-surface-muted p-5 dark:border-gray-800 dark:bg-surface-dark-muted">
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Stay updated</p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        New tutorials on Python, Snowflake, and analytics — no spam.
      </p>
      <Link
        href={siteConfig.newsletterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90"
      >
        Subscribe to newsletter
      </Link>
    </div>
  );
}
