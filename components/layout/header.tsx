"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OpenToWorkBadge } from "@/components/ui/open-to-work-badge";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur dark:border-gray-700/50 dark:bg-surface-dark/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          <Image
            src="/images/navbar-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
            priority
          />
          <span>
            Mehedi
            <span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <OpenToWorkBadge className="mr-1 hidden sm:inline-flex" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3",
                pathname === item.href
                  ? "bg-accent/10 text-accent"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
