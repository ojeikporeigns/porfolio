import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal } from "@/components/effects/reveal";
import { Tilt3D } from "@/components/effects/tilt";
import { ServiceIcon } from "@/components/ui/service-icon";
import { CTA } from "@/components/sections/cta";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Fourteen premium services spanning web design, development, UI/UX, branding, SEO, copywriting, data analytics, dashboards, automation, IT support, and consulting.",
  path: "/services",
  keywords: ["services", "web design services", "freelance developer services"],
});

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Services"
        title="Everything your digital presence needs, done right"
        description="Fourteen services, one accountable partner. Each engagement is scoped, transparent, and built to deliver outcomes you can measure."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="container-p py-section">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} index={i % 2}>
              <Tilt3D
                max={4}
                className="group h-full scroll-mt-28 rounded-3xl border border-[var(--border-soft)] card-surface p-8 transition-colors hover:border-highlight/30"
              >
                <div id={s.slug} className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 text-highlight">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs text-muted">
                      {s.timeline}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-semibold text-ink">{s.title}</h2>
                  <p className="text-sm text-highlight">{s.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.overview}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-muted">Benefits</h3>
                      <ul className="mt-3 space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-ink/85">
                            <CheckIcon /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-muted">Deliverables</h3>
                      <ul className="mt-3 space-y-2">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-ink/85">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-highlight" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
                    <h3 className="text-xs uppercase tracking-widest text-muted">Ideal for</h3>
                    <p className="mt-2 text-sm text-ink/85">{s.idealClients}</p>
                  </div>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-highlight" aria-hidden>
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
