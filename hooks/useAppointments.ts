"use client";

// React Query:
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// API Actions:
import {
  createAppointment,
  deleteAppointment,
  getAppointment,
  getRecentAppointments,
  updateAppointment,
} from "@/lib/actions/appointment.actions";

// Types:
import {
  CreateAppointmentParams,
  UpdateAppointmentParams,
} from "@/types/appointment.types";

// GET APPOINTMENT HOOK
export function useGetRecentAppointments() {
  const query = useQuery({
    queryKey: ["appointments"],
    queryFn: () => getRecentAppointments(),
    refetchInterval: 1000 * 60 * 2, // 2 minutes to fetch new data.
  });
  return query;
}

// CREATE APPOINTMENT HOOK
export function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (appointmentData: CreateAppointmentParams) =>
      createAppointment(appointmentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

// DELETE APPOINTMENT HOOK
export function useDeleteAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (appointmentId: string) => deleteAppointment(appointmentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

// UPDATE APPOINTMENT HOOK
export function useUpdateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      appointmentId,
      appointment,
      userId,
    }: UpdateAppointmentParams) =>
      updateAppointment({ appointmentId, appointment, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

// GET APPOINTMENT HOOK
export function useGetAppointment(appointmentId: string) {
  return useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: () => getAppointment(appointmentId),
    enabled: !!appointmentId,
  });
}
