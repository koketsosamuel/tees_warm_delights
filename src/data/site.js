// ── CG Cakes — single source of truth ─────────────────────────────────────
// Cakes-only studio. Edit business details, nav, and the cake catalogue here;
// every page reads from this file.

export const site = {
  name: "CG Cakes",
  owner: "[Owner name]",            // ⚑ placeholder — the baker's name (shown in the About signature)
  tagline: "Custom cakes & cupcakes, baked to order",
  // ⚑ All contact details below are PLACEHOLDERS — replace with the real ones.
  // Phone in international format for tel: / wa.me (no "+" or spaces), plus a pretty version to show.
  phoneIntl: "27000000000",         // ⚑ placeholder
  phonePretty: "000 000 0000",      // ⚑ placeholder
  email: "hello@cgcakes.co.za",     // ⚑ placeholder
  location: "[Your area], SA",      // ⚑ placeholder (shown in hero + footer)
  serviceArea: "[your delivery area]", // ⚑ placeholder (shown in the delivery FAQ)
  leadTime: "48–72 hours",
  since: "2021",                    // ⚑ placeholder — year you started
  social: {
    instagram: { handle: "@cgcakes", url: "https://instagram.com/cgcakes" }, // ⚑ placeholder
    tiktok:    { handle: "@cgcakes", url: "https://tiktok.com/@cgcakes" },    // ⚑ placeholder
    facebook:  { handle: "CG Cakes", url: "#" },                             // ⚑ placeholder — paste your Facebook page URL
  },
  hours: [
    { d: "Mon – Fri", h: "8:00 – 18:00" },
    { d: "Saturday",  h: "8:00 – 14:00" },
    { d: "Sunday",    h: "Closed" },
  ],
};

// Convenience helpers for WhatsApp links.
export const waBase = `https://wa.me/${site.phoneIntl}`;
export const waLink = (msg) => `${waBase}?text=${encodeURIComponent(msg)}`;
export const telLink = `tel:+${site.phoneIntl}`;

