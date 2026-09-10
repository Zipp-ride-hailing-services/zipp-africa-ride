import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Section({
  id,
  className = "",
  atmosphere,
  children,
}: {
  id?: string;
  className?: string;
  atmosphere?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-20 lg:py-28", id && "scroll-mt-24", className)}>
      {atmosphere}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex max-w-full flex-wrap items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]",
        dark ? "text-white/50" : "text-muted-foreground",
      )}
    >
      <span className={cn("h-px w-5 shrink-0 sm:w-8", dark ? "bg-white/35" : "bg-[color:var(--accent-strong)]")} />
      {children}
    </div>
  );
}
