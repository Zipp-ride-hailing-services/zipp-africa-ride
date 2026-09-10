import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { Logo } from "@/components/zipp/Logo";
import { DarkField } from "@/components/zipp/DarkField";
import { GetTheApp } from "@/components/zipp/GetTheApp";
import { LAUNCH_LINE } from "@/lib/nigeria";

export function WaitlistCta({
  title = "Be there before we go live.",
  description = `More than 500 people are already waiting, including 100 prospective drivers. ${LAUNCH_LINE}`,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section className="pb-16 sm:pb-28">
      <div className="relative overflow-hidden border border-zipp-blue/25 bg-zipp-ink p-6 text-white sm:p-10 lg:p-16">
        <DarkField />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow dark>PHASE 01 · WAITLIST</Eyebrow>
            <Logo on="dark" className="mt-5 h-9 sm:h-12" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 max-w-md text-base text-white/60 sm:text-lg">{description}</p>
            <Link
              to="/waitlist"
              className="group relative mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-white px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zipp-navy sm:w-auto"
            >
              Join the ZIPP waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <GetTheApp dark className="mt-6" />
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-[11px] sm:tracking-[0.18em]">
              ZIPP — The way Africa moves.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
