import Link from "next/link";
import { cn } from "@/lib/utils";

type CvLinkProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function CvLink({ className, variant = "primary" }: CvLinkProps) {
  return (
    <Link
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all",
        variant === "primary" &&
          "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent/90",
        variant === "secondary" &&
          "border border-gray-300 bg-white/80 text-gray-700 backdrop-blur hover:border-accent hover:text-accent dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300",
        className,
      )}
    >
      My CV
    </Link>
  );
}
