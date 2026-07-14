import {
  graphicDesign,
  analyticsDashboards,
  copywriting,
  seoReports,
  itSupport,
} from "@/content/galleries";
import { MockVisual } from "@/components/mock/mock-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

export function SpecialtyGalleries() {
  return (
    <div className="space-y-section">
      {/* Graphic design */}
      <section id="graphic-design">
        <SectionHeading
          eyebrow="Graphic Design"
          title={<>Design that stops the scroll</>}
          description="Brand identities, campaign creative, print, and packaging. A selection of mock pieces showing range and craft."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {graphicDesign.map((g, i) => (
            <Reveal key={g.title} index={i % 5}>
              <figure className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] card-surface">
                <div className="aspect-square p-3">
                  <MockVisual kind={g.kind} accent={g.accent} accent2={g.accent2} seed={g.seed} label={g.title} />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-ink">{g.title}</span>
                  {g.tag && <span className="text-[10px] uppercase tracking-wider text-muted">{g.tag}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Data analytics */}
      <section id="data-analytics">
        <SectionHeading
          eyebrow="Data Analytics"
          title={<>Dashboards that answer questions</>}
          description="Interactive reporting across finance, sales, HR, healthcare, and more. Built in Power BI, Excel, and the web."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analyticsDashboards.map((d, i) => (
            <Reveal key={d.title} index={i % 3}>
              <figure className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] card-surface">
                <div className="aspect-[16/11] p-3">
                  <MockVisual kind={d.kind} accent={d.accent} accent2={d.accent2} seed={d.seed} label={d.title} />
                </div>
                <figcaption className="px-4 py-3 text-sm text-ink">{d.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Copywriting */}
      <section id="copywriting">
        <SectionHeading
          eyebrow="Copywriting"
          title={<>Words that do the selling</>}
          description="Conversion copy for landing pages, ads, emails, and products. Each sample shows voice and intent."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copywriting.map((c, i) => (
            <Reveal key={c.title} index={i % 3}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <span
                  className="w-fit rounded-full px-2.5 py-1 text-[11px] font-medium"
                  style={{ background: `${c.accent}18`, color: c.accent }}
                >
                  {c.type}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.blurb}</p>
                <p className="mt-4 border-l-2 pl-3 text-sm italic leading-relaxed text-ink/80" style={{ borderColor: c.accent }}>
                  &ldquo;{c.sample}&rdquo;
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO */}
      <section id="seo">
        <SectionHeading
          eyebrow="SEO"
          title={<>Reports that turn into rankings</>}
          description="Audits, keyword research, competitor gaps, and performance summaries that guide real growth."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoReports.map((r, i) => (
            <Reveal key={r.title} index={i % 3}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <div className="font-display text-2xl font-bold" style={{ color: r.accent }}>
                  {r.metric}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IT support */}
      <section id="it-support">
        <SectionHeading
          eyebrow="IT Support"
          title={<>Infrastructure that stays reliable</>}
          description="Real-world IT case studies: networks, deployments, security, and the documentation that keeps teams moving."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itSupport.map((c, i) => (
            <Reveal key={c.title} index={i % 3}>
              <article className="group flex h-full items-start gap-4 rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <span
                  className="mt-1 h-10 w-1 shrink-0 rounded-full"
                  style={{ background: `linear-gradient(${c.accent}, transparent)` }}
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.summary}</p>
                  <p className="mt-3 text-xs font-medium" style={{ color: c.accent }}>
                    ✓ {c.outcome}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
