import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { galleryCategories, type GalleryCategory } from "@/data/content";
import { castleImages } from "@/data/castles";
import castle7 from "@/assets/castle7.png";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import unicornTheme from "@/assets/unicorn theme.jpg";
import princessTheme from "@/assets/princess-theme.png";
import pawPatrol from "@/assets/paw-patrol.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Jumping Castles at Real Parties | Lulu Jump" },
      {
        name: "description",
        content:
          "Browse photos of our jumping castles at birthday parties, kids parties, school events and custom themed celebrations.",
      },
      { property: "og:title", content: "Gallery | Jumping Castles at Real Parties" },
      {
        property: "og:description",
        content: "Photos of our jumping castles, custom themes and party decorations.",
      },
    ],
  }),
  component: Gallery,
});

const images: Array<{ src: string; alt: string; category: Exclude<GalleryCategory, "All"> }> =
  [
    ...castleImages.map((src, index) => ({
      src,
      alt: `Jumping castle photo ${index + 1}`,
      category: "Jumping Castles" as const,
    })),
    { src: castle7, alt: "Jumping castle photo 7", category: "Jumping Castles" },
    { src: gallery1, alt: "Party gallery photo 1", category: "Jumping Castles" },
    { src: gallery2, alt: "Party gallery photo 2", category: "Jumping Castles" },
    { src: gallery3, alt: "Party gallery photo 3", category: "Jumping Castles" },
    { src: gallery4, alt: "Party gallery photo 4", category: "Jumping Castles" },
    { src: unicornTheme, alt: "Unicorn and rainbow themed castle", category: "Jumping Castles" },
    { src: princessTheme, alt: "Princess themed castle", category: "Jumping Castles" },
    { src: pawPatrol, alt: "Paw Patrol themed castle", category: "Jumping Castles" },
  ];

function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = images.filter((i) => filter === "All" || i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Bounce, Smiles & Confetti"
        subtitle="A look at our castles, custom themes and the parties they've been part of."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {visible.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => setLightbox(i)}
              className="block w-full break-inside-avoid overflow-hidden rounded-3xl border border-border shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/contact">Book a Castle for Your Party</Link>
          </Button>
        </div>
      </section>

      {lightbox !== null && visible[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={visible[lightbox].src}
            alt={visible[lightbox].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-3xl object-contain"
          />
        </div>
      )}
    </>
  );
}
