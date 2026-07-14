import { Reveal } from "@/components/effects/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-highlight/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal index={1}>
        <Tag className="mt-5 font-display text-fluid-2xl font-semibold leading-[1.05] tracking-tight text-ink">
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal index={2}>
          <p
            className={`mt-5 text-fluid-base leading-relaxed text-muted ${
              align === "center" ? "mx-auto" : ""
            } max-w-2xl`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
