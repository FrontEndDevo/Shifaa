"use server";

import { ID, Query } from "node-appwrite";
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

export const getAppointment = async (appointmentId: string) => {
  try {
    const currentAppointment = await tablesDB.listRows({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: APPOINTMENT_TABLE_ID as string,
      queries: [Query.equal("$id", appointmentId)],
    });

    return parseStringify(currentAppointment.rows[0]);
  } catch (error) {
    throw error;
  }
};
