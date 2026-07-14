"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { MockVisual } from "@/components/mock/mock-visual";
import { Tilt3D } from "@/components/effects/tilt";
import { ArrowIcon } from "./button";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/case-studies/${project.slug}`} data-cursor="view case" className="block">
        <Tilt3D max={6} className="group overflow-hidden rounded-3xl border border-[var(--border-soft)] card-surface">
          <div className="relative aspect-[16/11] overflow-hidden p-5">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${project.accent}30, transparent 60%)`,
              }}
            />
            <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
              <MockVisual
                kind={project.cover}
                accent={project.accent}
                accent2={project.accent2}
                seed={project.seed}
                label={project.title}
              />
            </div>
          </div>
          <div className="flex items-start justify-between gap-4 p-6 pt-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span
                  className="rounded-full px-2 py-0.5"
                  style={{ background: `${project.accent}18`, color: project.accent }}
                >
                  {project.discipline}
                </span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.category}</p>
            </div>
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] text-ink transition-all duration-300 group-hover:border-highlight group-hover:bg-highlight group-hover:text-base">
              <ArrowIcon className="-rotate-45 group-hover:rotate-0" />
            </span>
          </div>
        </Tilt3D>
      </Link>
    </motion.div>
  );
}
