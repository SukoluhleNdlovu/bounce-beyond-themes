import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CastleCard } from "@/components/site/CastleCard";
import { castles, castleCategories, type CastleCategory } from "@/data/castles";

export const Route = createFileRoute("/castles/")({
  head: () => ({
    meta: [
      { title: "Jumping Castles for Hire | Lulu Jump" },
      {
        name: "description",
        content:
          "Browse our jumping castles for hire — princess, superhero, unicorn, dinosaur, safari and rainbow castles for birthdays, kids parties and events.",
      },
      { property: "og:title", content: "Jumping Castles for Hire | Lulu Jump" },
      {
        property: "og:description",
        content: "Browse our range of jumping castles for birthdays, kids parties and events.",
      },
    ],
  }),
  component: CastlesPage,
});

type Sort = "featured" | "name" | "age";

function CastlesPage() {
  const [category, setCategory] = useState<CastleCategory | "All">("All");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const list = castles.filter((c) => category === "All" || c.category === category);
    if (sort === "name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "age") return [...list].sort((a, b) => a.ageRange.localeCompare(b.ageRange));
    return list;
  }, [category, sort]);

  return (
    <>
      <PageHero
        eyebrow="Our range"
        title="Jumping Castles for Hire"
        subtitle="Six colourful castles, all professionally cleaned, delivered and set up. Every castle can be customised to your theme."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter castles by theme">
            {castleCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="text-sm font-semibold">
            <span className="sr-only">Sort castles</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="h-11 rounded-full border border-input bg-background px-4 text-sm"
            >
              <option value="featured">Sort: Featured</option>
              <option value="name">Sort: Name A–Z</option>
              <option value="age">Sort: Age range</option>
            </select>
          </label>
        </div>

        {visible.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="font-bold">No castles in this category yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              We can still build a custom design for this theme — just ask.
            </p>
            <Button asChild variant="default" className="mt-5">
              <Link to="/custom-designs">Request a Custom Design</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <CastleCard key={c.id} castle={c} />
            ))}
          </div>
        )}

        <div className="mt-14 rounded-3xl bg-secondary/40 p-8 text-center">
          <h2 className="text-2xl font-bold">Can't find your theme?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            We customise our castles to match any birthday theme — from Barbie pink to space
            rockets.
          </p>
          <Button asChild variant="default" size="lg" className="mt-5">
            <Link to="/custom-designs">Request a Custom Design</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
