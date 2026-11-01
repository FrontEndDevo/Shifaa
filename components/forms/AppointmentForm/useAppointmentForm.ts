// Validation:
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppointmentFormValues } from "@/validation/schema/AppointmentFormSchema";

// Schema Hooks:
import { useAppointmentSchema } from "@/hooks/useFormSchemas";

// Next Intl:
import { useTranslations } from "next-intl";

// Types:
import { TAppointmentFormProps } from "@/types/appointment.types";
import { Status } from "@/types";

// Utilites:
import { StatusType } from "./AppointmentUtils";
import { resolveDoctorId } from "@/lib/doctors";

import useAppointmentsMutations from "./hooks/useAppointmentsMutations";

const useAppointmentForm = ({
  userId,
  patientId,
  appointment,
  type,
  setOpen,
}: TAppointmentFormProps) => {
  const t = useTranslations("Appointment.buttons");

  const { isLoading, hasError, handleMutationAction } =
    useAppointmentsMutations({
      type,
      userId,
      appointmentId: appointment?.$id as string,
      setOpen,
    });

  const AppointmentFormValidation = useAppointmentSchema(type);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: appointment
        ? resolveDoctorId(appointment.primaryPhysician)
        : "",
      schedule: appointment ? new Date(appointment.schedule) : new Date(),
      reason: appointment ? appointment.reason : "",
      note: appointment?.note || "",
      cancellationReason:
        type === "cancel" ? "" : appointment?.cancellationReason || "",
    },
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    const status = StatusType(type);

    const dataTypeValues = () => {
      switch (type) {
        case "create":
          return {
            userId,
            patient: patientId,
            primaryPhysician: values.primaryPhysician,
            schedule: new Date(values.schedule),
            reason: values.reason!,
            note: values.note,
            status: status as Status,
          };

        case "delete":
          return appointment?.$id;

        default:
          return {
            appointmentId: appointment?.$id,
            appointment: {
              primaryPhysician: values.primaryPhysician,
              schedule: new Date(values.schedule),
              status: status as Status,
            },
            userId,
          };
      }
    };

    const dataValues = dataTypeValues();

    handleMutationAction(dataValues);
  };

  const buttonLabel = t(type);

  return { isLoading, hasError, buttonLabel, onSubmit, form };
};

export default useAppointmentForm;
