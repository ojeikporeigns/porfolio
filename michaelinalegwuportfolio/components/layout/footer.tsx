import Link from "next/link";
import { site } from "@/lib/site";
import { Marquee } from "@/components/effects/marquee";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-section overflow-hidden border-t border-[var(--border-soft)]">
      {/* Big CTA marquee */}
      <Link href="/contact" className="group block border-b border-[var(--border-soft)] py-10">
        <Marquee duration={30}>
          <span className="flex items-center gap-6 font-display text-4xl font-semibold tracking-tight text-ink/90 md:text-6xl">
            Let&apos;s build something exceptional
            <span className="text-highlight">✦</span>
            Available for freelance &amp; contract
            <span className="text-highlight">✦</span>
          </span>
        </Marquee>
      </Link>

      <div className="container-p py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-white">
                MI
              </span>
              Michael Inalegwu
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-muted">
              <span className="text-highlight">◉</span> {site.location}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.slice(1, 6).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-ink/80 hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
              More
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.slice(6).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-ink/80 hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="link-underline text-ink/80 hover:text-ink">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="link-underline text-ink/80 hover:text-ink">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="link-underline text-ink/80 hover:text-highlight"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-soft)] pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {year} Michael Emmanuel Inalegwu. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Designed &amp; built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
