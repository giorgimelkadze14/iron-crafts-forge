import hero from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t, lang } = useI18n();
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,color-mix(in_oklab,var(--ember)_20%,transparent),transparent_60%)]" />
      </div>

      {/* Floating sparks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1 w-1 rounded-full bg-accent shadow-[0_0_12px_2px_var(--ember)]"
            style={{
              left: `${(i * 73) % 100}%`,
              animation: `spark-rise ${4 + (i % 5)}s ease-in ${i * 0.4}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-44">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-accent">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="text-5xl font-medium leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-gradient-silver">{t("hero.title1")}</span>
            <span className="mt-2 block italic text-foreground/90">
              {t("hero.title2")}
            </span>
          </h1>

          <p className={`mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg ${lang === "ka" ? "font-ka" : ""}`}>
            {t("hero.sub")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-sm bg-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] text-background transition hover:bg-accent hover:text-accent-foreground"
            >
              {t("hero.cta.work")}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-sm border border-border bg-background/30 px-7 py-4 text-sm uppercase tracking-[0.2em] text-foreground backdrop-blur transition hover:border-accent hover:text-accent"
            >
              {t("hero.cta.contact")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:flex">
        <span className="h-8 w-px bg-border" />
        <span>{t("hero.scroll")}</span>
      </div>
    </section>
  );
}
