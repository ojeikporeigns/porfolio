import { DashboardMock } from "./dashboard-mock";
import { BrowserMock } from "./browser-mock";
import { PhoneMock } from "./phone-mock";
import { BrandMock } from "./brand-mock";

export type MockKind = "browser" | "dashboard" | "phone" | "brand";

export function MockVisual({
  kind,
  accent = "#38bdf8",
  accent2 = "#2563eb",
  label,
  seed = 1,
  className = "",
}: {
  kind: MockKind;
  accent?: string;
  accent2?: string;
  label?: string;
  seed?: number;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      {kind === "dashboard" && (
        <DashboardMock accent={accent} accent2={accent2} seed={seed} label={label} />
      )}
      {kind === "browser" && (
        <BrowserMock accent={accent} accent2={accent2} seed={seed} label={label} />
      )}
      {kind === "phone" && (
        <PhoneMock accent={accent} accent2={accent2} seed={seed} label={label} />
      )}
      {kind === "brand" && (
        <BrandMock accent={accent} accent2={accent2} seed={seed} label={label} />
      )}
    </div>
  );
}
