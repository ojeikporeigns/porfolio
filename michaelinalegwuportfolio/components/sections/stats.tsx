import { site } from "@/lib/site";
import { Counter } from "@/components/effects/counter";
import { Reveal } from "@/components/effects/reveal";

export function Stats() {
  return (
    <section className="container-p py-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-secondary/5 md:grid-cols-4">
        {site.stats.map((s, i) => (
          <Reveal
            key={s.label}
            index={i}
            className="group relative bg-base/40 p-8 text-center transition-colors hover:bg-secondary/5"
          >
            <div className="font-display text-fluid-2xl font-bold text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
