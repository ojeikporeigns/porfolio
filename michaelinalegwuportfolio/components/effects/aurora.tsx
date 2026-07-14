"use client";

export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: "-10%",
          left: "5%",
          width: "42vw",
          height: "42vw",
          background:
            "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.55), transparent 60%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          top: "20%",
          right: "0%",
          width: "38vw",
          height: "38vw",
          animationDelay: "-6s",
          background:
            "radial-gradient(circle at 60% 40%, rgba(6,182,212,0.5), transparent 60%)",
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          bottom: "-15%",
          left: "30%",
          width: "36vw",
          height: "36vw",
          animationDelay: "-11s",
          background:
            "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.4), transparent 60%)",
        }}
      />
    </div>
  );
}

export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
      }}
    />
  );
}
