import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { FeaturedWork } from "@/components/sections/featured-work";
import { TestimonialsTeaser } from "@/components/sections/testimonials-teaser";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <LogoMarquee />
      <ServicesTeaser />
      <FeaturedWork />
      <TestimonialsTeaser />
      <CTA />
    </>
  );
}
