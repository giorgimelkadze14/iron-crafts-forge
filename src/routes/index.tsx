import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iron Crafts — Handcrafted Iron & Metalwork in Georgia" },
      {
        name: "description",
        content:
          "Iron Crafts — custom gates, railings, fences and metal structures, welded and finished by hand in Tbilisi, Georgia.",
      },
      { property: "og:title", content: "Iron Crafts — Handcrafted Metalwork" },
      {
        property: "og:description",
        content: "Custom iron gates, railings and metal structures handcrafted in Georgia.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <I18nProvider>
      <div className="dark min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Gallery />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
