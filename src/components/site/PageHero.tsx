import type { ReactNode } from "react";
import { Balloons } from "./Decor";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-party py-16 sm:py-20">
      <Balloons />
      <div className="relative mx-auto max-w-3xl px-4 text-center text-primary-foreground sm:px-6">
        {eyebrow && (
          <span className="inline-block rounded-full bg-background/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base opacity-90 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
