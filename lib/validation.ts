import { z } from "zod";

const channelEnum = z.enum(["whatsapp", "phone", "email"]);

export const contactRequestSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    phone: z.string().trim().max(30).optional().nullable(),
    email: z.string().trim().email().max(120).optional().nullable(),
    preferredChannel: channelEnum,
    message: z.string().trim().max(800).optional().nullable(),
    consent: z.literal(true),
    utm: z
      .object({
        source: z.string().trim().max(80).optional(),
        medium: z.string().trim().max(80).optional(),
        campaign: z.string().trim().max(120).optional()
      })
      .optional(),
    website: z.string().optional()
  })
  .superRefine((value, ctx) => {
    if (!value.phone && !value.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes enviar telefono o email"
      });
    }
  });

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
