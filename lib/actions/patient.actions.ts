"use server";

// Appwrite:
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import {
  account,
  BUCKET_ID,
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
  const userExists = await users.list({
    queries: [Query.equal("email", [user.email])],
  });

  // If user does exist? Login...
  if (userExists.total > 0) {
    const loggedUser = await account.createEmailPasswordSession({
      email: user.email,
      password: user.password,
    });

    return {
      isNewUser: false,
      user: parseStringify(loggedUser),
    };
  } else {
    // If user does (not) exist? Sign up...
    const registeredUser = await account.create({
      userId: ID.unique(),
      email: user.email,
      password: user.password,
      name: "name",
    });
    return {
      isNewUser: true,
      user: parseStringify(registeredUser),
    };
  }
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
export const getPatient = async (userId: string) => {
  try {
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
    throw error;
  }
};
