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
export function useGetPatient() {
  return useQuery({
    queryKey: ["patient", "me"],
    queryFn: () => getPatient(),
    staleTime: 1000 * 60 * 60 * 24,
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
