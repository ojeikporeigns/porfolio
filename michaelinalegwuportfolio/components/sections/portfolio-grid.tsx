"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, disciplines } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof disciplines)[number]>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.discipline === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {disciplines.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              filter === d
                ? "border-highlight/50 bg-highlight/10 text-highlight"
                : "border-[var(--border-soft)] text-muted hover:border-white/25 hover:text-ink"
            }`}
          >
            {d}
            {d !== "All" && (
              <span className="ml-1.5 text-xs opacity-60">
                {projects.filter((p) => p.discipline === d).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
