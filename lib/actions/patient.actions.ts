"use server";

// Cookies:
import { cookies } from "next/headers";

// Appwrite:
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import {
  account,
  BUCKET_ID,
  client,
  NEXT_ENDPOINT,
  PATIENT_DATABASE_ID,
  PATIENT_TABLE_ID,
  SHIFAA_ID,
  storage,
  tablesDB,
  users,
} from "../appwrite.config";

// Utilities:
import { parseStringify } from "../utils";

// Types:
import { ICreateUserParams, IRegisterUserParams } from "@/types";

// User Login:
export const checkOrRegisterUser = async (user: ICreateUserParams) => {
  // Check if user exists or not.
  const userExists = await users.list({
    queries: [Query.equal("email", [user.email])],
  });

  let isNewUser = false;
  if (userExists.total === 0) {
    // If user does (not) exist? Sign up...
    await account.create({
      userId: ID.unique(),
      email: user.email,
      password: user.password,
      name: "name",
    });

    isNewUser = true;
  }

  // Logging in after creating account to get userId.
  const loggedUser = await account.createEmailPasswordSession({
    email: user.email,
    password: user.password,
  });

  // Store userId in Cookies:
  const cookieStore = await cookies();
  cookieStore.set("appwrite-session", loggedUser.secret, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return parseStringify({ isNewUser, user: loggedUser });
};

// Register a new user with full information:
export const registerPatient = async (patientData: IRegisterUserParams) => {
  try {
    let file;

    if (patientData.identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        patientData.identificationDocument?.get("blobFile") as Blob,
        patientData.identificationDocument?.get("fileName") as string,
      );

      file = await storage.createFile({
        bucketId: BUCKET_ID!,
        fileId: ID.unique(),
        file: inputFile,
      });
    }

    const newPatient = await tablesDB.createRow({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: PATIENT_TABLE_ID as string,
      rowId: ID.unique(),
      data: {
        ...patientData,
        identificationDocument: file?.$id || null,
        identificationDocumentUrl: `${NEXT_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${SHIFAA_ID}`,
      },
    });

    return parseStringify(newPatient);
  } catch (error) {
    throw error;
  }
};

// Get specefic patient info by ID:
export const getPatient = async () => {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("appwrite-session");

    if (!sessionCookie || !sessionCookie.value) {
      return null;
    }

    const sessionSecret = sessionCookie.value;

    client.setSession(sessionSecret);

    const loggedInUser = await account.get();

    if (!loggedInUser || !loggedInUser.$id) {
      return null;
    }

    const userId = loggedInUser.$id;

    const patients = await tablesDB.listRows({
      databaseId: PATIENT_DATABASE_ID as string,
      tableId: PATIENT_TABLE_ID as string,
      queries: [Query.equal("userId", userId)],
    });

    if (!patients.rows || patients.rows.length === 0) {
      return null;
    }

    return parseStringify(patients.rows[0]);
  } catch (error) {
    return null;
  }
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("appwrite-session");
};
