import { z } from "zod";
import { TEXTS } from "../consts/register";

export const registerSchema = z
  .object({
    name: z.string().min(2, TEXTS.errors.nameRequired),
    dni: z
      .string()
      .min(6, TEXTS.errors.dniRequired)
      .max(12, TEXTS.errors.dniMax)
      .regex(/^[0-9]+$/, TEXTS.errors.dniInvalid),
    email: z.string().email(TEXTS.errors.emailInvalid),
    password: z.string().min(6, TEXTS.errors.passwordShort),
    confirmPassword: z.string().min(6, TEXTS.errors.confirmPasswordShort),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: TEXTS.errors.passwordsMismatch,
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

