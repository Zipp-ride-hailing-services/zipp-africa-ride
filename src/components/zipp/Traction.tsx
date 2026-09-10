import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/zipp/Section";

export function Traction({ compact = false }: { compact?: boolean }) {
  return (
    <Section className={compact ? "" : "bg-muted/40"}>
      <Eyebrow>TRACTION / PRE-LAUNCH</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        We’re early. And we’re already seeing interest.
      </h2>
      <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
        ZIPP has not launched publicly yet, so we don’t pretend to have active ride volumes or years of operating
        history. What we do have is early interest from the people we are building for.
      </p>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
        <div className="bg-card p-5 sm:p-8">
          <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">WAITLIST</div>
          <div className="mt-3 font-mono text-4xl font-medium tracking-tight">500+</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            More than 500 people have joined the ZIPP waitlist ahead of launch — an early community of prospective
            users who want access when the platform becomes available.
          </p>
        </div>
        <div className="bg-card p-5 sm:p-8">
          <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">DRIVERS</div>
          <div className="mt-3 font-mono text-4xl font-medium tracking-tight">100+</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            More than 100 prospective drivers are currently on our waitlist — an early pool of supply we can begin
            onboarding as we move toward launch.
          </p>
        </div>
      </div>
      {!compact && (
        <div className="mt-10 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-semibold text-foreground">Why that matters</h3>
          <p>
            We’re still at the beginning. Our current focus is turning this early interest into a reliable operating
            marketplace — onboarding drivers, preparing users, completing the product, establishing our payment
            infrastructure, and making sure the experience works before we scale.
          </p>
          <p>
            We would rather show you what we have actually built than give you numbers that don’t exist yet.
          </p>
          <p className="font-medium text-foreground">This is our starting point — not our ceiling.</p>
        </div>
      )}
      {compact && (
        <Link to="/about" className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
          Why this is our starting point →
        </Link>
      )}
    </Section>
  );
}
