import { Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t, lang } = useI18n();
  const ka = lang === "ka";
  const links: { id: string; key: Parameters<typeof t>[0] }[] = [
    { id: "work", key: "nav.work" },
    { id: "about", key: "nav.about" },
    { id: "why", key: "nav.why" },
    { id: "contact", key: "nav.contact" },
  ];
  return (
    <footer className="hairline relative mt-10 border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-sm metal-border">
              <span className="text-[11px] font-bold tracking-[0.2em]">IC</span>
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.25em]">IRON CRAFTS</div>
              <div className={`mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground ${ka ? "font-ka" : ""}`}>
                {t("footer.tag")}
              </div>
            </div>
          </div>

          <nav className={`flex flex-wrap items-center gap-6 text-sm text-muted-foreground ${ka ? "font-ka" : ""}`}>
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="transition hover:text-foreground">
                {t(l.key)}
              </a>
            ))}
          </nav>

          <a
            href="https://www.facebook.com/p/Iron-Crafts-61563751767528/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition hover:border-accent hover:text-accent"
          >
            <Facebook size={16} />
          </a>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Iron Crafts</span>
          <span className={ka ? "font-ka" : ""}>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
