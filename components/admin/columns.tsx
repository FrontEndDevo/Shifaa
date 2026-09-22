"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { DataTableFeatures } from "./AdminFeatures";

import StatusBadge from "./StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appointment.types";
import Image from "next/image";
import { Doctors } from "@/constants";
import AppointmentModal from "../modals/AppointmentModal";

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Appointment>();

export const columns = columnHelper.columns([
  {
    header: "ID",
    cell: ({ row }) => <p className="text-sm">{row.index + 1}</p>,
  },

  {
    id: "patient",
    accessorFn: (row) => row.patient?.name,
    header: "Patient",
    cell: ({ row }) => (
      <h3 className="text-sm">{row.original.patient?.name}</h3>
    ),
  },

  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <h3 className="text-sm">{row.original.patient.phone}</h3>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        <StatusBadge status={row.original.status} />
      </div>
    ),
  },

  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => (
      <p className="text-sm min-w-[100px]">
        {formatDateTime(row.original.schedule).dateTime}
      </p>
    ),
  },

  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      const doctor = Doctors.find(
        (doctor) => doctor.name === appointment.primaryPhysician,
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image as string}
            alt="doctor"
            width={100}
            height={100}
            className="size-8"
          />
          <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row: { original: data } }) => {
      return (
        <div className="flex gap-1">
          <AppointmentModal
            type="schedule"
            appointment={data}
            title="Schedule Appointment"
            description="Please confirm the following details to"
          />

          <AppointmentModal
            type="cancel"
            appointment={data}
            title="Cancle Appointment"
            description="Are you sure you want to cancle this appointment?"
          />
        </div>
      );
    },
  },
]);
