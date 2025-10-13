import { z } from "zod";
import { TEXTS } from "../consts/login";

export const loginSchema = z.object({
  email: z.string().email(TEXTS.errors.emailInvalid),
  password: z.string().min(6, TEXTS.errors.passwordShort),
  remember: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
