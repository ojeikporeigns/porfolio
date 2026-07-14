import Link from "next/link";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowIcon } from "@/components/ui/button";

export function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="container-p py-section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Case studies that <span className="text-gradient">prove the process</span>
            </>
          }
          description="A look at how strategy, design, and engineering come together to solve real problems."
        />
        <Link
          href="/portfolio"
          className="group hidden items-center gap-2 text-sm text-ink hover:text-highlight md:inline-flex"
        >
          View all projects <ArrowIcon />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <Link
        href="/portfolio"
        className="group mt-8 inline-flex items-center gap-2 text-sm text-ink hover:text-highlight md:hidden"
      >
        View all projects <ArrowIcon />
      </Link>
    </section>
  );
}
