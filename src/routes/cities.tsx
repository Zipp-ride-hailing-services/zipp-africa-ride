import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow } from "@/components/zipp/Section";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { LAUNCH_CLOSE, LAUNCH_LINE, LAUNCH_MARKETS } from "@/lib/nigeria";

import screenHome from "@/assets/screen-home.jpg";
import screenSearch from "@/assets/screen-search.png";

export const Route = createFileRoute("/cities")({
  component: CitiesPage,
  head: () => ({
    meta: [
      { title: "Where we’re launching — ZIPP" },
      {
        name: "description",
        content:
          "ZIPP starts in Calabar, expands into Akwa Ibom, then scales across Nigeria and Africa — market by market.",
      },
    ],
  }),
});

function CitiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Where we’re launching"
        title="Starting local. Building regional. Going African."
        description="ZIPP is taking a focused, market-by-market approach to expansion."
      />

      <Section>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>We’re not trying to launch everywhere at once.</p>
          <p>
            Our strategy is to enter markets we can understand deeply, build strong operational foundations, learn from
            real customer behavior, and use what we learn to expand into larger markets.
          </p>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {LAUNCH_MARKETS.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[5rem_1fr_10rem_auto]"
            >
              <span className="font-mono text-xs text-muted-foreground">{c.code}</span>
              <div>
                <div className="font-medium text-foreground">{c.name}</div>
                <div className="text-xs text-muted-foreground sm:hidden">{c.region}</div>
              </div>
              <span className="hidden text-sm text-muted-foreground sm:block">{c.region}</span>
              <span
                className={`font-mono text-[10px] tracking-[0.16em] ${
                  c.status === "START" ? "text-[color:var(--accent-strong)]" : "text-muted-foreground"
                }`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="calabar" className="bg-muted/40">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 flex items-start justify-center gap-3 overflow-hidden lg:order-none">
            <PhoneFrame src={screenHome} alt="ZIPP map of Calabar" className="w-[46%] max-w-[160px] sm:max-w-[220px]" />
            <PhoneFrame src={screenSearch} alt="Popular places in Calabar" className="mt-6 w-[46%] max-w-[160px] sm:mt-8 sm:max-w-[220px]" />
          </div>
          <div className="order-1 lg:order-none">
            <Eyebrow>CALABAR</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Where ZIPP begins.</h2>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>Calabar is the starting point for ZIPP.</p>
              <p>
                It is where we are developing our initial operating model, preparing our marketplace, and building
                relationships with the drivers, riders, businesses, and partners who will form the foundation of the
                platform.
              </p>
              <p>
                Our first objective is simple:{" "}
                <strong className="font-medium text-foreground">build ZIPP properly before we scale it.</strong>
              </p>
              <p>
                Calabar gives us the environment to test our technology, refine the rider and driver experience,
                establish reliable operations, and understand how our mobility services perform in a real Nigerian
                market.
              </p>
              <p>This is more than a launch city.</p>
              <p className="font-medium text-foreground">Calabar is our proving ground.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="akwa-ibom">
        <Eyebrow>AKWA IBOM</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Our next market.</h2>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            From Calabar, ZIPP’s next planned expansion is{" "}
            <strong className="font-medium text-foreground">Akwa Ibom</strong>.
          </p>
          <p>
            The move into Akwa Ibom represents the next step in our strategy: take what we have learned from our initial
            market, strengthen the platform, and introduce ZIPP to a broader customer and business base.
          </p>
          <p>
            Our expansion will be driven by operational readiness rather than simply opening another location. We want
            to enter Akwa Ibom with a stronger product, an established operating playbook, growing driver supply, and a
            clearer understanding of what it takes to build a sustainable mobility marketplace.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Eyebrow>BEYOND OUR FIRST MARKETS</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Calabar and Akwa Ibom are only the beginning.
        </h2>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Once we have established a repeatable model across our initial markets, ZIPP will expand into additional
            Nigerian cities and states based on demand, infrastructure, operational capacity, and strategic
            partnerships.
          </p>
          <p>
            Our longer-term objective is to build a mobility network that can move across regions without losing the
            local understanding that made it possible to build ZIPP in the first place.
          </p>
        </div>
        <div className="mt-10 max-w-xl space-y-2 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          {LAUNCH_CLOSE.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      <WaitlistCta
        title="Be there before we go live."
        description={`Tell us where you move. We’ll invite you as each market opens. ${LAUNCH_LINE}`}
      />
    </PageShell>
  );
}
