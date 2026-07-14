import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";
import { MockVisual } from "@/components/mock/mock-visual";
import { PageTransition } from "@/components/effects/page-transition";
import { Reveal, RevealText } from "@/components/effects/reveal";
import { Aurora, GridLines } from "@/components/effects/aurora";
import { ButtonLink, ArrowIcon } from "@/components/ui/button";
import { Stars } from "@/components/ui/stars";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMeta({
    title: `${project.title} — ${project.category}`,
    description: project.tagline,
    path: `/case-studies/${project.slug}`,
    keywords: [project.category, project.discipline, "case study"],
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
              { name: project.title, path: `/case-studies/${project.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <header className="relative overflow-hidden pt-36 pb-12">
        <Aurora className="opacity-30" />
        <GridLines />
        <div className="container-p relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted hover:text-highlight">
              <ArrowIcon className="rotate-180" /> Back to portfolio
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span
              className="rounded-full px-3 py-1"
              style={{ background: `${project.accent}18`, color: project.accent }}
            >
              {project.discipline}
            </span>
            <span className="text-muted">{project.category}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{project.client}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{project.year}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-fluid-3xl font-bold leading-[1.02] tracking-tight text-ink">
            <RevealText text={project.title} />
          </h1>
          <Reveal index={1}>
            <p className="mt-5 max-w-2xl text-fluid-lg text-muted">{project.tagline}</p>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={project.links.live} external className="group" cursor="visit">
                Visit live site <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={project.links.github} variant="ghost" external>
                View code
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Hero visual */}
      <div className="container-p">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] card-surface p-6 md:p-10">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}30, transparent 60%)` }}
            />
            <div className="relative aspect-[16/10]">
              <MockVisual
                kind={project.cover}
                accent={project.accent}
                accent2={project.accent2}
                seed={project.seed}
                label={project.title}
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Overview + meta */}
      <section className="container-p py-section">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <p className="mt-4 text-fluid-lg leading-relaxed text-ink/90">{project.overview}</p>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <Block title="The problem" body={project.problem} accent={project.accent} />
              <Block title="The solution" body={project.solution} accent={project.accent} />
            </div>

            <div className="mt-12">
              <SectionLabel>Research</SectionLabel>
              <ul className="mt-4 space-y-3">
                {project.research.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* meta sidebar */}
          <aside className="h-fit rounded-3xl border border-[var(--border-soft)] card-surface p-7 lg:sticky lg:top-28">
            <MetaRow label="Client" value={project.client} />
            <MetaRow label="Year" value={project.year} />
            <MetaRow label="Discipline" value={project.discipline} />
            <div className="py-4">
              <div className="text-xs uppercase tracking-widest text-muted">Technology</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs text-ink/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="container-p pb-section">
        <SectionLabel>Design process</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {project.process.map((step, i) => (
            <Reveal key={step.title} index={i}>
              <div className="h-full rounded-2xl border border-[var(--border-soft)] card-surface p-6">
                <div className="font-mono text-sm" style={{ color: project.accent }}>
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="container-p pb-section">
        <div className="rounded-3xl border border-[var(--border-soft)] card-surface p-8 md:p-12">
          <SectionLabel>Challenges</SectionLabel>
          <p className="mt-4 max-w-3xl text-fluid-base leading-relaxed text-ink/90">
            {project.challenges}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="container-p pb-section">
        <SectionLabel>Results</SectionLabel>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {project.results.map((r, i) => (
            <Reveal key={r.label} index={i}>
              <div className="rounded-2xl border border-[var(--border-soft)] card-surface p-7 text-center">
                <div className="font-display text-fluid-2xl font-bold" style={{ color: project.accent }}>
                  {r.value}
                </div>
                <p className="mt-2 text-sm text-muted">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-p pb-section">
        <SectionLabel>Gallery</SectionLabel>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {project.gallery.map((g, i) => (
            <Reveal key={i} index={i % 2}>
              <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] card-surface p-4">
                <div className={g.kind === "phone" ? "aspect-[16/12]" : "aspect-[16/11]"}>
                  <MockVisual kind={g.kind} accent={project.accent} accent2={project.accent2} seed={g.seed} label={g.label} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Feedback */}
      <section className="container-p pb-section">
        <figure className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] p-8 text-center md:p-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}, transparent 60%)` }}
          />
          <div className="relative">
            <div className="flex justify-center">
              <Stars rating={5} />
            </div>
            <blockquote className="mx-auto mt-6 max-w-2xl font-display text-fluid-lg font-medium leading-relaxed text-ink">
              &ldquo;{project.feedback.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-medium text-ink">{project.feedback.name}</span> — {project.feedback.role}
            </figcaption>
          </div>
        </figure>
      </section>

      {/* Next project */}
      <section className="container-p pb-section">
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-[var(--border-soft)] card-surface p-8 transition-colors hover:border-highlight/30"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-muted">Next case study</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{next.title}</h3>
            <p className="text-sm text-muted">{next.category}</p>
          </div>
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-soft)] transition-all group-hover:border-highlight group-hover:bg-highlight group-hover:text-base">
            <ArrowIcon />
          </span>
        </Link>
      </section>

      <div className="container-p pb-section text-center">
        <ButtonLink href="/contact" className="group" cursor="let's talk">
          Start a project like this <ArrowIcon />
        </ButtonLink>
      </div>
    </PageTransition>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-8 bg-highlight/60" />
      {children}
    </span>
  );
}

function Block({ title, body, accent }: { title: string; body: string; accent: string }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
        <span className="h-4 w-1 rounded-full" style={{ background: accent }} />
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--border-soft)] py-4 text-sm">
      <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}
