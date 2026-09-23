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
  const newAppointment = await tablesDB.createRow({
    databaseId: PATIENT_DATABASE_ID as string,
    tableId: APPOINTMENT_TABLE_ID as string,
    rowId: ID.unique(),
    data: {
      ...appointmentData,
    },
  });

  if (!newAppointment)
    return {
      message: `Failed to create appointment, please try again.`,
    };

  return parseStringify(newAppointment);
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

  const updatedAppointment = await tablesDB.updateRow({
    databaseId: PATIENT_DATABASE_ID as string,
    tableId: APPOINTMENT_TABLE_ID as string,
    rowId: appointmentId,
    data: {
      ...appointment,
    },
  });

  if (!updatedAppointment)
    return {
      message: `Failed to update your appointment, please try again.`,
    };

  // const messageContent = `Hi there, it's Shifaa.
  // ${
  //   appointment.status === "scheduled"
  //     ? `Your appointment has been scheduled for ${formatDateTime(appointment.schedule).dateTime} with Dr. ${appointment.primaryPhysician}`
  //     : `We regret to inform you that your appointment has been cancelled. The reason for that is:
  //     ${appointment.cancellationReason}`
  // }`;

  // await sendNotificationBySMS({ userId, messageContent });

  // const messageContent = `Hi there, it's Shifaa.
  // ${
  //   appointment.status === "scheduled"
  //     ? `Your appointment has been scheduled for ${formatDateTime(appointment.schedule).dateTime} with Dr. ${appointment.primaryPhysician}`
  //     : `We regret to inform you that your appointment has been cancelled. The reason for that is:
  //     ${appointment.cancellationReason}`
  // }`;

  // const subject =
  //   appointment.status === "scheduled"
  //     ? "Confirm your appointment - Shifaa Healthcare System"
  //     : "Cancling your appointment - Shifaa Healthcare System";

  // await sendNotificationByEmail({
  //   userId,
  //   messageContent,
  //   subject,
  // });

  revalidatePath("/admin");
  return parseStringify(updatedAppointment);
};

// DELETE APPOINTMENT
export const deleteAppointment = async (appointmentId: string) => {
  const deletedAppointment = await tablesDB.deleteRow({
    databaseId: PATIENT_DATABASE_ID as string,
    tableId: APPOINTMENT_TABLE_ID as string,
    rowId: appointmentId,
  });

  if (!deletedAppointment)
    return {
      message: `Failed to delete appointment, please try again.`,
    };

  revalidatePath("/admin");
  return parseStringify(deletedAppointment);
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  if (!appointmentId || appointmentId === "undefined")
    return {
      message: `Appointment ID is missing or invalid.`,
    };

  const currentAppointment = await tablesDB.listRows({
    databaseId: PATIENT_DATABASE_ID as string,
    tableId: APPOINTMENT_TABLE_ID as string,
    queries: [Query.equal("$id", appointmentId)],
  });

  if (!currentAppointment)
    return {
      message: `Failed to get your appointment, please refresh the page.`,
    };

  return parseStringify(currentAppointment.rows[0]);
};

// GET ALL APPOINTMENTS
export const getRecentAppointments = async () => {
  const recentAppointments = await tablesDB.listRows({
    databaseId: PATIENT_DATABASE_ID as string,
    tableId: APPOINTMENT_TABLE_ID as string,
    queries: [Query.select(["*", "patient.*"]), Query.orderDesc("$createdAt")],
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

  if (!recentAppointments) {
    // Must return default values to prevent the entire page from breaking.
    return {
      total: 0,
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
      rows: [],
    };
  }

  return parseStringify(appointmentsData);
};

// SEND SMS MESSAGE
export const sendNotificationBySMS = async ({
  userId,
  messageContent,
}: {
  userId: string;
  messageContent: string;
}) => {
  const message = await messaging.createSMS(
    ID.unique(),
    messageContent,
    [],
    [userId],
  );

  if (!message)
    return {
      message: `Failed to send SMS message.`,
    };

  return parseStringify(message);
};

// SEND EMAIL
export const sendNotificationByEmail = async ({
  userId,
  messageContent,
  subject,
}: {
  userId: string;
  messageContent: string;
  subject: string;
}) => {
  const message = await messaging.createEmail({
    messageId: ID.unique(),
    content: messageContent,
    subject,
    users: [userId],
    topics: [],
    targets: [],
    draft: false,
    html: false,
  });

  if (!message)
    return {
      message: `Failed to send email.`,
    };

  return parseStringify(message);
};
