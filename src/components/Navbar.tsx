import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { id: string; key: Parameters<typeof t>[0] }[] = [
    { id: "work", key: "nav.work" },
    { id: "about", key: "nav.about" },
    { id: "why", key: "nav.why" },
    { id: "contact", key: "nav.contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-sm metal-border">
            <span className="text-[11px] font-bold tracking-[0.2em] text-foreground">IC</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold tracking-[0.25em] text-foreground">IRON CRAFTS</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {lang === "ka" ? "რკინის ხელოვნება" : "Forged in Georgia"}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.key)}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-border bg-secondary/40 p-0.5 text-xs md:flex">
            <button
              onClick={() => setLang("ka")}
              className={`rounded-full px-3 py-1.5 transition ${
                lang === "ka" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              KA
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 transition ${
                lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#contact"
            className="hidden rounded-sm border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:bg-accent hover:text-accent-foreground md:inline-block"
          >
            {t("nav.contact")}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-border md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden ${open ? "max-h-96" : "max-h-0"} overflow-hidden glass transition-[max-height] duration-500`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-3 text-base text-foreground"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => setLang("ka")}
              className={`flex-1 rounded-sm border border-border py-2 text-xs ${lang === "ka" ? "bg-foreground text-background" : ""}`}
            >
              KA — ქართული
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex-1 rounded-sm border border-border py-2 text-xs ${lang === "en" ? "bg-foreground text-background" : ""}`}
            >
              EN — English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
