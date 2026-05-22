import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Introduce tu nombre").max(100),
  phone: z
    .string()
    .trim()
    .min(6, "Teléfono no válido")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Teléfono no válido"),
  email: z.string().trim().email("Correo no válido").max(255),
  eventType: z.enum(["boda", "bautizo", "comunion"], {
    message: "Selecciona el tipo de evento",
  }),
  services: z.array(z.string()).min(1, "Selecciona al menos un servicio"),
  date: z.string().min(1, "Indica la fecha del evento"),
  time: z.string().optional(),
  place: z.string().trim().min(2, "Indica el lugar").max(200),
  guests: z
    .string()
    .optional()
    .refine((v) => !v || /^\d+$/.test(v), "Número no válido"),
  message: z.string().max(1000).optional(),
});

const inputCls =
  "w-full bg-transparent border-b border-primary/30 focus:border-primary outline-none py-3 px-1 text-foreground placeholder:text-foreground/40 transition-colors font-light";
const labelCls =
  "text-[0.7rem] tracking-[0.3em] uppercase text-primary/90 font-medium";

export function ContactForm() {
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (v: string) =>
    setServices((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      eventType: String(fd.get("eventType") || ""),
      services,
      date: String(fd.get("date") || ""),
      time: String(fd.get("time") || ""),
      place: String(fd.get("place") || ""),
      guests: String(fd.get("guests") || ""),
      message: String(fd.get("message") || ""),
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // TODO: integrar EmailJS o Formspree
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
    setServices([]);
  };

  return (
    <section id="contacto" className="relative py-28 md:py-40 px-6 bg-secondary/30">
      <SectionHeading
        eyebrow="Hablemos"
        title={
          <>
            Solicita tu <em className="not-italic text-primary">presupuesto</em>
          </>
        }
        description="Cuéntanos los detalles de vuestro día y os enviaremos una propuesta personalizada en menos de 48 horas."
      />

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="mx-auto mt-16 max-w-3xl border border-primary/20 bg-card/50 backdrop-blur-sm p-8 md:p-14 space-y-10"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <Field label="Nombre completo" name="name" error={errors.name} />
          <Field label="Teléfono" name="phone" type="tel" error={errors.phone} />
          <Field
            label="Correo electrónico"
            name="email"
            type="email"
            error={errors.email}
            className="md:col-span-2"
          />

          <div className="flex flex-col gap-3">
            <label className={labelCls}>Tipo de evento</label>
            <select name="eventType" defaultValue="" className={inputCls}>
              <option value="" disabled className="bg-background">
                Selecciona...
              </option>
              <option value="boda" className="bg-background">Boda</option>
              <option value="bautizo" className="bg-background">Bautizo</option>
              <option value="comunion" className="bg-background">Comunión</option>
            </select>
            {errors.eventType && <Err msg={errors.eventType} />}
          </div>

          <div className="flex flex-col gap-3">
            <label className={labelCls}>Servicio solicitado</label>
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { v: "fotografia", l: "Fotografía" },
                { v: "video", l: "Vídeo" },
                { v: "ambos", l: "Foto + Vídeo" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.v}
                  onClick={() => toggle(s.v)}
                  className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border transition-all ${
                    services.includes(s.v)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/40 text-foreground/80 hover:border-primary"
                  }`}
                >
                  {s.l}
                </button>
              ))}
            </div>
            {errors.services && <Err msg={errors.services} />}
          </div>

          <Field
            label="Fecha del evento"
            name="date"
            type="date"
            error={errors.date}
          />
          <Field label="Hora de la ceremonia" name="time" type="time" />

          <Field
            label="Lugar de celebración"
            name="place"
            error={errors.place}
            className="md:col-span-2"
          />

          <Field
            label="Nº aprox. de invitados"
            name="guests"
            type="number"
            error={errors.guests}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className={labelCls}>Mensaje adicional</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Contadnos vuestra historia..."
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="flex flex-col items-center gap-6 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-4 border border-primary bg-primary px-10 py-4 text-xs tracking-[0.35em] uppercase text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-500 disabled:opacity-60"
          >
            {submitting ? "Enviando..." : "Solicitar presupuesto"}
            <span className="block h-px w-8 bg-primary-foreground group-hover:bg-primary transition-colors" />
          </button>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 text-primary"
            >
              <Check className="h-5 w-5" />
              <span className="text-sm tracking-wide">
                ¡Gracias! Nos pondremos en contacto contigo en breve.
              </span>
            </motion.div>
          )}
        </div>
      </motion.form>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label className={labelCls} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} className={inputCls} />
      {error && <Err msg={error} />}
    </div>
  );
}

function Err({ msg }: { msg: string }) {
  return <span className="text-xs text-destructive-foreground/90 bg-destructive/40 px-2 py-1 w-fit">{msg}</span>;
}
