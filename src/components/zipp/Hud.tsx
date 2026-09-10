import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TickFrame({
  children,
  className,
  label,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  const tick = dark ? "border-white/40" : "border-[color:var(--accent-strong)]";
  return (
    <div className={cn("relative", className)}>
      {label && (
        <div className={cn("mb-2 font-mono text-[10px] tracking-[0.22em] uppercase", dark ? "text-white/45" : "text-muted-foreground")}>
          {label}
        </div>
      )}
      <div className="relative">
        <span className={cn("pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t", tick)} />
        <span className={cn("pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t", tick)} />
        <span className={cn("pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l", tick)} />
        <span className={cn("pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r", tick)} />
        {children}
      </div>
    </div>
  );
}

export function Meta({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", className)}>
      {children}
    </span>
  );
}
