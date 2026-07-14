export type Service = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
  idealClients: string;
  icon: string; // key rendered by ServiceIcon
};

export const services: Service[] = [
  {
    slug: "website-design",
    title: "Website Design",
    tagline: "Interfaces people remember",
    overview:
      "High-craft web design that balances brand expression with conversion. Every screen is composed around a clear hierarchy, intentional motion, and a system that scales.",
    benefits: ["Distinctive brand presence", "Higher engagement", "Reusable design system", "Mobile-first clarity"],
    deliverables: ["Wireframes", "Hi-fi Figma designs", "Design tokens", "Interactive prototype", "Handoff specs"],
    timeline: "2–4 weeks",
    idealClients: "Startups and brands who want to stand out, not blend in.",
    icon: "layout",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Fast, accessible, production-grade",
    overview:
      "I turn designs into performant, maintainable code. Modern stacks, clean architecture, and Core Web Vitals treated as a feature, not an afterthought.",
    benefits: ["90+ Lighthouse scores", "SEO-ready markup", "Type-safe codebase", "Easy content updates"],
    deliverables: ["Responsive build", "CMS integration", "Analytics setup", "Deployment", "Documentation"],
    timeline: "2–6 weeks",
    idealClients: "Businesses that need a site that loads fast and ranks well.",
    icon: "code",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Design that reduces friction",
    overview:
      "Research-led product design. I map real user journeys, remove cognitive load, and design flows that feel obvious in the best way.",
    benefits: ["Fewer support tickets", "Higher task completion", "Validated flows", "Consistent components"],
    deliverables: ["User flows", "Wireframes", "Component library", "Usability findings", "Prototype"],
    timeline: "3–5 weeks",
    idealClients: "SaaS and app teams shipping features that must be intuitive.",
    icon: "cursor",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    tagline: "Visuals with intent",
    overview:
      "From social creative to print, I design assets that stay on-brand and stop the scroll. Grid-driven, typographically sharp, endlessly reusable.",
    benefits: ["Cohesive visual language", "Faster campaign turnaround", "Print-ready files", "Template kits"],
    deliverables: ["Social templates", "Posters & flyers", "Ad creative", "Packaging", "Editable source files"],
    timeline: "1–3 weeks",
    idealClients: "Marketing teams that need a steady stream of on-brand creative.",
    icon: "palette",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    tagline: "Identity systems that endure",
    overview:
      "A complete identity: logo, palette, type, voice, and the rules that keep everything coherent as you grow.",
    benefits: ["Memorable first impression", "Consistent everywhere", "Premium perception", "Clear guidelines"],
    deliverables: ["Logo suite", "Color & type system", "Brand guidelines", "Social kit", "Stationery"],
    timeline: "2–4 weeks",
    idealClients: "Founders launching or repositioning a brand.",
    icon: "sparkle",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    tagline: "Pages engineered to convert",
    overview:
      "Single-purpose pages built around one action. Persuasive copy, proof, and a design that guides the eye straight to the CTA.",
    benefits: ["Higher conversion rates", "A/B-ready structure", "Fast load", "Clear messaging"],
    deliverables: ["Conversion copy", "Design", "Build", "Analytics & events", "Heatmap setup"],
    timeline: "1–2 weeks",
    idealClients: "Teams running paid campaigns that need pages that pay off.",
    icon: "target",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    tagline: "Rank for what matters",
    overview:
      "Technical, on-page, and content SEO grounded in real keyword intent. I fix what's slowing you down and build a plan to climb.",
    benefits: ["More organic traffic", "Better rankings", "Faster indexing", "Clear reporting"],
    deliverables: ["SEO audit", "Keyword map", "Technical fixes", "Content plan", "Monthly report"],
    timeline: "Ongoing / 2-week audit",
    idealClients: "Businesses that want compounding organic growth.",
    icon: "search",
  },
  {
    slug: "copywriting",
    title: "Copywriting",
    tagline: "Words that move people",
    overview:
      "Conversion copy for pages, ads, and emails. Clear, benefit-led, and written in your brand's voice, not a template's.",
    benefits: ["Sharper messaging", "Higher CTR", "Consistent voice", "Faster launches"],
    deliverables: ["Landing copy", "Ad variations", "Email sequences", "Product descriptions", "Voice guide"],
    timeline: "1–2 weeks",
    idealClients: "Brands whose message isn't landing as hard as it should.",
    icon: "pen",
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    tagline: "Systems that stay up",
    overview:
      "Hands-on IT support: troubleshooting, setup, and documentation that keeps your team productive and your systems reliable.",
    benefits: ["Less downtime", "Faster resolution", "Documented processes", "Peace of mind"],
    deliverables: ["Issue resolution", "System setup", "SOP docs", "Remote support", "Preventive plan"],
    timeline: "Ongoing / on-demand",
    idealClients: "Offices and teams without dedicated in-house IT.",
    icon: "wrench",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    tagline: "Decisions backed by data",
    overview:
      "I turn messy data into clear answers. Cleaning, analysis, and visualization that surface the story behind the numbers.",
    benefits: ["Clear insights", "Automated reporting", "Trend detection", "Confident decisions"],
    deliverables: ["Data cleaning", "Analysis", "Dashboards", "Reports", "Recommendations"],
    timeline: "1–4 weeks",
    idealClients: "Teams sitting on data they can't yet act on.",
    icon: "chart",
  },
  {
    slug: "dashboard-development",
    title: "Dashboard Development",
    tagline: "Your metrics, at a glance",
    overview:
      "Interactive dashboards in Power BI, Excel, or the web. Real-time, role-aware, and designed so the important number is never buried.",
    benefits: ["Live visibility", "Self-serve reporting", "Time saved", "Aligned teams"],
    deliverables: ["Data model", "Dashboard build", "Filters & drilldowns", "Training", "Refresh setup"],
    timeline: "2–4 weeks",
    idealClients: "Leaders who need one source of truth.",
    icon: "grid",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    tagline: "Work that runs itself",
    overview:
      "I automate the repetitive so your team can focus on the meaningful. Workflows, integrations, and no-code/low-code pipelines.",
    benefits: ["Hours saved weekly", "Fewer errors", "Scalable operations", "Connected tools"],
    deliverables: ["Process audit", "Automation build", "Integrations", "Docs", "Handover"],
    timeline: "1–3 weeks",
    idealClients: "Growing teams drowning in manual busywork.",
    icon: "bolt",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    tagline: "Always current, always secure",
    overview:
      "Ongoing care: updates, backups, security, performance, and content changes so your site never goes stale or down.",
    benefits: ["Peace of mind", "Better uptime", "Security patched", "Fresh content"],
    deliverables: ["Updates & backups", "Security monitoring", "Performance tuning", "Content edits", "Monthly report"],
    timeline: "Monthly retainer",
    idealClients: "Owners who want to stop worrying about their site.",
    icon: "shield",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    tagline: "The right stack, the right call",
    overview:
      "Strategic guidance on tools, architecture, and roadmap. I help you make technology decisions you won't regret in a year.",
    benefits: ["Clear roadmap", "Avoided pitfalls", "Cost efficiency", "Confident choices"],
    deliverables: ["Discovery", "Stack recommendation", "Roadmap", "Risk assessment", "Advisory calls"],
    timeline: "1–2 weeks / retainer",
    idealClients: "Founders and teams at a technology crossroads.",
    icon: "compass",
  },
];
