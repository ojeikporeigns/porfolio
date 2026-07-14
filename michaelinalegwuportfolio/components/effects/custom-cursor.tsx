"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor], input, textarea, select, [role='button']");
      const cursorLabel = interactive?.getAttribute("data-cursor");
      setLabel(cursorLabel ?? null);
      ring.current?.classList.toggle("is-active", !!interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] -ml-1 -mt-1 h-2 w-2 rounded-full bg-highlight mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[300] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-highlight/60 text-[9px] font-medium uppercase tracking-widest text-highlight transition-[width,height,background] duration-200"
      >
        {label}
      </div>
      <style jsx global>{`
        .cursor-ring.is-active {
          width: 3.5rem;
          height: 3.5rem;
          margin-left: -1.75rem;
          margin-top: -1.75rem;
          background: rgba(56, 189, 248, 0.08);
          border-color: rgba(56, 189, 248, 0.9);
        }
      `}</style>
    </>
  );
}
