import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { FormEvent, useRef } from "react";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/zipp/PageShell";
import { Section, Eyebrow, fadeUp } from "@/components/zipp/Section";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { Traction } from "@/components/zipp/Traction";
import { DarkField } from "@/components/zipp/DarkField";
import { StateSelect } from "@/components/zipp/StateSelect";
import { GetTheApp } from "@/components/zipp/GetTheApp";
import { LAUNCH_LINE, LAUNCH_MARKETS } from "@/lib/nigeria";

import heroPhone from "@/assets/screen-home.jpg";
import driverHome from "@/assets/driver-rides.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "ZIPP — Move better. Move with ZIPP." },
      {
        name: "description",
        content:
          "ZIPP is building a mobility platform for Africa: rides, logistics, rentals, transit, and payments. Calabar first. Join the waitlist.",
      },
      { property: "og:title", content: "ZIPP — Move better. Move with ZIPP." },
      {
        property: "og:description",
        content: "Ride-hailing, logistics, rentals, digital payments, and public transportation — one ecosystem. Built for Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function RequestCard() {
  const navigate = useNavigate();
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({ to: "/waitlist" });
  };

  return (
    <form onSubmit={submit} className="border border-zipp-blue/30 bg-zipp-navy/80 p-5 sm:p-6 backdrop-blur-sm">
      <div className="font-mono text-[11px] tracking-[0.2em] text-white/40">JOIN THE WAITLIST</div>
      <label className="mt-5 block text-sm font-medium text-white/80">
        State
        <StateSelect className="mt-2 w-full min-h-11 border border-zipp-blue/30 bg-zipp-ink px-3 py-3 text-base text-white outline-none focus:border-[color:var(--accent)] sm:text-sm" />
      </label>
      <label className="mt-4 block text-sm font-medium text-white/80">
        I want to
        <select
          name="intent"
          className="mt-2 w-full min-h-11 border border-zipp-blue/30 bg-zipp-ink px-3 py-3 text-base text-white outline-none focus:border-[color:var(--accent)] sm:text-sm"
        >
          <option>Ride</option>
          <option>Drive</option>
          <option>Send deliveries</option>
          <option>Use ZIPP for business</option>
        </select>
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zipp-navy"
      >
        Join waitlist
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-white/40">Not live yet. 500+ already waiting, including 100 prospective drivers.</p>
    </form>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <div ref={ref} id="top" className="relative overflow-hidden bg-zipp-ink pt-24 pb-12 text-white sm:pt-32 sm:pb-24">
      <DarkField />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 sm:mb-10 sm:gap-3 sm:pb-4 sm:tracking-[0.2em]">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </span>
            PRE-LAUNCH · CALABAR
          </span>
          <span className="hidden sm:inline">04.9757°N / 008.3417°E</span>
          <span className="hidden sm:inline">500+ WAITLIST · 100 DRIVERS</span>
        </div>

        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="min-w-0 lg:col-span-7"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow dark>THE WAY AFRICA MOVES</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-6xl lg:text-[4.4rem]"
            >
              Move better.
              <br />
              Move with ZIPP.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-lg text-white/75 sm:mt-6 sm:text-xl">
              Africa is moving. The way we move should be better.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#get-app"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zipp-navy sm:w-auto lg:hidden"
            >
              Get the app now
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.div variants={fadeUp} className="mt-5 max-w-xl space-y-3 text-[15px] leading-relaxed text-white/60 sm:mt-6 sm:space-y-4 sm:text-lg">
              <p>
                ZIPP is building a mobility platform for the way people and businesses actually move across Africa.
              </p>
              <p>
                We’re bringing ride-hailing, logistics, vehicle rentals, digital payments, and public transportation
                into one connected ecosystem — so getting from one place to another, sending something across town, or
                accessing transportation doesn’t require a different solution every time.
              </p>
              <p>
                We’re starting in Calabar — our proving ground — then expanding into Akwa Ibom, and building a
                repeatable model for Nigeria and Africa.
              </p>
              <p className="font-medium text-white">Built for Africa. Built around how Africa moves.</p>
            </motion.div>
          </motion.div>

          <div id="join" className="min-w-0 scroll-mt-28 lg:col-span-5">
            <RequestCard />
          </div>
        </div>

        <motion.div
          style={{ y: yPhone }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mx-auto mt-12 grid max-w-lg grid-cols-2 items-end gap-3 sm:mt-16 sm:max-w-xl sm:gap-6 lg:max-w-2xl"
        >
          <div className="text-center">
            <PhoneFrame
              src={heroPhone}
              alt="ZIPP rider home — map of Calabar"
              className="max-w-[240px]"
              priority
              dark
              label="RIDE"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
              Rider home
            </p>
          </div>
          <div className="text-center">
            <PhoneFrame
              src={driverHome}
              alt="ZIPP driver home — go online and accept trips"
              className="max-w-[240px]"
              dark
              label="DRIVE"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px]">
              Driver home
            </p>
          </div>
        </motion.div>
        <GetTheApp dark anchor className="mx-auto mt-10 max-w-lg sm:mt-12" />
      </div>
    </div>
  );
}

