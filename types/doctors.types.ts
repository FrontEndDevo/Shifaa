// Lucide Icons:
import { LucideIcon } from "lucide-react";

export type Doctor = {
  doctorId: string;
  name: string;
  image: string;
  specialty: string;
  experience: number;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
  consultationFee: number;
  rating: number;
  reviewCount: number;
  availableToday: boolean;
  services: string[];
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
