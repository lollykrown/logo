import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  BellRing,
  Play,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Check,
  Download,
  ChevronDown,
  Megaphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsStrip from "@/components/StatsStrip";
import { PrimaryButton } from "@/components/Button";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Building",
    copy: "a peer-to-peer cooperative network linking providers and purchasers of health care services.",
  },
  {
    icon: Lock,
    title: "Fostering",
    copy: "innovation, transparency, efficiency and trust.",
  },
  {
    icon: BellRing,
    title: "Like",
    copy: "redwoods sharing roots, we gain strength from our connectedness.",
  },
];

const BLACK_CARDS = [
  {
    title: "Security and Reliability are no longer a worry",
    copy: "Decentralized platform built to promote peer-to-peer connections. Local healthcare providers and local employers can use the platform to create innovative programs to serve specific diseases or for population-based programs. The platform can supplement or replace existing networks used in benefit plans.",
  },
  {
    title: "Promoting Innovation",
    copy: "Fundamentally two things: a contracted health care provider network and a payment platform. The contracted network takes advantage of new federal laws and regulations intended to remove the veil of secrecy around negotiated payment rates. The platform is the key to deciphering and simplifying the complex codes and standards relating to health care payments.",
  },
];

const BENEFITS = [
  {
    n: "1",
    title: "Enhanced Patient Care",
    bullets: [
      "The health network prioritizes patient-centered care…",
      "Employers can offer their employees access to a healthcare system…",
    ],
  },
  {
    n: "2",
    title: "Cost Savings",
    bullets: [
      "Physicians and employers can benefit from cost-efficient healthcare…",
      "Employers can reduce their healthcare spending by participating in a network…",
    ],
  },
  {
    n: "3",
    title: "Increased Accessibility",
    bullets: [
      "Physicians and employers can extend their reach to underserved populations…",
      "The health network breaks down geographical barriers, ensuring healthcare…",
    ],
  },
  {
    n: "4",
    title: "Collaboration Opportunities",
    bullets: [
      "Physicians can collaborate with peers and specialists easily within the cooperative…",
      "Employers can join a community of like-minded organizations…",
    ],
  },
  {
    n: "5",
    title: "Data-Driven Insights",
    bullets: [
      "Physicians gain access to a wealth of health data and analytics tools…",
      "Employers can utilize data insights to design wellness programs…",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="dark-glow relative overflow-hidden">
        <Navbar dark />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-4 lg:grid-cols-2 lg:items-center lg:px-10 lg:pb-24">
          <div>
            <h1 className="font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-[3.2rem]">
              Where
              <br />
              Cooperati<span className="text-blue">ON</span>
              <br />
              Meets
              <br />
              Innovati<span className="text-blue">ON</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              America&apos;s first health network cooperative. It is a
              collaborative and member-owned organization that aims to
              revolutionize healthcare delivery.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <PrimaryButton href="/about">
                Become a Charter Member
              </PrimaryButton>
              <button
                aria-label="Play intro video"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/60"
              >
                <Play size={15} className="ml-0.5" />
              </button>
            </div>

            <div className="mt-14 flex items-center gap-3">
              <button
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50"
              >
                <ArrowRightIcon size={15} />
              </button>
            </div>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="A diverse group of colleagues laughing together while looking at a device"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="px-6 lg:px-10 mt-24">
        <div className="mx-auto -mt-10 max-w-6xl rounded-[28px] border border-line bg-white p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] sm:-mt-16 lg:-mt-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, copy }) => (
              <div key={title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <Icon size={16} />
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION HEADING */}
      <section className="px-6 pb-16 pt-24 text-center lg:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
          Transforming Healthcare With Transparency And Innovation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
          This cooperative is intended to foster collaboration, efficiency,
          and a patient-centered approach to healthcare services, and
          distinguishes itself as a novel and pioneering initiative in the
          American healthcare landscape.
        </p>
      </section>

      {/* LEVERAGING TRANSPARENCY */}
      <section className="bg-mist px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-light text-ink">
              Leveraging
              <br />
              Transparency
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
              Making health care decisions without transparency is like
              trying to navigate a ship in dense fog. Without clear
              visibility, it&apos;s challenging to make informed choices, and
              there&apos;s a higher risk of making a wrong turn or running
              aground. For employers, the lack of control over data and the
              inability to know the underlying cost of services is like
              assembling a puzzle with missing pieces.
            </p>
            <PrimaryButton href="/about" className="mt-7">
              Join Us
            </PrimaryButton>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[36px] sm:h-[340px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Colleagues reviewing a laptop together in a modern office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 h-[280px] overflow-hidden rounded-[36px] sm:h-[340px] lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
              alt="Three colleagues sharing a laugh over a tablet"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-3xl font-light text-ink">
              Fostering
              <br />
              Collaboration
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
              Decentralized platform built to promote peer-to-peer
              connections. Local healthcare providers and local employers can
              use the platform to create innovative programs to serve
              specific diseases or for population-based programs. The
              platform can supplement or replace existing networks used in
              benefit plans. And all participants in the ecosystem —
              employers/payers, providers, technology partners and consumers
              — have access to the data assets needed to help build those
              programs.
            </p>
            <PrimaryButton href="/about" className="mt-7">
              Join Us
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* BLACK CARDS */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {BLACK_CARDS.map(({ title, copy }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-3xl bg-ink p-9"
            >
              <div>
                <h3 className="font-display text-2xl font-light leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {copy}
                </p>
              </div>
              <PrimaryButton href="/about" className="mt-8 w-fit">
                Join Us
              </PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS OF OUR SERVICES */}
      <section className="dark-glow px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
              Benefits Of Our Services
            </h2>
            <p className="mt-3 text-sm text-white/50">
              We are a network of motivated individuals.
            </p>
          </div>

          <div className="mt-14 hidden grid-cols-[1fr_repeat(3,140px)] gap-4 border-b border-white/10 pb-4 text-center text-xs text-white/50 sm:grid">
            <span />
            <span>Physicians &amp; Providers</span>
            <span>Employers / Plan Administrators</span>
            <span>Support Partners</span>
          </div>

          <div>
            {BENEFITS.map((b, i) => (
              <div
                key={b.n}
                className={`grid grid-cols-1 gap-6 py-8 sm:grid-cols-[1fr_repeat(3,140px)] sm:items-center ${
                  i !== BENEFITS.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div>
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs text-white">
                    {b.n}
                  </span>
                  <h3 className="font-display text-xl text-white">
                    {b.title}
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {b.bullets.map((line) => (
                      <li key={line} className="text-xs text-white/45">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                {[0, 1, 2].map((col) => (
                  <div key={col} className="hidden md:flex justify-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue text-white">
                      <Check size={12} />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm text-white transition-colors hover:border-white/60">
              <ChevronDown size={15} />
              Show More
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-dark">
              <Download size={15} />
              Download
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsStrip />

      {/* EMBRACING CHANGING WORLD */}
      <section className="violet-glow px-6 py-24 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
            Embracing Changing World
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            Natural synthesis of ideas already changing our lives. We looked
            at blockchain projects to inform our views on decentralization
            and community building. We compared those ideas to the long
            history of Cooperatives and integrated the best of both
            approaches. We evaluated advanced cryptography techniques that
            have application to the verification and security challenges in
            health care. We continue to embrace A.I.
          </p>
          <PrimaryButton href="/about" className="mx-auto mt-7 w-fit">
            <Megaphone size={15} />
            Join Us
          </PrimaryButton>
        </div>

        <div className="relative mx-auto mt-12 h-[280px] max-w-5xl overflow-hidden rounded-[32px] sm:h-[380px]">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Team gathered around a table discussing ideas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <button
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-105"
            >
              <Play size={22} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
