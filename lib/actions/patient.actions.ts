"use server";

import { ID, Query } from "node-appwrite";
import { ICreateUserParams, IRegisterUserParams } from "@/types";
import {
  BUCKET_ID,
  NEXT_ENDPOINT,
  PATIENT_DATABASE_ID,
  PATIENT_TABLE_ID,
  SHIFAA_ID,
  storage,
  tablesDB,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";

// Create a new user:
export const createUser = async (user: ICreateUserParams) => {
  try {
    const newUser = await users.create({
      userId: ID.unique(),
      email: user.email,
      phone: user.phone.trim(),
      password: "password",
      name: user.name,
    });

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list({
        queries: [Query.equal("email", user.email)],
      });

      return documents?.users[0];
    }
    throw error;
  }
};

// Get specefic user by ID:
export const getUser = async (userId: string) => {
  try {
    const user = await users.get({ userId });

    return parseStringify(user);
  } catch (error) {
    throw error;
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
