import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTA } from "@/components/sections/cta";
import { timeline, certifications } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Experience",
  description:
    "The professional journey of Michael Emmanuel Inalegwu — roles, milestones, and the experience behind the work.",
  path: "/experience",
  keywords: ["experience", "career", "professional journey", "resume"],
});

export default function ExperiencePage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Experience"
        title="A track record built on shipped work"
        description="Eight years of designing, building, and analysing across freelance, agency, and in-house roles."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Experience", href: "/experience" },
        ]}
      />

      <section className="container-p py-section">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          {/* Timeline */}
          <div>
            <SectionHeading eyebrow="Timeline" title={<>Where I&apos;ve worked</>} />
            <div className="mt-12">
              {timeline
                .filter((t) => t.type === "work")
                .map((t, i) => (
                  <Reveal key={i}>
                    <div className="group relative border-l border-[var(--border-soft)] pb-10 pl-8">
                      <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-highlight transition-transform group-hover:scale-125" />
                      <span className="font-mono text-xs text-highlight">{t.period}</span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{t.role}</h3>
                      <p className="text-sm text-muted">{t.org} · {t.location}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/80">{t.summary}</p>
                      <ul className="mt-3 space-y-1.5">
                        {t.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-highlight" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>

          {/* Sidebar: education + certs + capabilities */}
          <aside className="space-y-8">
            <div className="rounded-3xl border border-[var(--border-soft)] card-surface p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Education</h3>
              {timeline
                .filter((t) => t.type === "education")
                .map((t, i) => (
                  <div key={i} className="mt-4 border-t border-[var(--border-soft)] pt-4 first:border-0 first:pt-0">
                    <span className="font-mono text-xs text-accent">{t.period}</span>
                    <h4 className="mt-1 font-medium text-ink">{t.role}</h4>
                    <p className="text-sm text-muted">{t.org}</p>
                  </div>
                ))}
            </div>

            <div className="rounded-3xl border border-[var(--border-soft)] card-surface p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-sm">
                    <span className="text-ink/90">{c.name}</span>
                    <span className="font-mono text-xs text-muted">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[var(--border-soft)] card-surface p-7">
              <h3 className="font-display text-lg font-semibold text-ink">Core capabilities</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroups.map((g) => (
                  <span
                    key={g.name}
                    className="rounded-full border border-[var(--border-soft)] px-3 py-1.5 text-xs text-ink/80"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
