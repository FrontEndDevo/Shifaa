"use client";

// Next components:
import Link from "next/link";

// Tanstack React Query:
import { useQueryClient } from "@tanstack/react-query";

// API Actions Hooks:
import { getRecentAppointments } from "@/lib/actions/appointment.actions";

// Next Intl:
import { useTranslations } from "next-intl";

const AdminAccessBtn = () => {
  const t = useTranslations("Login");

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
      {t("admin")}
    </Link>
  );
};

export default AdminAccessBtn;
