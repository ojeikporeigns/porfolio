"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { site } from "@/lib/site";

type Item = {
  label: string;
  hint?: string;
  group: string;
  action: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = site.nav.map((n) => ({
      label: n.label,
      hint: "Page",
      group: "Navigate",
      keywords: n.href,
      action: () => router.push(n.href),
    }));
    const extra: Item[] = [
      { label: "Case Studies", hint: "Page", group: "Navigate", action: () => router.push("/portfolio") },
      {
        label: theme === "light" ? "Switch to dark mode" : "Switch to light mode",
        hint: "Theme",
        group: "Actions",
        action: () => setTheme(theme === "light" ? "dark" : "light"),
      },
      { label: "Email me", hint: "Contact", group: "Actions", action: () => (window.location.href = `mailto:${site.email}`) },
      ...site.socials
        .filter((s) => s.href.startsWith("http"))
        .map((s) => ({
          label: s.label,
          hint: "Social",
          group: "Connect",
          action: () => window.open(s.href, "_blank"),
        })),
    ];
    return [...nav, ...extra];
  }, [router, setTheme, theme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.keywords?.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
      // Quick nav shortcuts
      if (!open && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        const map: Record<string, string> = { h: "/", p: "/portfolio", c: "/contact", a: "/about", s: "/services" };
        const dest = map[e.key.toLowerCase()];
        if (dest) {
          e.preventDefault();
          router.push(dest);
        }
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, [open, router]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.action();
      setOpen(false);
    }
  };

  const groups = Array.from(new Set(filtered.map((f) => f.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[350] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-base/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl glass shadow-glow-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border-soft)] px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-muted" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="m20 20-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onListKey}
                placeholder="Search pages, actions, links…"
                className="w-full bg-transparent py-4 text-ink outline-none placeholder:text-muted"
                aria-label="Search"
              />
              <kbd className="rounded bg-secondary/5 px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted">No results found.</p>
              )}
              {groups.map((g) => (
                <div key={g} className="mb-1">
                  <p className="px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-muted">{g}</p>
                  {filtered
                    .filter((f) => f.group === g)
                    .map((f) => {
                      const idx = filtered.indexOf(f);
                      return (
                        <button
                          key={f.label}
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => {
                            f.action();
                            setOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                            active === idx ? "bg-secondary/10 text-ink" : "text-ink/80"
                          }`}
                        >
                          <span>{f.label}</span>
                          {f.hint && <span className="text-xs text-muted">{f.hint}</span>}
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
