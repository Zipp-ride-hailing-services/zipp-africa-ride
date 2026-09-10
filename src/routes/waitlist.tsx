import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck } from "lucide-react";
import { FormEvent, useState } from "react";

import { PageShell } from "@/components/zipp/PageShell";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { Logo } from "@/components/zipp/Logo";
import { DarkField } from "@/components/zipp/DarkField";
import { StateSelect } from "@/components/zipp/StateSelect";
import { LAUNCH_LINE } from "@/lib/nigeria";

import screenHome from "@/assets/screen-home.jpg";
import screenBooking from "@/assets/screen-booking.png";

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
      { title: "Join the waitlist — ZIPP" },
      {
        name: "description",
        content: `Be there before ZIPP goes live. 500+ people are already waiting, including 100 prospective drivers. ${LAUNCH_LINE}`,
      },
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
      city: String(form.get("state") ?? "").trim(),
      userType,
    };
    const nextErrors: string[] = [];

    if (entry.name.length < 2) nextErrors.push("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) nextErrors.push("Enter a valid email address.");
    if (entry.phone && entry.phone.replace(/\D/g, "").length < 8) nextErrors.push("Enter a valid phone number.");
    if (!entry.city) nextErrors.push("Select your state.");

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
    <PageShell>
      <div className="relative isolate overflow-hidden bg-zipp-ink pt-24 text-white sm:pt-32">
        <DarkField />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-2 min-w-0 lg:order-none lg:col-span-5 lg:pt-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 sm:tracking-[0.22em]">PHASE 01 · WAITLIST</div>
            <h1 className="mt-4 text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-6xl">
              Be there before
              <br />
              we go live.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/60 sm:mt-6 sm:text-lg">
              More than 500 people are already waiting, including 100 prospective drivers. Now we’re preparing the
              product, infrastructure, and marketplace needed to turn that interest into a working mobility network.
            </p>
            <div className="mt-8 space-y-0 divide-y divide-white/10 border-y border-white/10 sm:mt-10">
              {["Rides, deliveries, rentals", "Digital payments in the journey", "Public transportation, connected"].map(
                (perk, i) => (
                  <div key={perk} className="flex items-start gap-3 py-3 font-mono text-xs text-white/80 sm:items-center sm:gap-4 sm:text-sm">
                    <span className="shrink-0 text-[color:var(--accent)]">0{i + 1}</span>
                    <span className="min-w-0">{perk}</span>
                  </div>
                ),
              )}
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-white/50">
              <Logo variant="mark" on="dark" className="h-8" />
              <span className="min-w-0 font-mono text-[10px] uppercase tracking-[0.12em] sm:text-[11px] sm:tracking-[0.16em]">
                Calabar first · Akwa Ibom next
              </span>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              ZIPP — The way Africa moves.
            </p>
            <div className="relative mt-12 hidden h-[420px] max-w-sm lg:block">
              <div className="absolute left-16 top-8 w-[160px]">
                <PhoneFrame src={screenBooking} alt="ZIPP ride options" dark />
              </div>
              <div className="relative z-10 w-[190px]">
                <PhoneFrame src={screenHome} alt="ZIPP home map in Calabar" priority dark />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative order-1 min-w-0 lg:order-none lg:col-span-6 lg:col-start-7"
          >
            <section className="relative border border-white/10 bg-card p-5 text-foreground shadow-soft sm:p-9">
              {isComplete ? (
                <div className="py-10 text-center sm:py-16">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent-strong)]">
                    <CircleCheck className="h-7 w-7" />
                  </span>
                  <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">Queued</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">You’re on the list.</h2>
                  <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
                    We’ll write when ZIPP opens in your state. {LAUNCH_LINE}
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsComplete(false)}
                      className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em]"
                    >
                      Add another
                    </button>
                    <Link to="/" className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
                      Back home <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">Access form</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-3xl">Join the ZIPP waitlist</h2>
                  </div>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <label className="sm:col-span-2 text-sm font-semibold">
                      Full name
                      <input name="name" autoComplete="name" className="waitlist-input mt-2" placeholder="Your full name" />
                    </label>
                    <label className="sm:col-span-2 text-sm font-semibold">
                      Email
                      <input name="email" type="email" autoComplete="email" className="waitlist-input mt-2" placeholder="you@example.com" />
                    </label>
                    <label className="text-sm font-semibold">
                      Phone <span className="font-normal text-muted-foreground">(optional)</span>
                      <input name="phone" type="tel" autoComplete="tel" className="waitlist-input mt-2" placeholder="+234…" />
                    </label>
                    <label className="text-sm font-semibold">
                      State
                      <StateSelect className="waitlist-input mt-2" />
                    </label>
                  </div>
                  <fieldset className="mt-6">
                    <legend className="text-sm font-semibold">I want to</legend>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {([
                        ["passenger", "Ride", "I want access when we launch"],
                        ["driver", "Drive", "Join 100+ drivers in queue"],
                      ] as const).map(([value, label, desc]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setUserType(value)}
                          className={`min-h-12 border p-3 text-left sm:p-4 ${
                            userType === value
                              ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 ring-1 ring-[color:var(--accent)]/30"
                              : "border-border bg-background"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{label}</span>
                          <span className="mt-1 block text-xs text-muted-foreground">{desc}</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  {errors.length > 0 && (
                    <div className="mt-5 border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm text-destructive">
                      <ul className="list-inside list-disc space-y-1">
                        {errors.map((error) => (
                          <li key={error}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground shadow-soft disabled:opacity-70"
                  >
                    {isSubmitting ? "Joining…" : "Join the ZIPP waitlist"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">No spam — just launch news for your state.</p>
                </form>
              )}
            </section>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
