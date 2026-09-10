import { cn } from "@/lib/utils";

import logoMark from "@/assets/logo-mark.png";

/** Logo-navy wash: road lanes + the Z, used on every dark ZIPP surface. */
export function DarkField({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 zipp-glow" />
      <div className="absolute inset-0 zipp-lanes" />
      <div className="absolute inset-0 zipp-routes" />
      <div className="absolute inset-0 bg-gradient-to-r from-zipp-ink/80 via-zipp-ink/35 to-transparent" />
      <img
        src={logoMark}
        alt=""
        className="absolute -right-[10%] -bottom-[32%] w-[min(52vw,34rem)] select-none opacity-[0.18]"
      />
    </div>
  );
}
