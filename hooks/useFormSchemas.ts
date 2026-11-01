"use client";

// React Hooks:
import { useMemo } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Validation:
import { createPatientFormValidation } from "@/validation/schema/RegisterPatientFormSchema";
import { createLoginFormSchema } from "@/validation/schema/LoginFormSchema";

import { getAppointmentSchema } from "@/validation/schema/AppointmentFormSchema";
import type { TAppointmentFormTypes } from "@/types/appointment.types";

export const usePatientFormValidation = () => {
  const t = useTranslations("Validation");

  return useMemo(() => createPatientFormValidation(t), [t]);
};

export const useLoginFormSchema = () => {
  const t = useTranslations("Validation");

  return useMemo(() => createLoginFormSchema(t), [t]);
};

export const useAppointmentSchema = (type: TAppointmentFormTypes) => {
  const t = useTranslations("Validation");

  return useMemo(() => getAppointmentSchema(type, t), [type, t]);
};
