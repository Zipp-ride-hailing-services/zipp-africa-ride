import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Logo } from "@/components/zipp/Logo";
import { DarkField } from "@/components/zipp/DarkField";
import { GetTheApp } from "@/components/zipp/GetTheApp";

const cols = [
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" as const },
      { label: "Why ZIPP", to: "/about" as const, hash: "why-zipp" },
      { label: "Careers", to: "/careers" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      { label: "ZIPP Ride", to: "/ride" as const },
      { label: "ZIPP Logistics", to: "/business" as const },
      { label: "ZIPP Transit", to: "/transit" as const },
      { label: "ZIPP Payments", to: "/payments" as const },
    ],
  },
  {
    title: "Drive",
    items: [
      { label: "Drive with ZIPP", to: "/drive" as const },
      { label: "Join as a driver", to: "/waitlist" as const },
      { label: "Cities", to: "/cities" as const },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Help center", to: "/help" as const },
      { label: "Safety", to: "/safety" as const },
      { label: "Join waitlist", to: "/waitlist" as const },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-zipp-blue/25 bg-zipp-ink text-white">
      <DarkField className="opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 sm:mb-10 sm:pb-6 sm:tracking-[0.2em]">
          <span>ZIPP · THE WAY AFRICA MOVES</span>
          <span className="hidden sm:inline">04.9757°N / 008.3417°E</span>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center" aria-label="ZIPP home">
              <Logo on="dark" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              A mobility platform for the way people and businesses actually move across Africa. Calabar first. Akwa
              Ibom next. Nigeria, then Africa.
            </p>
            <GetTheApp dark className="mt-6" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubbed(true);
              }}
              className="mt-6 flex max-w-sm flex-col gap-2 sm:flex-row sm:items-center"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full min-h-11 rounded-sm border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-base text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="min-h-11 rounded-sm bg-white px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zipp-navy hover:bg-white/90"
              >
                {subbed ? "Synced" : "Subscribe"}
              </button>
            </form>
            <div className="mt-6 flex items-center gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  aria-label="Social"
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-colors hover:border-white/40 hover:text-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">{c.title}</div>
              <ul className="mt-4 space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      hash={"hash" in i ? i.hash : undefined}
                      className="inline-flex min-h-10 items-center text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 sm:mt-12 sm:flex-row sm:items-center sm:gap-4 sm:text-[11px]">
          <div>© {new Date().getFullYear()} ZIPP · The way Africa moves</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
