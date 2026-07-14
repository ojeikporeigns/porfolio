"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Hero portrait composition.
 * Uses the real headshot at /public/assets/headshot.webp inside the framed,
 * duotone-lit composition. If the file is ever missing, a refined placeholder
 * silhouette holds the exact same layout so nothing shifts.
 * Swap /public/assets/headshot.webp to change the photo.
 */
export function HeroPortrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(37,99,235,0.5), rgba(6,182,212,0.25) 45%, transparent 70%)",
        }}
      />

      {/* rotating ring */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-[var(--border-soft)] [mask-image:linear-gradient(transparent,black,transparent)]"
      />
      <motion.svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute -inset-6 -z-10 h-[calc(100%+3rem)] w-[calc(100%+3rem)] opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="ringpath" d="M100,20 a80,80 0 1,1 -0.1,0" fill="none" />
        </defs>
        <text fill="#38bdf8" fontSize="7" letterSpacing="3" fontFamily="monospace">
          <textPath href="#ringpath">
            · DESIGN · DEVELOP · ANALYZE · STRATEGIZE · DESIGN · DEVELOP · ANALYZE · STRATEGIZE
          </textPath>
        </text>
      </motion.svg>

      {/* frame */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[var(--border-soft)] glass">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(37,99,235,0.25), transparent 40%, rgba(6,182,212,0.2))",
          }}
        />

        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/assets/headshot.webp"
            alt="Michael Emmanuel Inalegwu"
            width={640}
            height={800}
            className="relative h-full w-full object-cover object-top contrast-[1.05] saturate-[0.6] transition duration-700 hover:saturate-100"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlaceholderSilhouette />
        )}

        {/* subtle brand tint */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
          style={{ background: "linear-gradient(180deg, #2563eb, #06b6d4)" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base/90 to-transparent" />
      </div>

      {/* floating UI cards */}
      <FloatCard
        className="left-[-8%] top-[16%]"
        delay={0.2}
        title="Available for work"
        dot
      />
      <FloatCard
        className="right-[-6%] top-[68%]"
        delay={0.5}
        title="8+ yrs experience"
      />
      <FloatCard
        className="bottom-[9%] left-[-6%]"
        delay={0.8}
        title="Remote · Worldwide"
      />
    </div>
  );
}

function FloatCard({
  className = "",
  title,
  delay = 0,
  dot = false,
}: {
  className?: string;
  title: string;
  delay?: number;
  dot?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: { delay, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-10 flex items-center gap-2 rounded-full glass px-3 py-2 text-xs text-ink shadow-card ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
      )}
      <span className="whitespace-nowrap font-medium">{title}</span>
    </motion.div>
  );
}

function PlaceholderSilhouette() {
  return (
    <div className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-[#0b1428] to-[#0a1120]">
      <svg viewBox="0 0 200 250" className="h-[92%] w-auto opacity-90" aria-hidden>
        <defs>
          <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="70" r="42" fill="url(#sil)" opacity="0.85" />
        <path
          d="M30 250 C30 175 55 140 100 140 C145 140 170 175 170 250 Z"
          fill="url(#sil)"
          opacity="0.85"
        />
      </svg>
      <span className="absolute top-4 left-4 rounded-full bg-white/10 px-2 py-1 font-mono text-[9px] text-highlight">
        headshot.jpg
      </span>
    </div>
  );
}
