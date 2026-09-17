import * as z from "zod";

export const AppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  note: z.string().optional(),
  schedule: z.date({
    message: "Please create a schedule date",
  }),
});

export const ScheduleAppointmentSchema = AppointmentSchema.extend({
  reason: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CreateAppointmentSchema = AppointmentSchema.extend({
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = AppointmentSchema.extend({
  reason: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
