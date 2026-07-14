"use client";

import { motion } from "framer-motion";

export function SkillBar({
  name,
  level,
  accent,
  index,
}: {
  name: string;
  level: number;
  accent: string;
  index: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink/90">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
