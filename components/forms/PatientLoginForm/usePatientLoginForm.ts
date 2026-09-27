// React Hooks:
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/validation/schema/LoginFormSchema";

// API actions::
import { checkOrRegisterUser } from "@/lib/actions/patient.actions";

const usePatientLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const getUser = await checkOrRegisterUser(data);

      if (getUser.isNewUser) {
        // Complete patient information:
        router.replace(`/patients/${getUser.user.$id}/register`);
      } else {
        // Go direct to set an appointment:
        router.replace(`/patients/${getUser.user.$id}/new-appointment`);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSubmitHandler, handleSubmit, control };
};

export default usePatientLoginForm;
