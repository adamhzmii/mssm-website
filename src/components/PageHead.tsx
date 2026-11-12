import type { ReactNode } from "react";
import { HexRing } from "./Hex";

type Props = {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

/** The indigo band that opens every inner page. */
export function PageHead({ title, intro, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-indigo-900 text-white">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-1/2 hidden w-[30rem] -translate-y-1/2 opacity-70 lg:block xl:-right-10">
        <div className="relative aspect-[3.5/3.464]">
          <HexRing tone="red" className="absolute left-0 top-1/4 w-[57.14%]" strokeWidth={4} />
          <HexRing tone="indigo" className="absolute left-[42.86%] top-0 w-[57.14%]" strokeWidth={4} />
          <HexRing tone="yellow" className="absolute left-[42.86%] top-1/2 w-[57.14%]" strokeWidth={4} />
        </div>
      </div>
      <div className="wrap relative pb-14 pt-10 md:pb-20 md:pt-16">
        <h1 className="h1 max-w-4xl animate-rise">{title}</h1>
        {intro ? (
          <p className="lead mt-6 max-w-2xl animate-rise text-indigo-200 [animation-delay:70ms]">{intro}</p>
        ) : null}
        {children ? <div className="mt-8 animate-rise [animation-delay:140ms]">{children}</div> : null}
      </div>
    </section>
  );
}
