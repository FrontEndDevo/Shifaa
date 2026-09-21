export interface ICreateUserParams {
  name: string;
  email: string;
  phone: string;
}

export type Gender = "Male" | "Female" | "Other";

export type Status = "pending" | "scheduled" | "cancelled";

export interface IUser extends ICreateUserParams {
  $id: string;
}

export interface IRegisterUserParams extends ICreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
