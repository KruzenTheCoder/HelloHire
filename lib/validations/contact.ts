import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  inquiry_type: z.enum(["employer", "talent", "media", "partnership", "other"]),
  message: z.string().min(10, "Please provide a detailed message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
