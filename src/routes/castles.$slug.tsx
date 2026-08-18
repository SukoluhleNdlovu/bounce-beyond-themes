import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Ruler, Users, Cake, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { castles, getCastleBySlug } from "@/data/castles";
import { site } from "@/data/site";

export const Route = createFileRoute("/castles/$slug")({
  loader: ({ params }) => {
    const castle = getCastleBySlug(params.slug);
    if (!castle) throw notFound();
    return { castle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Castle not found | Bounce & Beyond" }, { name: "robots", content: "noindex" }],
      };
    }
    const { castle } = loaderData;
    const title = `${castle.name} — Jumping Castle Hire | Bounce & Beyond`;
    return {
      meta: [
        { title },
        { name: "description", content: castle.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: castle.shortDescription },
      ],
    };
  },
  component: CastleDetail,
});

function CastleDetail() {
  const { castle } = Route.useLoaderData();
  const others = castles.filter((c) => c.slug !== castle.slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/castles" className="hover:text-primary">
            Jumping Castles
          </Link>{" "}
          / <span className="text-foreground">{castle.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border-4 border-card shadow-playful">
              <img
                src={castle.images[0]}
                alt={`${castle.name} jumping castle — ${castle.theme} theme`}
                width={1024}
                height={768}
                className="w-full object-cover"
              />
            </div>
            {castle.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {castle.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${castle.name} view ${i + 2}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="inline-block rounded-full bg-sunshine/50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-sunshine-foreground">
              {castle.theme}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{castle.name}</h1>
            <p className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {castle.available ? "Available for booking" : "Currently booked out"}
            </p>
            <p className="mt-4 text-muted-foreground">{castle.description}</p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-muted/60 p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                  <Ruler className="h-4 w-4" /> Dimensions
                </dt>
                <dd className="mt-1 font-semibold">{castle.dimensions}</dd>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                  <Cake className="h-4 w-4" /> Suitable ages
                </dt>
                <dd className="mt-1 font-semibold">{castle.ageRange}</dd>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                  <Users className="h-4 w-4" /> Recommended children
                </dt>
                <dd className="mt-1 font-semibold">{castle.capacity}</dd>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <dt className="text-xs font-bold uppercase text-muted-foreground">Rental price</dt>
                <dd className="mt-1 font-semibold text-primary">{castle.price}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ castle: castle.slug }}>
                  Hire This Castle
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold">Features</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {castle.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold">Setup requirements</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {castle.setupRequirements.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold">What's included</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {castle.included.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl bg-party p-8 text-center text-primary-foreground">
          <Sparkles className="mx-auto h-8 w-8" />
          <h2 className="mt-3 text-2xl font-bold">Want a Different Theme?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm opacity-90">
            We can restyle this castle with decor and colours that match your party theme.
          </p>
          <Button asChild variant="sunny" size="lg" className="mt-5">
            <Link to="/custom-designs">Request Custom Design</Link>
          </Button>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">You might also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.id}
                to="/castles/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
              >
                <img
                  src={c.images[0]}
                  alt={`${c.name} jumping castle`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.theme}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
