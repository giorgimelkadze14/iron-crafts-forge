import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import g6 from "@/assets/g6.jpg";

export function About() {
  const { t, lang } = useI18n();
  const ka = lang === "ka";
  const services: Array<Parameters<typeof t>[0]> = [
    "about.services.gates",
    "about.services.railings",
    "about.services.fences",
    "about.services.welding",
    "about.services.structures",
    "about.services.custom",
  ];

  return (
    <section id="about" className="relative noise overflow-hidden py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} ka={ka} />
          <div className={`space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg ${ka ? "font-ka" : ""}`}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>

          <ul className={`mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 ${ka ? "font-ka" : ""}`}>
            {services.map((k) => (
              <li key={k} className="flex items-center gap-3 border-l border-accent/40 pl-4 text-sm text-foreground">
                <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_var(--ember)]" />
                {t(k)}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="relative metal-border overflow-hidden rounded-sm">
            <img src={g6} alt="Iron Crafts workshop" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className={`text-xs uppercase tracking-[0.3em] text-muted-foreground ${ka ? "font-ka" : ""}`}>
                {ka ? "სახელოსნო" : "Workshop"}
              </span>
              <span className="text-xs tracking-widest text-foreground/80">— TBILISI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
