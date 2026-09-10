import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, fadeUp } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — ZIPP" },
      { name: "description", content: "Build mobility African cities can trust. Roles in operations, product, engineering, and trust." },
    ],
  }),
});

const roles = [
  { title: "City Operations Lead", desc: "Own launch readiness, driver quality, and day-to-day operations for a ZIPP city." },
  { title: "Driver Partner Manager", desc: "Recruit, train, and support verified operators with clear standards and care." },
  { title: "Product Designer", desc: "Design rider and driver flows that feel precise on real streets — not just mockups." },
  { title: "Full-Stack Engineer", desc: "Ship matching, tracking, and payments systems built for African network conditions." },
  { title: "Customer Trust Specialist", desc: "Handle safety, support, and trip issues with calm, human judgment — with 24/7 readiness." },
];

const hiring = [
  { step: "1", title: "Introduce yourself", desc: "Email your role interest, city, and a short note on why ZIPP." },
  { step: "2", title: "Conversation", desc: "A focused call on your experience, city context, and how you work under pressure." },
  { step: "3", title: "Practical task", desc: "A short, relevant exercise — not busywork." },
  { step: "4", title: "Decision", desc: "Fast feedback either way, then quick onboarding when it's a fit." },
];

function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Careers"
        title="Build mobility that African cities can trust."
        description="Operators, engineers, and city partners who care about safety, clarity, and craft."
      />
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {roles.map((r, i) => (
            <motion.div key={r.title} variants={fadeUp} className="border border-border bg-card p-6">
              <span className="font-mono text-[11px] tracking-[0.16em] text-[color:var(--accent-strong)]">0{i + 1}</span>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-8 text-sm text-muted-foreground">
          Don't see your role?{" "}
          <a href="mailto:info@zipp.africa?subject=General%20application%20—%20ZIPP" className="font-semibold text-foreground underline underline-offset-2">
            apply via info@zipp.africa
          </a>
        </p>
      </Section>
      <Section className="bg-muted/40">
        <h2 className="text-3xl font-semibold tracking-tight">How we hire</h2>
        <div className="mt-10 grid gap-0 divide-y divide-border border-y border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:border">
          {hiring.map((h) => (
            <div key={h.step} className="px-5 py-6">
              <span className="font-mono text-[11px] text-[color:var(--accent-strong)]">0{h.step}</span>
              <h3 className="mt-3 font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <WaitlistCta title="Not applying — just riding?" description="Join the waitlist and we’ll invite you when your city opens." />
    </PageShell>
  );
}
