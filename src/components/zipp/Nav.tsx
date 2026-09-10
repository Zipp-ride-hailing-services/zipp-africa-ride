import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/zipp/Logo";

const links = [
  { to: "/ride" as const, label: "Ride", aliases: ["/app"] },
  { to: "/drive" as const, label: "Drive", aliases: ["/drivers"] },
  { to: "/business" as const, label: "Business", aliases: [] as string[] },
  { to: "/transit" as const, label: "Transit", aliases: [] as string[] },
  { to: "/about" as const, label: "About", aliases: ["/careers"] },
];

function pathMatches(pathname: string, item: (typeof links)[number]) {
  return pathname === item.to || item.aliases.includes(pathname);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isNavigating = useRouterState({ select: (s) => s.isLoading });
  const inverted = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeTo = links.find((l) => pathMatches(pathname, l))?.to ?? null;
  const pillKey = hovered ?? activeTo;

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left bg-gradient-cta"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.7 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5"
      >
        <motion.div
          layout
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-md border px-3 py-2 transition-[background,box-shadow,border-color] duration-300 sm:px-4 ${
            inverted
              ? "border-zipp-blue/30 bg-zipp-ink/70 shadow-none backdrop-blur-xl"
              : "border-border/80 bg-background/80 shadow-soft backdrop-blur-xl"
          }`}
        >
          <Link to="/" className="group inline-flex shrink-0 items-center" aria-label="ZIPP home">
            <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
              <Logo on={inverted ? "dark" : "light"} />
            </motion.span>
          </Link>

          <LayoutGroup id="zipp-nav">
            <div
              className={`relative hidden items-center p-0.5 md:flex ${
                inverted ? "border border-zipp-blue/25 bg-zipp-blue/15" : "border border-border/70 bg-background/60"
              }`}
              onMouseLeave={() => setHovered(null)}
            >
              {links.map((l) => {
                const active = pathMatches(pathname, l);
                const lit = pillKey === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onMouseEnter={() => setHovered(l.to)}
                    className="relative z-10 px-3.5 py-2"
                  >
                    {lit && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 ${inverted ? "bg-white" : "bg-primary"}`}
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 font-mono text-[11px] font-medium uppercase tracking-[0.18em] ${
                        lit ? (inverted ? "text-zipp-navy" : "text-primary-foreground") : inverted ? "text-white/65" : "text-muted-foreground"
                      }`}
                    >
                      {l.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="nav-lane"
                        className={`road-dash pointer-events-none absolute bottom-0.5 left-2.5 right-2.5 h-[2px] ${
                          lit ? (inverted ? "" : "road-dash-light") : inverted ? "road-dash-light" : ""
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="flex items-center gap-2">
            <Link
              to="/help"
              className={`hidden font-mono text-[11px] uppercase tracking-[0.16em] lg:inline ${
                inverted ? "text-white/65 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Help
            </Link>
            <Link
              to="/"
              hash="get-app"
              className={`hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] md:inline ${
                inverted ? "text-white/65 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Get the app
            </Link>
            <Link
              to="/waitlist"
              className={`btn-shine group relative hidden overflow-hidden px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] md:inline-flex ${
                inverted ? "bg-white text-zipp-navy" : "bg-primary text-primary-foreground"
              }`}
            >
              <motion.span className="inline-flex items-center gap-1.5" whileTap={{ scale: 0.97 }}>
                Join waitlist
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.span>
            </Link>

            <motion.button
              className={`inline-flex h-11 w-11 items-center justify-center border md:hidden ${
                inverted ? "border-white/15 bg-white/5 text-white" : "border-border/80 bg-background/80 text-foreground"
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              whileTap={{ scale: 0.92 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-zipp-ink/75 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-3 mt-[4.75rem] max-h-[min(32rem,calc(100dvh-6rem))] overflow-y-auto overscroll-contain rounded-md border border-zipp-blue/25 bg-zipp-navy shadow-soft"
            >
              <div className="flex flex-col p-2">
                {[...links, { to: "/help" as const, label: "Help", aliases: [] }].map((l, i) => {
                  const active = "aliases" in l ? pathMatches(pathname, l as (typeof links)[number]) : pathname === l.to;
                  return (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.35 }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={`relative flex min-h-12 items-center justify-between px-4 py-3.5 ${
                          active ? "bg-white text-zipp-navy" : "text-white"
                        }`}
                      >
                        <span className="font-mono text-sm uppercase tracking-[0.16em]">{l.label}</span>
                        <span className={`font-mono text-[11px] ${active ? "text-zipp-navy/50" : "text-white/40"}`}>
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
                  <Link
                    to="/"
                    hash="get-app"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-white/20 px-5 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-white"
                  >
                    Get the app now
                  </Link>
                  <Link
                    to="/waitlist"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white px-5 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-zipp-navy"
                  >
                    Join waitlist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
