"use client";

// React Hooks:
import { useMemo } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Constants:
import { DOCTORS } from "@/constants/Doctor";

// Types:
import { Doctor } from "@/types/doctors.types";

const useLocalizedDoctors = (): Doctor[] => {
  const t = useTranslations("DoctorsData");

  const tSpecialty = useTranslations("Specialties");

  const tLanguage = useTranslations("Languages");

  return useMemo(
    () =>
      DOCTORS.map((doctor) => ({
        ...doctor,
        name: t(`${doctor.doctorId}.name`),
        specialty: tSpecialty(doctor.specialty),
        bio: t(`${doctor.doctorId}.bio`),
        education: t.raw(`${doctor.doctorId}.education`) as string[],
        certifications: t.raw(`${doctor.doctorId}.certifications`) as string[],
        languages: doctor.languages.map((lang) => tLanguage(lang)),
        services: t.raw(`${doctor.doctorId}.services`) as string[],
      })),
    [t, tSpecialty, tLanguage],
  );
};

export default useLocalizedDoctors;
