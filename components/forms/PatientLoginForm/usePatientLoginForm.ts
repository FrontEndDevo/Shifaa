// React Hooks:
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/validation/schema/LoginFormSchema";

// API actions::
import { userLogin } from "@/lib/actions/patient.actions";

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
      const user = await userLogin(data);

      console.log(user);

      // if (user) {
      //   router.replace(`/patients/${user.$id}/register`);
      // }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSubmitHandler, handleSubmit, control };
};

export default usePatientLoginForm;
