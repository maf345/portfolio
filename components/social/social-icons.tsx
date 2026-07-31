type SocialIconProps = { className?: string };

export function GitHubIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** Official Tableau logo — four colored plus marks */
export function TableauIcon({ className }: SocialIconProps) {
  const Plus = ({ x, y, color }: { x: number; y: number; color: string }) => (
    <g transform={`translate(${x}, ${y})`}>
      <rect fill={color} x="4" y="0" width="2" height="10" />
      <rect fill={color} x="0" y="4" width="10" height="2" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <Plus x={1} y={1} color="#E8762D" />
      <Plus x={13} y={1} color="#C72026" />
      <Plus x={1} y={13} color="#1F4571" />
      <Plus x={13} y={13} color="#5B9BD5" />
    </svg>
  );
}

/** Official HackerRank logo — green badge */
export function HackerRankIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00EA64" aria-hidden="true">
      <path d="M12 0c1.286 0 9.825 4.902 10.416 6.012.588 1.115.588 7.865 0 8.976C21.825 16.098 13.287 21 12 21s-9.825-4.902-10.416-6.012C1.001 13.877 1 7.127 1.584 6.012 2.175 4.902 10.713 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.256v1.154l-1.497 2.964a.28.28 0 0 1-.249.154.279.279 0 0 1-.249-.154l-1.497-2.964V7.055a.257.257 0 0 0-.258-.256.257.257 0 0 0-.258.256v1.554c0 .083.022.164.063.235l1.734 3.434a.785.785 0 0 0 1.41 0l1.734-3.434a.564.564 0 0 0 .063-.235V7.055a.257.257 0 0 0-.258-.256zm-4.59 0a.257.257 0 0 0-.258.256v4.083c0 .142.116.256.258.256s.258-.114.258-.256V7.055a.257.257 0 0 0-.258-.256z" />
    </svg>
  );
}

/** Official Kaggle logo */
export function KaggleIcon({ className }: SocialIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/social/kaggle.png"
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
    />
  );
}

export function ExternalLinkIcon({ className }: SocialIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

export const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  tableau: TableauIcon,
  hackerrank: HackerRankIcon,
  kaggle: KaggleIcon,
} as const;

export type SocialIconKey = keyof typeof socialIconMap;

/** Icons that always render in official brand colors */
export const brandColoredIcons: Set<SocialIconKey> = new Set([
  "tableau",
  "hackerrank",
  "kaggle",
]);
