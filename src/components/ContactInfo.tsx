import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-3xl text-center flex flex-col items-center gap-7"
      >
        <span className="eyebrow">Contacto</span>
        <h2 className="font-serif text-4xl md:text-5xl">
          ¿Tienes una <em className="text-primary not-italic">fecha en mente?</em>
        </h2>
        <span className="gold-divider" />
        <p className="text-foreground/75 font-light max-w-xl">
          Estamos a una llamada de hacer realidad el reportaje que siempre habéis
          soñado.
        </p>

        <div className="mt-6 flex flex-col items-center gap-5">
          <div className="inline-flex h-16 w-16 items-center justify-center border border-primary/40 text-primary">
            <Phone className="h-6 w-6" strokeWidth={1.2} />
          </div>
          <a
            href="tel:+34637749865"
            className="font-serif text-4xl md:text-5xl text-primary hover:text-accent transition-colors tracking-wider"
          >
            637 749 865
          </a>
          <a
            href="tel:+34637749865"
            className="mt-4 inline-flex items-center gap-3 border border-primary bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-[0.35em] uppercase hover:bg-transparent hover:text-primary transition-all duration-500"
          >
            <Phone className="h-4 w-4" /> Llamar ahora
          </a>
        </div>
      </motion.div>
    </section>
  );
}
