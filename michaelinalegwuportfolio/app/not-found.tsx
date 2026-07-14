import Link from "next/link";
import { Aurora, GridLines } from "@/components/effects/aurora";
import { ButtonLink, ArrowIcon } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Aurora />
      <GridLines />
      <div className="container-p relative z-10 text-center">
        <p className="font-display text-[28vw] font-bold leading-none text-gradient md:text-[16rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-fluid-xl font-semibold text-ink">
          This page took a wrong turn
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          to something worth seeing.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" className="group">
            Back home <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="ghost">
            View work
          </ButtonLink>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted">
          {[
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="link-underline hover:text-highlight">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
