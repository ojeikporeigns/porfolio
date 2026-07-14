import type { MockKind } from "@/components/mock/mock-visual";

export type GalleryItem = { kind: MockKind; label: string; seed: number };
export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  discipline: "Web Design" | "Development" | "UI/UX" | "Dashboard" | "Mobile" | "Brand";
  client: string;
  year: string;
  tagline: string;
  accent: string;
  accent2: string;
  cover: MockKind;
  seed: number;
  overview: string;
  problem: string;
  research: string[];
  solution: string;
  process: { title: string; body: string }[];
  tech: string[];
  challenges: string;
  results: Metric[];
  gallery: GalleryItem[];
  feedback: { quote: string; name: string; role: string };
  links: { live: string; github: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "luxury-real-estate",
    title: "Aurelia Estates",
    category: "Luxury Real Estate",
    discipline: "Web Design",
    client: "Aurelia Estates",
    year: "2025",
    tagline: "A cinematic property showcase for a high-end real estate brand.",
    accent: "#c8a35b",
    accent2: "#1e293b",
    cover: "browser",
    seed: 3,
    featured: true,
    overview:
      "Aurelia sells eight-figure properties. Their old site looked like a listings directory. I rebuilt it as an immersive, editorial experience where each residence feels like a destination.",
    problem:
      "Premium buyers were bouncing. The brand's digital presence undercut the value of the properties and generated few qualified enquiries.",
    research: [
      "Interviewed 6 agents and 4 recent buyers to map the decision journey",
      "Audited 12 luxury real estate sites for pattern benchmarks",
      "Found buyers wanted lifestyle context, not just specs",
    ],
    solution:
      "A slow, confident layout with full-bleed imagery, gold accents, and a private enquiry flow. Listings became stories, complete with neighbourhood, architecture, and financing context.",
    process: [
      { title: "Discovery", body: "Brand workshop and buyer journey mapping to define the emotional target." },
      { title: "Art direction", body: "Editorial grid, restrained palette, and typographic scale set the tone." },
      { title: "Prototype", body: "Interactive prototype tested with agents before a line of code." },
      { title: "Build & launch", body: "Headless CMS so agents publish listings without touching design." },
    ],
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion", "Mapbox"],
    challenges:
      "Balancing heavy imagery with fast load. Solved with responsive AVIF, priority hints, and a blur-up strategy that kept LCP under 2s.",
    results: [
      { value: "+164%", label: "Qualified enquiries" },
      { value: "2.4x", label: "Avg. session time" },
      { value: "1.9s", label: "LCP on mobile" },
      { value: "96", label: "Lighthouse perf" },
    ],
    gallery: [
      { kind: "browser", label: "Aurelia", seed: 3 },
      { kind: "phone", label: "Aurelia", seed: 5 },
      { kind: "brand", label: "Aurelia", seed: 2 },
      { kind: "browser", label: "Listings", seed: 7 },
    ],
    feedback: {
      quote: "Michael understood the assignment instantly. The site finally matches the properties we sell.",
      name: "Daniel Okoro",
      role: "Managing Partner, Aurelia Estates",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "restaurant-ordering",
    title: "Saveur",
    category: "Restaurant Ordering",
    discipline: "Development",
    client: "Saveur Bistro",
    year: "2025",
    tagline: "A frictionless online ordering system that lifted average order value.",
    accent: "#f97316",
    accent2: "#7c2d12",
    cover: "browser",
    seed: 8,
    featured: true,
    overview:
      "Saveur was losing orders to third-party apps that ate 30% in fees. I built them a branded ordering site that customers actually prefer.",
    problem:
      "High commission fees and a clunky third-party ordering flow were crushing margins and hiding the brand.",
    research: [
      "Analysed 3 months of order data to find drop-off points",
      "Timed the existing checkout at 9 taps to complete",
      "Surveyed 40 regulars on what would make them order direct",
    ],
    solution:
      "A three-step order flow with smart upsells, saved favourites, and live kitchen status. Checkout dropped from 9 taps to 4.",
    process: [
      { title: "Menu architecture", body: "Restructured 80 items into intuitive, scannable categories." },
      { title: "Flow design", body: "Designed the shortest credible path to a completed order." },
      { title: "Build", body: "PWA with offline cart and payment integration." },
      { title: "Optimise", body: "Post-launch upsell tuning based on real order patterns." },
    ],
    tech: ["React", "Node.js", "Stripe", "PostgreSQL", "PWA"],
    challenges:
      "Real-time kitchen status without a native app. Solved with a lightweight PWA and web push notifications.",
    results: [
      { value: "+38%", label: "Avg. order value" },
      { value: "-55%", label: "Checkout time" },
      { value: "30%", label: "Fees eliminated" },
      { value: "4.8★", label: "Customer rating" },
    ],
    gallery: [
      { kind: "browser", label: "Saveur", seed: 8 },
      { kind: "phone", label: "Saveur", seed: 4 },
      { kind: "phone", label: "Checkout", seed: 9 },
      { kind: "brand", label: "Saveur", seed: 1 },
    ],
    feedback: {
      quote: "We took back control of our orders and our margins. Customers love ordering direct now.",
      name: "Amara Bello",
      role: "Owner, Saveur Bistro",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "modern-hospital",
    title: "Meridian Health",
    category: "Modern Hospital",
    discipline: "Web Design",
    client: "Meridian Hospital",
    year: "2024",
    tagline: "A calming, accessible hospital site that makes care easy to find.",
    accent: "#0ea5e9",
    accent2: "#0c4a6e",
    cover: "browser",
    seed: 12,
    featured: true,
    overview:
      "Healthcare sites are often overwhelming. I designed Meridian's around one question: how fast can a worried person find what they need?",
    problem:
      "Patients couldn't find departments, booking was buried, and the site failed basic accessibility checks.",
    research: [
      "Ran a tree test on the old navigation (42% task success)",
      "Consulted WCAG 2.2 AA against every template",
      "Shadowed the front desk to learn the top 10 patient questions",
    ],
    solution:
      "A reassuring, high-contrast design with department finder, one-tap appointment booking, and a symptom-to-service guide.",
    process: [
      { title: "IA rebuild", body: "Reorganised 60 pages around patient intent, not org chart." },
      { title: "Accessible design", body: "AA contrast, focus states, and screen-reader flows from day one." },
      { title: "Booking flow", body: "Cut appointment booking to three clear steps." },
      { title: "Launch", body: "Staff CMS training and a content governance plan." },
    ],
    tech: ["Next.js", "TypeScript", "Contentful", "Tailwind"],
    challenges:
      "Serving patients on old devices and slow connections. Progressive enhancement kept the core usable everywhere.",
    results: [
      { value: "91%", label: "Task success rate" },
      { value: "AA", label: "WCAG 2.2 compliant" },
      { value: "+72%", label: "Online bookings" },
      { value: "-40%", label: "Front-desk calls" },
    ],
    gallery: [
      { kind: "browser", label: "Meridian", seed: 12 },
      { kind: "phone", label: "Booking", seed: 6 },
      { kind: "dashboard", label: "Admin", seed: 3 },
      { kind: "browser", label: "Services", seed: 14 },
    ],
    feedback: {
      quote: "Patients tell us the new site is a relief to use. That is the highest praise in healthcare.",
      name: "Dr. Ngozi Eze",
      role: "Director of Operations, Meridian",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "university-dashboard",
    title: "Campus OS",
    category: "University Management Dashboard",
    discipline: "Dashboard",
    client: "Northgate University",
    year: "2024",
    tagline: "A unified dashboard replacing five disconnected admin systems.",
    accent: "#8b5cf6",
    accent2: "#4c1d95",
    cover: "dashboard",
    seed: 2,
    featured: true,
    overview:
      "Administrators juggled five tools to run the university. Campus OS brought enrolment, finance, staff, and performance into one role-aware dashboard.",
    problem:
      "Fragmented systems meant duplicated data, slow reporting, and no single view of institutional health.",
    research: [
      "Mapped workflows across 4 departments",
      "Catalogued every report leadership manually assembled each month",
      "Defined role-based access needs for 6 user types",
    ],
    solution:
      "A modular dashboard with live enrolment, finance, and staffing widgets, drill-down analytics, and one-click report exports.",
    process: [
      { title: "Systems audit", body: "Documented the five tools and their overlaps." },
      { title: "Data model", body: "Unified schema so numbers finally agreed across departments." },
      { title: "Dashboard design", body: "Role-based layouts surfacing each user's key metrics first." },
      { title: "Rollout", body: "Phased migration with training for each department." },
    ],
    tech: ["React", "TypeScript", "Python", "PostgreSQL", "Recharts"],
    challenges:
      "Migrating years of inconsistent legacy data. Built a validation pipeline that flagged and reconciled conflicts before import.",
    results: [
      { value: "5→1", label: "Systems unified" },
      { value: "-83%", label: "Report prep time" },
      { value: "12k", label: "Records migrated" },
      { value: "6", label: "Role-based views" },
    ],
    gallery: [
      { kind: "dashboard", label: "Campus OS", seed: 2 },
      { kind: "dashboard", label: "Finance", seed: 5 },
      { kind: "dashboard", label: "Enrolment", seed: 8 },
      { kind: "browser", label: "Portal", seed: 11 },
    ],
    feedback: {
      quote: "For the first time, leadership sees the whole institution on one screen. It changed how we plan.",
      name: "Prof. Samuel Adeyemi",
      role: "Registrar, Northgate University",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "finance-mobile-app",
    title: "Lumen Wallet",
    category: "Personal Finance Mobile App",
    discipline: "Mobile",
    client: "Lumen",
    year: "2025",
    tagline: "A personal finance app that makes money feel calm, not stressful.",
    accent: "#22c55e",
    accent2: "#14532d",
    cover: "phone",
    seed: 4,
    featured: true,
    overview:
      "Most finance apps induce anxiety. Lumen was designed to feel supportive, turning budgeting into gentle guidance rather than guilt.",
    problem:
      "Young users abandoned budgeting apps within a week. They felt judged and overwhelmed by data.",
    research: [
      "Diary study with 8 users over two weeks",
      "Identified 'shame spiral' as the top churn driver",
      "Benchmarked onboarding across 10 fintech apps",
    ],
    solution:
      "A warm, encouraging UI with automatic categorisation, goal-based saving, and insights framed as coaching, not criticism.",
    process: [
      { title: "Emotional research", body: "Mapped where and why users felt anxious." },
      { title: "Tone & UI", body: "Soft palette, plain language, and celebratory micro-moments." },
      { title: "Prototype tests", body: "Iterated onboarding until completion hit 80%." },
      { title: "Design system", body: "Delivered a full component library for the dev team." },
    ],
    tech: ["Figma", "React Native", "Design System", "Prototyping"],
    challenges:
      "Showing rich financial data without overwhelming. Progressive disclosure kept each screen to one clear idea.",
    results: [
      { value: "80%", label: "Onboarding completion" },
      { value: "+3.5x", label: "Week-1 retention" },
      { value: "4.9★", label: "Beta rating" },
      { value: "40+", label: "Components shipped" },
    ],
    gallery: [
      { kind: "phone", label: "Lumen", seed: 4 },
      { kind: "phone", label: "Budget", seed: 7 },
      { kind: "phone", label: "Goals", seed: 2 },
      { kind: "brand", label: "Lumen", seed: 3 },
    ],
    feedback: {
      quote: "Michael designed something rare in fintech: an app that feels kind. Our retention numbers prove it works.",
      name: "Grace Uche",
      role: "Product Lead, Lumen",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "smart-home",
    title: "Nimbus Home",
    category: "Smart Home Company Website",
    discipline: "Development",
    client: "Nimbus",
    year: "2024",
    tagline: "A product site that makes smart-home tech feel effortless.",
    accent: "#06b6d4",
    accent2: "#164e63",
    cover: "browser",
    seed: 15,
    overview:
      "Nimbus builds smart-home hardware. Their site needed to explain complex products simply and drive pre-orders.",
    problem:
      "The product range confused visitors and pre-order conversion was flat.",
    research: [
      "Card-sorted the product line with 20 users",
      "Found buyers wanted scenarios, not spec sheets",
      "Mapped the pre-order funnel drop-offs",
    ],
    solution:
      "An interactive product tour with scenario-based storytelling, 3D-style hover reveals, and a streamlined pre-order flow.",
    process: [
      { title: "Message strategy", body: "Reframed products around everyday moments." },
      { title: "Interactive design", body: "Scroll-driven product reveals that teach as you go." },
      { title: "Build", body: "Performant animations that stay smooth on mid-range phones." },
      { title: "Convert", body: "Simplified pre-order with clear shipping expectations." },
    ],
    tech: ["Next.js", "Framer Motion", "GSAP", "Stripe"],
    challenges:
      "Rich scroll animation without jank. Used transform-only animations and intersection observers to stay at 60fps.",
    results: [
      { value: "+112%", label: "Pre-orders" },
      { value: "+58%", label: "Time on page" },
      { value: "60fps", label: "Animation" },
      { value: "94", label: "Lighthouse perf" },
    ],
    gallery: [
      { kind: "browser", label: "Nimbus", seed: 15 },
      { kind: "phone", label: "Nimbus", seed: 8 },
      { kind: "brand", label: "Nimbus", seed: 2 },
      { kind: "browser", label: "Products", seed: 5 },
    ],
    feedback: {
      quote: "The site does the selling for us now. People finally get what our products do.",
      name: "Tunde Bakare",
      role: "CMO, Nimbus",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "law-firm",
    title: "Sterling & Vale",
    category: "Corporate Law Firm Website",
    discipline: "Web Design",
    client: "Sterling & Vale",
    year: "2024",
    tagline: "A commanding, trustworthy presence for a corporate law firm.",
    accent: "#b45309",
    accent2: "#1c1917",
    cover: "browser",
    seed: 6,
    overview:
      "Sterling & Vale advise major corporations. Their site had to project authority, precision, and discretion.",
    problem:
      "An outdated site was costing them credibility with enterprise clients evaluating counsel.",
    research: [
      "Interviewed partners on how clients choose firms",
      "Benchmarked top-tier international firms",
      "Identified 'proof of expertise' as the conversion lever",
    ],
    solution:
      "A restrained, editorial design with practice-area depth, attorney profiles, and case-result proof, all wrapped in a confident type system.",
    process: [
      { title: "Positioning", body: "Clarified what sets the firm apart from peers." },
      { title: "Design", body: "Serif-driven authority with generous whitespace." },
      { title: "Content", body: "Structured practice areas and results for scannability." },
      { title: "Build", body: "Fast, secure, and simple for the marketing team to update." },
    ],
    tech: ["Next.js", "TypeScript", "Sanity", "Tailwind"],
    challenges:
      "Conveying prestige without coldness. Warm accents and human attorney storytelling kept it approachable.",
    results: [
      { value: "+89%", label: "Enterprise enquiries" },
      { value: "3.1x", label: "Profile views" },
      { value: "98", label: "Accessibility score" },
      { value: "AA", label: "WCAG compliant" },
    ],
    gallery: [
      { kind: "browser", label: "Sterling", seed: 6 },
      { kind: "browser", label: "Practice", seed: 9 },
      { kind: "brand", label: "Sterling", seed: 4 },
      { kind: "phone", label: "Sterling", seed: 3 },
    ],
    feedback: {
      quote: "Our new site opens doors before the first meeting. It signals exactly who we are.",
      name: "Fiona Sterling",
      role: "Senior Partner, Sterling & Vale",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "fitness-coaching",
    title: "Forge Fitness",
    category: "Fitness Coaching Landing Page",
    discipline: "Development",
    client: "Forge Coaching",
    year: "2025",
    tagline: "A high-energy landing page that filled a coaching roster in weeks.",
    accent: "#ef4444",
    accent2: "#7f1d1d",
    cover: "browser",
    seed: 10,
    overview:
      "An online fitness coach needed a landing page to convert social traffic into paying clients.",
    problem:
      "Traffic from Instagram wasn't converting. The old page buried the offer and lacked proof.",
    research: [
      "Reviewed 500 DMs to find the top objections",
      "Analysed competitor coaching funnels",
      "Tested three headline directions with the audience",
    ],
    solution:
      "A punchy, single-purpose page: transformation proof, a clear program breakdown, urgency, and a frictionless application form.",
    process: [
      { title: "Offer clarity", body: "Distilled the program into one irresistible promise." },
      { title: "Copy & proof", body: "Benefit-led copy backed by client transformations." },
      { title: "Design & build", body: "Bold, mobile-first, and fast." },
      { title: "Optimise", body: "A/B tested CTAs and headline for peak conversion." },
    ],
    tech: ["Astro", "Tailwind", "Copywriting", "A/B Testing"],
    challenges:
      "Standing out in a saturated niche. Radical specificity in the offer and social proof did the heavy lifting.",
    results: [
      { value: "9.2%", label: "Conversion rate" },
      { value: "3 wks", label: "Roster filled" },
      { value: "+240%", label: "Applications" },
      { value: "0.8s", label: "Load time" },
    ],
    gallery: [
      { kind: "browser", label: "Forge", seed: 10 },
      { kind: "phone", label: "Forge", seed: 5 },
      { kind: "brand", label: "Forge", seed: 1 },
      { kind: "phone", label: "Apply", seed: 8 },
    ],
    feedback: {
      quote: "I filled my entire roster in three weeks. The page converts better than anything I've tried.",
      name: "Marcus Idris",
      role: "Founder, Forge Coaching",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "fashion-ecommerce",
    title: "Atelier Noir",
    category: "E-commerce Fashion Store",
    discipline: "Development",
    client: "Atelier Noir",
    year: "2025",
    tagline: "A refined fashion storefront with a conversion-obsessed checkout.",
    accent: "#e11d48",
    accent2: "#111827",
    cover: "browser",
    seed: 13,
    overview:
      "Atelier Noir is a contemporary fashion label. They needed a storefront as considered as their clothing.",
    problem:
      "A generic template store had high cart abandonment and no sense of brand.",
    research: [
      "Analysed the checkout funnel (68% abandonment)",
      "Studied editorial fashion e-commerce leaders",
      "Interviewed repeat customers on what they valued",
    ],
    solution:
      "An editorial storefront with lookbook storytelling, fast filtering, and a two-step checkout with wallet payments.",
    process: [
      { title: "Brand & UX", body: "Editorial art direction married to e-commerce best practice." },
      { title: "Catalogue UX", body: "Instant filtering and rich product galleries." },
      { title: "Checkout", body: "Two-step, wallet-enabled, guest-friendly." },
      { title: "Launch", body: "Headless commerce with fast content workflows." },
    ],
    tech: ["Next.js", "Shopify Hydrogen", "TypeScript", "Framer Motion"],
    challenges:
      "Rich imagery vs. speed on mobile. Aggressive image optimisation and lazy loading kept it quick.",
    results: [
      { value: "-46%", label: "Cart abandonment" },
      { value: "+61%", label: "Conversion rate" },
      { value: "+2.2x", label: "Mobile revenue" },
      { value: "95", label: "Lighthouse perf" },
    ],
    gallery: [
      { kind: "browser", label: "Atelier", seed: 13 },
      { kind: "phone", label: "Atelier", seed: 6 },
      { kind: "browser", label: "Lookbook", seed: 9 },
      { kind: "brand", label: "Atelier", seed: 2 },
    ],
    feedback: {
      quote: "The store finally feels like us. Sales climbed and returns dropped because expectations are clearer.",
      name: "Zainab Musa",
      role: "Creative Director, Atelier Noir",
    },
    links: { live: "#", github: "#" },
  },
  {
    slug: "travel-booking",
    title: "Wander",
    category: "Travel & Tourism Booking Platform",
    discipline: "UI/UX",
    client: "Wander",
    year: "2024",
    tagline: "A booking platform that makes trip planning feel like anticipation.",
    accent: "#0891b2",
    accent2: "#155e75",
    cover: "browser",
    seed: 1,
    overview:
      "Wander wanted a booking platform that captured the joy of travel, not the stress of logistics.",
    problem:
      "Comparing and booking multi-stop trips was tedious and error-prone on their old flow.",
    research: [
      "Journey-mapped a full multi-stop booking",
      "Found users lost trust at the payment step",
      "Benchmarked leading OTA and boutique platforms",
    ],
    solution:
      "A visual trip builder, transparent pricing, saved itineraries, and a reassuring, staged checkout.",
    process: [
      { title: "Journey mapping", body: "Charted every step from dream to booking." },
      { title: "Trip builder", body: "Drag-and-drop itinerary with live pricing." },
      { title: "Trust design", body: "Clear pricing and confirmation at every stage." },
      { title: "Handoff", body: "Full spec and prototype for the engineering team." },
    ],
    tech: ["Figma", "React", "Design System", "Mapbox"],
    challenges:
      "Complex multi-stop logic in a simple UI. A visual timeline made the complexity feel effortless.",
    results: [
      { value: "+52%", label: "Booking completion" },
      { value: "-37%", label: "Support tickets" },
      { value: "4.7★", label: "App store rating" },
      { value: "2.1x", label: "Multi-stop trips" },
    ],
    gallery: [
      { kind: "browser", label: "Wander", seed: 1 },
      { kind: "phone", label: "Wander", seed: 4 },
      { kind: "browser", label: "Trip builder", seed: 7 },
      { kind: "brand", label: "Wander", seed: 3 },
    ],
    feedback: {
      quote: "Michael turned our most complex flow into our most loved feature. Bookings speak for themselves.",
      name: "Ibrahim Sani",
      role: "Head of Product, Wander",
    },
    links: { live: "#", github: "#" },
  },
];

export const disciplines = [
  "All",
  "Web Design",
  "Development",
  "UI/UX",
  "Dashboard",
  "Mobile",
  "Brand",
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
