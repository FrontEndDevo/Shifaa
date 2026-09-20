"use client";

// Hooks:
import usePatientForm from "./usePatientForm";

// Components:
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";

// Types
import { InputFieldType } from "@/types/form.types";

const PatientForm = () => {
  const { isLoading, onSubmitHandler, handleSubmit, control } =
    usePatientForm();

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <h1 className="header mb-2 mt-10">Hello there 👋🏻</h1>
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