function Building() {
  return (
    <Section>
      <Eyebrow>STATUS</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        We’re not live yet. We’re building for launch.
      </h2>
      <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          ZIPP is currently preparing for public release, and more than <strong className="text-foreground">500 people are already on our waitlist</strong>, including{" "}
          <strong className="text-foreground">100 prospective drivers</strong> waiting to get on the platform.
        </p>
        <p>That means our journey isn’t starting with an empty marketplace.</p>
        <p>
          We’re building the technology, onboarding the supply side, and preparing the infrastructure needed to launch
          responsibly.
        </p>
      </div>
      <Link
        to="/waitlist"
        className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground"
      >
        Join the waitlist
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Section>
  );
}

function Ecosystem() {
  const pillars = [
    { n: "01", title: "ZIPP Ride", desc: "On-demand private transportation.", to: "/ride" as const },
    { n: "02", title: "ZIPP Logistics", desc: "Delivery and movement of goods for individuals and businesses.", to: "/business" as const },
    { n: "03", title: "ZIPP Rentals", desc: "Vehicles for when you need more than a single trip.", to: "/waitlist" as const },
    { n: "04", title: "ZIPP Transit", desc: "Digital access to participating government transport, including CNG buses.", to: "/transit" as const },
    { n: "05", title: "ZIPP Payments", desc: "Digital payments that sit inside the journey, not beside it.", to: "/payments" as const },
  ];
  return (
    <Section className="bg-muted/40">
      <Eyebrow>ECOSYSTEM</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">One platform. Five ways to move.</h2>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {pillars.map((p) => (
          <Link
            key={p.n}
            to={p.to}
            className="group grid min-w-0 gap-1 py-5 sm:grid-cols-[4.5rem_minmax(0,12rem)_1fr_auto] sm:items-baseline sm:gap-8 sm:py-6"
          >
            <span className="font-mono text-xs text-[color:var(--accent-strong)]">{p.n}</span>
            <span className="font-medium text-foreground">{p.title}</span>
            <span className="text-sm text-muted-foreground">{p.desc}</span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground group-hover:text-[color:var(--accent-strong)] sm:inline">
              Open →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function DriveEarn() {
  return (
    <Section className="overflow-hidden bg-zipp-ink text-white" atmosphere={<DarkField />}>
      <div className="relative max-w-2xl">
        <Eyebrow dark>DRIVE</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Built with drivers, not just for riders.</h2>
        <p className="mt-5 max-w-lg text-base text-white/60 sm:text-lg">
          More than 100 prospective drivers are already on the waitlist. We’re building the onboarding and operating
          systems to turn that interest into a dependable network — requests, 85% take-home, wallet payouts, and KYC.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/drive"
            className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zipp-navy"
          >
            See the driver app
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function CitiesTeaser() {
  return (
    <Section>
      <Eyebrow>WHERE WE’RE LAUNCHING</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Starting local. Building regional. Going African.
      </h2>
      <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
        Calabar first. Akwa Ibom next. Nigeria, then Africa — market by market.
      </p>
      <div className="mt-10 flex flex-wrap gap-2">
        {LAUNCH_MARKETS.map((c) => (
          <span key={c.name} className="border border-border bg-card px-4 py-2 font-mono text-xs tracking-[0.12em] uppercase">
            {c.name} · {c.status}
          </span>
        ))}
      </div>
      <Link to="/cities" className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
        Where we’re launching →
      </Link>
    </Section>
  );
}

function LandingPage() {
  return (
    <PageShell>
      <Hero />
      <Building />
      <Traction compact />
      <Ecosystem />
      <DriveEarn />
      <CitiesTeaser />
      <WaitlistCta
        title="Be there before we go live."
        description={`500+ people are already waiting, including 100 prospective drivers. ${LAUNCH_LINE}`}
      />
    </PageShell>
  );
}
