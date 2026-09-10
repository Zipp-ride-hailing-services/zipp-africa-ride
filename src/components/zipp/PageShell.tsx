import { Nav } from "@/components/zipp/Nav";
import { Footer } from "@/components/zipp/Footer";
import { CookieBanner } from "@/components/zipp/CookieBanner";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.04] mix-blend-multiply" aria-hidden />
      <Nav />
      {children}
      <Footer />
      <CookieBanner />
    </div>
  );
}
