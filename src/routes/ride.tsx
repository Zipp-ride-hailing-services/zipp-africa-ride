import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { Section, Eyebrow, fadeUp } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { GetTheApp } from "@/components/zipp/GetTheApp";

import screenHome from "@/assets/screen-home.jpg";
import screenBooking from "@/assets/screen-booking.png";
import screenSearch from "@/assets/screen-search.png";
import screenDriver from "@/assets/screen-driver.png";
import screenTracking from "@/assets/screen-tracking.png";
import screenComplete from "@/assets/screen-complete.png";
import screenPayment from "@/assets/screen-payment.png";
import screenHistory from "@/assets/screen-history.png";
import screenAccount from "@/assets/screen-account.png";
import screenSplash from "@/assets/screen-splash.jpg";
import onboardRides from "@/assets/onboard-rides.png";
import onboardPay from "@/assets/onboard-pay.png";
import onboardWallet from "@/assets/onboard-wallet.png";
import onboardWelcome from "@/assets/onboard-welcome.png";

export const Route = createFileRoute("/ride")({
  component: RidePage,
  head: () => ({
    meta: [
      { title: "Ride — ZIPP" },
      { name: "description", content: "Request a ZIPP ride: fare-locked prices, verified units, and local payments." },
    ],
  }),
});

const features = [
  { n: "01", title: "FARE LOCK", desc: "Price commits before you request. If demand moves, you see it — it never hides in the total." },
  { n: "02", title: "GEO MATCH", desc: "Nearest verified unit, not the loudest bid. Pickup measured in city blocks, not marketing minutes." },
  { n: "03", title: "SAFE STACK", desc: "ID, plate, live share, SOS. Every trip is a tracked session with a human line behind it." },
  { n: "04", title: "LOCAL RAILS", desc: "Cash, card, ZipWallet, mobile money. Pay the way the street already pays." },
  { n: "05", title: "DRIVER CUT", desc: "Lower take rate, weekly payouts, bonuses that actually land — operators stay on the network." },
  { n: "06", title: "LIVE SESSION", desc: "Route, remainder, and drop-off as telemetry. No black box between pin and arrival." },
];

const steps = [
  { n: "01", title: "DEST", desc: "Drop the pin." },
  { n: "02", title: "MATCH", desc: "Nearest unit." },
  { n: "03", title: "TRACK", desc: "Live approach." },
  { n: "04", title: "RIDE", desc: "Session open." },
  { n: "05", title: "SETTLE", desc: "Pay and close." },
];

const rows = [
  { k: "SURGE", legacy: "Opaque", zipp: "Shown, then locked" },
  { k: "SUPPORT", legacy: "Ticket queue", zipp: "Live line" },
  { k: "PAY", legacy: "Card-first", zipp: "Cash · card · MM" },
  { k: "DRIVER CUT", legacy: "High take", zipp: "Lower, weekly" },
  { k: "ORIGIN", legacy: "Imported", zipp: "Africa-built" },
];

const flow = [
  { title: "See your city. Tap where to.", desc: "A live map of Calabar and a one-tap search from the street you are actually on.", img: screenHome, alt: "ZIPP home map in Calabar" },
  { title: "Pick your ride. Know the fare.", desc: "Economy, Comfort, and XL with seats, ETA, and the price in naira before you request.", img: screenBooking, alt: "ZIPP ride options" },
  { title: "Driver matched.", desc: "Name, plate, rating, and ETA. Call, message, or share the trip from a private channel.", img: screenDriver, alt: "Driver on the way" },
  { title: "Track every turn.", desc: "Distance left, time left, and a live route until you arrive.", img: screenTracking, alt: "Trip in progress" },
  { title: "You've arrived.", desc: "Rate the driver anonymously, leave an optional tip, then pay and close the trip.", img: screenComplete, alt: "Trip complete — rate, tip, and pay" },
  { title: "Pay your way.", desc: "ZipWallet, bank transfer, or cash when the trip ends.", img: screenPayment, alt: "Pay for trip" },
];

const extras = [
  { img: screenSearch, alt: "Where to — popular places in Calabar", label: "Where to" },
  { img: screenHistory, alt: "Activity history", label: "Activity" },
  { img: screenAccount, alt: "Account, payments, and support", label: "Account" },
  { img: screenSplash, alt: "Create a ZIPP account or log in", label: "Create account" },
];

