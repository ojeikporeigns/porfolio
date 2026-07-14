import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTA } from "@/components/sections/cta";
import { timeline, certifications, values, differentiators } from "@/content/experience";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "The story, values, and journey of Michael Emmanuel Inalegwu — a multidisciplinary digital problem solver available worldwide.",
  path: "/about",
  keywords: ["about", "designer developer story", "Michael Inalegwu bio"],
});

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About"
        title="A multidisciplinary mind for ambitious digital work"
        description="I'm Michael Emmanuel Inalegwu, a designer, developer, analyst, and strategist working remotely with clients worldwide."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Story + portrait */}
      <section className="container-p py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border-soft)] card-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/portrait-alt.jpg"
                alt="Michael Emmanuel Inalegwu"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full glass px-4 py-2 text-sm text-ink">
                {site.location}
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="My story"
              title={<>From curiosity to craft</>}
            />
            <div className="mt-6 space-y-4 text-fluid-base leading-relaxed text-muted">
              <p>
                I started where a lot of good stories start: with a broken laptop and a stubborn
                belief that details matter. What began as tinkering became a career built across
                ten disciplines that most people treat as separate.
              </p>
              <p>
                I design interfaces, write the code behind them, analyse the data they produce, and
                shape the strategy that ties it together. That range is deliberate. When one person
                holds the whole picture, the result is more coherent, and there are fewer places for
                good ideas to get lost in translation.
              </p>
              <p>
                Today I partner with founders, brands, and agencies to build digital experiences
                that earn trust and drive measurable results. I care less about being impressive and
                more about being useful, though I try hard to be both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container-p pb-section">
        <div className="grid gap-4 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.label} index={i}>
              <div className="h-full rounded-3xl border border-[var(--border-soft)] card-surface p-8">
                <div className="font-display text-fluid-2xl font-bold text-gradient">{d.stat}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{d.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container-p pb-section">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] p-8 md:p-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at 20% 20%, #2563eb, transparent 60%)" }}
          />
          <div className="relative max-w-3xl">
            <span className="eyebrow"><span className="h-px w-8 bg-highlight/60" />My mission</span>
            <p className="mt-5 font-display text-fluid-xl font-medium leading-snug text-ink">
              To make premium, thoughtful digital work accessible to ambitious people, and to prove
              that craft and results are not a trade-off but the same pursuit.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-p pb-section">
        <SectionHeading eyebrow="What I value" title={<>Principles that guide the work</>} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} index={i % 2}>
              <div className="flex h-full gap-4 rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <span className="font-mono text-sm text-highlight">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-p pb-section">
        <SectionHeading eyebrow="Journey" title={<>Career &amp; education</>} />
        <div className="mt-12 space-y-0">
          {timeline.map((t, i) => (
            <Reveal key={i} index={0}>
              <div className="group relative grid gap-4 border-l border-[var(--border-soft)] pb-10 pl-8 md:grid-cols-[180px_1fr] md:gap-8">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-highlight transition-transform group-hover:scale-125" />
                <div>
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs ${
                      t.type === "education" ? "bg-accent/15 text-accent" : "bg-secondary/15 text-highlight"
                    }`}
                  >
                    {t.period}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{t.role}</h3>
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container-p pb-section">
        <SectionHeading eyebrow="Credentials" title={<>Certifications</>} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} index={i % 3}>
              <div className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <div>
                  <h3 className="font-medium text-ink">{c.name}</h3>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
                <span className="font-mono text-sm text-highlight">{c.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
