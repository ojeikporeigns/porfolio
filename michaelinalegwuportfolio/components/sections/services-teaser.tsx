import Link from "next/link";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Reveal } from "@/components/effects/reveal";
import { ArrowIcon } from "@/components/ui/button";

export function ServicesTeaser() {
  const featured = services.slice(0, 6);
  return (
    <section className="relative overflow-hidden py-section">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
      />
      <div className="container-p relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What I do"
            title={
              <>
                Ten disciplines,{" "}
                <span className="text-gradient">one accountable partner</span>
              </>
            }
            description="From first pixel to shipped product to the data that proves it worked. Fewer handoffs, a more coherent result."
          />
          <Link
            href="/services"
            className="group hidden items-center gap-2 text-sm text-ink hover:text-highlight md:inline-flex"
          >
            All services <ArrowIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} index={i}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[var(--border-soft)] card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-highlight/30 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 text-highlight">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.overview}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-highlight opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
