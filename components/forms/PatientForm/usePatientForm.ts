// React Hooks:
import { useState } from "react";
import { useRouter } from "next/navigation";

// Validation:
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserFormSchema } from "@/validation/schema/UserFormSchema";

// API:
import { createUser } from "@/lib/actions/patient.actions";

const usePatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, control } = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmitHandler = async (data: z.infer<typeof UserFormSchema>) => {
    setIsLoading(true);
    try {
      const user = await createUser(data);

      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSubmitHandler, handleSubmit, control };
};

export default usePatientForm;
