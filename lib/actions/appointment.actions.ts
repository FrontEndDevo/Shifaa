"use server";

import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import {
  APPOINTMENT_TABLE_ID,
  PATIENT_DATABASE_ID,
  tablesDB,
} from "../appwrite.config";
import { CreateAppointmentParams } from "@/types";

export const createAppointment = async (
  appointmentData: CreateAppointmentParams,
) => {
  try {
    const newAppointment = await tablesDB.createRow({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: APPOINTMENT_TABLE_ID as string,
      rowId: ID.unique(),
      data: {
        ...appointmentData,
      },
    });

    return parseStringify(newAppointment);
  } catch (error) {
    throw error;
  }
};
