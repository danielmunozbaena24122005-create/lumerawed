import { motion } from "framer-motion";
import aboutImg from "@/assets/about-couple.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Alberto y Laura, fotógrafos y videógrafos de Lumera Wed"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-7"
        >
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Somos
            <span className="italic text-primary"> Laura y Alberto</span>
          </h2>
          <span className="gold-divider" />
          <p className="text-foreground/80 leading-relaxed text-lg font-light">
            Somos Laura y Alberto, y en Lumera Wed contamos historias a través de lo que sentimos y vemos detrás de la cámara.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg font-light">
            Llevamos tiempo acompañando momentos únicos, aprendiendo a mirar sin intervenir y a entender que lo importante no es solo lo que ocurre, sino cómo se vive. Como pareja que somos, entendemos que una boda no son solo imágenes: son miradas, silencios, nervios, abrazos y todo aquello que sucede sin aviso.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg font-light">
            Lumera Wed nace de esa forma de entender la fotografía y el vídeo. De la necesidad de guardar lo auténtico sin forzarlo, de respetar cada instante tal y como sucede, con una estética cuidada pero siempre natural.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg font-light">
            Nos implicamos en cada historia para que, cuando vuelvas a ella, no solo recuerdes cómo fue, sino cómo se sintió.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
  );
}
