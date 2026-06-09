import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumera Wed — Fotografía y Vídeo de bodas en Sevilla" },
      {
        name: "description",
        content:
          "Estudio premium de fotografía y videografía para bodas, bautizos y comuniones. Reportajes emotivos, cinematográficos y atemporales por Alberto y Laura.",
      },
      {
        property: "og:title",
        content: "Lumera Wed — Fotografía y Vídeo de bodas en Sevilla",
      },
      {
        property: "og:description",
        content:
          "Capturamos emociones que duran para siempre. Fotografía y vídeo para bodas, bautizos y comuniones.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  );
}
