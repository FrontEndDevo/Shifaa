"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserFormSchema } from "@/validation/schema/UserFormSchema";

import SubmitButton from "./common/SubmitButton";
import { InputFieldType } from "@/types/form.types";
import { createUser } from "@/lib/actions/patient.actions";
import { useRouter } from "next/navigation";
import InputField from "./common/InputField";

const PatientForm = () => {
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
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <h1 className="header mb-2">Hello there 👋🏻</h1>
        <p className="text-dark-700">Schedule your first appointment</p>
      </div>

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        name="name"
        label="full Name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
      />

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        name="email"
        label="Email"
        placeholder="John_Doe@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
      />

      <InputField
        control={control}
        fieldType={InputFieldType.PHONE_INPUT}
        name="phone"
        label="Phone Number"
        placeholder="Enter phone number"
      />
      <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
  );
};

export default PatientForm;
