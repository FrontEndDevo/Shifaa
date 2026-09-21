"use client";

// React Hooks
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatientFormValidation } from "@/validation/schema";
import { PatientFormDefaultValues } from "@/constants";

// API actions:
import { registerPatient } from "@/lib/actions/patient.actions";

// Types
import { IUser } from "@/types";

const useRegisterForm = ({ userInfo }: { userInfo: IUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    mode: "onBlur",
    defaultValues: {
      ...PatientFormDefaultValues,
    },
  });

  // Submit
  const onSubmitHandler = async (
    values: z.infer<typeof PatientFormValidation>,
  ) => {
    let formData;
    setIsLoading(true);

    if (
      values.identificationDocument &&
      values.identificationDocument.length > 0
    ) {
      const blobFile = new Blob([values.identificationDocument[0]], {
        type: values.identificationDocument[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.identificationDocument[0].name);
    }

    try {
      const patientData = {
        userId: userInfo.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        address: values.address,
        occupation: values.occupation,
        emergencyContactName: values.emergencyContactName,
        emergencyContactNumber: values.emergencyContactNumber,
        primaryPhysician: values.primaryPhysician,
        insuranceProvider: values.insuranceProvider,
        insurancePolicyNumber: values.insurancePolicyNumber,
        allergies: values.allergies,
        currentMedication: values.currentMedication,
        familyMedicalHistory: values.familyMedicalHistory,
        pastMedicalHistory: values.pastMedicalHistory,
        identificationType: values.identificationType,
        identificationNumber: values.identificationNumber,
        identificationDocument: values.identificationDocument
          ? formData
          : undefined,
        privacyConsent: values.privacyConsent,
      };

      const patient = await registerPatient(patientData);

      if (patient) router.replace(`/patients/${userInfo.$id}/new-appointment`);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, form, onSubmitHandler };
};

export default useRegisterForm;
