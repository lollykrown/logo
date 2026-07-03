import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Loqo",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <h1 className="font-display text-4xl font-light text-ink">
          Terms &amp; Conditions
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          This is placeholder copy for Loqo&apos;s terms and conditions.
          Replace this section with your organization&apos;s actual
          membership and usage terms before launch.
        </p>
      </section>
      <Footer />
    </>
  );
}
