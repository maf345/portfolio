import Image from "next/image";
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
    <Image
      src="/images/volunteer/google-maps.png"
      alt=""
      width={44}
      height={44}
      className={cn("h-11 w-11 shrink-0 object-contain", className)}
    />
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
