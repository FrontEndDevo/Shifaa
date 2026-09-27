import { Models } from "node-appwrite";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;

  privacyConsent: boolean;
  identificationType: string | undefined;
  identificationDocument: FormData | undefined;
}
