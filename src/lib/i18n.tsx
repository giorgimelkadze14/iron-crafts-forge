import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ka" | "en";

type Dict = Record<string, { ka: string; en: string }>;

export const dict: Dict = {
  "nav.work": { ka: "ნამუშევრები", en: "Work" },
  "nav.about": { ka: "ჩვენ შესახებ", en: "About" },
  "nav.why": { ka: "უპირატესობები", en: "Why Us" },
  "nav.contact": { ka: "კონტაქტი", en: "Contact" },

  "hero.eyebrow": { ka: "ხელნაკეთი ლითონის ხელოვნება", en: "Handcrafted Metalwork" },
  "hero.title1": { ka: "რკინა, რომელიც", en: "Iron, shaped" },
  "hero.title2": { ka: "ფორმას იძენს ხელით", en: "by hand" },
  "hero.sub": {
    ka: "Iron Crafts — ინდივიდუალურად შექმნილი ჭიშკრები, მოაჯირები და ლითონის კონსტრუქციები, შესრულებული პრეციზიითა და ხელოვნებით.",
    en: "Iron Crafts designs and welds custom gates, railings and structural metalwork — built with precision and a craftsman's eye.",
  },
  "hero.cta.work": { ka: "იხილეთ ნამუშევრები", en: "See Our Work" },
  "hero.cta.contact": { ka: "დაგვიკავშირდით", en: "Contact Us" },
  "hero.scroll": { ka: "გადაახვიეთ", en: "Scroll" },

  "about.eyebrow": { ka: "სახელოსნო", en: "The Workshop" },
  "about.title": { ka: "ლითონი, რომელშიც ხელის ნამუშევარი ჩანს", en: "Metal that carries the mark of the maker" },
  "about.p1": {
    ka: "Iron Crafts ქართული სახელოსნოა, რომელიც სპეციალიზდება ინდივიდუალურ რკინისა და ლითონის ნამუშევრებზე. ვამზადებთ ჭიშკრებს, მოაჯირებს, ღობეებსა და ლითონის კონსტრუქციებს, რომლებიც გრძელვადიანი, ფუნქციური და ვიზუალურად დახვეწილია.",
    en: "Iron Crafts is a Georgian workshop dedicated to custom iron and metal fabrication. We build gates, railings, fences and structural metalwork that are durable, functional and visually considered.",
  },
  "about.p2": {
    ka: "თითოეული პროექტი იწყება საუბრით, გრძელდება ესკიზით და მთავრდება ხელით შესრულებული შედუღებითა და მოვლილი დასრულებით. ჩვენი მიდგომა მარტივია — სუფთა ხაზები, მტკიცე შენაერთები და მასალა, რომელიც წლების მერეც ისეთივე რჩება, როგორც პირველ დღეს.",
    en: "Every project starts with a conversation, moves through sketches, and ends in welded steel finished by hand. The approach is simple — clean lines, solid joints, and material that holds up year after year.",
  },
  "about.services.gates": { ka: "ჭიშკრები", en: "Gates" },
  "about.services.railings": { ka: "მოაჯირები", en: "Railings" },
  "about.services.fences": { ka: "ღობეები", en: "Fences" },
  "about.services.welding": { ka: "შედუღება", en: "Welding" },
  "about.services.structures": { ka: "კონსტრუქციები", en: "Structures" },
  "about.services.custom": { ka: "ინდივიდუალური", en: "Custom Work" },

  "gallery.eyebrow": { ka: "გალერეა", en: "Gallery" },
  "gallery.title": { ka: "შერჩეული ნამუშევრები", en: "Selected Work" },
  "gallery.sub": {
    ka: "თვალი გადაავლეთ ჩვენი ხელით შესრულებული პროექტების ნაწილს — ჭიშკრებიდან ინტერიერის დეტალებამდე.",
    en: "A look at recent projects — from gates and railings to interior detail and structural builds.",
  },
  "gallery.all": { ka: "ყველა", en: "All" },
  "gallery.gates": { ka: "ჭიშკრები", en: "Gates" },
  "gallery.railings": { ka: "მოაჯირები", en: "Railings" },
  "gallery.structures": { ka: "კონსტრუქციები", en: "Structures" },
  "gallery.details": { ka: "დეტალები", en: "Details" },

  "why.eyebrow": { ka: "რატომ Iron Crafts", en: "Why Iron Crafts" },
  "why.title": { ka: "ხელობა, რომელიც დეტალში ჩანს", en: "Craft you can feel in the details" },
  "why.1.t": { ka: "ზუსტი ხელობა", en: "Precision Craftsmanship" },
  "why.1.d": { ka: "თითოეული შენაერთი იწონება, იზომება და მუშავდება ხელით.", en: "Every joint is measured, welded and finished by hand." },
  "why.2.t": { ka: "გამძლე მასალა", en: "Durable Materials" },
  "why.2.d": { ka: "ვმუშაობთ ხარისხიან ფოლადსა და რკინაზე, რომელიც დროს უძლებს.", en: "We work with quality steel and iron chosen to last." },
  "why.3.t": { ka: "ინდივიდუალური დიზაინი", en: "Custom-Made Projects" },
  "why.3.d": { ka: "ყოველი პროექტი იქმნება სივრცისა და მფლობელის გემოვნებაზე.", en: "Each piece is designed for its space and its owner." },
  "why.4.t": { ka: "ყურადღება დეტალზე", en: "Attention to Detail" },
  "why.4.d": { ka: "სუფთა ხაზები, თანაბარი შენაერთები, აკურატული ფინიში.", en: "Clean lines, even welds, considered finishing." },
  "why.5.t": { ka: "სუფთა დასრულება", en: "Clean Finishing" },
  "why.5.d": { ka: "ფხეკი, გრუნტი, ფხვნილოვანი საღებავი — სრულყოფილი ზედაპირისთვის.", en: "Sanded, primed and powder-coated for a surface that holds." },
  "why.6.t": { ka: "ადგილზე მონტაჟი", en: "On-Site Installation" },
  "why.6.d": { ka: "მონტაჟი თქვენთან, სუფთად და დროულად.", en: "Installed on location, cleanly and on schedule." },

  "contact.eyebrow": { ka: "კონტაქტი", en: "Contact" },
  "contact.title": { ka: "მოგვწერეთ თქვენი იდეა", en: "Tell us about your project" },
  "contact.sub": {
    ka: "მოგვწერეთ რას იაზრებთ — ესკიზი, ფოტო ან მოკლე აღწერა. დაგიკავშირდებით 24 საათში.",
    en: "Send a sketch, a photo, or a short description. We'll get back to you within 24 hours.",
  },
  "contact.phone": { ka: "ტელეფონი", en: "Phone" },
  "contact.facebook": { ka: "Facebook", en: "Facebook" },
  "contact.form.name": { ka: "სახელი", en: "Name" },
  "contact.form.email": { ka: "ელ. ფოსტა", en: "Email" },
  "contact.form.message": { ka: "შეტყობინება", en: "Message" },
  "contact.form.send": { ka: "გაგზავნა", en: "Send Message" },
  "contact.form.sent": { ka: "გმადლობთ, მალე დაგიკავშირდებით.", en: "Thanks — we'll be in touch soon." },

  "footer.tag": { ka: "ხელნაკეთი ლითონის ნამუშევრები", en: "Handcrafted metalwork" },
  "footer.rights": { ka: "ყველა უფლება დაცულია", en: "All rights reserved" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "ka";
    setLangState(saved);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
