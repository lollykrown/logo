"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Radio } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/employers", label: "Employers / Plan Administrators" },
  { href: "/support-partners", label: "Support Partners" },
  { href: "/physicians-providers", label: "Physicians and Providers" },
  { href: "/advisors", label: "Advisors" },
];

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const fg = dark ? "text-white/80" : "text-ink/70";
  const fgActive = dark ? "text-white" : "text-ink";

  return (
    <header className="relative z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo dark={dark} />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active ? `${fgActive} font-medium` : fg
                  } hover:${fgActive}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/about"
          className="hidden items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-dark lg:inline-flex"
        >
          <Radio size={15} />
          Join Us
        </Link>

        <button
          className={`lg:hidden ${dark ? "text-white" : "text-ink"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div
          className={`absolute inset-x-0 top-full z-50 border-t px-6 py-6 lg:hidden ${
            dark
              ? "border-white/10 bg-ink text-white"
              : "border-line bg-white text-ink"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white"
              >
                <Radio size={15} />
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
