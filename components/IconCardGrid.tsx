import type { LucideIcon } from "lucide-react";

export default function IconCardGrid({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading?: string;
  items: { icon: LucideIcon; title: string; copy: string }[];
}) {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {subheading}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-blue">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
