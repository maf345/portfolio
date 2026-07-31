import { SocialLinks } from "@/components/social/social-links";
import { siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} {siteConfig.author}
        </p>
        <SocialLinks links={socialLinks} variant="icon" />
      </div>
    </footer>
  );
}
