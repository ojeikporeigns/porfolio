"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories } from "@/content/blog";
import { ArrowIcon } from "@/components/ui/button";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BlogList() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);
  const [featured, ...rest] = filtered;

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              cat === c
                ? "border-highlight/50 bg-highlight/10 text-highlight"
                : "border-white/10 text-muted hover:border-white/25 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-8 block overflow-hidden rounded-3xl border border-white/5 card-surface"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="relative aspect-[16/10] md:aspect-auto"
                  style={{
                    background: `linear-gradient(135deg, ${featured.accent}, ${featured.accent}22)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/20">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span style={{ color: featured.accent }}>{featured.category}</span>
                    <span>·</span>
                    <span>{formatDate(featured.date)}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink group-hover:text-highlight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-highlight">
                    Read article <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 card-surface transition-all hover:-translate-y-1 hover:border-highlight/30"
              >
                <div
                  className="relative aspect-[16/9]"
                  style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}18)` }}
                >
                  <span className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 text-[11px] text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{formatDate(p.date)}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink group-hover:text-highlight">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
