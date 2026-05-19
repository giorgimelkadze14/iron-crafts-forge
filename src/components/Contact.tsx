import { type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Phone, Facebook, ArrowRight } from "lucide-react";

export function Contact() {
  const { t, lang } = useI18n();
  const ka = lang === "ka";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} sub={t("contact.sub")} ka={ka} />

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="space-y-5">
              <a
                href="tel:+995595450770"
                className="group flex items-center justify-between rounded-sm border border-border bg-card p-5 transition hover:border-accent"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground group-hover:border-accent group-hover:text-accent">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.3em] text-muted-foreground ${ka ? "font-ka" : ""}`}>
                      {t("contact.phone")}
                    </div>
                    <div className="mt-1 text-lg tracking-wide text-foreground">595 45 07 70</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </a>

              <a
                href="https://www.facebook.com/p/Iron-Crafts-61563751767528/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-sm border border-border bg-card p-5 transition hover:border-accent"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground group-hover:border-accent group-hover:text-accent">
                    <Facebook size={16} />
                  </span>
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.3em] text-muted-foreground ${ka ? "font-ka" : ""}`}>
                      {t("contact.facebook")}
                    </div>
                    <div className="mt-1 text-lg tracking-wide text-foreground">Iron Crafts</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </a>

              <div className="overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Tbilisi"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=44.74%2C41.69%2C44.86%2C41.75&layer=mapnik"
                  className="h-56 w-full grayscale invert-[0.92] hue-rotate-180 opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-7">
            <div className="metal-border rounded-sm p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label={t("contact.form.name")} ka={ka}>
                  <input
                    required
                    name="name"
                    className="w-full bg-transparent py-2 text-foreground outline-none placeholder:text-muted-foreground/50"
                  />
                </Field>
                <Field label={t("contact.form.email")} ka={ka}>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full bg-transparent py-2 text-foreground outline-none"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label={t("contact.form.message")} ka={ka}>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full resize-none bg-transparent py-2 text-foreground outline-none"
                  />
                </Field>
              </div>

              <div className="mt-7 flex items-center justify-end gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-sm bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition hover:bg-accent hover:text-accent-foreground"
                >
                  {t("contact.form.send")}
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, ka }: { label: string; children: React.ReactNode; ka?: boolean }) {
  return (
    <label className="block border-b border-border focus-within:border-accent transition-colors">
      <span className={`block text-[10px] uppercase tracking-[0.3em] text-muted-foreground ${ka ? "font-ka" : ""}`}>
        {label}
      </span>
      {children}
    </label>
  );
}
