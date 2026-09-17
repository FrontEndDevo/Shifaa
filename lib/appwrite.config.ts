import {
  Client,
  Account,
  Databases,
  Storage,
  Messaging,
  Users,
  TablesDB,
} from "node-appwrite";

export const {
  SHIFAA_ID,
  API_KEY,
  PATIENT_DATABASE_ID,
  PATIENT_TABLE_ID,
  DOCTOR_TABLE_ID,
  APPOINTMENT_TABLE_ID,
  BUCKET_ID,
  NEXT_ENDPOINT,
} = process.env;

const client = new Client()
  .setEndpoint(NEXT_ENDPOINT!)
  .setProject(SHIFAA_ID!)
  .setKey(API_KEY!);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const messaging = new Messaging(client);
export const users = new Users(client);
export const tablesDB = new TablesDB(client);
export { client };
