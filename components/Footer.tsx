import Link from "next/link";
import Logo from "./Logo";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-center lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <Logo dark />
        <p className="mt-6 text-sm leading-relaxed text-white/60">
          We are a network of motivated individuals. Some of us have a long
          history of building health care organizations and some of us are
          coming into this work with a fresh eye unburdened by the past. Our
          founding effort is being supported by the Wiggins Foundation and
          individual donors. We are borrowing from the examples of Mozilla
          and many healthcare organizations who amplify their mission through
          creative structuring to attract the participation of entire
          industries.
        </p>

        <div className="mt-7 flex items-center gap-4">
          {[InstagramIcon, LinkedinIcon, TwitterIcon, FacebookIcon].map(
            (Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue"
              >
                <Icon width={16} height={16} />
              </span>
            )
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <Link href="/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
        <span>&copy; Dummy 2026. All Rights Reserved.</span>
        <Link href="/terms" className="hover:text-white">
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}
