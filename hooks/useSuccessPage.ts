"use client";

// Next Components:
import { useParams, useSearchParams } from "next/navigation";

// API Actions Hooks:
import { useGetAppointment } from "@/components/forms/AppointmentForm/hooks/useAppointments";

export default function useSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const userId = params.userId;
  const appointmentId = searchParams.get("appointmentId");

  const {
    data: appointment,
    isLoading,
    isError,
  } = useGetAppointment(appointmentId as string);

  return { appointment, userId, isLoading, isError };
}
