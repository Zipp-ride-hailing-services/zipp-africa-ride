import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/zipp/PageShell";
import { PageHeader } from "@/components/zipp/PageHeader";
import { Section } from "@/components/zipp/Section";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy — ZIPP" },
      { name: "description", content: "How ZIPP collects waitlist details and how we use them." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Privacy" description="We collect waitlist details to invite you when your state opens. We do not sell personal data." />
      <Section>
        <div className="mx-auto max-w-2xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            When you join the ZIPP waitlist we store your name, email, optional phone number, state, and whether you want to ride or drive. That information is used only to contact you about launch, early access, and related product news.
          </p>
          <p>
            We use essential cookies to keep this site working, remember cookie choices, and understand whether you have already joined the waitlist on this device.
          </p>
          <p>
            Questions: <a href="mailto:info@zipp.africa" className="font-semibold text-foreground underline underline-offset-2">info@zipp.africa</a>
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
