import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section } from "@/components/zipp/Section";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms — ZIPP" },
      { name: "description", content: "Terms for using the ZIPP website and waitlist." },
    ],
  }),
});

function TermsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Terms" description="Use this site lawfully and provide accurate waitlist information. Features may change before launch." />
      <Section>
        <div className="mx-auto max-w-2xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            ZIPP Ride Hailing Services provides this website to share product information and collect waitlist interest. Joining the waitlist does not guarantee a ride, a driver account, or a launch date in your city.
          </p>
          <p>
            You agree to give accurate details, not to misuse the site, and to understand that fares, coverage, and features may change before public launch.
          </p>
          <p>
            Questions: <a href="mailto:info@zipp.africa" className="font-semibold text-foreground underline underline-offset-2">info@zipp.africa</a>
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
