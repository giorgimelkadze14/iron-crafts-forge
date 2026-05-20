import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";
import g11 from "@/assets/g11.jpg";
import g12 from "@/assets/g12.jpg";
import g13 from "@/assets/g13.jpg";
import g14 from "@/assets/g14.jpg";
import g15 from "@/assets/g15.jpg";
import g16 from "@/assets/g16.jpg";
import g17 from "@/assets/g17.jpg";
import g18 from "@/assets/g18.jpg";
import g19 from "@/assets/g19.jpg";
import g20 from "@/assets/g20.jpg";
import g21 from "@/assets/g21.jpg";
import g22 from "@/assets/g22.jpg";
import g23 from "@/assets/g23.jpg";
import g24 from "@/assets/g24.jpg";

type Cat = "all" | "gates" | "railings" | "structures" | "stairs";
type Item = { src: string; cat: Exclude<Cat, "all">; h: "tall" | "wide" | "sq" };

const base: Item[] = [
  { src: g1, cat: "railings", h: "tall" },
  { src: g2, cat: "railings", h: "wide" },
  { src: g3, cat: "stairs", h: "sq" },
  { src: g4, cat: "gates", h: "tall" },
  { src: g5, cat: "gates", h: "wide" },
  { src: g6, cat: "railings", h: "sq" },
  { src: g7, cat: "structures", h: "tall" },
  { src: g8, cat: "railings", h: "sq" },
  { src: g9, cat: "structures", h: "wide" },
  { src: g10, cat: "railings", h: "sq" },
  { src: g11, cat: "railings", h: "wide" },
  { src: g12, cat: "gates", h: "sq" },
  { src: g13, cat: "gates", h: "tall" },
  { src: g14, cat: "railings", h: "tall" },
  { src: g15, cat: "railings", h: "wide" },
  { src: g16, cat: "railings", h: "sq" },
  { src: g17, cat: "railings", h: "wide" },
  { src: g18, cat: "stairs", h: "tall" },
  { src: g19, cat: "stairs", h: "wide" },
  { src: g20, cat: "stairs", h: "sq" },
  { src: g21, cat: "railings", h: "tall" },
  { src: g22, cat: "railings", h: "wide" },
  { src: g23, cat: "railings", h: "sq" },
  { src: g24, cat: "gates", h: "wide" },


];

// Build ~24 items by reusing photographs (until the company supplies the full set).
const items: Item[] = Array.from({ length: 24 }, (_, i) => base[i % base.length]);

const heights: Record<Item["h"], string> = {
  tall: "row-span-2",
  wide: "row-span-1",
  sq: "row-span-1",
};

export function Gallery() {
  const { t, lang } = useI18n();
  const ka = lang === "ka";
  const [cat, setCat] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(() => (cat === "all" ? items : items.filter((i) => i.cat === cat)), [cat]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? v : (v - 1 + filtered.length) % filtered.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, filtered.length]);

  const cats: { id: Cat; key: Parameters<typeof t>[0] }[] = [
    { id: "all", key: "gallery.all" },
    { id: "gates", key: "gallery.gates" },
    { id: "railings", key: "gallery.railings" },
    { id: "structures", key: "gallery.structures" },
    { id: "stairs", key: "gallery.stairs" },
  ];

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} sub={t("gallery.sub")} ka={ka} />

        <div className={`mb-10 flex flex-wrap gap-2 ${ka ? "font-ka" : ""}`}>
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                cat === c.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {t(c.key)}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card ${heights[it.h]}`}
            >
              <img
                src={it.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-60 transition group-hover:opacity-90" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/80 opacity-0 transition group-hover:opacity-100">
                <span>{t(`gallery.${it.cat}` as Parameters<typeof t>[0])}</span>
                <span>0{(i % 9) + 1}</span>
              </div>
              <span className="pointer-events-none absolute inset-0 border border-accent/0 transition group-hover:border-accent/60" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md">
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 text-foreground transition hover:border-accent hover:text-accent"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? v : (v - 1 + filtered.length) % filtered.length))}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/70 transition hover:border-accent hover:text-accent"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setLightbox((v) => (v === null ? v : (v + 1) % filtered.length))}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/70 transition hover:border-accent hover:text-accent"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt=""
            className="max-h-[85vh] max-w-[92vw] rounded-sm object-contain shadow-2xl ring-1 ring-border"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
