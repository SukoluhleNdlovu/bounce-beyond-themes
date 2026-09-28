import { createFileRoute, Link } from "@tanstack/react-router";
import { Palette, Wand2, Truck, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CustomDesignForm } from "@/components/site/CustomDesignForm";
import { themes } from "@/data/content";
import { castles } from "@/data/castles";
import pawPatrol from "@/assets/paw-patrol.png";
import princessTheme from "@/assets/princess-theme.png";
import unicornTheme from "@/assets/unicorn theme.jpg";

export const Route = createFileRoute("/custom-designs")({
  head: () => ({
    meta: [
      { title: "Custom Jumping Castle Designs for Any Party Theme | Lulu Jump" },
      {
        name: "description",
        content:
          "Request a custom jumping castle design to match your birthday theme — princess, unicorn, superhero, dinosaur, safari, mermaid, space and more.",
      },
      {
        property: "og:title",
        content: "Custom Jumping Castle Designs for Any Party Theme",
      },
      {
        property: "og:description",
        content: "We customise jumping castle decor and colours to match your celebration theme.",
      },
    ],
  }),
  component: CustomDesigns,
});

const howCustom = [
  {
    icon: MessagesSquare,
    title: "Tell us your theme",
    text: "Share your party theme, colours and any inspiration pictures you love.",
  },
  {
    icon: Palette,
    title: "We design the look",
    text: "We suggest a castle base and a decor plan: colours, props, bunting and signage.",
  },
  {
    icon: Wand2,
    title: "You approve it",
    text: "We confirm the final look, availability and pricing before anything is booked.",
  },
  {
    icon: Truck,
    title: "We deliver the magic",
    text: "Your themed castle arrives set up and ready to bounce on the big day.",
  },
];

const customDesignImages: Record<string, string> = {
  "princess-castle": princessTheme,
  "unicorn-castle": unicornTheme,
  "superhero-castle": pawPatrol,
};

function CustomDesigns() {
  return (
    <>
      <PageHero
        eyebrow="Our speciality"
        title="Your Theme. Your Castle. Your Celebration."
        subtitle="Don't settle for a standard castle. We customise the decor, colours and styling of our jumping castles so they match your party theme perfectly."
      >
        <Button asChild variant="default" size="xl">
          <a href="#request">Start My Custom Design</a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How customisation works" title="From your idea to their big day" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howCustom.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-party text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Theme gallery"
            title="Popular themes we create"
            subtitle="These are just the favourites if it isn't on the list, we'll still make it happen."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {themes.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-base font-bold">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start with a base castle"
          title="One castle, endless looks"
          subtitle="Pick any castle as your starting point we transform the styling around it."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {castles.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to="/castles/$slug"
              params={{ slug: c.slug }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
            >
              <img
                src={customDesignImages[c.slug] ?? c.images[0]}
                alt={`${c.name} available for custom theme styling`}
                loading="lazy"
                width={1024}
                height={768}
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

      <section id="request" className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <SectionHeading
          eyebrow="Custom request"
          title="Tell us about your dream castle"
          subtitle="Fill in as much as you can we'll do the rest."
        />
        <div className="mt-8">
          <CustomDesignForm />
        </div>
      </section>
    </>
  );
}
