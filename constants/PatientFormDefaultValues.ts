import { Gender } from "@/types";

export const PatientFormDefaultValues = {
  name: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,

  identificationType: "Birth Certificate",
  identificationDocument: [],

  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};
