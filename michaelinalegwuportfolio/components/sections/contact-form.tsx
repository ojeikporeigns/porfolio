"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "@/components/ui/button";

const budgets = ["< $1k", "$1k–$5k", "$5k–$10k", "$10k+"];
const projectTypes = ["Website", "Web App", "UI/UX", "Branding", "Dashboard", "SEO", "Other"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "$5k–$10k",
    type: "Website",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Tell me a little more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // Placeholder: wire to your email service / API route.
    setSent(true);
  };

  return (
    <div className="rounded-3xl border border-[var(--border-soft)] card-surface p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">Message ready to send</h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              This demo form validated your details. Connect it to your email service or an API route
              to start receiving real enquiries.
            </p>
            <button onClick={() => setSent(false)} className="btn-ghost mt-6 !py-2 text-sm">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={submit}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className="mi-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  className="mi-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                />
              </Field>
            </div>

            <Field label="Project type">
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, type: t })}
                    className={`rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                      form.type === t
                        ? "border-highlight/50 bg-highlight/10 text-highlight"
                        : "border-[var(--border-soft)] text-muted hover:text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Budget">
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setForm({ ...form, budget: b })}
                    className={`rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                      form.budget === b
                        ? "border-highlight/50 bg-highlight/10 text-highlight"
                        : "border-[var(--border-soft)] text-muted hover:text-ink"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Message" error={errors.message}>
              <textarea
                rows={5}
                className="mi-input resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, goals, and timeline…"
                aria-invalid={!!errors.message}
              />
            </Field>

            <button type="submit" className="btn-primary group w-full">
              Send message <ArrowIcon />
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .mi-input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid var(--border-soft);
          background: rgba(255, 255, 255, 0.02);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--text);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .mi-input::placeholder {
          color: var(--muted);
        }
        .mi-input:focus {
          outline: none;
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
        }
        .mi-input[aria-invalid="true"] {
          border-color: rgba(244, 63, 94, 0.6);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest text-muted">
        {label}
        {error && <span className="normal-case tracking-normal text-rose-400">{error}</span>}
      </span>
      {children}
    </label>
  );
}
