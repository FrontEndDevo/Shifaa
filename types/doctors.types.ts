// Lucide Icons:
import { LucideIcon } from "lucide-react";

export type SpecialtyId =
  | "cardiologist"
  | "dermatologist"
  | "pediatrician"
  | "orthopedicSurgeon"
  | "neurologist"
  | "gynecologist"
  | "internalMedicine"
  | "ophthalmologist"
  | "dentist"
  | "urologist"
  | "endocrinologist";

export type LanguageId = "en" | "ar" | "fr" | "es" | "it";

export type DoctorData = {
  doctorId: string;
  image: string;
  specialty: SpecialtyId;
  experience: number;
  languages: LanguageId[];
  consultationFee: number;
  rating: number;
  reviewCount: number;
  availableToday: boolean;
};

export type Doctor = Omit<DoctorData, "specialty" | "languages"> & {
  name: string;
  specialty: string;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
  services: string[];
};

export type DoctorPhotoProps = {
  availableToday: boolean;
  image: string;
  name: string;
};

export type EducationAndCertificationsProps = {
  data: string[];
  title: string;
};

export type ServicesAndLanguagesProps = {
  data: string[];
  title: string;
  icon: LucideIcon;
};

export type DoctorAdvantagesProps = {
  count: number;
  advantage: string;
  color: string;
};
