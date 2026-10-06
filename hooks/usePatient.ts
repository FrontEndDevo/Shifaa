// React Query:
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// API Actions:
import {
  checkOrRegisterUser,
  getPatient,
  registerPatient,
} from "@/lib/actions/patient.actions";

// Types:
import { ICreateUserParams, IRegisterUserParams } from "@/types";

// GET PATIENT HOOK
export function useGetPatient() {
  return useQuery({
    queryKey: ["patient", "me"],
    queryFn: () => getPatient(),
    staleTime: 1000 * 60 * 60 * 24,
  });
}

// REGISTER PATIENT HOOK
export function useRegisterPatient() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (patientData: IRegisterUserParams) =>
      registerPatient(patientData),
    onSuccess: (patient) => {
      queryClient.setQueryData(["patient", "me"], patient);
    },
  });
}

// CHECK OR REGISTER USER HOOK
export function useCheckOrRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: ICreateUserParams) => checkOrRegisterUser(user),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["patient", "me"],
      });
    },
  });
}
