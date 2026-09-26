"use client";

// Hooks:
import usePatientLoginForm from "./usePatientLoginForm";

// Components:
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";

// Types
import { InputFieldType } from "@/types/form.types";

const PatientLoginForm = () => {
  const { isLoading, onSubmitHandler, handleSubmit, control } =
    usePatientLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <h1 className="header mb-2 mt-10">Hello there 👋🏻</h1>
        <p className="text-dark-700">Schedule your first appointment</p>
      </div>

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
      />

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        iconSrc="/assets/icons/password.svg"
        iconAlt="password"
      />

      <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
  );
};

export default PatientLoginForm;
