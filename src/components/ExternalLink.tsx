import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** An outbound text link with the arrow that says so. */
export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1 font-semibold text-indigo-700 transition-colors duration-200 hover:text-red ${className}`}>
      <span className="underline decoration-[1.5px] underline-offset-[3px]">{children}</span>
      <ArrowUpRight aria-hidden size={17} className="shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
