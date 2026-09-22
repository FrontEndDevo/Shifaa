"use server";

// Next:
import { revalidatePath } from "next/cache";

// Appwrite.io:
import { ID, Query } from "node-appwrite";
import {
  APPOINTMENT_TABLE_ID,
  messaging,
  PATIENT_DATABASE_ID,
  tablesDB,
} from "../appwrite.config";

// Utilities:
import { formatDateTime, parseStringify } from "../utils";

// Types:
import {
  CreateAppointmentParams,
  UpdateAppointmentParams,
} from "@/types/appointment.types";

// CREATE APPOINTMENT
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

// UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  appointment,
  userId,
}: UpdateAppointmentParams) => {
  // Guard clause to handle the undefined case safely
  if (!appointmentId)
    throw new Error("Appointment ID is missing. Cannot update appointment.");

  try {
    const updatedAppointment = await tablesDB.updateRow({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: APPOINTMENT_TABLE_ID as string,
      rowId: appointmentId,
      data: {
        ...appointment,
      },
    });

    if (updatedAppointment) {
      // const messageContent = `Hi there, it's Shifaa.
      // ${
      //   appointment.status === "scheduled"
      //     ? `Your appointment has been scheduled for ${formatDateTime(appointment.schedule).dateTime} with Dr. ${appointment.primaryPhysician}`
      //     : `We regret to inform you that your appointment has been cancelled. The reason for that is:
      //     ${appointment.cancellationReason}`
      // }`;

      // await sendNotificationBySMS({ userId, messageContent });

      revalidatePath("/admin");
      return parseStringify(updatedAppointment);
    }
  } catch (error) {
    throw error;
  }
};

// DELETE APPOINTMENT
export const deleteAppointment = async (appointmentId: string) => {
  try {
    const deletedAppointment = await tablesDB.deleteRow({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: APPOINTMENT_TABLE_ID as string,
      rowId: appointmentId,
    });

    if (deletedAppointment) {
      revalidatePath("/admin");
      return parseStringify(deletedAppointment);
    }
  } catch (error) {
    throw error;
  }
};

// GET APPOINTMENT
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

// GET ALL APPOINTMENTS
export const getRecentAppointments = async () => {
  try {
    const recentAppointments = await tablesDB.listRows({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: APPOINTMENT_TABLE_ID as string,
      queries: [
        Query.select(["*", "patient.*"]),
        Query.orderDesc("$createdAt"),
      ],
    });

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = recentAppointments.rows.reduce((acc, appointment) => {
      if (appointment.status === "scheduled") {
        acc.scheduledCount += 1;
      }
      if (appointment.status === "pending") {
        acc.pendingCount += 1;
      }
      if (appointment.status === "cancelled") {
        acc.cancelledCount += 1;
      }
      return acc;
    }, initialCounts);

    const appointmentsData = {
      total: recentAppointments.total,
      ...counts,
      rows: recentAppointments.rows,
    };

    return parseStringify(appointmentsData);
  } catch (error) {
    console.error("Appwrite Fetch Error:", error);
    // Must return default values to prevent the entire page from breaking.
    return {
      total: 0,
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
      rows: [],
    };
  }
};

// SEND SMS MESSAGE
export const sendNotificationBySMS = async ({
  userId,
  messageContent,
}: {
  userId: string;
  messageContent: string;
}) => {
  try {
    const message = await messaging.createSMS(
      ID.unique(),
      messageContent,
      [],
      [userId],
    );

    return parseStringify(message);
  } catch (error) {
    throw error;
  }
};
