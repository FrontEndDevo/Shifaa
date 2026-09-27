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

const useRegisterForm = ({ userId }: { userId: string }) => {
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
        userId,
        name: values.name,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        identificationType: values.identificationType,
        identificationDocument: values.identificationDocument
          ? formData
          : undefined,
        privacyConsent: values.privacyConsent,
      };

      const patient = await registerPatient(patientData);

      if (patient) router.replace(`/patients/${userId}/new-appointment`);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, form, onSubmitHandler };
};

export default useRegisterForm;
