import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

export const Route = createFileRoute("/business")({
  component: BusinessPage,
  head: () => ({
    meta: [
      { title: "ZIPP Logistics — Business" },
      {
        name: "description",
        content:
          "ZIPP Logistics is being built so businesses and individuals can request and manage deliveries in the same ecosystem as transportation.",
      },
    ],
  }),
});

function BusinessPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Business / logistics"
        title="Mobility for more than the journey."
        description="Businesses don’t only need transportation for people. They move documents. Products. Packages. Inventory. Staff. Customers."
      />
      <Section>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            ZIPP Logistics is being built to give businesses and individuals a simpler way to request and manage
            deliveries through the same ecosystem used for transportation.
          </p>
          <p>
            Rather than treating logistics as a completely separate product, ZIPP is connecting delivery into the wider
            mobility network.
          </p>
          <p>
            That creates the potential for one platform to support more of the movement happening around a business —
            from getting a customer somewhere to getting a product to that customer.
          </p>
          <p className="font-medium text-foreground">
            We’re building the infrastructure first, then scaling it market by market.
          </p>
        </div>
        <a
          href="mailto:info@zipp.africa?subject=ZIPP%20Logistics"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground"
        >
          Talk to ZIPP
          <ArrowRight className="h-4 w-4" />
        </a>
      </Section>
      <Section className="bg-muted/40">
        <Eyebrow>ALSO ON ZIPP</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">The rest of the ecosystem.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link to="/ride" className="border border-border bg-card p-6 transition-colors hover:bg-muted/40">
            <div className="font-mono text-[11px] tracking-[0.16em] text-[color:var(--accent-strong)]">01 / RIDE</div>
            <p className="mt-3 text-lg font-medium">On-demand private transportation.</p>
          </Link>
          <Link to="/payments" className="border border-border bg-card p-6 transition-colors hover:bg-muted/40">
            <div className="font-mono text-[11px] tracking-[0.16em] text-[color:var(--accent-strong)]">02 / PAYMENTS</div>
            <p className="mt-3 text-lg font-medium">Pay inside the journey, not beside it.</p>
          </Link>
        </div>
      </Section>
      <WaitlistCta
        title="Be there before we go live."
        description="Tell us your state. We’ll open logistics as each market is ready."
      />
    </PageShell>
  );
}
