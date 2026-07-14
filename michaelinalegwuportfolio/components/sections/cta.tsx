import { site } from "@/lib/site";
import { Aurora } from "@/components/effects/aurora";
import { ButtonLink, ArrowIcon } from "@/components/ui/button";
import { RevealText } from "@/components/effects/reveal";

export function CTA() {
  return (
    <section className="container-p py-section">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-soft)] px-6 py-20 text-center md:px-16">
        <Aurora className="opacity-60" />
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{ background: "radial-gradient(circle at 50% 120%, rgba(37,99,235,0.25), transparent 60%)" }}
        />
        <div className="relative z-10">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-highlight/60" />
            Let&apos;s work together
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-fluid-3xl font-bold leading-[1.02] tracking-tight text-ink">
            <RevealText text="Have a project worth doing right?" />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-fluid-base text-muted">
            Tell me what you&apos;re building. I&apos;ll bring the design, the code, and the
            strategy to make it something people remember.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" className="group" cursor="let's talk">
              Start a project <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="ghost" external>
              {site.email}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
