import type { MockKind } from "@/components/mock/mock-visual";

export type GalleryPiece = {
  title: string;
  kind: MockKind;
  accent: string;
  accent2: string;
  seed: number;
  tag?: string;
};

export type GallerySection = {
  id: string;
  label: string;
  title: string;
  description: string;
  pieces: GalleryPiece[];
};

// GRAPHIC DESIGN
export const graphicDesign: GalleryPiece[] = [
  { title: "Brand Identity", kind: "brand", accent: "#38bdf8", accent2: "#2563eb", seed: 1, tag: "Identity" },
  { title: "Business Cards", kind: "brand", accent: "#f59e0b", accent2: "#78350f", seed: 2, tag: "Print" },
  { title: "Event Poster", kind: "brand", accent: "#ec4899", accent2: "#831843", seed: 3, tag: "Poster" },
  { title: "Promo Flyer", kind: "brand", accent: "#22c55e", accent2: "#14532d", seed: 4, tag: "Flyer" },
  { title: "Social Media Kit", kind: "brand", accent: "#8b5cf6", accent2: "#4c1d95", seed: 5, tag: "Social" },
  { title: "Instagram Carousel", kind: "phone", accent: "#06b6d4", accent2: "#164e63", seed: 6, tag: "Social" },
  { title: "Facebook Ads", kind: "brand", accent: "#2563eb", accent2: "#1e3a8a", seed: 7, tag: "Ads" },
  { title: "Product Mockup", kind: "brand", accent: "#ef4444", accent2: "#7f1d1d", seed: 8, tag: "Mockup" },
  { title: "Packaging Design", kind: "brand", accent: "#14b8a6", accent2: "#134e4a", seed: 9, tag: "Packaging" },
  { title: "Logo Collection", kind: "brand", accent: "#eab308", accent2: "#713f12", seed: 10, tag: "Logo" },
  { title: "Presentation Deck", kind: "browser", accent: "#0ea5e9", accent2: "#0c4a6e", seed: 11, tag: "Deck" },
  { title: "Magazine Cover", kind: "brand", accent: "#f43f5e", accent2: "#4c0519", seed: 12, tag: "Editorial" },
  { title: "Roll-up Banner", kind: "brand", accent: "#a855f7", accent2: "#581c87", seed: 13, tag: "Print" },
  { title: "Billboard Design", kind: "browser", accent: "#f97316", accent2: "#7c2d12", seed: 14, tag: "OOH" },
  { title: "Restaurant Menu", kind: "brand", accent: "#84cc16", accent2: "#365314", seed: 15, tag: "Print" },
];

// DATA ANALYTICS DASHBOARDS
export const analyticsDashboards: GalleryPiece[] = [
  { title: "Revenue Dashboard", kind: "dashboard", accent: "#22c55e", accent2: "#15803d", seed: 1 },
  { title: "Sales Dashboard", kind: "dashboard", accent: "#38bdf8", accent2: "#2563eb", seed: 2 },
  { title: "Customer Analytics", kind: "dashboard", accent: "#8b5cf6", accent2: "#6d28d9", seed: 3 },
  { title: "Marketing Dashboard", kind: "dashboard", accent: "#f59e0b", accent2: "#b45309", seed: 4 },
  { title: "HR Dashboard", kind: "dashboard", accent: "#06b6d4", accent2: "#0e7490", seed: 5 },
  { title: "Finance Dashboard", kind: "dashboard", accent: "#10b981", accent2: "#047857", seed: 6 },
  { title: "Inventory Dashboard", kind: "dashboard", accent: "#f43f5e", accent2: "#be123c", seed: 7 },
  { title: "Healthcare Dashboard", kind: "dashboard", accent: "#0ea5e9", accent2: "#0369a1", seed: 8 },
  { title: "Government Revenue", kind: "dashboard", accent: "#a855f7", accent2: "#7e22ce", seed: 9 },
  { title: "Website Analytics", kind: "dashboard", accent: "#eab308", accent2: "#a16207", seed: 10 },
];

