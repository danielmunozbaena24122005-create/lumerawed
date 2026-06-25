import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(20).regex(/^[0-9+\s()-]+$/),
  email: z.string().trim().email().max(255),
  eventType: z.enum(["boda", "bautizo", "comunion"]),
  services: z.array(z.string().max(50)).min(1).max(10),
  date: z.string().min(1).max(20),
  time: z.string().max(20).optional().nullable(),
  place: z.string().trim().min(2).max(200),
  guests: z.string().max(10).optional().nullable(),
  message: z.string().max(1000).optional().nullable(),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_requests").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      event_type: data.eventType,
      services: data.services,
      event_date: data.date,
      event_time: data.time || null,
      place: data.place,
      guests: data.guests ? parseInt(data.guests, 10) : null,
      message: data.message || null,
    });

    if (error) {
      console.error("[contact] insert error", error);
      throw new Error("No se pudo guardar la solicitud");
    }

    return { ok: true };
  });
