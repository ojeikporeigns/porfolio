"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { HeroPortrait } from "./hero-portrait";
import { Aurora, GridLines } from "@/components/effects/aurora";
import { Particles } from "@/components/effects/particles";
import { ButtonLink, ArrowIcon } from "@/components/ui/button";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setTitleIndex((i) => (i + 1) % site.titles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <Aurora />
      <GridLines />
      <Particles className="opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent"
      />

      <div className="container-p relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for projects · {site.location}
            </motion.div>

            <h1 className="mt-6 font-display text-fluid-4xl font-bold leading-[0.95] tracking-tight text-ink">
              <Line delay={0.1}>Michael</Line>
              <Line delay={0.2}>
                <span className="text-gradient">Inalegwu</span>
              </Line>
            </h1>

            <div className="mt-6 flex h-9 items-center gap-3 text-fluid-lg font-medium text-muted">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-secondary to-accent" />
              <div className="relative h-9 min-w-[16rem] flex-1 overflow-hidden">
                {site.titles.map((t, i) => (
                  <motion.span
                    key={t}
                    className="absolute left-0 top-0 flex h-9 items-center whitespace-nowrap text-ink"
                    initial={false}
                    animate={{
                      y: `${(i - titleIndex) * 100}%`,
                      opacity: i === titleIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 max-w-xl text-fluid-base leading-relaxed text-muted"
            >
              An elite digital problem solver blending design, development, data, and
              strategy to build experiences that win trust and drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="/contact" className="group" cursor="let's talk">
                Start a project <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="ghost" className="group" cursor="view work">
                View my work
              </ButtonLink>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <span className="text-xs uppercase tracking-widest text-muted">Find me</span>
              <div className="h-px w-8 bg-[var(--border-soft)]" />
              {site.socials.slice(0, 4).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-highlight"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="flex h-8 w-5 justify-center rounded-full border border-[var(--border-soft)] pt-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-highlight"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
