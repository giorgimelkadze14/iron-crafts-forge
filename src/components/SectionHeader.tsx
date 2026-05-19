import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  ka = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  ka?: boolean;
}) {
  return (
    <div className={`mb-14 ${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent">{eyebrow}</span>
      </div>
      <h2 className={`text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl text-gradient-silver ${ka ? "font-ka" : ""}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-base text-muted-foreground md:text-lg ${ka ? "font-ka" : ""}`}>{sub}</p>
      )}
    </div>
  );
}
