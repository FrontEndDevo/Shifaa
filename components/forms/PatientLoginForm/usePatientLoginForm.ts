// Next Hooks:
import { useRouter } from "@/i18n/navigation";

// Next Intl:
import { useTranslations } from "next-intl";

// Validation:
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "@/validation/schema/LoginFormSchema";

// Validation Hooks:
import { useLoginFormSchema } from "@/hooks/useFormSchemas";

// API Actions Hooks:
import { useCheckOrRegister } from "@/hooks/usePatient";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

// React Query:
import { useQueryClient } from "@tanstack/react-query";

const usePatientLoginForm = () => {
  const t = useTranslations("Auth.login.toast");
  const { mutateAsync: loginPatientMutation, isPending } = useCheckOrRegister();

  const router = useRouter();

  const schema = useLoginFormSchema();

  const { handleSubmit, control } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const queryClient = useQueryClient();

  const onSubmitHandler = async (data: LoginFormValues) => {
    toast.promise(
      loginPatientMutation(data).then((getUser) => {
        router.refresh();

        if (getUser.isNewUser) {
          router.replace(`/auth/${getUser.user.userId}/register`);
          return {
            title: t("signUp.title"),
            description: t("signUp.description"),
          };
        } else {
          router.replace(`/`);
          return {
            title: t("signIn.title"),
            description: t("signIn.description"),
          };
        }
      }),
      {
        loading: {
          title: t("loading.title"),
          description: t("loading.description"),
        },
        success: (message) => message,
        error: {
          title: t("error.title"),
          description: t("error.description"),
        },
      },
    );

    await queryClient.invalidateQueries({ queryKey: ["patient", "me"] });
  };

  return { isPending, onSubmitHandler, handleSubmit, control };
};

export default usePatientLoginForm;
