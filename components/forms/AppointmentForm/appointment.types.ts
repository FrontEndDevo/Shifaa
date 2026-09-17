import { Dispatch, SetStateAction } from "react";
import { Appointment } from "../../../types/appwrite.types";

export type TAppointmentFormProps = {
  userId: string;
  patientId: string;
  type: "create" | "schedule" | "cancel";
  appointment?: Appointment;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
