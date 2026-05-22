import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    title: "Profesionalidad y cercanía van de la mano",
    body: "Atención increíble desde el primer contacto, cercanía que hace que todo sea muy fácil. Siempre disponibles y atentos a cualquier cosa. Unos profesionales que hacen que ese evento sea inolvidable y una calidad increíble en su trabajo. Recomendación 100% sin duda alguna.",
    author: "Sara",
  },
  {
    title: "Inmejorable",
    body: "No podríamos estar más contentos con el trabajo de Alberto. El trato ha sido impecable, siempre atento, cercano y facilitándolo todo. Además, el resultado ha superado todas nuestras expectativas: un vídeo precioso, emotivo, calidad de imagen perfecta y cuidado al milímetro. Sin duda, una de las mejores decisiones de nuestra boda. Lo recomendaríamos una y mil veces.",
    author: "Gema",
  },
  {
    title: "¡Es un crack!",
    body: "Es un chico estupendo, tuvimos varias reuniones con él para saber cómo teníamos pensado hacer la boda, está muy pendiente de todos los pequeños momentos y nos sentimos comodísimos con él y con las sugerencias que nos daba. Lo recomiendo al 100%.",
    author: "María",
  },
  {
    title: "¡Estupendo!",
    body: "100x100 recomendable, durante todo el día atento a cada detalle, nos lo hizo todo super ameno, Alberto es super agradable y profesional, mil gracias.",
    author: "María",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section id="resenas" className="relative py-28 md:py-40 px-6">
      <SectionHeading
        eyebrow="Testimonios"
        title={
          <>
            Lo que dicen nuestras{" "}
            <em className="not-italic text-primary">parejas y familias</em>
          </>
        }
      />

      <div className="mx-auto mt-20 max-w-4xl">
        <div className="relative border border-primary/20 bg-card/60 backdrop-blur-sm p-10 md:p-16 min-h-[360px]">
          <Quote
            className="absolute top-8 left-8 h-10 w-10 text-primary/40"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center gap-6"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-primary italic">
                {r.title}
              </h3>
              <p className="text-foreground/85 leading-relaxed font-light md:text-lg max-w-2xl">
                {r.body}
              </p>
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className="gold-divider" />
                <span className="text-sm tracking-[0.35em] uppercase text-foreground/70">
                  {r.author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8">
          <button
            onClick={prev}
            aria-label="Reseña anterior"
            className="h-12 w-12 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Ir a reseña ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-px transition-all duration-500 ${
                  idx === i ? "w-10 bg-primary" : "w-5 bg-primary/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente reseña"
            className="h-12 w-12 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
