import type { BlogCategory } from "@/lib/blog-categories";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";

type BlogCoverProps = {
  category: BlogCategory;
  title?: string;
  compact?: boolean;
  className?: string;
};

function CoverIcon({ category }: { category: BlogCategory }) {
  const { color } = BLOG_CATEGORIES[category];

  switch (category) {
    case "Python":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-90 sm:h-20 sm:w-20" aria-hidden="true">
          <path
            fill={color}
            d="M31.5 8c-12 0-11.2 5.2-11.2 5.2v5.4h11.4v1.6H14.8S8 19.4 8 31.8c0 12.4 5.6 12 5.6 12h3.4v-5.8s-.3-5.6 5.5-5.6h9.5s5.4.1 5.4-5.2V14.2S43.8 8 31.5 8zm-6.2 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
          />
          <path
            fill={color}
            d="M32.5 56c12 0 11.2-5.2 11.2-5.2v-5.4H32.3v-1.6h16.9S56 44.6 56 32.2c0-12.4-5.6-12-5.6-12h-3.4v5.8s.3 5.6-5.5 5.6h-9.5s-5.4-.1-5.4 5.2v9.4S20.2 56 32.5 56zm6.2-3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          />
        </svg>
      );
    case "Snowflake":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-90 sm:h-20 sm:w-20" aria-hidden="true">
          <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round">
            <line x1="32" y1="8" x2="32" y2="56" />
            <line x1="8" y1="32" x2="56" y2="32" />
            <line x1="15" y1="15" x2="49" y2="49" />
            <line x1="49" y1="15" x2="15" y2="49" />
            <line x1="32" y1="8" x2="26" y2="14" />
            <line x1="32" y1="8" x2="38" y2="14" />
            <line x1="32" y1="56" x2="26" y2="50" />
            <line x1="32" y1="56" x2="38" y2="50" />
          </g>
        </svg>
      );
    case "Tableau":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-90 sm:h-20 sm:w-20" aria-hidden="true">
          <rect x="10" y="36" width="10" height="20" rx="2" fill={color} opacity="0.7" />
          <rect x="27" y="24" width="10" height="32" rx="2" fill={color} opacity="0.85" />
          <rect x="44" y="14" width="10" height="42" rx="2" fill={color} />
        </svg>
      );
    case "Excel":
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-90 sm:h-20 sm:w-20" aria-hidden="true">
          <rect x="10" y="10" width="44" height="44" rx="4" fill="none" stroke={color} strokeWidth="2.5" />
          {[0, 1, 2, 3].map((i) => (
            <line key={`h${i}`} x1="10" y1={22 + i * 10} x2="54" y2={22 + i * 10} stroke={color} strokeWidth="1.5" opacity="0.6" />
          ))}
          {[0, 1, 2].map((i) => (
            <line key={`v${i}`} x1={24 + i * 10} y1="10" x2={24 + i * 10} y2="54" stroke={color} strokeWidth="1.5" opacity="0.6" />
          ))}
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-90 sm:h-20 sm:w-20" aria-hidden="true">
          <polyline
            points="8,48 22,30 34,38 56,14"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="56" cy="14" r="4" fill={color} />
        </svg>
      );
  }
}

export function BlogCover({ category, title, compact = false, className = "" }: BlogCoverProps) {
  const style = BLOG_CATEGORIES[category];

  return (
    <div
      className={`relative overflow-hidden ${compact ? "min-h-[120px]" : "min-h-[180px]"} ${className}`}
      style={{ background: style.gradient }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 160 Q100 80 200 120 T400 60 V200 H0Z" fill="white" fillOpacity="0.1" />
          <path d="M0 180 Q120 100 240 140 T400 100 V200 H0Z" fill="white" fillOpacity="0.05" />
        </svg>
      </div>
      <div
        className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: style.color }}
        aria-hidden="true"
      />
      <div className={`relative flex h-full ${compact ? "p-5" : "p-6 sm:p-7"}`}>
        <div className="flex flex-1 flex-col justify-between">
          <span
            className="inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: style.color }}
          >
            {style.label}
          </span>
          {title ? (
            <h3 className={`mt-3 font-display font-semibold leading-snug tracking-tight text-gray-900 ${compact ? "line-clamp-2 text-base" : "line-clamp-3 text-lg sm:text-xl"}`}>
              {title}
            </h3>
          ) : null}
        </div>
        <div className="ml-3 flex shrink-0 items-end self-end opacity-70">
          <CoverIcon category={category} />
        </div>
      </div>
    </div>
  );
}
