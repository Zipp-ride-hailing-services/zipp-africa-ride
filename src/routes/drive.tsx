import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section, Eyebrow, fadeUp } from "@/components/zipp/Section";
import { PhoneFrame } from "@/components/zipp/PhoneFrame";
import { WaitlistCta } from "@/components/zipp/WaitlistCta";
import { DarkField } from "@/components/zipp/DarkField";
import { GetTheApp } from "@/components/zipp/GetTheApp";

import driverOnboardSchedule from "@/assets/driver-onboard-schedule.jpg";
import driverOnboardRoads from "@/assets/driver-onboard-roads.jpg";
import driverOnboardPayouts from "@/assets/driver-onboard-payouts.jpg";
import driverKycStart from "@/assets/driver-kyc-start.jpg";
import driverKycReview from "@/assets/driver-kyc-review.jpg";
import driverKycApproved from "@/assets/driver-kyc-approved.jpg";
import driverRides from "@/assets/driver-rides.jpg";
import driverRequest from "@/assets/driver-request.jpg";
import driverPickup from "@/assets/driver-pickup.jpg";
import driverStartTrip from "@/assets/driver-start-trip.jpg";
import driverConfirmPay from "@/assets/driver-confirm-pay.jpg";
import driverTripComplete from "@/assets/driver-trip-complete.jpg";
import driverEarnings from "@/assets/driver-earnings.jpg";
import driverCommission from "@/assets/driver-commission.jpg";
import driverSettlement from "@/assets/driver-settlement.jpg";
import driverWallet from "@/assets/driver-wallet.jpg";
import driverWalletBalance from "@/assets/driver-wallet-balance.jpg";
import driverWalletActions from "@/assets/driver-wallet-actions.jpg";
import driverAccount from "@/assets/driver-account.jpg";

export const Route = createFileRoute("/drive")({
  component: DrivePage,
  head: () => ({
    meta: [
      { title: "Drive — ZIPP" },
      {
        name: "description",
        content:
          "Built with drivers, not just for riders. 100+ prospective drivers are already on the ZIPP waitlist ahead of launch.",
      },
    ],
  }),
});

const session = [
  {
    title: "Go online on your terms.",
    desc: "Open the shift when you’re ready. See today’s earnings, performance, and incoming requests from one home screen.",
    img: driverRides,
    alt: "ZIPP driver home — go online and accept trips",
  },
  {
    title: "A request you can actually judge.",
    desc: "Rider rating, what you earn, and a countdown to respond. Accept or decline — no mystery bid.",
    img: driverRequest,
    alt: "Incoming ZIPP ride request with accept and decline",
  },
  {
    title: "Heading to pickup. SOS on the trip.",
    desc: "Call, SMS, and maps on one card. Emergency is a tap, not a buried menu.",
    img: driverPickup,
    alt: "Driver heading to pickup with SOS on screen",
  },
  {
    title: "Confirm the rider. Start the trip.",
    desc: "Onboard, then start. The session stays tracked from pin to drop-off.",
    img: driverStartTrip,
    alt: "Confirm rider onboard and start the ZIPP trip",
  },
  {
    title: "Settle in the journey.",
    desc: "Fare, 15% ZIPP commission, and your 85% share — then confirm payment received, including cash.",
    img: driverConfirmPay,
    alt: "Confirm rider payment and trip settlement",
  },
  {
    title: "Close the trip. See the payout.",
    desc: "Receipt, method, and net payout on one screen. Then you’re free for the next request.",
    img: driverTripComplete,
    alt: "Trip complete with settlement breakdown",
  },
];

const money = [
  { img: driverEarnings, alt: "Today’s earnings and weekly trip volume", label: "Today’s earnings" },
  { img: driverCommission, alt: "Commission rule — ZIPP 15%, you keep 85%", label: "Commission" },
  { img: driverSettlement, alt: "Earnings split and weekly settlement", label: "Weekly settlement" },
];

