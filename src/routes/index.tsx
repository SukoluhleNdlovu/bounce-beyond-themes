import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  PartyPopper,
  Cake,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CastleCard } from "@/components/site/CastleCard";
import { Balloons, Confetti } from "@/components/site/Decor";
import { castles } from "@/data/castles";
import { themes, testimonials, steps } from "@/data/content";
import heroImage from "@/assets/hero-castle.jpg";
import partyDecor from "@/assets/party-decor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jumping Castle Hire for Birthdays & Kids Parties | Bounce & Beyond" },
      {
        name: "description",
        content:
          "Hire fun, safe jumping castles for birthdays, kids parties and events — or request a custom castle design to match your party theme. Delivery and setup included.",
      },
      {
        property: "og:title",
        content: "Jumping Castle Hire for Birthdays & Kids Parties | Bounce & Beyond",
      },
      {
        property: "og:description",
        content:
          "Colourful jumping castles for birthdays and events, with custom designs made to match your theme.",
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  {
    icon: PartyPopper,
    title: "Fun for Every Celebration",
    text: "Birthdays, school days, church events and family gatherings — we bring the bounce.",
  },
  {
    icon: Sparkles,
    title: "Custom Designs Available",
    text: "We style your castle to match your party theme, colours and decorations.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    text: "Clean, well-maintained castles with safety netting and proper anchoring every time.",
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    text: "We deliver, set up, test and collect — you just enjoy the party.",
  },
  {
    icon: Cake,
    title: "Perfect for Birthdays",
    text: "The easiest way to make a birthday feel unforgettable for kids of all ages.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        <Balloons />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:px-8">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunshine/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sunshine-foreground">
              <Sparkles className="h-4 w-4" /> Custom themes available
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Make Their Special Day <span className="text-party">Unforgettable!</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Fun, colourful jumping castles for birthdays, parties and special events — with
              custom designs made to match your theme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="default" size="xl">
                <Link to="/castles">View Jumping Castles</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/custom-designs">Request a Custom Design</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-rise">
            <div className="overflow-hidden rounded-[2rem] border-4 border-card shadow-playful">
              <img
                src={heroImage}
                alt="Colourful jumping castle set up in a sunny garden for a children's birthday party"
                width={1600}
                height={1100}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 animate-soft-bounce rounded-2xl bg-card px-4 py-3 shadow-soft">
              <p className="text-sm font-bold">6 castles ready to bounce</p>
              <p className="text-xs text-muted-foreground">Delivery & setup included</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Party planning made easy"
          subtitle="Everything you need for a stress-free celebration, handled by a team that loves a good party."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-party text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASTLES */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our castles"
            title="Featured Jumping Castles"
            subtitle="Six colourful castles to choose from — every one of them can be dressed up to match your theme."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {castles.map((c) => (
              <CastleCard key={c.id} castle={c} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/castles">
                View All Jumping Castles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CUSTOM THEMES */}
      <section className="relative overflow-hidden py-16">
        <Confetti />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our speciality"
            title="Dream It. Theme It. Bounce In It!"
            subtitle="Have a specific birthday theme in mind? We can customise the look and design of your jumping castle to match your celebration."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {themes.slice(0, 8).map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl">{t.emoji}</span>
                <h3 className="mt-2 text-base font-bold">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="default" size="xl">
              <Link to="/custom-designs">Create My Custom Theme</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Four easy steps to bounce" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.slice(0, 4).map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-card p-6 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sunny font-display text-lg font-bold text-sunshine-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">See the full process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Birthday inspiration"
          title="Parties we've bounced at"
          subtitle="Castles, decorations and happy faces — a peek at what your celebration could look like."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[castles[0], castles[2], castles[4], { images: [partyDecor], name: "Party decorations" }]
            .filter(Boolean)
            .map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <img
                  src={(item as { images: string[] }).images[0]}
                  alt={`${(item as { name: string }).name} at a children's birthday party`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Happy parents" title="What our customers say" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-card p-6 shadow-soft">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-sunshine" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-muted-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm font-bold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {t.eventType}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-party py-16 text-primary-foreground">
        <Balloons />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Make Your Party Unforgettable?
          </h2>
          <p className="mt-4 text-base opacity-90">
            Choose your favourite jumping castle or let us create a design that matches your
            celebration.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="xl">
              <Link to="/castles">Browse Castles</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-background">
              <Link to="/custom-designs">Request a Custom Design</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
