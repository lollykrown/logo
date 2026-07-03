import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function PrimaryButton({
  href,
  children,
  className = "",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-dark ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} />}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60 ${className}`}
    >
      {children}
    </Link>
  );
}
