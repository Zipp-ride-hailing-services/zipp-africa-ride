import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

export const Route = createFileRoute("/help")({
  component: HelpPage,
  head: () => ({
    meta: [
      { title: "Help — ZIPP" },
      { name: "description", content: "Questions about ZIPP rides, drivers, cities, and the waitlist." },
    ],
  }),
});

const items = [
  {
    q: "What is ZIPP?",
    a: "ZIPP is a mobility platform for Africa — bringing ride-hailing, logistics, vehicle rentals, digital payments, and public transportation into one connected ecosystem. We’re not live yet. We’re building for launch.",
  },
  {
    q: "Where is ZIPP live?",
    a: "ZIPP has not launched publicly yet. We’re starting in Calabar — our proving ground — then expanding into Akwa Ibom, and building a repeatable model for Nigeria and Africa. More than 500 people are already on the waitlist.",
  },
  {
    q: "What services will ZIPP offer?",
    a: "ZIPP Ride (on-demand private transportation), ZIPP Logistics (deliveries), ZIPP Rentals, ZIPP Transit (digital access to participating government transport, including planned CNG bus integration), and ZIPP Payments.",
  },
  {
    q: "How will I pay?",
    a: "ZIPP Payments is being designed so you can pay for eligible services inside the platform. Payment infrastructure will run through licensed and regulated partners appropriate to each service.",
  },
  {
    q: "Can I join as a driver?",
    a: "Yes — choose Drive on the waitlist. More than 100 prospective drivers are already queued. We’re building the onboarding and operating systems to turn that interest into a dependable network.",
  },
  {
    q: "What do waitlist members get?",
    a: "A place in the community we’re building from the beginning — and an invite as each market opens. Calabar first. Akwa Ibom next. Nigeria, then Africa.",
  },
  {
    q: "What is ZIPP Transit?",
    a: "The digital layer around participating government transportation services. Under our planned government integration, CNG buses can be connected to ZIPP so passengers can find routes, book, and pay from their phones.",
  },
];

function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHeader eyebrow="Help / index" title="Questions. Index." description="Can't find what you need? Write to info@zipp.africa." />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-12 w-full items-center justify-between gap-3 p-4 text-left sm:gap-6 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex min-w-0 items-baseline gap-3 sm:gap-4">
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                    <span className="font-medium">{it.q}</span>
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="-mt-1 px-6 pb-6 text-muted-foreground">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Prefer a person? <Link to="/contact" className="font-semibold text-foreground underline underline-offset-2">Contact ZIPP</Link>
        </p>
      </Section>
      <WaitlistCta />
    </PageShell>
  );
}
