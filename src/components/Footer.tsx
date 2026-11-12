import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";

const icons = { instagram: FaInstagram, linkedin: FaLinkedinIn, facebook: FaFacebookF, youtube: FaYoutube } as const;

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <Logo className="text-white" />
          <p className="mt-5 max-w-sm text-indigo-200">
            The {site.name}. {site.tagline}
          </p>
          <ul className="mt-7 flex gap-2.5">
            {site.socials.map((s) => {
              const Icon = icons[s.id];
              return (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`MSSM on ${s.label}`}
                    className="grid size-11 place-items-center rounded-xl border border-white/15 text-white transition-colors duration-200 hover:border-yellow hover:text-yellow"
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email MSSM"
                className="grid size-11 place-items-center rounded-xl border border-white/15 text-white transition-colors duration-200 hover:border-yellow hover:text-yellow"
              >
                <Mail size={18} aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold text-white">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1 lg:grid-cols-2">
            {[...nav, { href: "/committee/former", label: "Former committees" }, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-indigo-200 transition-colors duration-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-white">Join us</h2>
          <p className="mt-4 text-indigo-200">Membership is {site.membership.price}, with member prices at events and discounts around Manchester.</p>
          <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow mt-5">
            Become a member
          </a>
          <p className="mt-6">
            <a href={`mailto:${site.email}`} className="link text-white">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-sm text-indigo-300">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
