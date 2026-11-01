import type { Gender } from "@/types";

export const PatientFormDefaultValues = {
  name: "",
  phone: "",
  birthDate: new Date(),
  gender: "Male" as Gender,

  identificationType: "Birth Certificate",
  identificationDocument: [] as File[],

  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};
