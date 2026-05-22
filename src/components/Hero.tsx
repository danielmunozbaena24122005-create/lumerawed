import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pareja de novios abrazándose al atardecer en su ceremonia"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/35" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mb-10"
        >
          <Logo showTagline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-primary/70" />
          <span className="eyebrow">Bodas · Bautizos · Comuniones</span>
          <span className="h-px w-12 bg-primary/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="font-serif text-balance text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-5xl text-foreground"
        >
          Capturamos emociones
          <br />
          <em className="not-italic text-primary font-light">
            que duran para siempre
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 font-light tracking-wide"
        >
          Fotografía y vídeo para bodas, bautizos y comuniones.
        </motion.p>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="group mt-12 inline-flex items-center gap-4 border border-primary/80 bg-primary/5 backdrop-blur-sm px-9 py-4 text-xs tracking-[0.35em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Solicita información
          <span className="block h-px w-8 bg-primary group-hover:bg-primary-foreground transition-colors" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-accent/70">
            Descubre
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-primary/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
