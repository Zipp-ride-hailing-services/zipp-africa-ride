import { createFileRoute, redirect } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Apple,
  Play,
  ShieldCheck,
  Wallet,
  Zap,
  MapPin,
  Star,
  Sparkles,
  Timer,
  BadgeDollarSign,
  Users,
  PhoneCall,
  Share2,
  BellRing,
  Check,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Route as RouteIcon,
  Navigation,
  History,
  CreditCard,
  HeartHandshake,
  Cpu,
  Cookie,
} from "lucide-react";

import { Nav } from "@/components/zipp/Nav";
import { Counter } from "@/components/zipp/Counter";
import { Section, Eyebrow, fadeUp } from "@/components/zipp/Section";

import heroPhone from "@/assets/hero-phone.png";
import screenBooking from "@/assets/screen-booking.png";
import screenTracking from "@/assets/screen-tracking.png";
import screenPayment from "@/assets/screen-payment.png";
import screenHistory from "@/assets/screen-history.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import driverHero from "@/assets/driver-hero.jpg";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/waitlist" });
  },
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Zipp — Africa's Smarter Way to Move" },
      {
        name: "description",
        content:
          "Ride safely, arrive faster, and pay fairly. Zipp connects riders and drivers across Africa with transparent pricing, verified drivers, and local payment methods.",
      },
      { property: "og:title", content: "Zipp — Africa's Smarter Way to Move" },
      {
        property: "og:description",
        content:
          "The modern ride-hailing platform built for Africa. Transparent pricing, verified drivers, local payments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zipp",
          description: "African ride-hailing platform",
          url: "/",
        }),
      },
    ],
  }),
});

/* -------------------- HERO -------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={ref} id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* backdrop */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      {/* blobs */}
      <motion.div
        style={{ y }}
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[color:var(--accent)]/25 blur-3xl animate-blob"
      />
      <motion.div
        style={{ y }}
        className="absolute top-40 -right-24 h-[500px] w-[500px] rounded-full bg-[color:var(--accent-lime)]/20 blur-3xl animate-blob"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Now live in 8 African cities</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.02]"
            >
              Africa's{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-cta bg-clip-text text-transparent">smarter</span>
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full text-[color:var(--accent)]"
                >
                  <path d="M2 8 Q 100 -2 198 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              way to move.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Ride safely, arrive faster, and pay fairly. Zipp connects riders and drivers across Africa
              with transparent pricing, reliable drivers, and a better transportation experience.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="group relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Download App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </a>
              <a
                href="#drivers"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background transition-all hover:-translate-y-0.5"
              >
                Become a Driver
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[avatar1, avatar2, avatar3].map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                    width={36}
                    height={36}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground font-semibold">
                  4.9 <Star className="h-4 w-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
                </div>
                <div>Loved by 50,000+ riders</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: yPhone }}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-8 rounded-[48px] bg-gradient-cta opacity-20 blur-3xl" />
              <img
                src={heroPhone}
                alt="Zipp app showing driver arriving in Lagos"
                width={800}
                height={1200}
                className="relative w-full h-auto animate-float-slow drop-shadow-2xl"
              />

              {/* Floating cards */}
              <FloatCard
                className="absolute -left-4 sm:-left-10 top-16"
                delay={0.4}
                icon={<Timer className="h-4 w-4 text-[color:var(--accent-strong)]" />}
                title="ETA 3 mins"
                sub="Tunde in a Toyota Camry"
              />
              <FloatCard
                className="absolute -right-2 sm:-right-8 top-40"
                delay={0.7}
                icon={<ShieldCheck className="h-4 w-4 text-[color:var(--accent-strong)]" />}
                title="Safe Ride"
                sub="Verified & tracked"
              />
              <FloatCard
                className="absolute -left-2 sm:-left-8 bottom-24"
                delay={1.0}
                icon={<Wallet className="h-4 w-4 text-[color:var(--accent-strong)]" />}
                title="Cash & Card"
                sub="Plus mobile money"
              />
              <FloatCard
                className="absolute -right-4 sm:-right-10 bottom-8"
                delay={1.3}
                icon={<Check className="h-4 w-4 text-[color:var(--accent-strong)]" />}
                title="Driver arriving"
                sub="Turning onto your street"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatCard({
  className = "",
  delay = 0,
  icon,
  title,
  sub,
}: {
  className?: string;
  delay?: number;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={`hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-background/85 backdrop-blur-xl px-4 py-3 shadow-soft ${className}`}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[color:var(--accent)]/12">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-foreground">{title}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </motion.div>
  );
}

