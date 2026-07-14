export type SkillGroup = {
  name: string;
  blurb: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Development",
    blurb: "Building fast, accessible, production-grade interfaces.",
    accent: "#38bdf8",
    skills: [
      { name: "HTML", level: 98 },
      { name: "CSS", level: 96 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "WordPress", level: 85 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    name: "Design",
    blurb: "Interfaces and identities crafted with intent.",
    accent: "#2563eb",
    skills: [
      { name: "UI/UX Design", level: 93 },
      { name: "Figma", level: 95 },
      { name: "Photoshop", level: 88 },
      { name: "Illustrator", level: 84 },
      { name: "Canva", level: 92 },
      { name: "Design Systems", level: 90 },
    ],
  },
  {
    name: "Marketing",
    blurb: "Words and strategy that move the needle.",
    accent: "#06b6d4",
    skills: [
      { name: "SEO", level: 90 },
      { name: "Copywriting", level: 88 },
      { name: "Content Strategy", level: 85 },
      { name: "Google Ads", level: 80 },
      { name: "Email Marketing", level: 82 },
    ],
  },
  {
    name: "Analytics",
    blurb: "Turning raw data into clear decisions.",
    accent: "#818cf8",
    skills: [
      { name: "Python", level: 86 },
      { name: "SQL", level: 88 },
      { name: "Power BI", level: 90 },
      { name: "Excel", level: 94 },
      { name: "Pandas", level: 84 },
    ],
  },
  {
    name: "IT Support",
    blurb: "Keeping systems reliable and teams productive.",
    accent: "#22d3ee",
    skills: [
      { name: "Troubleshooting", level: 92 },
      { name: "Network Setup", level: 85 },
      { name: "System Administration", level: 84 },
      { name: "Hardware Deployment", level: 88 },
      { name: "Backup & Recovery", level: 86 },
    ],
  },
  {
    name: "Business",
    blurb: "Strategy, process, and the bridge to technology.",
    accent: "#60a5fa",
    skills: [
      { name: "Digital Strategy", level: 89 },
      { name: "Consulting", level: 86 },
      { name: "Automation", level: 84 },
      { name: "Project Management", level: 87 },
    ],
  },
];

export const toolbox = [
  "HTML", "CSS", "JavaScript", "React", "WordPress", "Python", "SQL",
  "Power BI", "Excel", "Pandas", "Figma", "Photoshop", "Illustrator",
  "Canva", "Git", "GitHub",
];
