type Props = { accent: string; accent2: string; seed: number; label?: string };

export function BrowserMock({ accent, accent2, seed, label }: Props) {
  const slug = label?.toLowerCase().replace(/\s+/g, "") ?? "preview";
  const layout = seed % 4;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#0c111d] ring-1 ring-white/10 shadow-xl">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0f1520] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-2 py-0.5 text-[9px] text-slate-500">
          <span className="text-emerald-400/60">https://</span>
          {slug}.com
        </div>
      </div>

      {/* navbar */}
      <div className="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ background: accent }} />
          <div className="h-2 w-12 rounded bg-white/25" />
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          {["Home", "About", "Work", "Contact"].map((n) => (
            <span key={n} className="text-[7px] font-medium tracking-wide text-white/30">{n}</span>
          ))}
        </div>
        <div className="h-5 w-14 rounded-full text-center text-[7px] font-medium leading-5 text-white/90" style={{ background: accent }}>
          Get Started
        </div>
      </div>

      {/* page content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {layout === 0 && <HeroSplit accent={accent} accent2={accent2} label={label} />}
        {layout === 1 && <HeroCentered accent={accent} accent2={accent2} label={label} />}
        {layout === 2 && <HeroImage accent={accent} accent2={accent2} />}
        {layout === 3 && <HeroGrid accent={accent} accent2={accent2} label={label} />}
      </div>

      {/* cards row */}
      <div className="grid grid-cols-3 gap-2 border-t border-white/5 bg-[#090d17] px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] p-2 ring-1 ring-white/5">
            <div className="mb-1.5 flex items-center gap-1.5">
              <div className="h-3 w-3 rounded" style={{ background: i === 1 ? accent : `${accent2}88` }} />
              <div className="h-1.5 w-8 rounded bg-white/20" />
            </div>
            <div className="h-1 w-full rounded bg-white/8" />
            <div className="mt-0.5 h-1 w-3/4 rounded bg-white/5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroSplit({ accent, accent2, label }: { accent: string; accent2: string; label?: string }) {
  return (
    <div className="flex flex-1 gap-4 px-4 py-3">
      <div className="flex flex-1 flex-col justify-center gap-1.5">
        <div className="h-1.5 w-14 rounded-full" style={{ background: `${accent}55` }} />
        <div className="h-2.5 w-[90%] rounded bg-white/25" />
        <div className="h-2.5 w-3/4 rounded bg-white/18" />
        <div className="mt-1 h-1.5 w-full rounded bg-white/8" />
        <div className="h-1.5 w-5/6 rounded bg-white/6" />
        <div className="h-1.5 w-2/3 rounded bg-white/5" />
        <div className="mt-2 flex gap-2">
          <div className="h-5 w-16 rounded-full" style={{ background: accent }} />
          <div className="h-5 w-16 rounded-full ring-1 ring-white/15" />
        </div>
      </div>
      <div
        className="flex-1 rounded-xl ring-1 ring-white/10"
        style={{ background: `linear-gradient(135deg, ${accent}40, ${accent2}60)` }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 p-3">
          <div className="h-8 w-8 rounded-full ring-2 ring-white/20" style={{ background: `${accent}80` }} />
          <div className="h-1.5 w-16 rounded bg-white/15" />
          <div className="h-1 w-10 rounded bg-white/8" />
        </div>
      </div>
    </div>
  );
}

function HeroCentered({ accent, accent2, label }: { accent: string; accent2: string; label?: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 py-3 text-center">
      <div className="h-1.5 w-16 rounded-full" style={{ background: `${accent}55` }} />
      <div className="h-3 w-3/4 rounded bg-white/25" />
      <div className="h-3 w-1/2 rounded bg-white/18" />
      <div className="mx-auto mt-1 h-1.5 w-2/3 rounded bg-white/8" />
      <div className="mx-auto h-1.5 w-1/2 rounded bg-white/6" />
      <div className="mt-2 flex gap-2">
        <div className="h-5 w-20 rounded-full" style={{ background: accent }} />
        <div className="h-5 w-16 rounded-full ring-1 ring-white/15" />
      </div>
      <div className="mt-2 grid w-full grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="aspect-[4/3] rounded-lg ring-1 ring-white/5" style={{ background: `${i % 2 === 0 ? accent : accent2}18` }} />
        ))}
      </div>
    </div>
  );
}

function HeroImage({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div className="flex flex-1 flex-col px-4 py-3">
      <div
        className="flex-1 rounded-xl ring-1 ring-white/8"
        style={{ background: `linear-gradient(160deg, ${accent}30, ${accent2}50, ${accent}20)` }}
      >
        <div className="flex h-full items-end p-4">
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 w-10 rounded-full" style={{ background: `${accent}88` }} />
            <div className="h-3 w-36 rounded bg-white/30" />
            <div className="h-2 w-24 rounded bg-white/15" />
            <div className="mt-1 h-4 w-14 rounded-full" style={{ background: accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroGrid({ accent, accent2, label }: { accent: string; accent2: string; label?: string }) {
  return (
    <div className="flex flex-1 flex-col gap-2 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="h-2.5 w-32 rounded bg-white/22" />
          <div className="h-1.5 w-20 rounded bg-white/8" />
        </div>
        <div className="flex gap-1.5">
          {["All", "Web", "App"].map((t) => (
            <span key={t} className="rounded-full px-2 py-0.5 text-[6px] text-white/30 ring-1 ring-white/10">{t}</span>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg ring-1 ring-white/5" style={{ background: `${i % 2 === 0 ? accent : accent2}15` }}>
            <div className="flex h-full flex-col justify-end p-2">
              <div className="h-1.5 w-10 rounded bg-white/20" />
              <div className="mt-0.5 h-1 w-6 rounded bg-white/8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
