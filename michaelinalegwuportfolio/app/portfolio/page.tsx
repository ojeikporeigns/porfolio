import { PageHeader } from "@/components/ui/page-header";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { SpecialtyGalleries } from "@/components/sections/specialty-galleries";
import { CTA } from "@/components/sections/cta";
import { PageTransition } from "@/components/effects/page-transition";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Portfolio",
  description:
    "Selected case studies and creative work across web design, development, UI/UX, dashboards, graphic design, copywriting, SEO, and IT support.",
  path: "/portfolio",
  keywords: ["portfolio", "case studies", "web design portfolio", "dashboard design"],
});

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Portfolio"
        title="Work that earns trust and drives results"
        description="Flagship case studies and creative work spanning web design, development, UI/UX, dashboards, graphic design, SEO, and data analytics."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />
      <div className="container-p">
        <PortfolioGrid />
      </div>
      <div className="container-p mt-section">
        <SpecialtyGalleries />
      </div>
      <CTA />
    </PageTransition>
  );
}
