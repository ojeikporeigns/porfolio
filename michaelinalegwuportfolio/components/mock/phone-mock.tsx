type Props = { accent: string; accent2: string; seed: number; label?: string };

export function PhoneMock({ accent, accent2, seed, label }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative aspect-[9/19] h-full max-h-full overflow-hidden rounded-[2rem] border-[6px] border-[#1e293b] bg-[#0a0f1c] shadow-glow-lg">
        {/* notch */}
        <div className="absolute left-1/2 top-1.5 z-10 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1e293b]" />
        {/* header */}
        <div
          className="flex h-24 flex-col justify-end p-3"
          style={{ background: `linear-gradient(135deg, ${accent2}, ${accent})` }}
        >
          <div className="text-[9px] font-semibold text-white/90">{label ?? "App"}</div>
          <div className="text-[7px] text-white/70">Good morning, Michael</div>
        </div>
        {/* balance card */}
        <div className="-mt-4 mx-3 rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10 backdrop-blur">
          <div className="text-[7px] text-slate-400">Total balance</div>
          <div className="text-base font-bold text-white">$12,480.50</div>
          <div className="mt-1 flex gap-2">
            {["Send", "Top up"].map((a, i) => (
              <div
                key={a}
                className="flex-1 rounded-md py-1 text-center text-[7px]"
                style={i === 0 ? { background: accent, color: "#04121f" } : { background: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
        {/* list */}
        <div className="mt-3 space-y-2 px-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="h-6 w-6 rounded-lg"
                style={{ background: i % 2 ? `${accent}44` : `${accent2}44` }}
              />
              <div className="flex-1">
                <div className="h-1.5 w-16 rounded bg-white/15" />
                <div className="mt-1 h-1 w-10 rounded bg-white/8" />
              </div>
              <div className="h-1.5 w-8 rounded bg-white/12" />
            </div>
          ))}
        </div>
        {/* tab bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-white/5 bg-[#0a0f1c] py-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-4 w-4 rounded"
              style={{ background: i === 0 ? accent : "rgba(255,255,255,0.12)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
