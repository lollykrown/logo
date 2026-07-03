import type { Metadata } from "next";
import { Heart, Users2, Landmark, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import IconCardGrid from "@/components/IconCardGrid";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About — Loqo",
  description:
    "Loqo is America's first health network cooperative — a member-owned organization built on transparency, trust and shared ownership.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Patient-first",
    copy: "Every decision starts with what makes care better for the person receiving it.",
  },
  {
    icon: Users2,
    title: "Member-owned",
    copy: "Physicians, employers and support partners govern the cooperative together.",
  },
  {
    icon: Landmark,
    title: "Built to last",
    copy: "Modeled on cooperative traditions that have outlived any single company.",
  },
  {
    icon: Sparkles,
    title: "Open to change",
    copy: "We borrow the best of blockchain, cryptography and AI where it genuinely helps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Loqo"
        title="A cooperative built by the people who use it"
        copy="Loqo is America's first health network cooperative — a collaborative, member-owned organization founded to put transparency, trust and shared ownership back at the center of healthcare."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Loqo team members reviewing plans together in a bright office"
        ctaLabel="Become a Charter Member"
      />

      <section className="px-6 pb-6 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Why we started Loqo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          We are a network of motivated individuals. Some of us have a long
          history of building healthcare organizations, and some of us are
          coming into this work with a fresh eye, unburdened by the past.
        </p>
      </section>

      <section className="bg-mist px-6 lg:px-10">
        <FeatureRow
          title="Where the idea began"
          copy="Healthcare decisions made without transparency are like navigating in dense fog. Founding members had each hit the same wall — no visibility into cost, no control over data, and no simple way for good-faith organizations to work together. Loqo started as an answer to that problem."
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Founding members in an early planning session"
        />
        <FeatureRow
          reverse
          title="Who is building it"
          copy="Our founding effort is supported by the Wiggins Foundation and individual donors. We're borrowing from the examples of Mozilla and many healthcare organizations that amplify their mission through creative structuring, built to attract participation from an entire industry rather than a single company."
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Colleagues discussing a proposal around a shared tablet"
        />
      </section>

      <IconCardGrid
        heading="What we stand for"
        subheading="Four commitments that shape every product decision and every partnership we make."
        items={VALUES}
      />

      <StatsStrip />

      <CtaBand
        title="Join the cooperative"
        copy="Membership is open to physicians, employers, plan administrators and support partners who want a stake in a more transparent healthcare system."
        ctaLabel="Become a Charter Member"
      />

      <Footer />
    </>
  );
}
