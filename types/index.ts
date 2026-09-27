export interface ICreateUserParams {
  email: string;
  password: string;
}

export type Gender = "Male" | "Female" | "Other";

export type Status = "pending" | "scheduled" | "cancelled";

export interface IUser extends ICreateUserParams {
  $id: string;
}

export interface IRegisterUserParams {
  userId: string;

  name: string;
  phone: string;
  birthDate: Date;
  gender: Gender;

  identificationType: string | undefined;
  identificationDocument: FormData | undefined;

  privacyConsent: boolean;
}

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
