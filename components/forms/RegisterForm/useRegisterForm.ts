"use client";

// Next Hooks:
import { useRouter } from "@/i18n/navigation";

// Next Intl:
import { useTranslations } from "next-intl";

// Validation:
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatientFormValues } from "@/validation/schema/RegisterPatientFormSchema";

// Validation Hooks:
import { usePatientFormValidation } from "@/hooks/useFormSchemas";

// Constants:
import { PatientFormDefaultValues } from "@/constants";

// API Actions Hooks:
import { useRegisterPatient } from "@/hooks/usePatient";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

const useRegisterForm = ({ userId }: { userId: string }) => {
  const t = useTranslations("Auth.register.toast");

  const { mutateAsync: registerPatientMutation, isPending } =
    useRegisterPatient();

  const router = useRouter();

  const schema = usePatientFormValidation();

  const form = useForm<PatientFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      ...PatientFormDefaultValues,
    },
  });

  const onSubmitHandler = async (values: PatientFormValues) => {
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
          title: t("loading.title"),
          description: t("loading.description"),
        },
        success: {
          title: t("success.title"),
          description: t("success.description"),
        },
        error: () => ({
          title: t("error.title"),
          description: t("error.description"),
        }),
      },
    );
  };
  return { isPending, form, onSubmitHandler };
};

export default useRegisterForm;
