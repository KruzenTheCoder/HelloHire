import { z } from "zod";

export const roleRequestSchema = z.object({
  company_name: z.string().min(2, "Company name is required"),
  contact_name: z.string().min(2, "Contact name is required"),
  contact_email: z.string().email("Valid email is required"),
  role_title: z.string().min(2, "Role title is required"),
  role_type: z.enum(["full-time", "part-time", "contract", "fractional"]).optional(),
  skills_required: z.array(z.string()).optional(),
  experience_level: z.enum(["junior", "mid", "senior", "lead", "executive"]).optional(),
  salary_budget_usd_month: z.number().optional(),
  description: z.string().optional(),
});

export type RoleRequestFormData = z.infer<typeof roleRequestSchema>;
