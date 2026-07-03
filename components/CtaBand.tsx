import { PrimaryButton } from "@/components/Button";

export default function CtaBand({
  title,
  copy,
  ctaLabel = "Join Us",
  ctaHref = "/about",
  variant = "violet",
}: {
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "violet" | "dark";
}) {
  return (
    <section
      className={`${
        variant === "violet" ? "violet-glow" : "dark-glow"
      } px-6 py-24 text-center lg:px-10`}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/55">{copy}</p>
        <PrimaryButton href={ctaHref} className="mx-auto mt-7 w-fit">
          {ctaLabel}
        </PrimaryButton>
      </div>
    </section>
  );
}
