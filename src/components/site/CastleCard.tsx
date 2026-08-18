import { Link } from "@tanstack/react-router";
import { Ruler, Users, Cake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Castle } from "@/data/castles";

export function CastleCard({ castle }: { castle: Castle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-playful">
      <Link
        to="/castles/$slug"
        params={{ slug: castle.slug }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={castle.images[0]}
          alt={`${castle.name} — ${castle.theme} jumping castle for hire`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground">
          {castle.theme}
        </span>
        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
            castle.available
              ? "bg-mint text-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          <CheckCircle2 className="h-3 w-3" />
          {castle.available ? "Available" : "Booked out"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{castle.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{castle.shortDescription}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Cake className="h-4 w-4 text-primary" /> Ages {castle.ageRange}
          </li>
          <li className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-primary" /> {castle.dimensions}
          </li>
          <li className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" /> {castle.capacity}
          </li>
        </ul>

        <p className="mt-4 font-display text-lg font-bold text-primary">{castle.price}</p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="flex-1">
            <Link to="/castles/$slug" params={{ slug: castle.slug }}>
              View Details
            </Link>
          </Button>
          <Button asChild variant="hero" className="flex-1">
            <Link to="/contact" search={{ castle: castle.slug }}>
              Hire This Castle
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
