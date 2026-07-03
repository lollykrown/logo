import Image from "next/image";
import { PrimaryButton } from "@/components/Button";

export default function FeatureRow({
  title,
  copy,
  image,
  imageAlt,
  reverse = false,
  ctaLabel,
  ctaHref = "/about",
}: {
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const textBlock = (
    <div>
      <h3 className="font-display text-3xl font-light text-ink">{title}</h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
        {copy}
      </p>
      {ctaLabel && (
        <PrimaryButton href={ctaHref} className="mt-7">
          {ctaLabel}
        </PrimaryButton>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative h-[280px] overflow-hidden rounded-[36px] sm:h-[340px]">
      <Image src={image} alt={imageAlt} fill className="object-cover" />
    </div>
  );

  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 py-10 lg:grid-cols-2">
      {reverse ? (
        <>
          <div className="order-2 lg:order-1">{imageBlock}</div>
          <div className="order-1 lg:order-2">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-1">{textBlock}</div>
          <div className="order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
}
