// Next Hooks:
import { useRouter } from "next/navigation";

// Validation:
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAppointmentSchema } from "@/validation/schema";

// Types:
import { TAppointmentFormProps } from "@/types/appointment.types";
import { Status } from "@/types";

// API Actions Hooks:
import {
  useCreateAppointment,
  useDeleteAppointment,
  useUpdateAppointment,
} from "@/hooks/useAppointments";
import { ButtonLabel, StatusType } from "./AppointmentUtils";

const useAppointmentForm = ({
  userId,
  patientId,
  appointment,
  type,
  setOpen,
}: TAppointmentFormProps) => {
  const {
    mutate: createAppointmentMutate,
    isPending: isCreating,
    isError: createError,
  } = useCreateAppointment();

  const {
    mutate: updateAppointmentMutate,
    isPending: isUpdating,
    isError: updateError,
  } = useUpdateAppointment();

  const {
    mutate: deleteAppointmentMutate,
    isPending: isDeleting,
    isError: deleteError,
  } = useDeleteAppointment();

  const isLoading = isCreating || isUpdating || isDeleting;

  const hasError = createError || updateError || deleteError;

  const router = useRouter();

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

    try {
      // This part of code is used in the NewAppointment page to create new patient appointment:
      if (type === "create" && patientId) {
        const creatingAppointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          note: values.note,
          status: status as Status,
        };

        // Fetch data (without) React Query.
        // const appointmentToCreate = await createAppointment(
        //   creatingAppointmentData,
        // );
        // if (appointmentToCreate) {
        //   form.reset();
        //   router.replace(
        //     `/patients/${userId}/new-appointment/success?appointmentId=${appointmentToCreate.$id}`,
        //   );
        // }

        // Fetch data (with) React Query.
        createAppointmentMutate(creatingAppointmentData, {
          onSuccess: (newAppointment) => {
            form.reset();
            router.replace(
              `/patients/${userId}/new-appointment/success?appointmentId=${newAppointment.$id}`,
            );
          },
        });
      } else if (type === "delete" && appointment?.$id) {
        // Fetch data (without) React Query.
        // const appointmentToDelete = await deleteAppointment(appointment?.$id);
        // if (appointmentToDelete) {
        // setOpen?.(false);
        // }

        // Fetch data (with) React Query.
        deleteAppointmentMutate(appointment.$id, {
          onSuccess: () => setOpen?.(false),
        });
      } else {
        const updatingAppointmentData = {
          appointmentId: appointment?.$id,
          appointment: {
            primaryPhysician: values.primaryPhysician,
            schedule: new Date(values.schedule),
            status: status as Status,
          },
          userId,
        };

        // Fetch data (without) React Query.
        // const appointmentToUpdate = await updateAppointment(
        //   updatingAppointmentData,
        // );
        // if (appointmentToUpdate) {
        //   form.reset();
        //   setOpen?.(false);
        // }

        // Fetch data (with) React Query.
        updateAppointmentMutate(
          { ...updatingAppointmentData },
          {
            onSuccess: (newAppointment) => {
              if (newAppointment?.$id) {
                form.reset();
                setOpen?.(false);
              }
            },
          },
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const buttonLabel = ButtonLabel(type);

  return { isLoading, hasError, buttonLabel, onSubmit, form };
};

export default useAppointmentForm;
