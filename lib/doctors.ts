import { DOCTORS } from "@/constants/Doctor";
import en from "@/messages/en.json";

type DoctorNames = Record<string, { name: string }>;

export const resolveDoctorId = (stored: string) => {
  if (DOCTORS.some((doctor) => doctor.doctorId === stored)) return stored;

  const names = en.DoctorsData as DoctorNames;
  const legacy = DOCTORS.find(
    (doctor) => names[doctor.doctorId]?.name === stored,
  );

  return legacy?.doctorId ?? stored;
};
