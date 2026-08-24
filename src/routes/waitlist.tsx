import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Briefcase,
  CarFront,
  Check,
  ChevronDown,
  CircleCheck,
  CreditCard,
  Cpu,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { Section, Eyebrow, fadeUp } from "@/components/zipp/Section";
import { Counter } from "@/components/zipp/Counter";

const WAITLIST_KEY = "zipp-waitlist";

type WaitlistEntry = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  userType: "passenger" | "driver";
};

export const Route = createFileRoute("/waitlist")({
  component: WaitlistPage,
  head: () => ({
    meta: [
      { title: "Join the waitlist — Zipp" },
      {
        name: "description",
        content: "Be first when Zipp opens in your city. Join as a rider or driver for early access and launch perks.",
      },
      { property: "og:title", content: "Join the Zipp waitlist" },
      { property: "og:description", content: "Be first when Zipp opens in your city." },
    ],
    links: [{ rel: "canonical", href: "/waitlist" }],
  }),
});

function getEntries(): WaitlistEntry[] {
  try {
    const entries = JSON.parse(window.localStorage.getItem(WAITLIST_KEY) ?? "[]");
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function WaitlistPage() {
  const [userType, setUserType] = useState<WaitlistEntry["userType"]>("passenger");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entry = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim().toLowerCase(),
      phone: String(form.get("phone") ?? "").trim(),
      city: String(form.get("city") ?? "").trim(),
      userType,
    };
    const nextErrors: string[] = [];

    if (entry.name.length < 2) nextErrors.push("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) nextErrors.push("Enter a valid email address.");
    if (entry.phone && entry.phone.replace(/\D/g, "").length < 8) nextErrors.push("Enter a valid phone number.");
    if (!entry.city) nextErrors.push("Select your city.");

    if (nextErrors.length) {
      setErrors(nextErrors);
      return;
    }

    if (getEntries().some((existing) => existing.email === entry.email)) {
      setErrors(["That email is already on the waitlist."]);
      return;
    }

    setErrors([]);
    setIsSubmitting(true);
    window.setTimeout(() => {
      const entries = getEntries();
      entries.push({
        ...entry,
        id: window.crypto.randomUUID?.() ?? String(Date.now()),
        createdAt: new Date().toISOString(),
      });
      window.localStorage.setItem(WAITLIST_KEY, JSON.stringify(entries));
      setIsSubmitting(false);
      setIsComplete(true);
    }, 450);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <WaitlistNav />
      <div className="relative isolate pt-28 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="pointer-events-none absolute -left-32 top-8 -z-10 h-[32rem] w-[32rem] rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-12rem] top-16 -z-10 h-[34rem] w-[34rem] rounded-full bg-[color:var(--accent-lime)]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-45 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_68%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 sm:pb-28 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)]">
                <Sparkles className="h-3 w-3" />
              </span>
              Early access
            </div>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Be first when Zipp arrives in <span className="bg-gradient-cta bg-clip-text text-transparent">your city.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Reserve your place for a better way to move: safer trips, clearer fares, and mobility built for how your city actually moves.
            </p>

            <div className="mt-10 space-y-4">
              {["Free ride credits at launch", "Priority access before public release", "Driver sign-up perks"].map((perk, index) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/14 text-[color:var(--accent-strong)]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  {perk}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap className="h-4 w-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
              </span>
              <span>Built in Africa, for Africa.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
            className="relative lg:col-span-6 lg:col-start-7"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-cta opacity-15 blur-3xl" />
            <section className="relative rounded-[2rem] border border-border bg-card/95 p-6 shadow-soft backdrop-blur-xl sm:p-9" aria-labelledby="form-heading">
              {isComplete ? (
                <SuccessState onReset={() => setIsComplete(false)} />
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[color:var(--accent-strong)]">Early access</p>
                      <h2 id="form-heading" className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Reserve your spot</h2>
                    </div>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--accent)]/12 text-[color:var(--accent-strong)]">
                      <CarFront className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name" className="sm:col-span-2">
                      <input id="name" name="name" autoComplete="name" className="waitlist-input" placeholder="Your full name" />
                    </Field>
                    <Field label="Email" htmlFor="email" className="sm:col-span-2">
                      <input id="email" name="email" type="email" autoComplete="email" className="waitlist-input" placeholder="you@example.com" />
                    </Field>
                    <Field label="Phone" htmlFor="phone" optional>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" className="waitlist-input" placeholder="+234…" />
                    </Field>
                    <Field label="City" htmlFor="city">
                      <select id="city" name="city" defaultValue="Calabar" className="waitlist-input">
                        <option value="Calabar">Calabar</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>
                  </div>

                  <fieldset className="mt-6">
                    <legend className="text-sm font-semibold text-foreground">I want to</legend>
                    <div className="mt-3 grid grid-cols-2 gap-3" role="radiogroup" aria-label="How you want to join Zipp">
                      <TypeButton label="Ride" description="I need better rides" selected={userType === "passenger"} onClick={() => setUserType("passenger")} />
                      <TypeButton label="Drive" description="I want to earn" selected={userType === "driver"} onClick={() => setUserType("driver")} />
                    </div>
                  </fieldset>

                  {errors.length > 0 && (
                    <div className="mt-5 rounded-2xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm text-destructive" role="alert">
                      <ul className="list-inside list-disc space-y-1">{errors.map((error) => <li key={error}>{error}</li>)}</ul>
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmitting ? "Joining…" : "Join the Zipp waitlist"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">No spam — just launch news for your city.</p>
                </form>
              )}
            </section>
          </motion.div>
        </div>
      </div>
      <ZippContent />
    </main>
  );
}

