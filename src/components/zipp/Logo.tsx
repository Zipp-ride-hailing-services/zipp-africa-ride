import { cn } from "@/lib/utils";

import logoMark from "@/assets/logo-mark.png";
import logoWordmark from "@/assets/logo-wordmark.png";

type LogoProps = {
  variant?: "mark" | "wordmark";
  /** Light sits on pale pages; dark sits on navy sections. */
  on?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "wordmark", on = "light", className }: LogoProps) {
  const blend = on === "dark" ? "brightness-0 invert" : "mix-blend-multiply";

  if (variant === "mark") {
    return (
      <img
        src={logoMark}
        alt="ZIPP"
        width={80}
        height={64}
        className={cn("h-8 w-auto object-contain object-left sm:h-9", blend, className)}
      />
    );
  }

  return (
    <img
      src={logoWordmark}
      alt="ZIPP Ride Hailing Services"
      width={280}
      height={100}
        className={cn("h-8 w-auto max-w-[9.5rem] object-contain object-left sm:h-11 sm:max-w-none", blend, className)}
    />
  );
}
