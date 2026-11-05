"use client";

// React Hooks:
import { useMemo } from "react";

// Next Components:
import Image from "next/image";

// Tanstack Table:
import { createColumnHelper } from "@tanstack/react-table";

// Next Intl:
import { useFormatter, useTranslations } from "next-intl";


// Modals Components:
import { DataTableFeatures } from "./AdminFeatures";
import StatusBadge from "./StatusBadge";
import AppointmentModal from "../modals/AppointmentModal";

// Utilities:
import { resolveDoctorId } from "@/lib/doctors";

// Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";

// Types:
import { Appointment } from "@/types/appointment.types";

const columnHelper = createColumnHelper<DataTableFeatures, Appointment>();

export const useColumns = () => {
  const t = useTranslations("Admin.table.columns");
  const tm = useTranslations("Appointment.modal");
  const format = useFormatter();
  const doctors = useLocalizedDoctors();

  return useMemo(
    () =>
      columnHelper.columns([
        {
          header: t("id"),
          cell: ({ row }) => <p className="text-sm">{row.index + 1}</p>,
        },

        {
          id: "patient",
          accessorFn: (row) => row.patient?.name,
          header: t("patient"),
          cell: ({ row }) => (
            <h3 className="text-sm">{row.original.patient?.name}</h3>
          ),
        },

        {
          accessorKey: "phone",
          header: t("phone"),
          cell: ({ row }) => (
            <h3 dir="ltr" className="text-sm">
              {row.original.patient?.phone}
            </h3>
          ),
        },

        {
          accessorKey: "status",
          header: t("status"),
          cell: ({ row }) => (
            <div>
              <StatusBadge status={row.original?.status} />
            </div>
          ),
        },

        {
          accessorKey: "schedule",
          header: t("appointment"),
          cell: ({ row }) => (
            <p className="min-w-[100px] text-sm">
              {format.dateTime(new Date(row.original.schedule), {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          ),
        },

        {
          id: "primaryPhysician",
          accessorFn: (row) => resolveDoctorId(row.primaryPhysician),
          header: t("doctor"),
          cell: ({ row }) => {
            const appointment = row.original;

            const doctor = doctors.find(
              (doc) =>
                doc.doctorId === resolveDoctorId(appointment.primaryPhysician),
            );

            return (
              <div className="flex items-center gap-3">
                {doctor && (
                  <Image
                    src={doctor.image}
                    alt=""
                    width={100}
                    height={100}
                    className="size-8 rounded-full"
                  />
                )}
                <p className="whitespace-nowrap">
                  {doctor?.name ?? appointment.primaryPhysician}
                </p>
              </div>
            );
          },
        },

        {
          accessorKey: "actions",
          header: t("actions"),
          cell: ({ row: { original: data } }) => {
            return (
              <div className="flex justify-center gap-1">
                <AppointmentModal
                  type="schedule"
                  appointment={data}
                  title={tm("schedule.title")}
                  description={tm("schedule.description")}
                />

                {data.status !== "cancelled" && (
                  <AppointmentModal
                    type="cancel"
                    appointment={data}
                    title={tm("cancel.title")}
                    description={tm("cancel.description")}
                  />
                )}

                {data.status === "cancelled" && (
                  <AppointmentModal
                    type="delete"
                    appointment={data}
                    title={tm("delete.title")}
                  />
                )}
              </div>
            );
          },
        },
      ]),
    [t, tm, format, doctors],
  );
};
