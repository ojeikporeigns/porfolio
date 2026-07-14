type Props = { accent: string; accent2: string; seed: number; label?: string };

function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function DashboardMock({ accent, accent2, seed, label }: Props) {
  const rand = rng(seed);
  const bars = Array.from({ length: 12 }, () => 0.25 + rand() * 0.75);
  const line = Array.from({ length: 16 }, (_, i) => {
    const y = 30 + Math.sin(i * 0.7 + seed) * 12 + rand() * 8;
    return `${(i / 15) * 100},${y}`;
  }).join(" ");
  const donut = 0.35 + rand() * 0.4;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl2 bg-[#0b1220] text-[10px] text-slate-300 ring-1 ring-white/10">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded" style={{ background: accent }} />
          <span className="font-semibold text-slate-100">{label ?? "Analytics"}</span>
        </div>
        <div className="flex gap-1.5">
          {["7D", "30D", "1Y"].map((t, i) => (
            <span
              key={t}
              className="rounded px-1.5 py-0.5"
              style={
                i === 1
                  ? { background: accent, color: "#04121f" }
                  : { background: "rgba(255,255,255,0.05)" }
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 gap-3 p-4">
        {/* left rail */}
        <div className="hidden w-20 flex-col gap-2 sm:flex">
          {["Overview", "Revenue", "Users", "Reports", "Settings"].map((n, i) => (
            <div
              key={n}
              className="rounded px-2 py-1.5"
              style={i === 1 ? { background: "rgba(255,255,255,0.06)", color: "#fff" } : undefined}
            >
              {n}
            </div>
          ))}
        </div>
        {/* main */}
        <div className="flex flex-1 flex-col gap-3">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Revenue", v: "$248k", d: "+12.4%" },
              { k: "Users", v: "18.2k", d: "+8.1%" },
              { k: "Conv.", v: "4.7%", d: "+1.3%" },
            ].map((c) => (
              <div key={c.k} className="rounded-lg bg-white/[0.03] p-2 ring-1 ring-white/5">
                <div className="text-[8px] text-slate-500">{c.k}</div>
                <div className="text-sm font-bold text-slate-100">{c.v}</div>
                <div style={{ color: accent }}>{c.d}</div>
              </div>
            ))}
          </div>
          {/* line chart */}
          <div className="relative flex-1 rounded-lg bg-white/[0.02] p-2 ring-1 ring-white/5">
            <svg viewBox="0 0 100 55" preserveAspectRatio="none" className="h-full w-full">
              <defs>
                <linearGradient id={`g${seed}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points={`0,55 ${line} 100,55`}
                fill={`url(#g${seed})`}
                stroke="none"
              />
              <polyline
                points={line}
                fill="none"
                stroke={accent}
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* bars + donut */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 flex items-end gap-1 rounded-lg bg-white/[0.02] p-2 ring-1 ring-white/5">
              {bars.map((b, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${b * 48}px`,
                    background: i % 3 === 0 ? accent : accent2,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white/[0.02] p-2 ring-1 ring-white/5">
              <svg viewBox="0 0 36 36" className="h-14 w-14">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke={accent}
                  strokeWidth="5"
                  strokeDasharray={`${donut * 94} 94`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
                <text x="18" y="21" textAnchor="middle" fontSize="7" fill="#e2e8f0">
                  {Math.round(donut * 100)}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
