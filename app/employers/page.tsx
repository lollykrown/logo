import type { Metadata } from "next";
import { PiggyBank, LineChart, ShieldCheck, Users } from "lucide-react";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import IconCardGrid from "@/components/IconCardGrid";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Employers / Plan Administrators — Loqo",
  description:
    "Give your employees access to a transparent, cost-efficient healthcare network built and owned by its members.",
};

const BENEFITS = [
  {
    icon: PiggyBank,
    title: "Lower total cost",
    copy: "Cut out negotiated-rate secrecy and reduce healthcare spend by participating directly in the network.",
  },
  {
    icon: LineChart,
    title: "Real data, real insight",
    copy: "See the underlying cost of services and use that data to design smarter wellness programs.",
  },
  {
    icon: ShieldCheck,
    title: "Own your data",
    copy: "Retain ownership and control of employee health data instead of handing it to a black-box vendor.",
  },
  {
    icon: Users,
    title: "A community, not a contract",
    copy: "Join a network of like-minded employers and plan administrators working toward the same goal.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="Employers & Plan Administrators"
        title="Healthcare benefits your employees can actually understand"
        copy="Give your workforce access to a member-owned health network built on transparent pricing, shared data and cooperative governance — instead of another opaque middleman."
        image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="HR and finance leaders reviewing a benefits plan"
      />

      <section className="px-6 pb-6 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Built for the people footing the bill
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          For employers, the lack of control over data and the inability to
          know the underlying cost of services is like assembling a puzzle
          with missing pieces. Loqo gives you the missing pieces.
        </p>
      </section>

      <IconCardGrid heading="What membership gets you" items={BENEFITS} />

      <section className="bg-mist px-6 lg:px-10">
        <FeatureRow
          title="Cost savings you can trace"
          copy="Physicians and employers benefit from cost-efficient healthcare because the network removes the veil of secrecy around negotiated payment rates. You can trace exactly where every dollar of spend is going."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finance team reviewing cost reports together"
          ctaLabel="Join Us"
        />
        <FeatureRow
          reverse
          title="Population-based programs"
          copy="Supplement or replace your existing benefit networks with programs built for your specific population — whether that means a particular disease focus, geography, or workforce demographic."
          image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Team designing a benefits program on a whiteboard"
          ctaLabel="Join Us"
        />
      </section>

      <StatsStrip />

      <CtaBand
        title="Bring your organization into the cooperative"
        copy="Plan administrators and employers of any size can join as members and help shape how the network grows."
        ctaLabel="Talk to Our Team"
      />

      <Footer />
    </>
  );
}