const onboard = [
  { img: onboardRides, label: "Rides", title: "Get there in style" },
  { img: onboardPay, label: "Pay", title: "Pay your way" },
  { img: onboardWallet, label: "ZipWallet", title: "Pay and send in seconds" },
  { img: onboardWelcome, label: "Welcome", title: "Welcome aboard" },
];

function RidePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="ZIPP Ride"
        title="On-demand private transportation."
        description="ZIPP Ride is the private-trip layer of the ecosystem we’re building — fare-locked prices, verified units, and payments inside the journey. Not live yet. Calabar first."
      />

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>SPEC / 06</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">The stack, not the slogans.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Six systems every ride runs through — designed for African streets, not imported from somewhere else.
          </p>
        </div>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {features.map((f) => (
            <div key={f.n} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_minmax(0,11rem)_1fr] sm:items-baseline sm:gap-8">
              <span className="font-mono text-xs text-[color:var(--accent-strong)]">{f.n}</span>
              <h3 className="font-mono text-sm tracking-[0.14em] text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Eyebrow>PROTOCOL / 05</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Five beats. One session.</h2>
        <div className="mt-14 grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {steps.map((s) => (
            <div key={s.n} className="bg-card px-5 py-6">
              <div className="font-mono text-[11px] text-[color:var(--accent-strong)]">{s.n}</div>
              <div className="mt-3 font-mono text-sm tracking-[0.16em] text-foreground">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>DIFF / LEGACY</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">What changes on ZIPP.</h2>
        <div className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="border-b border-border bg-muted/50 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">Signal</th>
                <th className="px-5 py-3 font-medium">Legacy apps</th>
                <th className="bg-primary px-5 py-3 font-medium text-primary-foreground">ZIPP</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-b border-border last:border-0">
                  <td className="px-5 py-4 font-mono text-xs tracking-[0.12em] text-foreground">{r.k}</td>
                  <td className="px-5 py-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <X className="h-3.5 w-3.5 text-destructive" strokeWidth={2.5} />
                      {r.legacy}
                    </span>
                  </td>
                  <td className="bg-primary/5 px-5 py-4 font-medium text-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[color:var(--accent-strong)]" strokeWidth={2.5} />
                      {r.zipp}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="space-y-24">
          {flow.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--accent-strong)]">
                  0{i + 1} / SESSION
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{it.title}</h2>
                <p className="mt-4 max-w-md text-lg text-muted-foreground">{it.desc}</p>
              </div>
              <PhoneFrame src={it.img} alt={it.alt} className="max-w-[280px]" />
            </motion.div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/40">
        <h2 className="text-3xl font-semibold tracking-tight">Around the app</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          {extras.map((s) => (
            <div key={s.label} className="text-center">
              <PhoneFrame src={s.img} alt={s.alt} className="max-w-[200px]" />
              <p className="mt-4 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight">From splash to first ride</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {onboard.map((s) => (
            <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
              <PhoneFrame src={s.img} alt={s.title} className="max-w-[220px]" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">{s.label}</p>
              <p className="mt-1 font-semibold">{s.title}</p>
            </motion.div>
          ))}
        </div>
        <GetTheApp className="mt-12" />
        <Link to="/waitlist" className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
          Join the waitlist to ride first →
        </Link>
      </Section>
      <Section className="bg-muted/40">
        <Eyebrow>ALSO ON ZIPP</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Travel your way.</h2>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
          <Link to="/safety" className="bg-card p-6 transition-colors hover:bg-muted/40">
            <div className="font-mono text-[11px] text-[color:var(--accent-strong)]">01</div>
            <h3 className="mt-3 font-semibold">Safety</h3>
            <p className="mt-2 text-sm text-muted-foreground">Every trip is a tracked session.</p>
          </Link>
          <Link to="/cities" className="bg-card p-6 transition-colors hover:bg-muted/40">
            <div className="font-mono text-[11px] text-[color:var(--accent-strong)]">02</div>
            <h3 className="mt-3 font-semibold">Cities</h3>
            <p className="mt-2 text-sm text-muted-foreground">Calabar first. Akwa Ibom next.</p>
          </Link>
          <Link to="/business" className="bg-card p-6 transition-colors hover:bg-muted/40">
            <div className="font-mono text-[11px] text-[color:var(--accent-strong)]">03</div>
            <h3 className="mt-3 font-semibold">Logistics</h3>
            <p className="mt-2 text-sm text-muted-foreground">Deliveries in the same ecosystem.</p>
          </Link>
        </div>
      </Section>
      <WaitlistCta />
    </PageShell>
  );
}
