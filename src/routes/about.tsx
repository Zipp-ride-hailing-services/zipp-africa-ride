import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { Traction } from "@/components/zipp/Traction";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About ZIPP" },
      {
        name: "description",
        content:
          "ZIPP is building a mobility ecosystem for Africa: ride, logistics, rentals, transit, and payments. Starting in Calabar.",
      },
    ],
  }),
});

const pillars = [
  { n: "01", title: "ZIPP Ride", desc: "On-demand private transportation." },
  { n: "02", title: "ZIPP Logistics", desc: "Delivery and movement of goods for individuals and businesses." },
  { n: "03", title: "ZIPP Rentals", desc: "Access to vehicles for people who need transportation beyond a single trip." },
  { n: "04", title: "ZIPP Transit", desc: "Digital access to participating government transportation services, including CNG buses, with booking, route discovery, payments, and passenger information." },
  { n: "05", title: "ZIPP Payments", desc: "Integrated digital payment experiences designed to make transactions across the ZIPP ecosystem simpler and more convenient." },
];

const why = [
  {
    n: "01",
    title: "People use different forms of transportation depending on the trip.",
    desc: "A commute, a delivery, a weekend rental, and a government bus journey are different needs — but users shouldn’t have to navigate completely disconnected systems to handle them.",
  },
  {
    n: "02",
    title: "Public and private transportation can coexist.",
    desc: "The future of mobility isn’t necessarily private ride-hailing versus public transportation. We believe technology can connect both.",
  },
  {
    n: "03",
    title: "Payments should be part of the experience.",
    desc: "Moving people and goods creates constant transactions. Building payment capability into the ecosystem creates a more connected customer journey.",
  },
  {
    n: "04",
    title: "Local economics matter.",
    desc: "ZIPP is being built with African operating conditions in mind — from driver economics and payment preferences to infrastructure, transportation patterns, and government partnerships.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About ZIPP"
        title="We’re building more than a ride-hailing app."
        description="Transportation in Africa is rarely just about getting a ride."
      />
      <Section>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            A person may need a ride to work, send a package to a customer, rent a vehicle for the weekend, pay
            digitally, or figure out how to get home using public transportation.
          </p>
          <p>Today, these needs are often handled separately.</p>
          <p className="font-medium text-foreground">
            ZIPP is building a single mobility ecosystem designed to bring those experiences closer together.
          </p>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <Eyebrow>FIVE CORE AREAS</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The platform we’re developing.</h2>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {pillars.map((p) => (
            <div key={p.n} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_minmax(0,12rem)_1fr] sm:items-baseline sm:gap-8">
              <span className="font-mono text-xs text-[color:var(--accent-strong)]">{p.n}</span>
              <h3 className="font-medium text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Our goal isn’t to copy an existing mobility company and put a different logo on it.</p>
          <p>We’re building around the realities of the markets we intend to serve.</p>
          <p>
            That means thinking about availability, affordability, local payment behavior, driver economics, public
            transportation, business deliveries, and the infrastructure required to make all of them work together.
          </p>
          <p className="font-medium text-foreground">
            ZIPP is starting from Calabar. Akwa Ibom is next. Nigeria is where we scale. Africa is where we’re headed.
          </p>
        </div>
      </Section>
      <Section id="why-zipp">
        <Eyebrow>WHY ZIPP</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          We’re not trying to win by claiming to be the biggest.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          We’re trying to build something that fits the market better. ZIPP is being designed around several realities
          of African mobility:
        </p>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {why.map((w) => (
            <div key={w.n} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
              <span className="font-mono text-xs text-[color:var(--accent-strong)]">{w.n}</span>
              <div>
                <h3 className="font-medium text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-base text-muted-foreground sm:text-lg">
          The opportunity isn’t simply to replace one ride-hailing app with another. It’s to build a mobility system
          that can support more of how people and businesses move.
        </p>
      </Section>
      <Traction />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>TEAM</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Build it with us.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Operators, engineers, and city partners who care about how Africa actually moves.
            </p>
            <Link to="/careers" className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              Open roles →
            </Link>
          </div>
          <div>
            <Eyebrow>SAFETY</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Every trip is a session.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ID, telemetry, share, SOS — calibrated to how cities here actually move.
            </p>
            <Link to="/safety" className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              Safety protocol →
            </Link>
          </div>
        </div>
      </Section>
      <WaitlistCta
        title="Be there before we go live."
        description="500+ people are already waiting, including 100 prospective drivers. Calabar first. Akwa Ibom next. Nigeria, then Africa."
      />
    </PageShell>
  );
}
