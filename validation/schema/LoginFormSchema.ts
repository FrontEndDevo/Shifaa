import * as z from "zod";

import { ValidationT } from "./RegisterPatientFormSchema";

export const createLoginFormSchema = (t: ValidationT) =>
  z.object({
    email: z
      .string()
      .min(1, t("emailRequired"))
      .pipe(z.email(t("emailInvalid"))),
    password: z.string().min(1, t("passwordRequired")),
  });

export type LoginFormValues = z.infer<ReturnType<typeof createLoginFormSchema>>;
