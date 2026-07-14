export type Testimonial = {
  name: string;
  role: string;
  company: string;
  industry: string;
  project: string;
  rating: number;
  quote: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Okoro",
    role: "Managing Partner",
    company: "Aurelia Estates",
    industry: "Real Estate",
    project: "Luxury property website",
    rating: 5,
    quote:
      "Michael understood the assignment instantly. Enquiries from serious buyers more than doubled within two months of launch.",
    accent: "#c8a35b",
  },
  {
    name: "Grace Uche",
    role: "Product Lead",
    company: "Lumen",
    industry: "Fintech",
    project: "Personal finance app UI",
    rating: 5,
    quote:
      "He designed something rare in fintech: an app that feels kind. Our week-one retention tripled. A genuine product thinker.",
    accent: "#22c55e",
  },
  {
    name: "Amara Bello",
    role: "Owner",
    company: "Saveur Bistro",
    industry: "Hospitality",
    project: "Online ordering system",
    rating: 5,
    quote:
      "We took back control of our orders and our margins. The ordering flow he built is faster than any app we tried.",
    accent: "#f97316",
  },
  {
    name: "Prof. Samuel Adeyemi",
    role: "Registrar",
    company: "Northgate University",
    industry: "Education",
    project: "Management dashboard",
    rating: 5,
    quote:
      "For the first time, leadership sees the whole institution on one screen. Report preparation went from days to minutes.",
    accent: "#8b5cf6",
  },
  {
    name: "Fiona Sterling",
    role: "Senior Partner",
    company: "Sterling & Vale",
    industry: "Legal",
    project: "Corporate law firm site",
    rating: 5,
    quote:
      "Our new site opens doors before the first meeting. Michael captured our authority without a hint of arrogance.",
    accent: "#b45309",
  },
  {
    name: "Marcus Idris",
    role: "Founder",
    company: "Forge Coaching",
    industry: "Fitness",
    project: "Coaching landing page",
    rating: 5,
    quote:
      "I filled my entire roster in three weeks. The page converts better than anything I've ever run. Worth every naira.",
    accent: "#ef4444",
  },
  {
    name: "Zainab Musa",
    role: "Creative Director",
    company: "Atelier Noir",
    industry: "Fashion",
    project: "E-commerce storefront",
    rating: 5,
    quote:
      "The store finally feels like us. Conversion climbed 61% and returns dropped because the experience sets clear expectations.",
    accent: "#e11d48",
  },
  {
    name: "Dr. Ngozi Eze",
    role: "Director of Operations",
    company: "Meridian Hospital",
    industry: "Healthcare",
    project: "Hospital website",
    rating: 5,
    quote:
      "Patients tell us the site is a relief to use, and front-desk calls dropped 40%. Michael designs with real empathy.",
    accent: "#0ea5e9",
  },
  {
    name: "Ibrahim Sani",
    role: "Head of Product",
    company: "Wander",
    industry: "Travel",
    project: "Booking platform UX",
    rating: 5,
    quote:
      "He turned our most complex flow into our most loved feature. Booking completion jumped 52%. A rare blend of designer and strategist.",
    accent: "#0891b2",
  },
];
