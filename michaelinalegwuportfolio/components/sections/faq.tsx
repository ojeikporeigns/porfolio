"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Most landing pages take 1–2 weeks, full websites 2–6 weeks, and product/UX work 3–5 weeks. I'll give you a firm timeline after our first call once the scope is clear.",
  },
  {
    q: "How do you price your work?",
    a: "I price by value and scope, not hourly. After understanding your goals I'll send a fixed proposal so there are no surprises. Retainers are available for ongoing work.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. I work remotely with clients worldwide and I'm comfortable across time zones. Most of my collaboration happens over async updates and scheduled calls.",
  },
  {
    q: "Can you handle both design and development?",
    a: "That's my specialty. Design, development, data, and strategy from one accountable partner means fewer handoffs and a more coherent result.",
  },
  {
    q: "What happens after launch?",
    a: "I offer maintenance retainers covering updates, security, performance, and content changes. You'll never be left to figure things out alone.",
  },
  {
    q: "How do we get started?",
    a: "Send a message through the form or book a call. I'll reply within 24 hours, we'll talk through your goals, and I'll follow up with a clear proposal.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--border-soft)] rounded-3xl border border-[var(--border-soft)] card-surface">
      {faqs.map((f, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-ink">{f.q}</span>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] text-highlight transition-transform ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
