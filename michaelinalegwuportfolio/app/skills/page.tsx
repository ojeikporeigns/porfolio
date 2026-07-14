import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal } from "@/components/effects/reveal";
import { SkillBar } from "@/components/sections/skill-bar";
import { Marquee } from "@/components/effects/marquee";
import { CTA } from "@/components/sections/cta";
import { skillGroups, toolbox } from "@/content/skills";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Skills",
  description:
    "An interactive breakdown of skills across development, design, marketing, analytics, IT support, and business, plus the tools and technologies behind them.",
  path: "/skills",
  keywords: ["skills", "tech stack", "React", "Python", "Figma", "Power BI"],
});

export default function SkillsPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Skills"
        title="A deep, versatile toolkit built over years"
        description="Range without the shallowness. Here's where my strengths sit across six domains, and the tools I reach for every day."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Skills", href: "/skills" },
        ]}
      />

      <section className="container-p py-section">
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.name} index={gi % 2}>
              <div className="h-full rounded-3xl border border-[var(--border-soft)] card-surface p-8">
                <div className="flex items-center gap-3">
                  <span
                    className="h-8 w-1.5 rounded-full"
                    style={{ background: `linear-gradient(${group.accent}, transparent)` }}
                  />
                  <div>
                    <h2 className="font-display text-xl font-semibold text-ink">{group.name}</h2>
                    <p className="text-sm text-muted">{group.blurb}</p>
                  </div>
                </div>
                <div className="mt-7 space-y-5">
                  {group.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} accent={group.accent} index={i} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Toolbox marquee */}
      <section className="pb-section">
        <p className="container-p mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted">
          Technologies &amp; tools I work with
        </p>
        <Marquee duration={30}>
          {toolbox.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border-soft)] px-6 py-3 font-display text-lg font-medium text-ink/70 transition-colors hover:border-highlight/40 hover:text-ink"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <CTA />
    </PageTransition>
  );
}
