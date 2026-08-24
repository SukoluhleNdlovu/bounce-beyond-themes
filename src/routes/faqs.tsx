import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Jumping Castle Hire FAQs | Bounce & Beyond" },
      {
        name: "description",
        content:
          "Answers to common questions about jumping castle hire: pricing, delivery, setup, space needed, custom themes, wet weather and booking lead times.",
      },
      { property: "og:title", content: "Jumping Castle Hire FAQs | Bounce & Beyond" },
      {
        property: "og:description",
        content: "Pricing, delivery, setup, space, custom themes and booking questions answered.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        subtitle="Everything parents and event organisers usually ask before booking a jumping castle."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-bold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-3xl bg-secondary/40 p-8 text-center">
          <h2 className="text-2xl font-bold">Still have a question?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We're happy to help — send us a message and we'll get back to you.
          </p>
          <Button asChild variant="default" size="lg" className="mt-5">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
