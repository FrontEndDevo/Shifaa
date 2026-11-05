"use client";

// React Hooks:
import { useEffect } from "react";

// Next Intl:
import { useTranslations } from "next-intl";

// Tanstack Table:
import { DataTable } from "@/components/admin/DataTable";
import { useColumns } from "@/components/admin/columns";

// Components:
import Navbar from "@/components/layout/navbar/Navbar";
import QueryWrapper from "@/components/shared/QueryWrapper";
import StatAppointment from "@/components/admin/StatAppointment";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

// Shifaa Layout:
import Shifaa from "@/components/layout/Shifaa";

// API Actions Hooks:
import { useGetRecentAppointments } from "@/components/forms/AppointmentForm/hooks/useAppointments";

const Admin = () => {
  const t = useTranslations("Admin");
  const columns = useColumns();
  const { data: appointments, isLoading, isError } = useGetRecentAppointments();

  useEffect(() => {
    if (isError)
      toast.add({
        type: "error",
        title: t("toast.title"),
        description: t("toast.description"),
      });
  }, [isError, t]);

  return (
    <>
      <Navbar />

      <QueryWrapper
        isLoading={isLoading}
        isError={isError}
        data={appointments}
        errorMessage={t("loadError")}
      >
        <div className="mx-auto flex max-w-7xl flex-col space-y-14">
          <header className="admin-header">
            <Shifaa />

            <p className="hidden text-xl font-semibold md:block">
              {t("dashboard")}
            </p>
          </header>

          {appointments && (
            <main className="admin-main">
              <section className="w-full space-y-4">
                <h1 className="header">{t("welcome")}</h1>
                <p className="text-soft">{t("subtitle")}</p>
              </section>

              <section className="admin-stat">
                <StatAppointment
                  type="appointments"
                  count={appointments.scheduledCount}
                  label={t("stats.scheduled")}
                  icon="/assets/icons/appointments.svg"
                />
                <StatAppointment
                  type="pending"
                  count={appointments.pendingCount}
                  label={t("stats.pending")}
                  icon="/assets/icons/pending.svg"
                />
                <StatAppointment
                  type="cancelled"
                  count={appointments.cancelledCount}
                  label={t("stats.cancelled")}
                  icon="/assets/icons/cancelled.svg"
                />
              </section>

              <DataTable columns={columns} data={appointments.rows} />
            </main>
          )}
        </div>
      </QueryWrapper>
    </>
  );
};

export default Admin;
