import * as z from "zod";
import { UserFormSchema } from "@/validation/schema";

export const PatientFormValidation = UserFormSchema.extend({
  birthDate: z.date({
    message: "Please select a birth date",
  }),
  gender: z.enum(["Male", "Female", "Other"], "Please select a gender"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number",
    ),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  insuranceProvider: z
    .string()
    .min(2, "Insurance name must be at least 2 characters")
    .max(50, "Insurance name must be at most 50 characters"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Policy number must be at least 2 characters")
    .max(50, "Policy number must be at most 50 characters"),

  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
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
