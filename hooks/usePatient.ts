// React Query:
import { useMutation, useQuery } from "@tanstack/react-query";

// API Actions:
import {
  checkOrRegisterUser,
  getPatient,
  registerPatient,
} from "@/lib/actions/patient.actions";

// Types:
import { ICreateUserParams, IRegisterUserParams } from "@/types";

// GET PATIENT HOOK
export function useGetPatient(userId: string) {
  return useQuery({
    queryKey: ["patient"],
    queryFn: () => getPatient(userId),
    enabled: !!userId,
  });
}

// REGISTER PATIENT HOOK
export function useRegisterPatient() {
  return useMutation({
    mutationFn: (patientData: IRegisterUserParams) =>
      registerPatient(patientData),
  });
}

// CHECK OR REGISTER USER HOOK
export function useCheckOrRegister() {
  return useMutation({
    mutationFn: (user: ICreateUserParams) => checkOrRegisterUser(user),
  });
}
