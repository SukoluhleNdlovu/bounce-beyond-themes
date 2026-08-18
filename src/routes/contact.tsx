import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
import { site, whatsappLink } from "@/data/site";

const searchSchema = z.object({
  castle: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Jumping Castle | Contact Bounce & Beyond" },
      {
        name: "description",
        content:
          "Request a jumping castle booking for your birthday party or event. Send us your date, location and theme and we'll confirm availability and pricing.",
      },
      { property: "og:title", content: "Book a Jumping Castle | Contact Bounce & Beyond" },
      {
        property: "og:description",
        content: "Send a booking request for your birthday party or event jumping castle hire.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { castle } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Book now"
        title="Request Your Booking"
        subtitle="Tell us about your event and we'll come back to you with availability and a quote. Booking requests are confirmed by our team — nothing is reserved until we reply."
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <BookingForm defaultCastle={castle} />

        <aside className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-lg font-bold">Prefer to chat?</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={site.phoneHref} className="font-semibold hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:text-primary"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${site.email}`} className="font-semibold hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{site.area}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-secondary/40 p-6 text-sm text-muted-foreground">
            <h2 className="font-display text-base font-bold text-foreground">Good to know</h2>
            <ul className="mt-3 space-y-2">
              <li>• Book 2–4 weeks ahead for weekends and school holidays.</li>
              <li>• Delivery, setup and collection are included in your quote.</li>
              <li>• Custom themes need a little more notice — the sooner the better.</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
