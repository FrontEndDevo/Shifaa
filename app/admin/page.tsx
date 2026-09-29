"use client";
// React Hooks:
import { useEffect } from "react";

// Data Table:
import { DataTable } from "@/components/admin/DataTable";
import { columns } from "@/components/admin/columns";

// Components:
import StatAppointment from "@/components/admin/StatAppointment";
import QueryWrapper from "@/components/shared/QueryWrapper";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

// Shifaa Layout:
import Shifaa from "@/components/layout/Shifaa";

// API Actions Hooks:
import { useGetRecentAppointments } from "@/components/forms/AppointmentForm/hooks/useAppointments";

const Admin = () => {
  const { data: appointments, isLoading, isError } = useGetRecentAppointments();

  useEffect(() => {
    if (isError)
      toast.add({
        type: "error",
        title: "Failed to fetch appointments.",
        description: "Refresh the page and try again.",
      });
  }, [isError]);

  return (
    <QueryWrapper
      isLoading={isLoading}
      isError={isError}
      data={appointments}
      errorMessage="Failed to fetch the appointments, please try again."
    >
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <header className="admin-header">
          <Shifaa />

          <p className="text-xl font-semibold">Admin Dashboard</p>
        </header>

        {appointments && (
          <main className="admin-main">
            <section className="w-full space-y-4">
              <h1 className="header">Welcome 👋</h1>
              <p className="text-dark-700">
                Start the day with managing new appointments
              </p>
            </section>

            <section className="admin-stat">
              <StatAppointment
                type="appointments"
                count={appointments.scheduledCount}
                label="Scheduled appointments"
                icon={"/assets/icons/appointments.svg"}
              />
              <StatAppointment
                type="pending"
                count={appointments.pendingCount}
                label="Pending appointments"
                icon={"/assets/icons/pending.svg"}
              />
              <StatAppointment
                type="cancelled"
                count={appointments.cancelledCount}
                label="Cancelled appointments"
                icon={"/assets/icons/cancelled.svg"}
              />
            </section>

            <DataTable columns={columns} data={appointments.rows} />
          </main>
        )}
      </div>
    </QueryWrapper>
  );
};

export default Admin;
