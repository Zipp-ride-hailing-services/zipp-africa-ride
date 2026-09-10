import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M16.37 12.64c-.03-2.4 1.96-3.55 2.05-3.6-1.12-1.64-2.86-1.86-3.47-1.88-1.47-.15-2.88.87-3.63.87-.76 0-1.92-.85-3.16-.83-1.62.02-3.12.95-3.96 2.4-1.7 2.95-.43 7.3 1.21 9.69.81 1.17 1.77 2.48 3.03 2.43 1.22-.05 1.68-.79 3.15-.79s1.89.79 3.18.76c1.32-.02 2.15-1.19 2.95-2.37.93-1.35 1.31-2.66 1.33-2.73-.03-.01-2.54-.97-2.57-3.85ZM14.7 5.9c.67-.81 1.12-1.94 1-3.06-1.96.08-4.33 1.31-4.56 3.11-.04.16-.07.32-.07.32 2.04.16 3.29-.82 3.63-.37Z" />
    </svg>
  );
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M4.5 3.8v16.4c0 .7.76 1.12 1.35.74l13.1-8.2a.86.86 0 0 0 0-1.48L5.85 3.06A.86.86 0 0 0 4.5 3.8Z" />
    </svg>
  );
}

function StoreButton({
  href,
  label,
  store,
  className,
  children,
}: {
  href: string;
  label: string;
  store: string;
  className: string;
  children: ReactNode;
}) {
  const inner = (
    <>
      {children}
      <span className="text-left leading-tight">
        <span className="block text-sm font-semibold">Get the app now</span>
        <span className="block font-mono text-[9px] uppercase tracking-[0.14em] opacity-70">{store}</span>
      </span>
    </>
  );

  const shared = cn("inline-flex min-h-12 items-center gap-3 border px-4 py-2.5", className);

  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={`${label} — coming soon`}
        className={cn(shared, "cursor-not-allowed opacity-70")}
      >
        {inner}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={cn(shared, "transition-colors")}>
      {inner}
    </a>
  );
}

export function GetTheApp({
  dark = false,
  className,
  anchor = false,
}: {
  dark?: boolean;
  className?: string;
  anchor?: boolean;
}) {
  const btn = dark
    ? "border-white/20 bg-white text-zipp-navy hover:bg-white/90"
    : "border-border bg-foreground text-background hover:bg-foreground/90";
  const dormant = dark
    ? "border-white/20 bg-white text-zipp-navy"
    : "border-border bg-foreground text-background";
  const live = Boolean(APP_STORE_URL || PLAY_STORE_URL);

  return (
    <div id={anchor ? "get-app" : undefined} className={cn(anchor && "scroll-mt-28", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <StoreButton
          href={APP_STORE_URL}
          label="Get the app now on the App Store"
          store="App Store"
          className={APP_STORE_URL ? btn : dormant}
        >
          <AppleMark className="h-6 w-6 shrink-0" />
        </StoreButton>
        <StoreButton
          href={PLAY_STORE_URL}
          label="Get the app now on Google Play"
          store="Google Play"
          className={PLAY_STORE_URL ? btn : dormant}
        >
          <PlayMark className="h-6 w-6 shrink-0" />
        </StoreButton>
      </div>
      {!live && (
        <p
          className={cn(
            "mt-2 font-mono text-[10px] uppercase tracking-[0.14em]",
            dark ? "text-white/45" : "text-muted-foreground",
          )}
        >
          Coming soon
        </p>
      )}
    </div>
  );
}
