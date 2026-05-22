import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumera — Fotografía y Vídeo para Bodas, Bautizos y Comuniones" },
      {
        name: "description",
        content:
          "Estudio premium de fotografía y videografía para bodas, bautizos y comuniones. Reportajes emotivos, cinematográficos y atemporales por Alberto y Laura.",
      },
      {
        property: "og:title",
        content: "Lumera — Fotografía y Vídeo de Bodas",
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
      <Testimonials />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  );
}
