export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  highlights: string[];
  type: "work" | "education";
};

export const timeline: TimelineItem[] = [
  {
    period: "Aug 2025 — May 2026",
    role: "Administrative & Data Analytics Officer (NYSC)",
    org: "Nigeria Revenue Service",
    location: "Lafia-Eto, Nasarawa State",
    summary:
      "Built interactive dashboards and analysed compliance data to support revenue collection decisions for senior officers.",
    highlights: [
      "Built interactive Excel and Python dashboards to visualise collection trends and compliance data",
      "Analysed records using Python (Pandas) to identify patterns and discrepancies across taxpayer categories",
      "Maintained accurate digital records, improving data retrieval across the department",
    ],
    type: "work",
  },
  {
    period: "Mar — Jun 2023",
    role: "Training & Technology Administrator (Contract)",
    org: "GHSC-PSM — ITN Campaign",
    location: "Nigeria",
    summary:
      "Trained field staff on mobile data-capture tools and provided real-time technical support during a nationwide health campaign.",
    highlights: [
      "Trained over 50 field staff on a mobile data-capture app for beneficiary onboarding",
      "Provided real-time technical support, resolving device and app issues to minimise downtime",
    ],
    type: "work",
  },
  {
    period: "Jan 2023",
    role: "ICT Intern — SIWES",
    org: "University of Jos — ICT Directorate",
    location: "Jos, Plateau State",
    summary:
      "Maintained and troubleshot computer systems across university departments, improving system uptime for staff and students.",
    highlights: [
      "Maintained, troubleshot, and repaired computer systems and peripherals across departments",
      "Diagnosed and resolved hardware and software issues for staff and students",
    ],
    type: "work",
  },
  {
    period: "Aug — Dec 2018",
    role: "Web Development Instructor",
    org: "Taraba Business School",
    location: "Jalingo, Taraba State",
    summary:
      "Taught HTML, CSS, and JavaScript to students of varying skill levels and guided hands-on projects from concept to deployment.",
    highlights: [
      "Taught HTML, CSS, and JavaScript to students of varying skill levels",
      "Built responsive, functional websites with students and designed project-based lesson plans",
    ],
    type: "work",
  },
  {
    period: "2018 — 2023",
    role: "B.Sc. Computer Science",
    org: "University of Jos",
    location: "Jos, Plateau State",
    summary:
      "Foundation in software engineering, data structures, databases, and human-computer interaction.",
    highlights: [
      "Focus on web technologies and data analysis",
      "Industrial training (SIWES) at the university ICT Directorate",
    ],
    type: "education",
  },
];

export const certifications = [
  { name: "Google Data Analytics", issuer: "Google", year: "2023" },
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2022" },
  { name: "Google UX Design", issuer: "Google", year: "2022" },
  { name: "Microsoft Power BI Data Analyst", issuer: "Microsoft", year: "2023" },
  { name: "Google SEO Fundamentals", issuer: "Google", year: "2021" },
  { name: "CompTIA IT Fundamentals", issuer: "CompTIA", year: "2020" },
];

export const values = [
  {
    title: "Craft over shortcuts",
    body: "Details are the difference between good and unforgettable. I sweat them so the work feels effortless.",
  },
  {
    title: "Clarity is kindness",
    body: "The best design gets out of the way. I remove friction until the right path is the obvious one.",
  },
  {
    title: "Outcomes, not output",
    body: "Beautiful work that doesn't move a metric isn't finished. I design for results you can measure.",
  },
  {
    title: "Partner, not vendor",
    body: "I invest in your goals like they're mine. Honest advice, clear communication, no surprises.",
  },
];

export const differentiators = [
  {
    stat: "10",
    label: "Disciplines under one roof",
    body: "Design, development, data, and strategy from a single mind means fewer handoffs and a more coherent result.",
  },
  {
    stat: "98%",
    label: "Client retention",
    body: "Most of my work comes from clients who came back or referred me. Relationships outlast projects.",
  },
  {
    stat: "$10k+",
    label: "Project trust",
    body: "Clients trust me with high-stakes work because the process is transparent and the outcomes are proven.",
  },
];
