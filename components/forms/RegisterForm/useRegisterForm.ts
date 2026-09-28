"use client";

// Next Hooks:
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatientFormValidation } from "@/validation/schema";
import { PatientFormDefaultValues } from "@/constants";

// API Actions Hooks:
import { useRegisterPatient } from "@/hooks/usePatient";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

const useRegisterForm = ({ userId }: { userId: string }) => {
  const { mutateAsync: registerPatientMutation, isPending } =
    useRegisterPatient();

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

    toast.promise(
      registerPatientMutation(patientData).then((patient) => {
        if (patient) {
          router.replace(`/patients/${userId}/new-appointment`);
        }
      }),
      {
        loading: {
          title: "Saving...",
          description: "Saving your information...",
        },
        success: {
          title: "Registration Successful!",
          description:
            "Patient profile created successfully. Proceeding to appointment booking.",
        },
        error: () => ({
          title: "Registration Failed!",
          description:
            "Failed to create patient profile. Please check the entered data and try again.",
        }),
      },
    );
  };
  return { isPending, form, onSubmitHandler };
};

export default useRegisterForm;
