import { PageHeader } from "@/components/ui/page-header";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal } from "@/components/effects/reveal";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTA } from "@/components/sections/cta";
import { testimonials } from "@/content/testimonials";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Testimonials",
  description:
    "What clients say about working with Michael Emmanuel Inalegwu across web design, development, product, and data projects.",
  path: "/testimonials",
  keywords: ["testimonials", "client reviews", "references"],
});

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Testimonials"
        title="The result clients remember most: trust"
        description="A selection of what people say after we work together. Real outcomes, in their words."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />

      <section className="container-p py-section">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} index={i % 3}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
