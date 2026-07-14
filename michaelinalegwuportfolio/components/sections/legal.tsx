export function LegalBody({
  sections,
}: {
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-prose space-y-8">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display text-xl font-semibold text-ink">{s.heading}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="mt-3 text-fluid-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="border-t border-[var(--border-soft)] pt-6 text-sm text-muted">
        This is a template document for the portfolio. Replace it with your own policy reviewed for
        your jurisdiction before going live.
      </p>
    </div>
  );
}
