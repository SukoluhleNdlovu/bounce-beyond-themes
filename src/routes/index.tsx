import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CastleCard } from "@/components/site/CastleCard";
import { Balloons, Confetti } from "@/components/site/Decor";
import castle6 from "@/assets/castle6.png";
import funIllustr from "@/assets/fun-illustr.jpg";
import customDesignIllustr from "@/assets/custom-design-illustr.png";
import safeReliableIllustr from "@/assets/safe-reliable-illustr.png";
import deliverySafetyIllustr from "@/assets/delivery-safety-illustr.png";
import perfectBirthdayIllustr from "@/assets/perfect-birthday-illustr.png";
import { castleImages, castles } from "@/data/castles";
import { themes, steps } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LULU JUMPS EVENTS" },
      {
        name: "description",
        content:
          "Hire fun, safe jumping castles for birthdays, kids parties and events — or request a custom castle design to match your party theme. Delivery and setup included.",
      },
      {
        property: "og:title",
        content: "LULU JUMPS EVENTS",
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
    image: funIllustr,
    title: "Fun for Every Celebration",
    text: "Birthdays, school days, church events and family gatherings we bring the bounce.",
  },
  {
    image: customDesignIllustr,
    title: "Custom Designs Available",
    text: "We style your castle to match your party theme, colours and decorations.",
  },
  {
    image: safeReliableIllustr,
    title: "Safe & Reliable",
    text: "Clean, well-maintained castles with safety netting and proper anchoring every time.",
  },
  {
    image: deliverySafetyIllustr,
    title: "Delivery & Setup",
    text: "We deliver, set up, test and collect you just enjoy the party.",
  },
  {
    image: perfectBirthdayIllustr,
    title: "Perfect for Birthdays",
    text: "The easiest way to make a birthday feel unforgettable for kids of all ages.",
  },
];

const featuredCastleNames: Record<string, string> = {
  "unicorn-castle": "Bouncy Castle",
  "dinosaur-castle": "Moonwalk",
  "safari-adventure-castle": "Bubble House",
};

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
              Make Their Special Day <span className="text-sunshine">Unforgettable!</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Fun, colourful jumping castles for birthdays, parties and special events with custom
              designs made to match your theme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="default" size="xl">
                <Link to="/gallery">See Party Ideas</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/custom-designs">Request a Custom Design</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-rise">
            <div className="overflow-hidden rounded-[2rem] border-4 border-card shadow-playful">
              <img
                src={castle6}
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
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-contain [-webkit-mask-image:radial-gradient(ellipse_at_center,black_68%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_68%,transparent_100%)]"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
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
            subtitle="Four colourful castles to choose from — every one of them can be dressed up to match your theme."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {castles
              .filter((c) => c.slug !== "superhero-castle" && c.slug !== "rainbow-party-castle")
              .map((c) => (
              <CastleCard
                key={c.id}
                castle={{ ...c, name: featuredCastleNames[c.slug] ?? c.name }}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/gallery">
                See Party Inspiration <ArrowRight className="h-4 w-4" />
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
                <h3 className="text-base font-bold">{t.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{t.blurb}</p>
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
          subtitle="Castles, decorations and happy faces a peek at what your celebration could look like."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {castleImages.map((image, i) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl border border-border shadow-soft"
            >
              <img
                src={image}
                alt={`Jumping castle photo ${i + 1}`}
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white py-16 text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,200,82,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,122,162,0.18),_transparent_25%)]" />
        <div className="absolute left-10 top-10 h-20 w-20 rounded-full border-4 border-pink-200 bg-pink-50/80" />
        <div className="absolute right-16 top-16 h-14 w-14 rotate-12 rounded-[30%] border-4 border-yellow-200 bg-yellow-50/80" />
        <div className="absolute bottom-10 left-1/4 h-3 w-3 rounded-full bg-pink-300" />
        <div className="absolute bottom-16 right-1/4 h-3 w-3 rounded-full bg-yellow-300" />
        <div className="absolute bottom-12 left-2/3 h-2 w-2 rounded-full bg-purple-300" />
        <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-pink-100 bg-white/90 px-6 py-12 shadow-[0_20px_60px_rgba(217,70,239,0.08)] sm:px-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Make Your Party Unforgettable?</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Choose your favourite style or let us create a custom look that matches your
            celebration perfectly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="xl">
              <Link to="/gallery">See Party Ideas</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-pink-200 bg-white text-foreground">
              <Link to="/custom-designs">Request a Custom Design</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
