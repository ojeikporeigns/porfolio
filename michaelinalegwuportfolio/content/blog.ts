export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: string;
  body: { heading?: string; text: string }[];
};

const lorem = (topic: string): { heading?: string; text: string }[] => [
  {
    text: `This is a sample article preview for the portfolio. Replace this placeholder with your real writing on ${topic}. The layout, typography, and reading experience are production-ready, so your words will look their best the moment you drop them in.`,
  },
  {
    heading: "Why it matters",
    text: "Every section is styled for long-form reading: comfortable measure, generous line height, and clear hierarchy. Use this space to make an argument, share a lesson, or walk through a process step by step.",
  },
  {
    heading: "The practical takeaway",
    text: "End with something the reader can act on. A checklist, a principle, or a next step. This keeps your content useful and positions you as someone worth hiring.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-trust",
    title: "Designing for trust: what makes visitors believe you",
    category: "UI/UX",
    excerpt:
      "Trust is designed, not declared. A look at the visual and interaction cues that make users feel safe enough to convert.",
    date: "2025-06-18",
    readTime: "6 min",
    accent: "#38bdf8",
    body: lorem("designing for trust"),
  },
  {
    slug: "core-web-vitals-2025",
    title: "Core Web Vitals in 2025: a practical checklist",
    category: "Web Design",
    excerpt:
      "Speed is a feature. Here's the exact checklist I use to keep client sites fast, from LCP to INP.",
    date: "2025-05-30",
    readTime: "8 min",
    accent: "#2563eb",
    body: lorem("Core Web Vitals"),
  },
  {
    slug: "react-server-components",
    title: "React Server Components without the confusion",
    category: "React",
    excerpt:
      "A plain-English guide to what RSCs actually change, and when you should reach for them.",
    date: "2025-05-12",
    readTime: "9 min",
    accent: "#06b6d4",
    body: lorem("React Server Components"),
  },
  {
    slug: "seo-that-compounds",
    title: "SEO that compounds: building traffic that lasts",
    category: "SEO",
    excerpt:
      "Chasing hacks is exhausting. Here's how to build organic traffic that grows quietly for years.",
    date: "2025-04-28",
    readTime: "7 min",
    accent: "#818cf8",
    body: lorem("compounding SEO"),
  },
  {
    slug: "dashboards-people-use",
    title: "The anatomy of a dashboard people actually use",
    category: "Data Analytics",
    excerpt:
      "Most dashboards get ignored. The ones that don't share five traits. Here they are.",
    date: "2025-04-10",
    readTime: "6 min",
    accent: "#60a5fa",
    body: lorem("effective dashboards"),
  },
  {
    slug: "ai-in-the-design-workflow",
    title: "AI in the design workflow: leverage, not replacement",
    category: "Artificial Intelligence",
    excerpt:
      "How I use AI to move faster without letting the work lose its point of view.",
    date: "2025-03-22",
    readTime: "7 min",
    accent: "#22d3ee",
    body: lorem("AI in design"),
  },
  {
    slug: "wordpress-vs-headless",
    title: "WordPress vs. headless: choosing without regret",
    category: "WordPress",
    excerpt:
      "The honest trade-offs between classic WordPress and a headless build, from someone who ships both.",
    date: "2025-03-05",
    readTime: "8 min",
    accent: "#38bdf8",
    body: lorem("WordPress vs headless"),
  },
  {
    slug: "security-basics-every-site",
    title: "Security basics every small business site needs",
    category: "Cybersecurity",
    excerpt:
      "You don't need a security team to cover the essentials. Start with these seven.",
    date: "2025-02-18",
    readTime: "6 min",
    accent: "#2563eb",
    body: lorem("web security basics"),
  },
  {
    slug: "pricing-your-web-work",
    title: "How to price your web work with confidence",
    category: "Business",
    excerpt:
      "Value-based pricing, scoping, and the conversations that stop clients from haggling.",
    date: "2025-02-02",
    readTime: "9 min",
    accent: "#06b6d4",
    body: lorem("pricing creative work"),
  },
  {
    slug: "microinteractions-that-delight",
    title: "Micro-interactions that delight (and the ones that annoy)",
    category: "UI/UX",
    excerpt:
      "The line between a moment of delight and a distraction is thin. Here's where it sits.",
    date: "2025-01-20",
    readTime: "5 min",
    accent: "#818cf8",
    body: lorem("micro-interactions"),
  },
  {
    slug: "data-storytelling",
    title: "Data storytelling: from numbers to narrative",
    category: "Data Analytics",
    excerpt:
      "A chart informs. A story persuades. How to turn analysis into a decision.",
    date: "2025-01-08",
    readTime: "7 min",
    accent: "#60a5fa",
    body: lorem("data storytelling"),
  },
  {
    slug: "future-of-frontend",
    title: "The future of frontend: what I'm betting on",
    category: "Technology",
    excerpt:
      "Where the web platform is heading and which skills stay valuable through the shift.",
    date: "2024-12-15",
    readTime: "8 min",
    accent: "#22d3ee",
    body: lorem("the future of frontend"),
  },
  {
    slug: "accessible-by-default",
    title: "Accessible by default: a designer's starter kit",
    category: "UI/UX",
    excerpt:
      "Accessibility isn't a phase at the end. Bake it in from the first artboard with these habits.",
    date: "2024-11-28",
    readTime: "6 min",
    accent: "#38bdf8",
    body: lorem("accessibility"),
  },
  {
    slug: "landing-page-teardown",
    title: "Landing page teardown: what separates 2% from 9%",
    category: "Web Design",
    excerpt:
      "A line-by-line look at the decisions that quadruple a landing page's conversion.",
    date: "2024-11-10",
    readTime: "7 min",
    accent: "#2563eb",
    body: lorem("landing page conversion"),
  },
  {
    slug: "brand-systems-that-scale",
    title: "Brand systems that scale with your business",
    category: "Business",
    excerpt:
      "A logo is not a brand. How to build an identity system that still works at 10x your size.",
    date: "2024-10-24",
    readTime: "6 min",
    accent: "#06b6d4",
    body: lorem("scalable brand systems"),
  },
];

export const blogCategories = [
  "All",
  "Web Design",
  "SEO",
  "React",
  "UI/UX",
  "Business",
  "Data Analytics",
  "Technology",
  "Artificial Intelligence",
  "Cybersecurity",
  "WordPress",
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
