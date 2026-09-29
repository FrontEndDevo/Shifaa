// Validation:
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAppointmentSchema } from "@/validation/schema";

// Types:
import { TAppointmentFormProps } from "@/types/appointment.types";
import { Status } from "@/types";

// Utilities:
import { ButtonLabel, StatusType } from "./AppointmentUtils";

// Appointments Hooks:
import useAppointmentsMutations from "./hooks/useAppointmentsMutations";

const useAppointmentForm = ({
  userId,
  patientId,
  appointment,
  type,
  setOpen,
}: TAppointmentFormProps) => {
  const { isLoading, hasError, handleMutationAction } =
    useAppointmentsMutations({
      type,
      userId,
      appointmentId: appointment?.$id as string,
      setOpen,
    });

  // Get the specific form schema depend on type.
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

    // Prepare the required data to pass.
    const dataValues = dataTypeValues();

    handleMutationAction(dataValues);
  };

  const buttonLabel = ButtonLabel(type);

  return { isLoading, hasError, buttonLabel, onSubmit, form };
};

export default useAppointmentForm;
