import type { Metadata } from "next";
import { Scale, BrainCircuit, Compass, Users } from "lucide-react";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import IconCardGrid from "@/components/IconCardGrid";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Advisors — Loqo",
  description:
    "Meet the advisors guiding Loqo's governance, technology and healthcare policy as America's first health network cooperative.",
};

const AREAS = [
  {
    icon: Scale,
    title: "Governance & policy",
    copy: "Helping shape a cooperative structure that stays accountable to its members as it scales.",
  },
  {
    icon: BrainCircuit,
    title: "Technology & security",
    copy: "Guiding decisions on decentralization, cryptography and where AI genuinely earns its place.",
  },
  {
    icon: Compass,
    title: "Healthcare strategy",
    copy: "Bringing decades of provider, payer and employer experience to the network's roadmap.",
  },
  {
    icon: Users,
    title: "Community building",
    copy: "Advising on how to grow membership without losing the trust it was built on.",
  },
];

export default function AdvisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisors"
        title="Guided by people who have built this before"
        copy="Our advisors bring a long history of building healthcare organizations, alongside fresh perspective from technology, policy and cooperative governance — helping Loqo grow without losing what makes it different."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Advisors in discussion around a conference table"
        ctaLabel="Meet the Team"
      />

      <section className="px-6 pb-6 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Embracing a changing world, carefully
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          We looked at blockchain projects to inform our views on
          decentralization and community building, compared those ideas to
          the long history of cooperatives, and integrated the best of both
          approaches — with advisors testing every assumption along the way.
        </p>
      </section>

      <IconCardGrid heading="Where our advisors focus" items={AREAS} />

      <section className="bg-mist px-6 lg:px-10">
        <FeatureRow
          title="Security and reliability, reviewed"
          copy="Advisors with backgrounds in healthcare security and data governance help ensure the decentralized platform stays reliable as more physicians, employers and partners join the network."
          image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Advisors reviewing security and governance documents"
        />
        <FeatureRow
          reverse
          title="A sounding board for founding members"
          copy="Some of us have a long history of building healthcare organizations, and some of us are coming into this work with a fresh eye. Advisors sit between both groups, pressure-testing ideas before they reach the network."
          image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Founding members and advisors in a working session"
        />
      </section>

      <StatsStrip />

      <CtaBand
        title="Interested in advising Loqo?"
        copy="We're always glad to talk with people who share our interest in cooperative, transparent healthcare."
        ctaLabel="Get in Touch"
      />

      <Footer />
    </>
  );
}