// COPYWRITING SAMPLES
export type CopyPiece = { title: string; type: string; blurb: string; sample: string; accent: string };
export const copywriting: CopyPiece[] = [
  { title: "SaaS Landing Page", type: "Landing Copy", accent: "#38bdf8", blurb: "Headline-to-CTA copy for a B2B SaaS launch.", sample: "Ship faster. Stress less. The workflow tool your team will actually open." },
  { title: "Course Sales Page", type: "Sales Page", accent: "#2563eb", blurb: "Long-form sales page for an online course.", sample: "You've watched the tutorials. Now build the skill that gets you paid." },
  { title: "Facebook Ad Set", type: "Facebook Ads", accent: "#06b6d4", blurb: "Five ad variations tested for CTR.", sample: "Your website is losing sales while you sleep. Here's the 5-minute fix." },
  { title: "Google Search Ads", type: "Google Ads", accent: "#818cf8", blurb: "Responsive search ad copy for a service business.", sample: "Premium Web Design · Built to Convert · Free Strategy Call →" },
  { title: "Product Descriptions", type: "E-commerce", accent: "#22c55e", blurb: "Benefit-led descriptions for a fashion label.", sample: "Cut from Italian wool that remembers your shape. Made to outlast trends." },
  { title: "Welcome Sequence", type: "Email Campaign", accent: "#f59e0b", blurb: "Five-email onboarding sequence.", sample: "Welcome aboard. Before you do anything else, read this one thing." },
  { title: "Monthly Newsletter", type: "Newsletter", accent: "#ec4899", blurb: "A newsletter people forward to friends.", sample: "Three ideas, one tool, and a question worth sitting with this week." },
  { title: "SEO Pillar Article", type: "SEO Article", accent: "#8b5cf6", blurb: "2,000-word ranking article on web performance.", sample: "The complete guide to making your website load in under one second." },
  { title: "Homepage Copy", type: "Website Copy", accent: "#0ea5e9", blurb: "Above-the-fold to footer messaging.", sample: "Design that earns trust. Development that earns revenue. In one place." },
  { title: "About Page", type: "Website Copy", accent: "#14b8a6", blurb: "A story-led about page that builds rapport.", sample: "I started with a broken laptop and a stubborn belief that details matter." },
  { title: "Service Page", type: "Website Copy", accent: "#ef4444", blurb: "A service page that pre-sells the call.", sample: "You don't need another freelancer. You need a partner who ships." },
  { title: "CTA Variations", type: "Conversion", accent: "#a855f7", blurb: "Twelve calls-to-action, split-tested.", sample: "Start my project · Get the plan · Claim your slot · See what's possible" },
];

// SEO REPORTS
export type SeoReport = { title: string; metric: string; detail: string; accent: string };
export const seoReports: SeoReport[] = [
  { title: "Keyword Research", metric: "480 keywords", detail: "Intent-clustered map with difficulty and opportunity scoring.", accent: "#38bdf8" },
  { title: "SEO Audit", metric: "142 issues", detail: "Full technical, on-page, and content audit with priorities.", accent: "#2563eb" },
  { title: "Competitor Analysis", metric: "8 competitors", detail: "Gap analysis revealing 60+ rankable content opportunities.", accent: "#06b6d4" },
  { title: "Technical SEO Report", metric: "+34 score", detail: "Crawl, index, and Core Web Vitals fixes with impact estimates.", accent: "#818cf8" },
  { title: "Content Strategy", metric: "6-month plan", detail: "Topic clusters and a publishing calendar tied to funnel stages.", accent: "#22c55e" },
  { title: "Backlink Analysis", metric: "1,200 links", detail: "Profile audit, toxic-link disavow, and outreach targets.", accent: "#f59e0b" },
  { title: "Performance Report", metric: "+164% traffic", detail: "Six-month organic growth summary with attribution.", accent: "#ec4899" },
];

// IT SUPPORT CASE STUDIES
export type ItCase = { title: string; summary: string; outcome: string; accent: string };
export const itSupport: ItCase[] = [
  { title: "Office Network Setup", summary: "Designed and deployed a 40-node office network with segmented VLANs.", outcome: "Zero downtime in 12 months", accent: "#38bdf8" },
  { title: "IT Infrastructure Overhaul", summary: "Rebuilt aging infrastructure for a 3-branch business.", outcome: "-60% support tickets", accent: "#2563eb" },
  { title: "Hardware Deployment", summary: "Rolled out and imaged 80 workstations with a standard build.", outcome: "2-week rollout, on time", accent: "#06b6d4" },
  { title: "System Troubleshooting", summary: "Diagnosed recurring crashes across a mixed-OS fleet.", outcome: "Root cause fixed in 48h", accent: "#818cf8" },
  { title: "Server Maintenance", summary: "Established a preventive maintenance and patch schedule.", outcome: "99.9% uptime", accent: "#22c55e" },
  { title: "Security Audit", summary: "Assessed endpoints, access, and backups against best practice.", outcome: "18 vulnerabilities closed", accent: "#f59e0b" },
  { title: "Software Deployment", summary: "Automated software installation across the organisation.", outcome: "Hours saved per rollout", accent: "#ec4899" },
  { title: "Backup & Recovery", summary: "Implemented 3-2-1 backups with tested restore drills.", outcome: "15-min recovery time", accent: "#8b5cf6" },
  { title: "Remote Support Desk", summary: "Stood up a remote support workflow for a hybrid team.", outcome: "Same-day resolution", accent: "#0ea5e9" },
  { title: "Help Desk Documentation", summary: "Authored SOPs and a searchable knowledge base.", outcome: "40% faster onboarding", accent: "#14b8a6" },
];
