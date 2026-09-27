import * as z from "zod";

export const PatientFormValidation = z.object({
  name: z.string().min(1, "Name is required."),
  phone: z.string().min(1, "Phone number is required."),
  birthDate: z.date({
    message: "Please select a birth date",
  }),
  gender: z.enum(["Male", "Female", "Other"], "Please select a gender"),

  identificationType: z.string().optional(),
  identificationDocument: z.array(z.instanceof(File)).optional(),

  treatmentConsent: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must consent to treatment in order to proceed",
    ),
  disclosureConsent: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must consent to disclosure in order to proceed",
    ),
  privacyConsent: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must consent to privacy in order to proceed",
    ),
});
