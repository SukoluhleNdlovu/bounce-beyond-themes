import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { steps } from "@/data/content";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Jumping Castle Hire Works | Lulu Jumps" },
      {
        name: "description",
        content:
          "Hiring a jumping castle is simple: choose your castle, choose your theme, send a booking request, we confirm, then deliver and set up for your event.",
      },
      { property: "og:title", content: "How Jumping Castle Hire Works | Lulu Jumps" },
      {
        property: "og:description",
        content: "Five easy steps from browsing castles to bouncing at your party.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The process"
        title="How It Works"
        subtitle="Hiring a jumping castle should be the easy part of party planning. Here's exactly what happens."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-party font-display text-xl font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-3xl bg-secondary/40 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready when you are</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Remember: sending a request doesn't confirm your booking. We'll check availability and
            come back to you personally.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="default" size="lg">
              <Link to="/castles">Browse Castles</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request a Booking</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
