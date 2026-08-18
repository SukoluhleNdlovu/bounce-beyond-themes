import princess from "@/assets/castle-princess.jpg";
import superhero from "@/assets/castle-superhero.jpg";
import unicorn from "@/assets/castle-unicorn.jpg";
import dinosaur from "@/assets/castle-dinosaur.jpg";
import safari from "@/assets/castle-safari.jpg";
import rainbow from "@/assets/castle-rainbow.jpg";

export type CastleCategory =
  | "Princess"
  | "Superhero"
  | "Animals"
  | "Sports"
  | "Fantasy"
  | "Other";

export interface Castle {
  id: string;
  /** URL slug used on the details page: /castles/$slug */
  slug: string;
  name: string;
  theme: string;
  category: CastleCategory;
  shortDescription: string;
  description: string;
  images: string[];
  /** Display price per day. Use "Request a Quote" if you prefer quoting. */
  price: string;
  dimensions: string;
  capacity: string;
  ageRange: string;
  available: boolean;
  features: string[];
  setupRequirements: string[];
  included: string[];
  customisable: boolean;
}

/**
 * ▼ PLACEHOLDER DATA ▼
 * Replace the six entries below with the real castles. Adding a 7th, 8th…
 * castle only requires appending another object here — every page, filter
 * and dropdown is generated from this array.
 */
export const castles: Castle[] = [
  {
    id: "1",
    slug: "princess-castle",
    name: "Princess Castle",
    theme: "Princess & Fairytale",
    category: "Princess",
    shortDescription: "A pretty-in-pink fairytale castle with turrets and a royal entrance.",
    description:
      "Our Princess Castle turns any garden into a fairytale kingdom. Soft pink panels, sparkling turrets and a royal archway entrance make it the favourite for princess-themed birthdays. Optional bunting and crown decorations available.",
    images: [princess],
    price: "From R850 / day",
    dimensions: "4m x 4m x 3.5m",
    capacity: "Up to 8 children at a time",
    ageRange: "2 – 10 years",
    available: true,
    features: ["Safety netting", "Soft landing entrance", "Shade roof", "Blower included"],
    setupRequirements: [
      "Flat 5m x 5m area, grass or paving",
      "Power point within 20m (or generator on request)",
      "Clear access of at least 1m width",
    ],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
  {
    id: "2",
    slug: "superhero-castle",
    name: "Superhero Castle",
    theme: "Superhero & Action",
    category: "Superhero",
    shortDescription: "Bold red and blue action castle with a built-in slide.",
    description:
      "Calling all little heroes! This bold red and blue castle features a built-in slide and comic-style artwork — perfect for superhero parties and high-energy celebrations.",
    images: [superhero],
    price: "From R950 / day",
    dimensions: "5m x 4m x 3.5m",
    capacity: "Up to 10 children at a time",
    ageRange: "3 – 12 years",
    available: true,
    features: ["Built-in slide", "Safety netting", "Reinforced seams", "Blower included"],
    setupRequirements: [
      "Flat 6m x 5m area",
      "Power point within 20m",
      "Clear access of at least 1m width",
    ],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
  {
    id: "3",
    slug: "unicorn-castle",
    name: "Unicorn Castle",
    theme: "Unicorn & Rainbow",
    category: "Fantasy",
    shortDescription: "Pastel unicorn castle with a rainbow arch and magical details.",
    description:
      "Pastel pinks, magical rainbows and a friendly unicorn arch. A dreamy centrepiece for unicorn, rainbow and pastel-themed birthday parties.",
    images: [unicorn],
    price: "From R900 / day",
    dimensions: "4.5m x 4m x 3.5m",
    capacity: "Up to 8 children at a time",
    ageRange: "2 – 10 years",
    available: true,
    features: ["Rainbow arch", "Safety netting", "Shade roof", "Blower included"],
    setupRequirements: ["Flat 5.5m x 5m area", "Power point within 20m", "1m access width"],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
  {
    id: "4",
    slug: "dinosaur-castle",
    name: "Dinosaur Castle",
    theme: "Dinosaur & Prehistoric",
    category: "Animals",
    shortDescription: "Roar-some jungle-green castle with dinosaur characters.",
    description:
      "A prehistoric adventure for little explorers. Jungle-green panels with friendly dinosaur characters and plenty of bouncing space.",
    images: [dinosaur],
    price: "From R850 / day",
    dimensions: "4m x 4m x 3m",
    capacity: "Up to 8 children at a time",
    ageRange: "3 – 11 years",
    available: true,
    features: ["Mesh side panels", "Safety netting", "Soft entrance step", "Blower included"],
    setupRequirements: ["Flat 5m x 5m area", "Power point within 20m", "1m access width"],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
  {
    id: "5",
    slug: "safari-adventure-castle",
    name: "Safari Adventure Castle",
    theme: "Safari & Jungle",
    category: "Animals",
    shortDescription: "Big-five safari castle with lion, giraffe and zebra artwork.",
    description:
      "Take the party on safari. Bright savanna artwork, a friendly lion at the entrance and a roomy bounce area for wild adventures.",
    images: [safari],
    price: "From R950 / day",
    dimensions: "5m x 4.5m x 3.5m",
    capacity: "Up to 10 children at a time",
    ageRange: "2 – 12 years",
    available: true,
    features: ["Extra-large bounce area", "Safety netting", "Shade roof", "Blower included"],
    setupRequirements: ["Flat 6m x 5.5m area", "Power point within 20m", "1m access width"],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
  {
    id: "6",
    slug: "rainbow-party-castle",
    name: "Rainbow Party Castle",
    theme: "Rainbow & Classic Party",
    category: "Other",
    shortDescription: "Bright all-rounder with a slide — suits absolutely any theme.",
    description:
      "Our most versatile castle. Bright rainbow stripes and a fun slide make it a great fit for any celebration, and it is the easiest castle to dress up in your own colours and decorations.",
    images: [rainbow],
    price: "From R900 / day",
    dimensions: "5m x 4m x 3.5m",
    capacity: "Up to 10 children at a time",
    ageRange: "2 – 12 years",
    available: true,
    features: ["Built-in slide", "Safety netting", "Easy to decorate", "Blower included"],
    setupRequirements: ["Flat 6m x 5m area", "Power point within 20m", "1m access width"],
    included: ["Delivery & setup", "Blower and extension lead", "Safety mats", "Collection"],
    customisable: true,
  },
];

export const castleCategories: Array<CastleCategory | "All"> = [
  "All",
  "Princess",
  "Superhero",
  "Animals",
  "Sports",
  "Fantasy",
  "Other",
];

export const getCastleBySlug = (slug: string) => castles.find((c) => c.slug === slug);
