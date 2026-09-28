// Next Hooks:
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/validation/schema/LoginFormSchema";

// API Actions Hooks:
import { useCheckOrRegister } from "@/hooks/usePatient";

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
    try {
      const getUser = await loginPatientMutation(data);

      if (getUser.isNewUser) {
        // Complete patient information:
        router.replace(`/patients/${getUser.user.$id}/register`);
      } else {
        // Go direct to set an appointment:
        router.replace(`/patients/${getUser.user.$id}/new-appointment`);
      }
    } catch (error) {
      throw error;
    }
  };

  return { isPending, onSubmitHandler, handleSubmit, control };
};

export default usePatientLoginForm;
