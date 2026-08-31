import { cn } from "@/lib/utils";

type VolunteerLogoProps = {
  id: "google-maps" | "british-council";
  className?: string;
};

export function VolunteerLogo({ id, className }: VolunteerLogoProps) {
  if (id === "google-maps") {
    return <GoogleMapsLogo className={className} />;
  }

  return <BritishCouncilLogo className={className} />;
}

function GoogleMapsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-11 w-11 shrink-0", className)}
    >
      <path
        fill="#4285F4"
        d="M24 4C15.2 4 8 11.2 8 20c0 11.2 16 24 16 24s16-12.8 16-24c0-8.8-7.2-16-16-16z"
      />
      <circle cx="24" cy="20" r="7" fill="#fff" />
      <circle cx="24" cy="20" r="4.5" fill="#4285F4" />
      <path fill="#34A853" d="M24 8a12 12 0 0 1 12 12H24V8z" />
      <path fill="#FBBC04" d="M36 20a12 12 0 0 1-12 12V20h12z" />
      <path fill="#EA4335" d="M24 32a12 12 0 0 1-12-12h12v12z" />
    </svg>
  );
}

function BritishCouncilLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-11 w-11 shrink-0", className)}
    >
      <rect width="48" height="48" rx="10" fill="#003087" />
      <text
        x="24"
        y="19"
        textAnchor="middle"
        fill="#fff"
        fontSize="7.5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
      >
        british
      </text>
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fill="#fff"
        fontSize="7.5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
      >
        council
      </text>
    </svg>
  );
}
