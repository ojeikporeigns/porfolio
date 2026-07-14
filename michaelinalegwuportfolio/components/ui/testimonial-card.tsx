import type { Testimonial } from "@/content/testimonials";
import { Stars } from "./stars";

export function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-[var(--border-soft)] card-surface p-7">
      <Stars rating={t.rating} />
      <blockquote className="mt-4 flex-1 text-fluid-base leading-relaxed text-ink/90">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border-soft)] pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
          style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)` }}
          aria-hidden
        >
          {initials}
        </span>
        <div className="min-w-0">
          <div className="truncate font-medium text-ink">{t.name}</div>
          <div className="truncate text-xs text-muted">
            {t.role}, {t.company} · {t.industry}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