/* -------------------- GUIDE CONTENT -------------------- */
function ZippContent() {
  return (
    <div className="border-t border-border" aria-label="About Zipp">
      <GuideIntro />
      <Product />
      <Platform />
      <Operations />
      <TrustAtScale />
      <Careers />
      <GuideFaq />
      <StayInTouch />
    </div>
  );
}

function GuideHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}

function IconCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href?: string;
}) {
  const Wrapper = href ? motion.a : motion.div;
  return (
    <Wrapper
      {...(href ? { href } : {})}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-border bg-card p-7 transition-all hover:shadow-soft"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/12 text-[color:var(--accent-strong)]">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </Wrapper>
  );
}

/* -------------------- GUIDE INTRO / STATS -------------------- */
function GuideIntro() {
  return (
    <Section>
      <GuideHeading
        eyebrow="The Zipp guide"
        title="Everything you need to know before we arrive."
        description="Zipp is building premium ride-hailing for African cities — safer trips, clearer fares, and a driver experience designed for trust at scale."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-12 grid gap-5 sm:grid-cols-3"
      >
        {[
          { value: 4, suffix: "+", label: "Cities preparing to launch", desc: "Starting in Calabar, then Abuja, Lagos, and Akwa Ibom." },
          { value: 95, suffix: "%", label: "Target on-time arrival", desc: "Powered by intelligent matching and live routing." },
          { value: null, suffix: "24/7", label: "Safety & support coverage", desc: "From pickup through the final mile." },
        ].map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 text-center hover:shadow-soft transition-shadow"
          >
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {s.value === null ? s.suffix : <><Counter to={s.value} />{s.suffix}</>}
            </div>
            <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- PRODUCT -------------------- */
function Product() {
  const services = [
    { icon: CarFront, title: "Instant Ride Booking", desc: "Reliable matching for everyday trips across dense African corridors — clear ETAs, transparent fares, verified drivers." },
    { icon: Briefcase, title: "Scheduled & Corporate Travel", desc: "Airport runs, meetings, and team policies with planned routes and preferred operators." },
    { icon: ShieldCheck, title: "Safety-First Trips", desc: "Verified identities, live trip sharing, and SOS when nights demand more protection on real city streets." },
    { icon: Navigation, title: "Live Ride Tracking", desc: "Share your trip in real time with family or colleagues from pickup to drop-off." },
    { icon: BadgeDollarSign, title: "Affordable Everyday Fares", desc: "Time-sensitive pricing built for daily riders — no surprise spikes at the curb when you need to move." },
  ];
  return (
    <Section className="bg-muted/40">
      <GuideHeading eyebrow="Product" title="What Zipp offers" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((s) => (
          <IconCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- PLATFORM -------------------- */
function Platform() {
  const items = [
    { icon: ShieldCheck, title: "Verified matching", desc: "Screened drivers before every trip. We reduce wait waste and maximise trip quality." },
    { icon: Navigation, title: "End-to-end visibility", desc: "Live tracking and shareable ETAs from request to drop-off." },
    { icon: BadgeDollarSign, title: "Clear pricing", desc: "Fares that respect your wallet and stay readable before you confirm." },
    { icon: HeartHandshake, title: "Human support", desc: "Real help, 24/7, for safety, payments, or a trip that went sideways." },
  ];
  return (
    <Section>
      <GuideHeading eyebrow="Platform" title="Built for African streets — not bolted on afterwards." />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((it) => (
          <IconCard key={it.title} icon={it.icon} title={it.title} description={it.desc} />
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- OPERATIONS -------------------- */
function Operations() {
  const steps = [
    { icon: MapPin, title: "Request", desc: "See a clear fare and ETA before you confirm." },
    { icon: Users, title: "Match", desc: "Meet a verified driver with vehicle details you can trust." },
    { icon: Navigation, title: "Track", desc: "Live-share every mile, from pickup to destination." },
    { icon: CreditCard, title: "Arrive", desc: "Pay cleanly, rate the trip, and ride again when you need to move." },
  ];
  const phases = [
    { phase: "Phase 1", city: "Calabar", status: "Launching soon", live: true, desc: "Launching soon with verified fleets and city-ready operators." },
    { phase: "Phase 2", city: "Abuja", status: "Expanding soon", live: false, desc: "Expanding soon, city by city." },
    { phase: "Phase 3", city: "Lagos", status: "Coming later", live: false, desc: "Coming later with the same premium standards." },
    { phase: "Phase 4", city: "Akwa Ibom", status: "Coming later", live: false, desc: "Coming later as we extend premium standards across the region." },
  ];
  return (
    <Section className="bg-muted/40">
      <GuideHeading eyebrow="Operations" title="How every Zipp ride works" />

      <div className="relative mt-16">
        <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent hidden md:block" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
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

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {phases.map((c) => (
          <motion.div
            key={c.city}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-medium text-muted-foreground">{c.phase}</div>
                <div className="mt-0.5 text-lg font-semibold text-foreground">{c.city}</div>
              </div>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <div className="mt-4">
              {c.live ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)] px-2.5 py-1 text-xs font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-70 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                  </span>
                  {c.status}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-xs font-medium">
                  {c.status}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- TRUST -------------------- */
function TrustAtScale() {
  const items = [
    { icon: CarFront, title: "Vehicle standard", desc: "Clean, inspected vehicles with clear trip cards." },
    { icon: ShieldCheck, title: "Elite operators", desc: "Identity checks and ongoing quality monitoring." },
    { icon: MapPin, title: "City rollout", desc: "Calabar first, then Abuja, Lagos, and Akwa Ibom." },
    { icon: PhoneCall, title: "Trip safety", desc: "SOS, live sharing, and preference controls for safer nights." },
  ];
  return (
    <Section>
      <GuideHeading eyebrow="Trust" title="A platform built for trust at city scale" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((it) => (
          <IconCard key={it.title} icon={it.icon} title={it.title} description={it.desc} />
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------- CAREERS -------------------- */
function Careers() {
  const roles = [
    { icon: Users, title: "City Operations Lead", desc: "Own launch readiness, driver quality, and day-to-day operations for a Zipp city." },
    { icon: HeartHandshake, title: "Driver Partner Manager", desc: "Recruit, train, and support verified operators with clear standards and care." },
    { icon: Sparkles, title: "Product Designer", desc: "Design rider and driver flows that feel precise on real streets — not just mockups." },
    { icon: Cpu, title: "Full-Stack Engineer", desc: "Ship matching, tracking, and payments systems built for African network conditions." },
    { icon: ShieldCheck, title: "Customer Trust Specialist", desc: "Handle safety, support, and trip issues with calm, human judgment — with 24/7 readiness." },
  ];
  const hiring = [
    { step: "1", title: "Introduce yourself", desc: "Email your role interest, city, and a short note on why Zipp." },
    { step: "2", title: "Conversation", desc: "A focused call on your experience, city context, and how you work under pressure." },
    { step: "3", title: "Practical task", desc: "A short, relevant exercise — not busywork." },
    { step: "4", title: "Decision", desc: "Fast feedback either way, then quick onboarding when it's a fit." },
  ];
  return (
    <Section className="bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[color:var(--accent)]/20 blur-3xl pointer-events-none" />
      <div className="relative">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            Careers
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Build mobility that African cities can trust.</h2>
          <p className="mt-4 text-lg text-white/70">
            We're assembling operators, engineers, and city partners who care about safety, clarity, and craft. Work on the rides people take every day with high ownership, city-first priorities, and a clear impact from day one.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {roles.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-all hover:bg-white/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--accent)]/20 text-[color:var(--accent)]">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-sm text-white/70">
          Don't see your role? Send a note anyway —{" "}
          <a href="mailto:info@zipp.africa?subject=General%20application%20—%20Zipp" className="underline underline-offset-2 hover:text-white">
            apply via info@zipp.africa
          </a>
          .
        </p>

        <h3 className="mt-14 text-lg font-semibold">How we hire</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiring.map((h) => (
            <div key={h.step} className="relative">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent)] text-primary text-sm font-bold">
                {h.step}
              </span>
              <h4 className="mt-3 font-semibold text-white">{h.title}</h4>
              <p className="mt-1 text-sm text-white/65 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- FAQ -------------------- */
function GuideFaq() {
  const items = [
    { q: "What is Zipp?", a: "Zipp is a premium African ride-hailing platform with safer trips, clearer fares, and live tracking." },
    { q: "Where do you launch first?", a: "Calabar first, then Abuja, Lagos, and Akwa Ibom." },
    { q: "Can I join as a driver?", a: "Yes — choose Drive on the waitlist above." },
    { q: "What do waitlist members get?", a: "Early access and launch-day ride credits." },
    { q: "How do you keep riders safe?", a: "Verified drivers, trip sharing, SOS, and human support when something needs attention." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <GuideHeading eyebrow="Help" title="Frequently asked questions" />
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
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
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

/* -------------------- STAY IN TOUCH / LEGAL -------------------- */
function StayInTouch() {
  const items = [
    { icon: Mail, title: "Contact & partnerships", desc: "For waitlist, partnerships, drivers, or press: info@zipp.africa", href: "mailto:info@zipp.africa" },
    { icon: HeartHandshake, title: "Pre-launch support", desc: "Need help before launch? Our support team is reachable at info@zipp.africa.", href: "mailto:info@zipp.africa" },
    { icon: BadgeDollarSign, title: "Investors", desc: "Reach out for the deck and learn more about the opportunity.", href: "mailto:info@zipp.africa" },
    { icon: Instagram, title: "Blog & social", desc: "Stories are coming soon. Follow @zipp.ride for launch news.", href: "https://instagram.com" },
  ];
  return (
    <Section className="bg-muted/40">
      <GuideHeading eyebrow="Company" title="Stay in touch with Zipp" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((it) => (
          <IconCard key={it.title} icon={it.icon} title={it.title} description={it.desc} href={it.href} />
        ))}
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-foreground">Privacy</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We collect waitlist details to invite you when your city opens. We do not sell personal data.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Terms</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Use this site lawfully and provide accurate waitlist information. Features may change before launch.</p>
        </div>
      </div>
    </Section>
  );
}

function WaitlistNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link to="/waitlist" className="flex items-center gap-2" aria-label="Zipp home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Zap className="h-5 w-5 fill-[color:var(--accent)] text-[color:var(--accent)]" strokeWidth={2.5} /></span>
          <span className="text-lg font-bold tracking-tight text-foreground">Zipp</span>
        </Link>
      </nav>
    </header>
  );
}

function Field({ label, htmlFor, optional = false, className = "", children }: { label: string; htmlFor: string; optional?: boolean; className?: string; children: React.ReactNode }) {
  return <div className={className}><label htmlFor={htmlFor} className="mb-2 flex text-sm font-semibold text-foreground">{label}{optional && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}</label>{children}</div>;
}

function TypeButton({ label, description, selected, onClick }: { label: string; description: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} role="radio" aria-checked={selected} className={`rounded-2xl border p-4 text-left transition-all ${selected ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 ring-1 ring-[color:var(--accent)]/30" : "border-border bg-background hover:border-[color:var(--accent)]/50"}`}>
      <span className="block text-sm font-semibold text-foreground">{label}</span>
      <span className="mt-1 block text-xs text-muted-foreground">{description}</span>
    </button>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center sm:py-16">
      <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[color:var(--accent)]/14 text-[color:var(--accent-strong)]"><CircleCheck className="h-8 w-8" /></span>
      <p className="mt-7 text-sm font-medium text-[color:var(--accent-strong)]">You’re on the list</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Welcome to Zipp.</h2>
      <p className="mx-auto mt-4 max-w-sm text-muted-foreground">We’ll reach out as your city opens. Keep an eye on your inbox for launch news and perks.</p>
      <button type="button" onClick={onReset} className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">Add another person <ArrowRight className="h-4 w-4" /></button>
    </motion.div>
  );
}
