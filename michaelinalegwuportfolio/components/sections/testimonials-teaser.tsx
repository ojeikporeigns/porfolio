import Link from "next/link";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Reveal } from "@/components/effects/reveal";
import { ArrowIcon } from "@/components/ui/button";

export function TestimonialsTeaser() {
  const three = testimonials.slice(0, 3);
  return (
    <section className="container-p py-section">
      <SectionHeading
        eyebrow="Kind words"
        align="center"
        title={
          <>
            Clients don&apos;t just come back.{" "}
            <span className="text-gradient">They refer.</span>
          </>
        }
        description="A 98% retention rate isn't luck. It's what happens when the work delivers and the process respects your time."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {three.map((t, i) => (
          <Reveal key={t.name} index={i}>
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/testimonials"
          className="group inline-flex items-center gap-2 text-sm text-ink hover:text-highlight"
        >
          Read all testimonials <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
