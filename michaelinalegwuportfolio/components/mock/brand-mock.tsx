type Props = { accent: string; accent2: string; seed: number; label?: string };

export function BrandMock({ accent, accent2, seed, label }: Props) {
  const variant = seed % 4;
  const initials = (label ?? "Brand")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl2 ring-1 ring-white/10"
      style={{ background: `linear-gradient(135deg, ${accent2}, ${accent})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            variant === 0
              ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0 2px, transparent 2px 18px)"
              : variant === 1
                ? "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%)"
                : variant === 2
                  ? "repeating-radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0 1px, transparent 1px 16px)"
                  : "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 font-display text-2xl font-bold ring-1 ring-white/30 backdrop-blur">
          {initials}
        </div>
        <div className="font-display text-sm font-semibold tracking-widest">
          {(label ?? "Brand").toUpperCase()}
        </div>
        <div className="flex gap-1.5">
          {[accent, "#ffffff", accent2, "rgba(255,255,255,0.5)"].map((c, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full ring-1 ring-white/40" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
