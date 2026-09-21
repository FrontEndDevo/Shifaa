// React Hooks:
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation:
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAppointmentSchema } from "@/validation/schema/AppointmentSchema";

// Types:
import { TAppointmentFormProps } from "@/types/appointment.types";
import { Status } from "@/types";

// API actions:
import {
  createAppointment,
  updateAppointment,
} from "@/lib/actions/appointment.actions";

const useAppointmentForm = ({
  userId,
  patientId,
  appointment,
  type,
  setOpen,
}: TAppointmentFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: appointment ? appointment?.primaryPhysician : "",
      schedule: appointment ? new Date(appointment.schedule) : new Date(),
      reason: appointment ? appointment.reason : "",
      note: appointment?.note || "",
      cancellationReason:
        type === "cancel" ? "" : appointment?.cancellationReason || "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof AppointmentFormValidation>,
  ) => {
    setIsLoading(true);

    let status;
    switch (type) {
      case "schedule":
        status = "scheduled";
        break;
      case "cancel":
        status = "cancelled";
        break;

      default:
        status = "pending";
        break;
    }

    try {
      // This part of code is used in the NewAppointment page to create new patient appointment:
      if (type === "create" && patientId) {
        const creatingAppointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          cancellationReason: values.reason!,
          note: values.note,
          status: status as Status,
        };

        const appointmentToCreate = await createAppointment(
          creatingAppointmentData,
        );

        if (appointmentToCreate) {
          form.reset();
          router.replace(
            `/patients/${userId}/new-appointment/success?appointmentId=${appointmentToCreate.$id}`,
          );
        }
      } else {
        const updatingAppointmentData = {
          appointmentId: appointment?.$id,
          appointment: {
            primaryPhysician: values.primaryPhysician,
            schedule: new Date(values.schedule),
            status: status as Status,
            cancellationReason: values.cancellationReason ?? null,
          },
        };

        const appointmentToUpdate = await updateAppointment(
          updatingAppointmentData,
        );

        if (appointmentToUpdate) {
          form.reset();
          setOpen?.(false);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit Apppointment";
  }

  return { isLoading, buttonLabel, onSubmit, form };
};

export default useAppointmentForm;
