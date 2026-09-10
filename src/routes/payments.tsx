import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

import screenPayment from "@/assets/screen-payment.png";
import onboardWallet from "@/assets/onboard-wallet.png";

export const Route = createFileRoute("/payments")({
  component: PaymentsPage,
  head: () => ({
    meta: [
      { title: "ZIPP Payments — Wallet" },
      {
        name: "description",
        content:
          "ZIPP Payments makes paying for rides, logistics, rentals, and transit part of the journey — through licensed payment partners.",
      },
    ],
  }),
});

function PaymentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="ZIPP Payments"
        title="Payments that fit into the journey."
        description="Transportation shouldn’t become complicated because payment is complicated."
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              ZIPP is being designed with integrated digital payments so users can pay for eligible services within the
              platform rather than treating payment as a separate experience.
            </p>
            <p>
              As ZIPP expands across rides, logistics, rentals and transit, payments become an important part of
              connecting those services.
            </p>
            <p>
              Our payment infrastructure will be built through licensed and regulated payment partners appropriate to
              each service we offer.
            </p>
            <p className="font-medium text-foreground">Make paying for movement as simple as requesting it.</p>
          </div>
          <div className="flex items-start justify-center gap-3 overflow-hidden">
            <PhoneFrame src={onboardWallet} alt="ZipWallet" className="w-[46%] max-w-[160px] sm:max-w-[200px]" />
            <PhoneFrame src={screenPayment} alt="Pay for a ZIPP trip" className="mt-8 w-[46%] max-w-[160px] sm:mt-10 sm:max-w-[200px]" />
          </div>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <Eyebrow>ACROSS THE ECOSYSTEM</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">One wallet. Many ways to move.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/ride" as const, t: "Ride" },
            { to: "/business" as const, t: "Logistics" },
            { to: "/transit" as const, t: "Transit" },
            { to: "/waitlist" as const, t: "Rentals" },
          ].map((x, i) => (
            <Link key={x.t} to={x.to} className="border border-border bg-card p-5 transition-colors hover:bg-muted/40">
              <div className="font-mono text-[11px] text-[color:var(--accent-strong)]">0{i + 1}</div>
              <div className="mt-3 font-medium">{x.t}</div>
            </Link>
          ))}
        </div>
      </Section>
      <WaitlistCta
        title="Be there before we go live."
        description="Payments will sit inside ZIPP — through licensed partners — as each service opens."
      />
    </PageShell>
  );
}
