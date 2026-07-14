import Link from "next/link";
import { Aurora, GridLines } from "@/components/effects/aurora";
import { RevealText, Reveal } from "@/components/effects/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <header className="relative overflow-hidden pt-40 pb-16">
      <Aurora className="opacity-40" />
      <GridLines />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-base to-transparent"
      />
      <div className="container-p relative z-10">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span className="text-muted/50">/</span>}
                  <Link href={b.href} className="hover:text-highlight">
                    {b.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <span className="eyebrow">
          <span className="h-px w-8 bg-highlight/60" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl font-display text-fluid-3xl font-bold leading-[1.02] tracking-tight text-ink">
          <RevealText text={title} />
        </h1>
        {description && (
          <Reveal index={2}>
            <p className="mt-6 max-w-2xl text-fluid-base leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
