import { motion } from "framer-motion";
import { Heart, Baby, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import wedding from "@/assets/service-wedding.jpg";
import baptism from "@/assets/service-baptism.jpg";
import communion from "@/assets/service-communion.jpg";

const services = [
  {
    icon: Heart,
    title: "Bodas",
    text: "Fotografía y vídeo profesional para capturar cada instante de vuestro gran día.",
    img: wedding,
  },
  {
    icon: Baby,
    title: "Bautizos",
    text: "Recuerdos únicos de los momentos más especiales en familia.",
    img: baptism,
  },
  {
    icon: Sparkles,
    title: "Comuniones",
    text: "Reportajes fotográficos y audiovisuales llenos de emoción y naturalidad.",
    img: communion,
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 md:py-40 px-6 bg-secondary/30"
    >
      <SectionHeading
        eyebrow="Qué hacemos"
        title={
          <>
            Nuestros <em className="not-italic text-primary">servicios</em>
          </>
        }
        description="Cada celebración es única. Adaptamos nuestro trabajo a vuestra historia con sensibilidad, técnica y una mirada cinematográfica."
      />

      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            className="group relative overflow-hidden bg-card border border-primary/10 hover:border-primary/40 transition-all duration-700"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="relative -mt-24 p-8 md:p-10 flex flex-col gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center border border-primary/50 bg-card/80 backdrop-blur-sm text-primary">
                <s.icon className="h-5 w-5" strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-3xl text-foreground">{s.title}</h3>
              <span className="gold-divider" />
              <p className="text-foreground/75 leading-relaxed font-light">
                {s.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
