import { motion } from "framer-motion";
import { ArrowUpRight, Camera } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GALLERY_URL = "https://lumerawed.pic-time.com/client";

export function Portfolio() {
  return (
    <section id="trabajos" className="relative py-28 md:py-40 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Galería privada"
          title={
            <>
              Nuestros <em className="not-italic text-primary">trabajos</em>
            </>
          }
          description="Una selección cuidada de bodas, bautizos y comuniones que hemos tenido el privilegio de acompañar. Entra en nuestra galería y descubre cada historia tal y como se vivió."
        />

        <motion.a
          href={GALLERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="group relative block w-full max-w-3xl"
        >
          <div className="relative border border-primary/25 bg-card/40 backdrop-blur-sm px-8 py-12 md:px-14 md:py-16 overflow-hidden transition-all duration-500 group-hover:border-primary/60">
            {/* Corner ornaments */}
            <span className="absolute top-4 left-4 w-6 h-px bg-primary/60" />
            <span className="absolute top-4 left-4 w-px h-6 bg-primary/60" />
            <span className="absolute top-4 right-4 w-6 h-px bg-primary/60" />
            <span className="absolute top-4 right-4 w-px h-6 bg-primary/60" />
            <span className="absolute bottom-4 left-4 w-6 h-px bg-primary/60" />
            <span className="absolute bottom-4 left-4 w-px h-6 bg-primary/60" />
            <span className="absolute bottom-4 right-4 w-6 h-px bg-primary/60" />
            <span className="absolute bottom-4 right-4 w-px h-6 bg-primary/60" />

            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 text-primary">
                <Camera className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                Acceder a la <em className="text-primary">galería completa</em>
              </h3>
              <span className="gold-divider" />
              <p className="text-foreground/75 font-light max-w-lg leading-relaxed">
                Descubre nuestros reportajes en alta calidad, organizados por evento y siempre disponibles para nuestros clientes.
              </p>
              <span className="inline-flex items-center gap-3 mt-2 text-xs tracking-[0.3em] uppercase border border-primary/60 text-primary px-7 py-3 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                Ver trabajos
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </span>
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mt-1">
                lumerawed.pic-time.com
              </p>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
