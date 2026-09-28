// Next Hooks:
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/validation/schema/LoginFormSchema";

// API Actions Hooks:
import { useCheckOrRegister } from "@/hooks/usePatient";

// Shadcn UI:
import { toast } from "@/components/ui/toast";

const usePatientLoginForm = () => {
  const { mutateAsync: loginPatientMutation, isPending } = useCheckOrRegister();

  const router = useRouter();

  const { handleSubmit, control } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (data: z.infer<typeof LoginFormSchema>) => {
    toast.promise(
      loginPatientMutation(data).then((getUser) => {
        const isNew = Boolean(getUser?.isNewUser);

        if (isNew) {
          // Complete patient information:
          router.replace(`/patients/${getUser.user.$id}/register`);
          return {
            title: "Sign Up Successfully.",
            description: "Account created! Please complete your profile.",
          };
        } else {
          // Go direct to set an appointment:
          router.replace(`/patients/${getUser.user.$id}/new-appointment`);
          return {
            title: "Login Successfully.",
            description: "Welcome back!",
          };
        }
      }),
      {
        loading: {
          title: "Authenticating...",
          description: "Please wait while we process your account...",
        },
        success: (message) => message,
        error: {
          title: "Authenticating Proccess Failed",
          description: "Something went wrong, Please try again.",
        },
      },
    );
  };

  return { isPending, onSubmitHandler, handleSubmit, control };
};

export default usePatientLoginForm;
