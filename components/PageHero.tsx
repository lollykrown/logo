import Image from "next/image";
import Navbar from "@/components/Navbar";
import { PrimaryButton } from "@/components/Button";

export default function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  ctaLabel = "Join Us",
  ctaHref = "/about",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="dark-glow relative overflow-hidden">
      <Navbar dark />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-4 lg:grid-cols-2 lg:items-center lg:px-10 lg:pb-28">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            {copy}
          </p>
          <div className="mt-8">
            <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
          </div>
        </div>

        <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[420px]">
          <Image src={image} alt={imageAlt} fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
