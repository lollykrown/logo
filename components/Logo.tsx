import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  const fg = dark ? "text-white" : "text-ink";
  const ring = dark ? "border-white" : "border-ink";

  return (
    <Link
      href="/"
      className={`flex items-center gap-[2px] font-display text-2xl font-semibold tracking-tight ${fg}`}
      aria-label="Loqo home"
    >
      <span>l</span>
      <span className={`h-[9px] w-[9px] rounded-full border-2 ${ring}`} />
      <span className={`h-[9px] w-[9px] rounded-full border-2 ${ring}`} />
      <span>o</span>
      <span className="ml-[2px] self-start text-[10px]">&reg;</span>
    </Link>
  );
}
