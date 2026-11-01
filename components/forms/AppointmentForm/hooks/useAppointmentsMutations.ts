// React:
import { Dispatch, SetStateAction } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Customised Next Hooks:
import { useRouter } from "@/i18n/navigation";

// Hooks:
import {
  useCreateAppointment,
  useDeleteAppointment,
  useUpdateAppointment,
} from "./useAppointments";

// Types:
import type { TAppointmentFormTypes } from "@/types/appointment.types";

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

  const t = useTranslations("Appointment.toast");
  const router = useRouter();

  const createMutation = useCreateAppointment();
  const updateMutation = useUpdateAppointment();
  const deleteMutation = useDeleteAppointment();

  const allMutation = {
    create: createMutation,
    schedule: updateMutation,
    cancel: updateMutation,
    delete: deleteMutation,
  };

  const currentMutation = allMutation[type];

  const isLoading = currentMutation.isPending ?? false;
  const hasError = currentMutation.isError ?? false;

  const repeatedMessages = {
    loadingTitle: t(`${type}.loadingTitle`),
    loadingDescription: "",
    successTitle: t(`${type}.successTitle`),
    successDescription: t(`${type}.successDescription`),
    errorTitle: t(`${type}.errorTitle`),
    errorDescription: t(`${type}.errorDescription`),
  };

  const handleMutationAction = (dataValues: any) => {
    const mutationExecution = () => {
      switch (type) {
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

        default:
          return {
            promise: updateMutation.mutateAsync({
              ...dataValues,
            }),
            onSuccess: () => setOpen?.(false),
          };
      }
    };

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