/* -------------------- TRUST -------------------- */
function Trust() {
  const stats = [
    { value: 50000, suffix: "+", label: "Happy Riders" },
    { value: 8, suffix: "", label: "Cities Across Africa" },
    { value: 2000, suffix: "+", label: "Verified Drivers" },
    { value: 4.9, suffix: "★", label: "Average Rating", float: true },
  ];
  return (
    <Section className="py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 text-center hover:shadow-soft transition-shadow"
          >
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {s.float ? (
                <span>4.9<span className="text-[color:var(--accent)]">★</span></span>
              ) : (
                <>
                  <Counter to={s.value} />
                  {s.suffix}
                </>
              )}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- FEATURES -------------------- */
function Features() {
  const features = [
    {
      icon: BadgeDollarSign,
      title: "Fair Pricing",
      desc: "No hidden charges. See a transparent price before every ride, always.",
    },
    { icon: Zap, title: "Fast Pickup", desc: "Find nearby drivers in seconds with smart geo-matching." },
    { icon: ShieldCheck, title: "Safe Trips", desc: "Driver verification, emergency contacts, and live ride tracking." },
    { icon: Wallet, title: "Multiple Payments", desc: "Cash, card, wallet, and mobile money — pay however works for you." },
    { icon: HeartHandshake, title: "Driver Rewards", desc: "Drivers earn more through better commissions and weekly bonuses." },
    { icon: Cpu, title: "Smart Matching", desc: "AI pairs you to the nearest available driver in real time." },
  ];
  return (
    <Section id="features" className="bg-muted/40">
      <div className="max-w-2xl">
        <Eyebrow>Everything you need</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Everything you need for every ride.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Built from the ground up for African cities — from pricing that respects your wallet to
          payment methods that actually work here.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-border bg-card p-7 transition-all hover:shadow-soft"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/12 text-[color:var(--accent-strong)]">
              <f.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- APP PREVIEW -------------------- */
function AppPreview() {
  const items = [
    {
      title: "Book in seconds",
      desc: "Type a destination, pick your ride, and confirm. The whole thing takes ten seconds.",
      icon: MapPin,
      img: screenBooking,
    },
    {
      title: "Track every turn",
      desc: "Watch your driver approach on the map, share your trip with loved ones, and know exactly when you'll arrive.",
      icon: Navigation,
      img: screenTracking,
    },
    {
      title: "Pay your way",
      desc: "Cash, card, Zipp Wallet, mobile money. Zero surprises at drop-off.",
      icon: CreditCard,
      img: screenPayment,
    },
    {
      title: "Every ride, saved",
      desc: "Revisit past trips, download receipts, and rebook favourite routes in a tap.",
      icon: History,
      img: screenHistory,
    },
  ];
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Inside the app</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Beautifully engineered, remarkably simple.
        </h2>
      </div>

      <div className="mt-16 space-y-24 sm:space-y-32">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)]/12 text-[color:var(--accent-strong)]">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{it.title}</h3>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">{it.desc}</p>
            </div>
            <div className="relative">
              <div className="absolute inset-8 rounded-[48px] bg-gradient-cta opacity-15 blur-3xl" />
              <motion.img
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={600}
                height={1000}
                className="relative mx-auto w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- WHY CHOOSE -------------------- */
function WhyChoose() {
  const bad = [
    "High surge pricing",
    "Slow support",
    "Limited payment methods",
    "Poor driver incentives",
  ];
  const good = [
    "Fair, transparent pricing",
    "Better driver earnings",
    "Cash, card & mobile money",
    "Faster pickups",
    "Built for Africa",
  ];
  return (
    <Section className="bg-muted/40">
      <div className="max-w-2xl">
        <Eyebrow>Why Zipp</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          The rides you deserve.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-8"
        >
          <div className="text-sm font-medium text-muted-foreground">Traditional Ride Apps</div>
          <ul className="mt-6 space-y-4">
            {bad.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <X className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="line-through decoration-muted-foreground/40">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 bg-primary text-primary-foreground overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Zap className="h-4 w-4 fill-current" strokeWidth={0} />
              Zipp
            </div>
            <ul className="mt-6 space-y-4">
              {good.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--accent)] text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-primary-foreground font-medium">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------- HOW IT WORKS -------------------- */
function HowItWorks() {
  const steps = [
    { icon: MapPin, title: "Choose destination", desc: "Type where you're headed." },
    { icon: Sparkles, title: "Get matched", desc: "We pair you with the closest driver." },
    { icon: Navigation, title: "Track driver", desc: "Watch them arrive in real time." },
    { icon: RouteIcon, title: "Enjoy the ride", desc: "Sit back. We'll handle the route." },
    { icon: CreditCard, title: "Pay securely", desc: "Cash, card, wallet, mobile money." },
  ];
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Five steps. One smooth ride.
        </h2>
      </div>

      <div className="relative mt-16">
        <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent hidden md:block" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background border border-border shadow-soft">
                <s.icon className="h-6 w-6 text-[color:var(--accent-strong)]" />
                <span className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- DRIVERS -------------------- */
function Drivers() {
  const benefits = [
    "Flexible schedule",
    "Weekly payouts",
    "Low commissions",
    "Driver bonuses",
    "24/7 support",
  ];
  return (
    <Section id="drivers" className="bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            For drivers
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Earn more. <br />
            Drive smarter.
          </h2>
          <p className="mt-5 text-lg text-white/70 max-w-lg">
            We built Zipp around drivers. Lower commissions, faster payouts, and real bonuses — so you
            take home more of what you earn.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-md">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/90">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--accent)] text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary px-6 py-3.5 text-sm font-semibold shadow-glow hover:shadow-soft transition-all hover:-translate-y-0.5"
            >
              Become a Driver
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-cta opacity-25 blur-3xl" />
          <img
            src={driverHero}
            alt="Zipp driver receiving a ride request"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-[32px] w-full h-auto object-cover border border-white/10"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -left-4 sm:-left-8 bottom-8 flex items-center gap-3 rounded-2xl bg-background text-foreground px-4 py-3 shadow-soft"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)]">
              <BellRing className="h-4 w-4" />
              <span className="absolute inset-0 rounded-xl animate-pulse-ring" />
            </span>
            <div className="text-xs">
              <div className="font-semibold">New ride request</div>
              <div className="text-muted-foreground">Ikeja → Victoria Island · ₦4,200</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- CITIES -------------------- */
function Cities() {
  const cities = [
    { name: "Lagos", country: "Nigeria", live: true },
    { name: "Abuja", country: "Nigeria", live: true },
    { name: "Port Harcourt", country: "Nigeria", live: true },
    { name: "Accra", country: "Ghana", live: true },
    { name: "Nairobi", country: "Kenya", live: true },
    { name: "Kampala", country: "Uganda", live: true },
    { name: "Kigali", country: "Rwanda", live: false },
    { name: "Cape Town", country: "South Africa", live: false },
  ];
  return (
    <Section id="cities" className="bg-muted/40 relative overflow-hidden">
      {/* soft africa silhouette */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='58' font-size='90' text-anchor='middle' fill='%230F172A'>🌍</text></svg>\")",
        }}
      />
      <div className="relative">
        <div className="max-w-2xl">
          <Eyebrow>Where we ride</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            8 cities. One continent. Just getting started.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.country}</div>
                </div>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-4">
                {c.live ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)] px-2.5 py-1 text-xs font-medium">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-70 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    </span>
                    Live now
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-xs font-medium">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
function Testimonials() {
  const t = [
    { quote: "I switched to Zipp because prices are always fair.", name: "Sarah M.", city: "Lagos", img: avatar1 },
    { quote: "The app feels smoother than anything I've used.", name: "David K.", city: "Nairobi", img: avatar2 },
    { quote: "As a driver, I actually earn more each week.", name: "Ibrahim A.", city: "Abuja", img: avatar3 },
    { quote: "Booking rides in Accra has never been this easy.", name: "Ama O.", city: "Accra", img: avatar1 },
    { quote: "Real support that picks up. Rare and refreshing.", name: "Peter W.", city: "Kampala", img: avatar2 },
    { quote: "Mobile money support is a game changer.", name: "Chidi E.", city: "Port Harcourt", img: avatar3 },
  ];
  const loop = [...t, ...t];

  return (
    <Section className="overflow-hidden">
      <div className="max-w-2xl">
        <Eyebrow>Loved across Africa</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Riders and drivers agree.
        </h2>
      </div>

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => (
            <figure
              key={i}
              className="w-[320px] sm:w-[380px] shrink-0 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-0.5 text-[color:var(--accent-strong)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg font-medium text-foreground leading-snug">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={r.img} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- SAFETY -------------------- */
function Safety() {
  const items = [
    { icon: Navigation, title: "Live ride tracking" },
    { icon: PhoneCall, title: "Emergency SOS" },
    { icon: ShieldCheck, title: "Verified drivers" },
    { icon: Share2, title: "Trip sharing" },
    { icon: HeartHandshake, title: "Insurance support" },
    { icon: Star, title: "Safety score" },
  ];
  return (
    <Section id="safety" className="bg-muted/40">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Safety first</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Peace of mind, every ride.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            Every trip on Zipp is protected by a safety stack we built to global standards, and
            calibrated to how Africa actually moves.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div
                key={it.title}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent)]/12 text-[color:var(--accent-strong)]">
                  <it.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{it.title}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-cta opacity-10 blur-3xl" />
          <div className="relative rounded-[32px] border border-border bg-background p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-5 w-5 text-[color:var(--accent)]" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">Trip protected</div>
                  <div className="text-xs text-muted-foreground">Zipp Safety active</div>
                </div>
              </div>
              <span className="text-xs font-medium text-[color:var(--accent-strong)]">98/100</span>
            </div>
            <div className="mt-6 h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full bg-gradient-cta"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Verified", "Tracked", "Insured"].map((x) => (
                <div key={x} className="rounded-xl bg-muted/60 py-3">
                  <Check className="h-4 w-4 mx-auto text-[color:var(--accent-strong)]" />
                  <div className="mt-1 text-xs font-medium text-foreground">{x}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const items = [
    {
      q: "Where is Zipp available?",
      a: "We're live in Lagos, Abuja, Port Harcourt, Accra, Nairobi and Kampala — with Kigali and Cape Town launching soon.",
    },
    {
      q: "How is pricing calculated?",
      a: "Zipp shows a transparent upfront price before every ride, based on distance, time, and demand — with no surprise surges.",
    },
    {
      q: "What payment methods do you support?",
      a: "Cash, card, Zipp Wallet, and every major mobile money provider in each market.",
    },
    {
      q: "How do I sign up as a driver?",
      a: "Tap Become a Driver, upload your documents, and we'll walk you through verification in under 48 hours.",
    },
    {
      q: "Is Zipp safe?",
      a: "Every driver is background-checked, every ride is tracked, and every trip carries insurance support and 24/7 assistance.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Questions, answered.
        </h2>
      </div>
      <div className="mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-foreground">{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 -mt-1 text-muted-foreground leading-relaxed">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* -------------------- DOWNLOAD CTA -------------------- */
function Download() {
  return (
    <Section id="download" className="pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[36px] bg-primary text-primary-foreground p-10 sm:p-16 lg:p-20"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[color:var(--accent)]/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-24 h-[500px] w-[500px] rounded-full bg-[color:var(--accent-lime)]/20 blur-3xl animate-blob" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>
              <span className="text-primary-foreground/90">Ready when you are</span>
            </Eyebrow>
            <h2 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight">Ready to ride?</h2>
            <p className="mt-4 text-lg text-white/70 max-w-md">
              Download Zipp and get your first ride in minutes. Available on iOS and Android.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl bg-background text-foreground px-5 py-3.5 hover:-translate-y-0.5 transition-transform shadow-soft"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground leading-none">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl bg-background text-foreground px-5 py-3.5 hover:-translate-y-0.5 transition-transform shadow-soft"
              >
                <Play className="h-6 w-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground leading-none">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
              <Users className="h-4 w-4" />
              50,000+ riders in 8 cities
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.img
              initial={{ y: 20 }}
              animate={{ y: -20 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
              src={heroPhone}
              alt=""
              loading="lazy"
              width={800}
              height={1200}
              className="mx-auto w-full max-w-sm h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const cols = [
    { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
    { title: "Product", items: ["Riders", "Drivers", "Cities", "Safety"] },
    { title: "Support", items: ["Help centre", "Blog", "Community", "Status"] },
    { title: "Legal", items: ["Privacy", "Terms", "Cookies", "Licenses"] },
  ];
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap className="h-5 w-5 fill-[color:var(--accent)] text-[color:var(--accent)]" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">Zipp</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Africa's smarter way to move. Built for our cities, our drivers, and our riders.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubbed(true);
              }}
              className="mt-6 flex items-center gap-2 max-w-sm"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/50"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                {subbed ? "Subscribed" : "Subscribe"}
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-foreground">{c.title}</div>
              <ul className="mt-4 space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Zipp Mobility. Built in Africa, for Africa.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- COOKIE BANNER -------------------- */
function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem("zipp-cookie")) setShow(true);
    }, 1400);
    return () => clearTimeout(t);
  }, []);
  const dismiss = () => {
    localStorage.setItem("zipp-cookie", "1");
    setShow(false);
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 max-w-md rounded-3xl border border-border bg-background/90 backdrop-blur-xl p-5 shadow-soft"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)]">
              <Cookie className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">We use cookies</div>
              <p className="mt-1 text-xs text-muted-foreground">
                To keep Zipp fast, secure, and personal. Read our{" "}
                <a href="#" className="underline underline-offset-2">
                  cookie policy
                </a>
                .
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={dismiss}
                  className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold"
                >
                  Accept all
                </button>
                <button
                  onClick={dismiss}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground"
                >
                  Necessary only
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------- PAGE -------------------- */
function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Features />
      <AppPreview />
      <WhyChoose />
      <HowItWorks />
      <Drivers />
      <Cities />
      <Testimonials />
      <Safety />
      <FAQ />
      <Download />
      <Footer />
      <CookieBanner />
    </main>
  );
}
