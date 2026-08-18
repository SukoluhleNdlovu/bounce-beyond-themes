import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, PartyPopper } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-party text-primary-foreground">
              <PartyPopper className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">{site.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {site.tagline}. Fun, safe and colourful jumping castles for birthdays, kids parties,
            school events and family celebrations.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Explore</h2>
          <ul className="mt-3 grid grid-cols-2 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">Get in touch</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {site.area}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {site.hours}
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. All rights reserved. Booking requests are
        confirmed by our team before they are final.
      </div>
    </footer>
  );
}
