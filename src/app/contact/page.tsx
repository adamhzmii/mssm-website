import type { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHead } from "@/components/PageHead";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MSSM by email, Instagram, LinkedIn, Facebook or YouTube.",
};

const icons = { instagram: FaInstagram, linkedin: FaLinkedinIn, facebook: FaFacebookF, youtube: FaYoutube } as const;

export default function ContactPage() {
  const row =
    "group flex items-center gap-4 border-b border-indigo-100 py-5 transition-colors duration-200 hover:text-indigo-700";
  return (
    <>
      <PageHead title="Get in touch" intro="Have an enquiry or need support? Reach the committee wherever suits you." />

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="min-w-0">
            <h2 className="h2">Find us.</h2>
            <ul className="mt-8 border-t border-indigo-100">
              <li>
                <a href={`mailto:${site.email}`} className={row}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-800">
                    <Mail aria-hidden size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl font-bold">Email</span>
                    <span className="block truncate text-muted">{site.email}</span>
                  </span>
                  <ArrowUpRight aria-hidden size={20} className="shrink-0 text-indigo-700 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              {site.socials.map((s) => {
                const Icon = icons[s.id];
                return (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className={row}>
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-800">
                        <Icon aria-hidden size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-xl font-bold">{s.label}</span>
                        <span className="block truncate text-muted">{s.handle}</span>
                      </span>
                      <ArrowUpRight aria-hidden size={20} className="shrink-0 text-indigo-700 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className="h2">Write to us.</h2>
            <div className="mt-8">
              <ContactForm to={site.email} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
