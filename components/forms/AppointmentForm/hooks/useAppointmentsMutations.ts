// React:
import { Dispatch, SetStateAction } from "react";

// Next Hooks:
import { useRouter } from "next/navigation";

// API Actions Hooks:
import {
  useCreateAppointment,
  useDeleteAppointment,
  useUpdateAppointment,
} from "./useAppointments";

// Types:
import { TAppointmentFormTypes } from "@/types/appointment.types";

// Constants:
import { APPOINTMENTS_MESSAGES } from "@/constants/AppointmentsMessages";

// Handlers:
import MutationToaster from "@/lib/toast-handler";

type TAppointmentsMutationsProps = {
  type: TAppointmentFormTypes;
  userId: string;
  appointmentId: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

function useAppointmentsMutations(props: TAppointmentsMutationsProps) {
  const { type, userId, appointmentId, setOpen } = props;

  const router = useRouter();

  // Prepare all mutation functions we need:
  const createMutation = useCreateAppointment();
  const updateMutation = useUpdateAppointment();
  const deleteMutation = useDeleteAppointment();

  // Collect all mutations in one single object.
  const allMutation = {
    create: createMutation,
    schedule: updateMutation,
    cancel: updateMutation,
    delete: deleteMutation,
  };

  // One dynamic mutation depending on the type:
  const currentMutation = allMutation[type];

  const isLoading = currentMutation.isPending ?? false;
  const hasError = currentMutation.isError ?? false;

  // Toast loading / success / error messages:
  const toastMessages = APPOINTMENTS_MESSAGES[type];

  const repeatedMessages = {
    loadingTitle: toastMessages.loadingTitle,
    loadingDescription: toastMessages.loadingDescription,
    successTitle: toastMessages.successTitle,
    successDescription: toastMessages.successDescription,
    errorTitle: toastMessages.errorTitle,
    errorDescription: toastMessages.errorDescription,
  };

  // Fetch data (with) React Query.
  const handleMutationAction = (dataValues: any) => {
    const mutationExecution = () => {
      switch (type) {
        // This part of code is used in the NewAppointment page to create new patient appointment:
        case "create":
          return {
            promise: createMutation.mutateAsync(dataValues),
            onSuccess: (data: any) => {
              if (data.$id)
                router.replace(
                  `/patients/${userId}/new-appointment/success?appointmentId=${data.$id}`,
                );
            },
          };

        case "delete":
          return {
            promise: deleteMutation.mutateAsync(appointmentId),
            onSuccess: () => setOpen?.(false),
          };

        // Scheduale / Cancel:
        default:
          return {
            promise: updateMutation.mutateAsync({
              ...dataValues,
            }),
            onSuccess: () => setOpen?.(false),
          };
      }
    };

    // Extract promise and success function to pass them through MutationToaster.
    const { promise, onSuccess } = mutationExecution();

    MutationToaster({
      mutationPromise: promise,
      ...repeatedMessages,
      onPromiseSuccess: onSuccess,
    });
  };

  return { isLoading, hasError, handleMutationAction };
}

export default useAppointmentsMutations;
