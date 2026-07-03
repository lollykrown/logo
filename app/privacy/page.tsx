import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Loqo",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <h1 className="font-display text-4xl font-light text-ink">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          This is placeholder copy for Loqo&apos;s privacy policy. Replace
          this section with your organization&apos;s actual data handling,
          collection and member-privacy practices before launch.
        </p>
      </section>
      <Footer />
    </>
  );
}
