import { Marquee } from "@/components/effects/marquee";

const clients = [
  "Aurelia Estates", "Saveur", "Meridian Health", "Campus OS", "Lumen",
  "Nimbus", "Sterling & Vale", "Forge", "Atelier Noir", "Wander",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-[var(--border-soft)] py-10">
      <p className="container-p mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted">
        Trusted by brands who care about the details
      </p>
      <Marquee duration={35}>
        {clients.map((c) => (
          <span
            key={c}
            className="flex items-center gap-3 font-display text-xl font-semibold text-ink/40 transition-colors hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-highlight/50" />
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
