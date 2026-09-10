import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, fadeUp } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — ZIPP" },
      { name: "description", content: "Waitlist, partnerships, drivers, press, and investors: info@zipp.africa" },
    ],
  }),
});

const items = [
  { title: "Contact & partnerships", desc: "Waitlist, partnerships, drivers, or press.", href: "mailto:info@zipp.africa" },
  { title: "Pre-launch support", desc: "Need help before launch? Reach us at info@zipp.africa.", href: "mailto:info@zipp.africa" },
  { title: "Investors", desc: "Ask for the deck and learn more about the opportunity.", href: "mailto:info@zipp.africa" },
  { title: "Social", desc: "Follow @zipp.ride for launch news.", href: "https://instagram.com" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Company"
        title="Stay in touch with ZIPP."
        description="One inbox for waitlist, press, drivers, and partners."
      />
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it) => (
            <motion.a
              key={it.title}
              href={it.href}
              variants={fadeUp}
              className="border border-border bg-card p-7 transition-colors hover:bg-muted/40"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-[color:var(--accent-strong)]">0{items.indexOf(it) + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.a>
          ))}
        </motion.div>
      </Section>
      <WaitlistCta />
    </PageShell>
  );
}
