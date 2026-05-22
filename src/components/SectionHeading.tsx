import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center mx-auto" : "items-start"
      } max-w-3xl`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance text-foreground">
        {title}
      </h2>
      <span className="gold-divider" />
      {description && (
        <p className="text-foreground/75 max-w-2xl leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
}
