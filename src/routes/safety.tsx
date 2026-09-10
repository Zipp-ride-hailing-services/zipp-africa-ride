import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { TickFrame } from "@/components/zipp/Hud";

import screenDriver from "@/assets/screen-driver.png";
import driverPickup from "@/assets/driver-pickup.jpg";

export const Route = createFileRoute("/safety")({
  component: SafetyPage,
  head: () => ({
    meta: [
      { title: "Safety — ZIPP" },
      { name: "description", content: "Live tracking, SOS, verified drivers, and trip sharing on every ZIPP ride." },
    ],
  }),
});

const items = [
  { n: "01", title: "Live session tracking", desc: "Route, remainder, and drop-off stay visible until the trip closes." },
  { n: "02", title: "Emergency SOS", desc: "A panic line in the ride — not three menus away." },
  { n: "03", title: "Verified units", desc: "ID, plate, and rating on the card before you get in." },
  { n: "04", title: "Trip share", desc: "Send a live session to someone you trust." },
  { n: "05", title: "Insurance cover", desc: "Support behind the trip, not only in the terms." },
  { n: "06", title: "Safety score", desc: "Every session carries a score you can actually see." },
];

function SafetyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Safety / stack"
        title="Every trip is a session."
        description="ID, telemetry, share, SOS — calibrated to how African cities actually move."
      />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>PROTOCOL</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Six layers on every ride.</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {items.map((it) => (
                <li key={it.title} className="grid gap-1 py-4 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-xs text-[color:var(--accent-strong)]">{it.n}</span>
                  <div>
                    <div className="font-medium text-foreground">{it.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <TickFrame label="SAFETY SCORE">
            <div className="border border-border bg-card p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
                <span className="text-muted-foreground">Trip protected</span>
                <span className="text-[color:var(--accent-strong)]">98 / 100</span>
              </div>
              <div className="mt-5 h-1 overflow-hidden bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-[color:var(--accent)]"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 divide-x divide-border border border-border text-center">
                {["VERIFIED", "TRACKED", "INSURED"].map((x) => (
                  <div key={x} className="px-2 py-4">
                    <Check className="mx-auto h-4 w-4 text-[color:var(--accent-strong)]" />
                    <div className="mt-2 font-mono text-[10px] tracking-[0.12em] text-foreground">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          </TickFrame>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex items-start justify-center gap-3 overflow-hidden">
            <PhoneFrame src={screenDriver} alt="Safety actions while your driver is on the way" className="w-[42%] max-w-[160px] sm:max-w-[200px]" />
            <PhoneFrame src={driverPickup} alt="Driver trip with SOS on screen" className="mt-8 w-[42%] max-w-[160px] sm:mt-10 sm:max-w-[200px]" />
          </div>
          <div>
            <Eyebrow>IN APP</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Help sits next to the ride.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Call, message, share the trip, and SOS sit on the ride card — so help is never three menus away.
            </p>
          </div>
        </div>
      </Section>
      <WaitlistCta />
    </PageShell>
  );
}
