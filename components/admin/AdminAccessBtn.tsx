"use client";

// Next components:
import Link from "next/link";

// Tanstack React Query:
import { useQueryClient } from "@tanstack/react-query";

// API Actions Hooks:
import { getRecentAppointments } from "@/lib/actions/appointment.actions";

const AdminAccessBtn = () => {
  const queryClient = useQueryClient();

  const prefetchAdminAppointmentsHandler = async () => {
    await queryClient.query({
      queryKey: ["appointments"],
      queryFn: () => getRecentAppointments(),
      staleTime: 1000 * 60 * 5, // Appointments is fresh when hover the button for 5 min in Login page.
    });
  };

  return (
    <Link
      onMouseEnter={prefetchAdminAppointmentsHandler}
      href="?admin=true"
      className="text-green-500"
    >
      Admin
    </Link>
  );
};

export default AdminAccessBtn;
