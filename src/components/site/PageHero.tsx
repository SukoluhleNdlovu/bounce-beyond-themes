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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,200,82,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,122,162,0.18),_transparent_24%)]" />
      <div className="absolute left-10 top-10 h-20 w-20 rounded-full border-4 border-pink-200 bg-pink-50/80" />
      <div className="absolute right-12 top-16 h-14 w-14 rotate-12 rounded-[30%] border-4 border-yellow-200 bg-yellow-50/80" />
      <div className="absolute bottom-10 left-1/4 h-3 w-3 rounded-full bg-pink-300" />
      <div className="absolute bottom-16 right-1/4 h-3 w-3 rounded-full bg-yellow-300" />
      <div className="absolute bottom-12 left-2/3 h-2 w-2 rounded-full bg-purple-300" />
      <div className="relative mx-auto max-w-3xl px-4 text-center text-foreground sm:px-6">
        {eyebrow && (
          <span className="inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
