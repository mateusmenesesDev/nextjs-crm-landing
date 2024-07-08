import { type z } from "zod";
import { type contactUsSchema } from "~/schema/contactUs.schema";

export type ContactUs = z.infer<typeof contactUsSchema>;
