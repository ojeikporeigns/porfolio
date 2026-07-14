"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/effects/magnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  cursor?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  cursor,
}: Props) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  return (
    <Magnetic strength={0.25} className="inline-block">
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} data-cursor={cursor}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls} data-cursor={cursor}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