// Primary navigation (used by Nav + Footer + mobile menu).
export const nav = [
  { label: "Home",    href: "/" },
  { label: "Cakes",   href: "/menu" },
  { label: "About",   href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ",     href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// Cake categories (chips on the Cakes page, in display order).
export const cakeCats = [
  { id: "all",         label: "All cakes" },
  { id: "celebration", label: "Celebration & birthday" },
  { id: "graduation",  label: "Graduation" },
  { id: "bento",       label: "Bento cakes" },
  { id: "cupcakes",    label: "Cupcakes" },
];

// The cake catalogue — every entry is a real CG Cakes design.
// `img` paths are absolute (work on every page). Photos live in /public/img.
export const cakes = [
  // ── Celebration & birthday ──
  {
    cat: "celebration", catLabel: "Celebration · Floral", name: "Floral Celebration Cake",
    img: "/img/cake-floral-pink.jpg",
    desc: "Smooth buttercream in soft dusty tones, finished with sugar pearls, gold leaf, and a crown of fresh-look blooms and butterflies. A romantic cake for the big milestones.",
  },
  {
    cat: "celebration", catLabel: "Celebration · Milestone", name: "Milestone Birthday Cake",
    img: "/img/cake-milestone-gold.jpg",
    desc: "An elegant single-tier cake dressed in gold leaf, metallic spheres, and oversized florals, with a hand-finished gold message topper. Made for the 21sts, 40ths, 60ths, and beyond.",
  },
  {
    cat: "celebration", catLabel: "Celebration · Themed", name: "Number & Themed Birthday Cake",
    img: "/img/cake-number-pink.jpg",
    desc: "Tall buttercream cakes built around your theme — colours, age number, name, and a pile of hand-made treats and toppers on top. Send us the party and we'll match it.",
  },
  {
    cat: "celebration", catLabel: "Celebration · Christening", name: "Christening & Naming Cake",
    img: "/img/cake-christening.jpg",
    desc: "Gentle pastel buttercream with a gold cross, pearls, and soft florals. A quietly beautiful cake for christenings, naming days, and first communions.",
  },

  // ── Graduation ──
  {
    cat: "graduation", catLabel: "Graduation", name: "Themed Graduation Cake",
    img: "/img/cake-graduation-blueprint.jpg",
    desc: "Edible-print and hand-painted cakes built around the degree — architecture plans, medicine, law, you name it — finished with a graduation cap and scroll.",
  },
  {
    cat: "graduation", catLabel: "Graduation", name: "Classic Graduation Cake",
    img: "/img/cake-graduation-elroi.jpg",
    desc: "Black, white, and gold buttercream with a balloon cluster, cap, diploma, and your message or favourite verse piped across the front. Smart and celebratory.",
  },
  {
    cat: "graduation", catLabel: "Graduation", name: "Floral Graduation Cake",
    img: "/img/cake-graduation-proud.jpg",
    desc: "A softer take — ivory buttercream, gold leaf, sugar flowers, a cap and scroll, and a heartfelt message. “We are so proud of you,” in cake form.",
  },

  // ── Bento ──
  {
    cat: "bento", catLabel: "Bento set", name: "Bento Cake & Cupcake Set",
    img: "/img/bento-tee.jpg",
    desc: "A palm-sized cake-for-one or two boxed with matching piped cupcakes and butterfly toppers. Hand-lettered with a name or short message — the perfect little surprise.",
  },

  // ── Cupcakes ──
  {
    cat: "cupcakes", catLabel: "Cupcakes", name: "Strawberry Cupcakes",
    img: "/img/cupcakes-strawberry.jpg",
    desc: "Soft cupcakes piled high with swirled buttercream, sugar strawberries, and tiny blossoms. Boxed by the half-dozen or dozen for parties and gifting.",
  },
  {
    cat: "cupcakes", catLabel: "Cupcakes", name: "Gold Celebration Cupcakes",
    img: "/img/cupcakes-gold.jpg",
    desc: "Caramel-gold buttercream, edible pearls, and gold accents, with a personalised message disc in the box. Our go-to for grown-up birthdays and corporate orders.",
  },
  {
    cat: "cupcakes", catLabel: "Cupcakes", name: "Garden Green Cupcakes",
    img: "/img/cupcakes-green.jpg",
    desc: "Lush green and sage buttercream piped in textured swirls with pearls and gold detail. A fresh, on-trend box for showers and garden parties.",
  },
];

// Gallery — real CG Cakes photos.
export const gallery = [
  "/img/cake-floral-pink.jpg",
  "/img/cake-milestone-gold.jpg",
  "/img/cake-number-pink.jpg",
  "/img/cake-christening.jpg",
  "/img/cake-graduation-blueprint.jpg",
  "/img/cake-graduation-elroi.jpg",
  "/img/cake-graduation-proud.jpg",
  "/img/bento-tee.jpg",
  "/img/cupcakes-strawberry.jpg",
  "/img/cupcakes-gold.jpg",
  "/img/cupcakes-green.jpg",
];

// Testimonials — cake-focused.
export const testimonials = [
  {
    t: "The red velvet was unreal. Moist, not too sweet, and the cream-cheese frosting was just right. Already ordered again for my husband's birthday.",
    name: "Zahra K.", loc: "Mayfair", av: "Z",
  },
  {
    t: "CG Cakes made my daughter's number cake for her 1st birthday and it stole the whole party. Everyone asked where it was from.",
    name: "Rashaad D.", loc: "Lenasia", av: "R",
  },
  {
    t: "Ordered two dozen cupcakes for the office and they vanished before tea break. Beautifully piped and packed. Will be back.",
    name: "Aaliyah M.", loc: "Brakpan", av: "A",
  },
];

// FAQ — cake-specific.
export const faqs = [
  {
    q: "How do I order a cake?",
    a: "The easiest way is WhatsApp — tell us the flavour, size (how many people), the date, and the occasion. You can also call or fill in the contact form. We'll reply with a quote and confirm everything before you pay.",
  },
  {
    q: "How much notice do you need?",
    a: "For standard cakes and cupcakes, 48–72 hours. For detailed custom and themed cakes (graduation, christening, large celebration cakes), please give us at least a week so we can design and plan properly.",
  },
  {
    q: "Can I get a custom design?",
    a: "Absolutely — custom is what we love most. Send us your colours, theme, and a picture or two for inspiration. We'll suggest a design, flavours, and a size to suit your headcount and budget.",
  },
  {
    q: "What sizes and flavours can I choose?",
    a: "Cakes range from a 15cm round (serves ~8) up to large single-tier cakes for big events, plus bento cakes and cupcakes by the box. Most flavours can be mixed across layers. Tell us your guest count and we'll recommend a size.",
  },
  {
    q: "Do you deliver?",
    a: `Yes — we deliver around ${site.serviceArea} for a small fee depending on distance. Collection from our kitchen is free. Larger and more detailed cakes are delivered with care to keep them safe in transit.`,
  },
  {
    q: "How do I pay, and is a deposit needed?",
    a: "We accept EFT and cash on collection. A 50% deposit secures custom and large celebration orders; the balance is due on collection or delivery. Full bank details are shared when we confirm.",
  },
  {
    q: "Can you cater for halaal or allergies?",
    a: "All our ingredients are halaal-friendly. We bake with nuts in the kitchen, so for nut or other allergies please tell us up front and we'll advise on what we can safely make.",
  },
];
