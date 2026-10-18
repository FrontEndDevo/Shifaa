"use client";

// React Hooks:
import { useMemo } from "react";

// Lucide Icons:
import { Check, Languages } from "lucide-react";

// Next Intl:
import { useTranslations } from "next-intl";

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

export const useDoctorDetails = (doctorId: string) => {
  const t = useTranslations("DoctorDetails");
  const doctors = useLocalizedDoctors();

  return useMemo(() => {
    const doctor = doctors.find((doc) => doc.doctorId === doctorId);

    if (!doctor) return null;

    const doctorEducationAndCertifications = [
      { data: doctor.education, title: t("education") },
      { data: doctor.certifications, title: t("certifications") },
    ];

    const doctorAdvantages = [
      {
        advantage: t("advantages.years"),
        count: doctor.experience,
        color: "text-red-500",
      },
      {
        advantage: t("advantages.certifications"),
        count: doctor.certifications.length,
        color: "text-emerald-500",
      },
      {
        advantage: t("advantages.services"),
        count: doctor.services.length,
        color: "text-blue-500",
      },
      {
        advantage: t("advantages.rating"),
        count: doctor.rating,
        color: "text-yellow-500",
      },
    ];

    const doctorServicesAndLanguages = [
      { data: doctor.services, icon: Check, title: t("services") },
      { data: doctor.languages, icon: Languages, title: t("languages") },
    ];

    return {
      doctor,
      doctorEducationAndCertifications,
      doctorAdvantages,
      doctorServicesAndLanguages,
    };
  }, [doctors, doctorId, t]);
};
