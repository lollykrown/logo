import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loqo — Where Cooperation Meets Innovation",
  description:
    "America's first health network cooperative. A collaborative, member-owned organization revolutionizing healthcare delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
