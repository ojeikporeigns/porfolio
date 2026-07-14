"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem("mi-cookie")) setShow(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  const decide = (v: "all" | "essential") => {
    localStorage.setItem("mi-cookie", v);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[190] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl glass p-4 shadow-card"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-sm text-ink/90">
            This site uses cookies to understand how visitors engage, so the experience keeps
            improving. You choose what to allow.
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => decide("all")} className="btn-primary flex-1 !py-2 text-xs">
              Accept all
            </button>
            <button onClick={() => decide("essential")} className="btn-ghost flex-1 !py-2 text-xs">
              Essential only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
