const paths: Record<string, React.ReactNode> = {
  layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  code: <><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></>,
  cursor: <><path d="M4 4l7 17 2.5-6.5L20 12 4 4z" /></>,
  palette: <><circle cx="12" cy="12" r="9" /><circle cx="8" cy="10" r="1" /><circle cx="12" cy="8" r="1" /><circle cx="16" cy="10" r="1" /></>,
  sparkle: <><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></>,
  pen: <><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></>,
  wrench: <><path d="M14 7a4 4 0 0 1-5 5L4 17l3 3 5-5a4 4 0 0 0 5-5l-3-3z" /></>,
  chart: <><path d="M3 3v18h18M8 14v4M13 10v8M18 6v12" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  bolt: <><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></>,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-5 3-3 5 5-3 3-5z" /></>,
};

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
