import { Models } from "node-appwrite";
import { Status } from ".";
import { Patient } from "./patient.types";
import { Dispatch, SetStateAction } from "react";

export type TAppointmentFormTypes = "create" | "schedule" | "cancel";

// Used in (createAppointment) action
export type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  cancellationReason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

// Used in (updateAppointment) action
export type UpdateAppointmentParams = {
  appointmentId: string | undefined;
  appointment: {
    primaryPhysician: string;
    schedule: Date;
    status: Status;
    cancellationReason: string | null;
  };
  userId: string;
};

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}

// Used in (AppointmentForm) component:
export type TAppointmentFormProps = {
  userId: string;
  patientId: string;
  type: TAppointmentFormTypes;
  appointment?: Appointment;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

// Used in (AppointmentModal) component:
export type TAppointmentModalProps = {
  type: TAppointmentFormTypes;
  appointment?: Appointment;
  title: string;
  description: string;
};
