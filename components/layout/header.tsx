"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { OpenToWorkBadge } from "@/components/ui/open-to-work-badge";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur dark:border-gray-700/50 dark:bg-surface-dark/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
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

        <nav className="hidden items-center gap-1 md:flex md:gap-2">
          <OpenToWorkBadge className="mr-1 hidden lg:inline-flex" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors lg:px-3",
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

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:border-accent hover:text-accent dark:border-gray-700 dark:text-gray-300"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-surface-dark md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-accent/10 text-accent"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
