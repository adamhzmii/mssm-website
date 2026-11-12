"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-[background-color,box-shadow] duration-300 ease-out ${
        scrolled || open ? "bg-indigo-950 shadow-[0_1px_0_rgb(255_255_255/0.08)]" : "bg-indigo-900"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="MSSM home" onClick={() => setOpen(false)} className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative block rounded-lg px-3 py-2 text-[0.9375rem] font-semibold text-indigo-100 transition-colors duration-200 hover:text-white aria-[current=page]:text-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden rounded-lg px-3 py-2 text-[0.9375rem] font-semibold text-indigo-100 transition-colors duration-200 hover:text-white sm:block xl:hidden 2xl:block">
            Contact
          </Link>
          <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow hidden min-h-11 px-4 text-base sm:inline-flex">
            Become a member
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-white/20 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-indigo-950 transition-[opacity,visibility] duration-200 ease-out xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-10 pt-6">
          <ul className="flex-1">
            {[...nav, { href: "/contact", label: "Contact" }].map((item, i) => (
              <li
                key={item.href}
                className={open ? "animate-rise" : undefined}
                style={open ? { animationDelay: `${i * 30}ms`, animationDuration: "0.4s" } : undefined}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block border-b border-white/10 py-3.5 font-display text-[1.75rem] font-bold leading-tight aria-[current=page]:text-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow mt-8 w-full">
            Become a member · {site.membership.price}
          </a>
        </nav>
      </div>
    </header>
  );
}
