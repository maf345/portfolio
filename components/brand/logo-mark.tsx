import type { SVGProps } from "react";

/** Outline M — used for browser tab favicon only */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="14" y="14" width="100" height="100" fill="#ffffff" stroke="#6b7280" strokeWidth="2.5" />
      <path
        d="M40 94V34h4l20 38 20-38h4v60h-6V48l-18 34h-2L44 48v46h-4z"
        fill="#374151"
      />
    </svg>
  );
}

/** Filled M in square — used in navbar (matches old portfolio logo) */
export function NavbarLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="12" y="12" width="104" height="104" fill="#ffffff" stroke="#111827" strokeWidth="3" />
      <path
        d="M38 92V36h7l19 34 19-34h7v56h-9V50l-17 31h-3L44 50v42h-6z"
        fill="#111827"
      />
      <rect x="88" y="78" width="10" height="10" fill="#111827" />
    </svg>
  );
}