const wallet = [
  { img: driverWallet, alt: "ZIPP Wallet with auto-savings and vehicle cover", label: "Wallet" },
  { img: driverWalletBalance, alt: "Available wallet balance, pending, and reserves", label: "Balance" },
  { img: driverWalletActions, alt: "Withdraw, fund wallet, and pay commission", label: "Withdraw & fund" },
  { img: driverAccount, alt: "Driver profile, KYC status, and ZIPP Wallet", label: "Account" },
];

const onboard = [
  { img: driverOnboardSchedule, label: "Your schedule", title: "Drive and earn on your terms" },
  { img: driverOnboardRoads, label: "Built for you", title: "Made for Nigerian roads" },
  { img: driverOnboardPayouts, label: "Instant payouts", title: "Get paid fast" },
];

const kyc = [
  { img: driverKycStart, alt: "Start ZIPP KYC verification", label: "Start" },
  { img: driverKycReview, alt: "Review and submit KYC details", label: "Review" },
  { img: driverKycApproved, alt: "KYC approved and wallet PIN setup", label: "Approved" },
];

function DrivePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Drive"
        title="Built with drivers, not just for riders."
        description="A mobility platform is only as useful as the people operating it. That’s why drivers are part of the ZIPP model from the beginning."
      />
      <Section>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            We’re building tools designed to make it easier for drivers to receive trip requests, understand their
            earnings, manage their activity, and interact with the platform.
          </p>
          <p>
            More than <strong className="text-foreground">100 prospective drivers have already joined our waitlist ahead of launch.</strong>
          </p>
          <p>
            We’re currently focused on building the onboarding and operating systems needed to turn that early interest
            into a dependable driver network.
          </p>
          <p>
            Our objective isn’t simply to put more drivers on another app. It’s to build a platform where the economics,
            technology, support, and day-to-day experience make sense for the people actually doing the work.
          </p>
        </div>
      </Section>

      <Section className="overflow-hidden bg-zipp-ink text-white" atmosphere={<DarkField />}>
        <Eyebrow dark>FROM SPLASH TO SHIFT</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Drive and earn on your terms.
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/60 sm:text-lg">
          Hours you control. Instant payouts. Heatmaps, debt tools, and safety features tuned to how you actually drive.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {onboard.map((s) => (
            <div key={s.label} className="text-center">
              <PhoneFrame src={s.img} alt={s.title} className="max-w-[220px]" dark />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent)]">{s.label}</p>
              <p className="mt-1 font-semibold">{s.title}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>THE SHIFT</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Request in. Trip closed. Payout shown.
        </h2>
        <div className="mt-14 space-y-24">
          {session.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--accent-strong)]">
                  0{i + 1} / SESSION
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{it.title}</h3>
                <p className="mt-4 max-w-md text-lg text-muted-foreground">{it.desc}</p>
              </div>
              <PhoneFrame src={it.img} alt={it.alt} className="max-w-[280px]" />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Eyebrow>ECONOMICS</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">You keep 85%. ZIPP takes 15%.</h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          A flat share on completed trips — shown in the request, in the settlement, and in weekly commission. Cash and
          wallet sit in the same picture.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {money.map((s) => (
            <div key={s.label} className="text-center">
              <PhoneFrame src={s.img} alt={s.alt} className="max-w-[220px]" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>WALLET</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Payouts inside the app.</h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          ZIPP Wallet for in-app payouts, optional fuel and maintenance reserves, and commission you can see and settle.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          {wallet.map((s) => (
            <div key={s.label} className="text-center">
              <PhoneFrame src={s.img} alt={s.alt} className="max-w-[200px]" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Eyebrow>KYC</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Verify once. Drive with confidence.
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Identity authentication through licensed partners — BVN, NIN, government ID, and liveness — before you take
          your first trip.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {kyc.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center"
            >
              <PhoneFrame src={s.img} alt={s.alt} className="max-w-[220px]" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
        <GetTheApp className="mt-12" />
        <Link
          to="/waitlist"
          className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--accent-strong)]"
        >
          Join the waitlist as a driver
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <WaitlistCta
        title="Be there before we go live."
        description="Choose Drive on the waitlist. 100+ prospective drivers are already in queue. Calabar first. Akwa Ibom next."
      />
    </PageShell>
  );
}
