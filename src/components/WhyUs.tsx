import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Hammer, Shield, Ruler, Sparkles, Layers, MapPin } from "lucide-react";

export function WhyUs() {
  const { t, lang } = useI18n();
  const ka = lang === "ka";

  const items = [
    { i: Hammer, t: "why.1.t", d: "why.1.d" },
    { i: Shield, t: "why.2.t", d: "why.2.d" },
    { i: Ruler, t: "why.3.t", d: "why.3.d" },
    { i: Sparkles, t: "why.4.t", d: "why.4.d" },
    { i: Layers, t: "why.5.t", d: "why.5.d" },
    { i: MapPin, t: "why.6.t", d: "why.6.d" },
  ] as const;

  return (
    <section id="why" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_oklab,var(--ember)_8%,transparent),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} ka={ka} />

        <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
          {items.map(({ i: Icon, t: tk, d: dk }, idx) => (
            <div
              key={idx}
              className="group relative bg-card p-8 transition hover:bg-secondary md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-sm border border-border bg-background transition group-hover:border-accent group-hover:text-accent">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  0{idx + 1}
                </span>
              </div>
              <h3 className={`mb-3 text-xl font-medium text-foreground ${ka ? "font-ka" : ""}`}>
                {t(tk)}
              </h3>
              <p className={`text-sm leading-relaxed text-muted-foreground ${ka ? "font-ka" : ""}`}>
                {t(dk)}
              </p>
              <span className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
