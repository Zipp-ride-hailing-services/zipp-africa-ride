import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";

export const Route = createFileRoute("/transit")({
  component: TransitPage,
  head: () => ({
    meta: [
      { title: "ZIPP Transit — Public transportation, connected" },
      {
        name: "description",
        content:
          "ZIPP Transit is the digital layer for participating government transportation, including planned CNG bus integration: routes, booking, GPS, and payments.",
      },
    ],
  }),
});

const features = [
  "Bus and route discovery",
  "Digital booking",
  "Passenger information",
  "GPS-based bus location and estimated arrival",
  "Digital payments",
  "Booking history and notifications",
  "Trip planning",
];

function TransitPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="ZIPP Transit"
        title="Public transportation, connected."
        description="Government investment in CNG-powered transportation creates an opportunity that goes beyond putting new buses on the road."
      />
      <Section>
        <Eyebrow>THE QUESTIONS PEOPLE ASK</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          People also need to know the rest.
        </h2>
        <ul className="mt-8 max-w-xl divide-y divide-border border-y border-border">
          {[
            "Where is the bus?",
            "Where does it stop?",
            "When is it arriving?",
            "Can I book a seat?",
            "How do I pay?",
            "What route should I take?",
          ].map((q, i) => (
            <li key={q} className="flex items-center gap-4 py-3">
              <span className="font-mono text-xs text-[color:var(--accent-strong)]">0{i + 1}</span>
              <span className="font-medium">{q}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            ZIPP Transit is being developed to provide the digital layer around participating government transportation
            services.
          </p>
          <p>
            Under our planned government integration, government-provided CNG buses can be connected to the ZIPP
            application so passengers can access transportation information and booking features through their phones.
          </p>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <Eyebrow>THE EXPERIENCE</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Designed to include</h2>
        <ol className="mt-10 divide-y divide-border border-y border-border">
          {features.map((f, i) => (
            <li key={f} className="flex items-center gap-4 py-4">
              <span className="w-8 font-mono text-xs text-[color:var(--accent-strong)]">0{i + 1}</span>
              <span>{f}</span>
            </li>
          ))}
        </ol>
        <div className="mt-12 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>The government provides the transportation vehicles and relevant operational framework.</p>
          <p>ZIPP provides the technology layer that helps connect those vehicles with the passengers who need them.</p>
          <p className="font-medium text-foreground">
            The idea is simple: the buses move people. ZIPP helps connect the buses to the people.
          </p>
        </div>
      </Section>
      <WaitlistCta
        title="Be there before we go live."
        description="Transit is part of the ZIPP ecosystem we’re building from Calabar outward."
      />
    </PageShell>
  );
}
