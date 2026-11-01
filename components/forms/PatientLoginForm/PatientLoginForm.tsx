"use client";

// Next Intl:
import { useTranslations } from "next-intl";

// Hooks:
import usePatientLoginForm from "./usePatientLoginForm";

// Components:
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";

// Types:
import { InputFieldType } from "@/types/form.types";

const PatientLoginForm = () => {
  const t = useTranslations("Auth.login");

  const { isPending, onSubmitHandler, handleSubmit, control } =
    usePatientLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <h1 className="header mb-2 mt-10">{t("greeting")}</h1>
        <p className="text-soft">{t("subtitle")}</p>
      </div>

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        type="email"
        name="email"
        label={t("fields.email.label")}
        placeholder={t("fields.email.placeholder")}
        iconSrc="/assets/icons/email.svg"
      />

      <InputField
        control={control}
        fieldType={InputFieldType.INPUT}
        type="password"
        name="password"
        label={t("fields.password.label")}
        placeholder={t("fields.password.placeholder")}
        iconSrc="/assets/icons/password.svg"
      />

      <SubmitButton isLoading={isPending}>{t("submit")}</SubmitButton>
    </form>
  );
};

export default PatientLoginForm;
