import type { Metadata } from "next";
import { Handshake, Puzzle, Network, Rocket } from "lucide-react";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import IconCardGrid from "@/components/IconCardGrid";
import StatsStrip from "@/components/StatsStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Support Partners — Loqo",
  description:
    "Technology vendors, payers and service providers: plug into a healthcare cooperative that shares data assets with the partners who help build it.",
};

const REASONS = [
  {
    icon: Puzzle,
    title: "A real seat at the table",
    copy: "Support partners aren't vendors bolted onto the network — you're a member with a voice in how it evolves.",
  },
  {
    icon: Network,
    title: "Shared data assets",
    copy: "Get access to the data assets needed to build programs, not a walled garden you have to negotiate your way into.",
  },
  {
    icon: Rocket,
    title: "Distribution built in",
    copy: "Reach physicians, employers and plan administrators who are already inside the cooperative.",
  },
  {
    icon: Handshake,
    title: "Aligned incentives",
    copy: "The cooperative structure means your success and the network's success move in the same direction.",
  },
];

export default function SupportPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Support Partners"
        title="Build alongside the network, not around it"
        copy="Technology providers, payers and service organizations use the Loqo platform to reach a growing cooperative of physicians and employers — with shared access to the data assets that make new programs possible."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Technology partners collaborating around a laptop"
      />

      <section className="px-6 pb-6 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Promoting innovation, together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          The contracted network takes advantage of new federal laws and
          regulations intended to remove the veil of secrecy around
          negotiated payment rates — and support partners are central to
          decoding and simplifying that complexity for everyone else.
        </p>
      </section>

      <IconCardGrid heading="Why partners join" items={REASONS} />

      <section className="bg-mist px-6 lg:px-10">
        <FeatureRow
          title="A payment platform built for clarity"
          copy="The platform is the key to deciphering and simplifying the complex codes and standards relating to healthcare payments — the central hub for empowering a wide range of organizations to build capabilities that can be offered to employers and individuals."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Partners reviewing a payments platform on screen"
          ctaLabel="Join Us"
        />
        <FeatureRow
          reverse
          title="Security and reliability, decentralized"
          copy="A decentralized platform built to promote peer-to-peer connections means no single point of failure — and no single company holding the keys to everyone else's data."
          image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Engineers discussing system architecture"
          ctaLabel="Join Us"
        />
      </section>

      <StatsStrip />

      <CtaBand
        title="Become a support partner"
        copy="If your organization builds tools, data products or services for healthcare, we'd like to talk about joining the cooperative."
        ctaLabel="Start a Conversation"
      />

      <Footer />
    </>
  );
}
