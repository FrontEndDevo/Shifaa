import * as z from "zod";

import { ValidationT } from "./RegisterPatientFormSchema";
import { TAppointmentFormTypes } from "@/types/appointment.types";

export type AppointmentFormValues = {
  primaryPhysician: string;
  schedule: Date;
  reason?: string;
  note?: string;
  cancellationReason?: string;
};

export const getAppointmentSchema = (
  type: TAppointmentFormTypes,
  t: ValidationT,
): z.ZodType<AppointmentFormValues, AppointmentFormValues> => {
  const schedule = z.date();

  switch (type) {
    case "create":
      return z.object({
        primaryPhysician: z.string().min(1, t("doctorRequired")),
        schedule,
        reason: z.string().min(2, t("reasonMin")).max(500, t("reasonMax")),
        note: z.string().optional(),
        cancellationReason: z.string().optional(),
      });

    case "cancel":
      return z.object({
        primaryPhysician: z.string(),
        schedule,
        reason: z.string().optional(),
        note: z.string().optional(),
        cancellationReason: z
          .string()
          .min(2, t("cancellationReasonMin"))
          .max(500, t("cancellationReasonMax")),
      });

    // schedule | delete
    default:
      return z.object({
        primaryPhysician: z.string().min(1, t("doctorRequired")),
        schedule,
        reason: z.string().optional(),
        note: z.string().optional(),
        cancellationReason: z.string().optional(),
      });
  }
};
