/**
 * Central business information — replace these placeholders with the real
 * business details. Everything on the site reads from here.
 */
export const site = {
  name: "Lulu Jumps",
  tagline: "Jumping Castle Hire & Custom Party Designs",
  phone: "+27 82 000 0000",
  phoneHref: "tel:+27820000000",
  whatsapp: "0749099030",
  whatsappMessage: "Hi! I'd like to enquire about hiring a jumping castle.",
  email: "hello@lulujump.co.za",
  area: "Gauteng",
  hours: "Mon – Sun, 08:00 – 19:00",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}&phone=${encodeURIComponent(site.phone)}`;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/custom-designs", label: "Custom Designs" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;
