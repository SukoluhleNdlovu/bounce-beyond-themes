import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, ShieldCheck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { castleImages } from "@/data/castles";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lulu Jump Jumping Castle Hire" },
      {
        name: "description",
        content:
          "We're a family-run jumping castle hire business creating memorable children's parties with clean, safe castles and custom party themes.",
      },
      { property: "og:title", content: "About Us | Lulu Jump Jumping Castle Hire" },
      {
        property: "og:description",
        content: "Family-run jumping castle hire focused on safe, creative and memorable parties.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Smile,
    title: "Fun first",
    text: "Every decision we make starts with: will the kids love it?",
  },
  {
    icon: ShieldCheck,
    title: "Safety & quality",
    text: "Clean, inspected and properly anchored castles, every single time.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    text: "Custom themes and decor that make a party feel personal.",
  },
  {
    icon: Heart,
    title: "Service you can trust",
    text: "Clear communication, on-time delivery, friendly faces.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We're in the business of happy memories"
        subtitle={`${site.name} brings colourful, safe and creative jumping castles to families across ${site.area}.`}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border-4 border-card shadow-playful">
          <img
            src={castleImages[1]}
            alt="Jumping castle photographed outdoors"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">Why We Started</h2>
          <p className="mt-4 text-muted-foreground">
            It started with one birthday party and one very excited group of children. We noticed
            how much a jumping castle changed the whole day, and how few companies were willing to
            go the extra mile to match the castle to the party's theme.
          </p>
          <p className="mt-4 text-muted-foreground">
            So we set out to do exactly that: reliable, spotless jumping castles delivered on time,
            plus the creativity to style them around princesses, superheroes, dinosaurs or whatever
            the birthday child is dreaming about this year.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today we look after birthdays, school events, church days and family gatherings and we
            still get just as excited about every single setup.
          </p>
          <Button asChild variant="default" size="lg" className="mt-6">
            <Link to="/contact">Let's plan your party</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we care about" title="Our promise to your family" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-card p-6 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-party text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
