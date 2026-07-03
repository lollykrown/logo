import { Stethoscope, Users, Building2, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Stethoscope, value: "1000+", label: "Physicians & Providers" },
  { icon: Users, value: "150+", label: "Employers/Plan Administrators" },
  { icon: Building2, value: "100+", label: "Hospitals" },
  { icon: ShieldCheck, value: "20+", label: "Support Partners" },
];

export default function StatsStrip() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl border border-line bg-white p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] sm:grid-cols-4 lg:p-12">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue">
              <Icon size={17} />
            </span>
            <span className="font-display text-2xl text-ink sm:text-3xl">
              {value}
            </span>
            <span className="mt-1 text-xs text-slate">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
