import * as z from "zod";

export type ValidationKey =
  | "nameRequired"
  | "phoneRequired"
  | "birthDateRequired"
  | "genderRequired"
  | "treatmentConsent"
  | "disclosureConsent"
  | "privacyConsent"
  | "emailRequired"
  | "emailInvalid"
  | "passwordRequired"
  | "doctorRequired"
  | "reasonMin"
  | "reasonMax"
  | "cancellationReasonMin"
  | "cancellationReasonMax";

export type ValidationT = (key: ValidationKey) => string;

export const createPatientFormValidation = (t: ValidationT) =>
  z.object({
    name: z.string().min(1, t("nameRequired")),
    phone: z.string().min(1, t("phoneRequired")),
    birthDate: z
      .date({ message: t("birthDateRequired") })
      .max(new Date(Date.now() - 24 * 60 * 60 * 1000), t("birthDateRequired")),

    gender: z.enum(["Male", "Female", "Other"], t("genderRequired")),

    identificationType: z.string().optional(),
    identificationDocument: z.array(z.instanceof(File)).optional(),

    treatmentConsent: z
      .boolean()
      .refine((val) => val === true, t("treatmentConsent")),
    disclosureConsent: z
      .boolean()
      .refine((val) => val === true, t("disclosureConsent")),
    privacyConsent: z
      .boolean()
      .refine((val) => val === true, t("privacyConsent")),
  });

export type PatientFormValues = z.infer<
  ReturnType<typeof createPatientFormValidation>
>;
