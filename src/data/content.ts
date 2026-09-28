/** Placeholder marketing content — easy to swap for the real thing. */

export const themes = [
  { name: "Princess", emoji: "👑", blurb: "Pinks, crowns and fairytale bunting." },
  { name: "Barbie-Inspired", emoji: "💖", blurb: "Hot pink everything, glam and bold." },
  { name: "Unicorn", emoji: "🦄", blurb: "Pastels, rainbows and a touch of sparkle." },
  { name: "Dinosaur", emoji: "🦖", blurb: "Jungle greens and prehistoric fun." },
  { name: "Superhero", emoji: "🦸", blurb: "Comic colours and hero emblems." },
  { name: "Football", emoji: "⚽", blurb: "Team colours, pitch greens and trophies." },
  { name: "Safari", emoji: "🦁", blurb: "Savanna tones and wild animal friends." },
  { name: "Mermaid", emoji: "🧜‍♀️", blurb: "Ocean blues, shells and shimmer." },
  { name: "Space", emoji: "🚀", blurb: "Galaxy purples, stars and rockets." },
  { name: "Cars & Racing", emoji: "🏎️", blurb: "Chequered flags and speedy reds." },
  { name: "Rainbow", emoji: "🌈", blurb: "Bright, happy colour from top to bottom." },
  { name: "Custom Theme", emoji: "🎨", blurb: "Tell us your idea — we'll build it." },
];

export const testimonials = [
  {
    name: "Lerato M.",
    rating: 5,
    eventType: "5th Birthday Party",
    quote:
      "Absolutely loved the jumping castle! The custom theme made my daughter's birthday so special. Setup was quick and the team was lovely.",
  },
  {
    name: "James P.",
    rating: 5,
    eventType: "School Fun Day",
    quote:
      "Booked two castles for our school event. On time, spotlessly clean and the kids didn't stop bouncing all day.",
  },
  {
    name: "Nadia S.",
    rating: 5,
    eventType: "Superhero Party",
    quote:
      "They matched the castle decor to our superhero theme perfectly. Parents kept asking where we found them!",
  },
  {
    name: "Thabo K.",
    rating: 4,
    eventType: "Family Gathering",
    quote:
      "Great value and very professional. Communication was clear from the first enquiry to collection.",
  },
];

export const faqs = [
  {
    q: "How much does it cost to hire a jumping castle?",
    a: "Pricing depends on the castle, the hire duration and your location. Our standard castles start from around R850 per day. Send us a booking request and we'll confirm an exact quote.",
  },
  {
    q: "How long can I hire a jumping castle?",
    a: "Standard hire is a full day (usually 08:00 – 17:00). Overnight and multi-day hire can be arranged on request.",
  },
  {
    q: "Do you deliver?",
    a: "Yes. We deliver throughout our service area. Delivery fees depend on distance and are confirmed with your quote.",
  },
  {
    q: "Do you set up the jumping castle?",
    a: "Always. Our team delivers, sets up, tests the castle and collects it afterwards — you don't lift a finger.",
  },
  {
    q: "Can I request a specific theme?",
    a: "Absolutely. Choose one of our existing castle designs or request a custom theme to match your party.",
  },
  {
    q: "Can you customise a jumping castle?",
    a: "Yes — customisation is our speciality. We adapt decor, colours and props to suit your theme. Submit a custom design request and we'll take it from there.",
  },
  {
    q: "How far do you deliver?",
    a: "We cover our main service area free of charge and travel further for an additional fee. Ask us about your location.",
  },
  {
    q: "How much space do I need?",
    a: "Allow roughly 1m of clearance around the castle on flat ground, plus at least 1m of access width to get equipment in. Exact sizes are listed on each castle page.",
  },
  {
    q: "What happens if it rains?",
    a: "Safety first — castles cannot be used in heavy rain or strong wind. We'll work with you to reschedule where possible.",
  },
  {
    q: "What ages are the jumping castles suitable for?",
    a: "Most of our castles suit children from about 2 to 12 years. Each castle page lists its recommended age range.",
  },
  {
    q: "How far in advance should I book?",
    a: "Two to four weeks is ideal, especially for weekends and school holidays. Last-minute requests are welcome if we have availability.",
  },
  {
    q: "Do you provide supervision?",
    a: "Adult supervision is the responsibility of the hirer. We provide clear safety guidelines at setup and can recommend supervisors on request.",
  },
];

export const steps = [
  {
    title: "Choose Your Castle",
    text: "Browse our jumping castles and pick the one that fits your space and age group.",
  },
  {
    title: "Choose Your Theme",
    text: "Keep the existing design or request a custom theme to match your celebration.",
  },
  {
    title: "Send Your Booking Request",
    text: "Fill in your event date, time and location — it takes about two minutes.",
  },
  {
    title: "Confirm Your Booking",
    text: "We check availability, confirm pricing and lock in the details with you.",
  },
  {
    title: "Enjoy Your Celebration!",
    text: "We deliver, set up and collect. All you do is watch the kids bounce.",
  },
];

export const galleryCategories = ["All", "Jumping Castles"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
