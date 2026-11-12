import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HexRing } from "@/components/Hex";

export default function NotFound() {
  return (
    <section className="bg-indigo-900 text-white">
      <div className="wrap grid min-h-[70svh] items-center gap-10 py-20 md:grid-cols-[1fr_auto]">
        <div>
          <h1 className="h1">This page has moved out.</h1>
          <p className="lead mt-6 max-w-xl text-indigo-200">
            The address may have changed when we rebuilt the site. The home page and the events archive are good places to
            pick the trail back up.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-yellow">
              Go to the home page
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href="/events" className="btn btn-ghost">
              Browse events
            </Link>
          </div>
        </div>
        <HexRing tone="yellow" className="hidden w-64 md:block" strokeWidth={5} />
      </div>
    </section>
  );
}
