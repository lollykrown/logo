import type { Metadata } from "next";
import { Stethoscope, Globe2, Users2, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import IconCardGrid from "@/components/IconCardGrid";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Physicians and Providers — Loqo",
  description:
    "Join a peer-to-peer network of physicians and providers built for collaboration, patient-centered care and fair payment.",
};

const BENEFITS = [
  {
    icon: Stethoscope,
    title: "Patient-centered by design",
    copy: "The network prioritizes patient-centered care, not utilization targets set by an outside payer.",
  },
  {
    icon: Globe2,
    title: "Reach underserved populations",
    copy: "Extend your practice's reach across geographical barriers that used to keep care out of reach.",
  },
  {
    icon: Users2,
    title: "Collaborate with peers",
    copy: "Work easily with peers and specialists across the cooperative on shared programs and referrals.",
  },
  {
    icon: BarChart3,
    title: "Data-driven insight",
    copy: "Access a wealth of health data and analytics tools to guide clinical and business decisions.",
  },
];

export default function PhysiciansProvidersPage() {
  return (
    <>
      <PageHero
        eyebrow="Physicians and Providers"
        title="Practice medicine inside a network built by clinicians"
        copy="Loqo is a peer-to-peer cooperative that lets physicians and providers create innovative, population-based programs — without ceding control to a distant payer."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Physicians consulting together in a clinical setting"
      />

      <section className="px-6 pb-6 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Enhanced patient care, without the overhead
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          Local healthcare providers can use the platform to create
          innovative programs to serve specific diseases or for
          population-based programs — supplementing or replacing the
          networks you already use in benefit plans.
        </p>
      </section>

      <IconCardGrid heading="Why physicians join Loqo" items={BENEFITS} />

      <section className="bg-mist px-6 lg:px-10">
        <FeatureRow
          title="Payment, decoded"
          copy="The payment platform is like a Rosetta Stone for transactions with the network — the key to deciphering and simplifying the complex codes and standards relating to healthcare payments."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Provider reviewing payment data on a laptop"
          ctaLabel="Join Us"
        />
        <FeatureRow
          reverse
          title="Collaboration without friction"
          copy="A decentralized platform built to promote peer-to-peer connections means providers can join a community of like-minded organizations and collaborate with specialists easily within the cooperative."
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Providers collaborating on patient care plans"
          ctaLabel="Join Us"
        />
      </section>

      <StatsStrip />

      <CtaBand
        title="Bring your practice into the network"
        copy="Whether you're an independent physician or part of a larger group, membership gives you a direct stake in how the network is run."
        ctaLabel="Become a Charter Member"
      />

      <Footer />
    </>
  );
}
