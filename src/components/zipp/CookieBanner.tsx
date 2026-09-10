import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
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
          className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 max-w-md rounded-md border border-border bg-background/95 p-4 shadow-soft backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:p-5"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)]">
              <Cookie className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">We use cookies</div>
              <p className="mt-1 text-xs text-muted-foreground">
                To keep Zipp fast, secure, and personal. Read our{" "}
                <Link to="/privacy" className="underline underline-offset-2">
                  privacy policy
                </Link>
                .
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  onClick={dismiss}
                  className="min-h-11 rounded-sm bg-primary px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-foreground"
                >
                  Accept all
                </button>
                <button
                  onClick={dismiss}
                  className="min-h-11 rounded-sm border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground"
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
