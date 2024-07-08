import { z } from "zod";

export const contactUsSchema = z.object({
  name: z
    .string()
    .min(3, "Please, type your full name")
    .max(255, "This input only allow 255 characters"),
  email: z
    .string()
    .email("Please, inform your email")
    .max(255, "This input only allow 255 characters"),
});
