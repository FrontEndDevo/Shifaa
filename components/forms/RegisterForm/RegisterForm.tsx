"use client";

// Next Intl:
import { useTranslations } from "next-intl";

// Custom Hooks:
import useRegisterForm from "./useRegisterForm";

// Components:
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";
import FileUploader from "../common/FileUploader";

// Shadcn UI:
import { SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Types:
import { InputFieldType } from "@/types/form.types";

// Constants:
import {
  GenderOptions,
  IdentificationTypes,
  IDENTIFICATION_TYPE_KEYS,
} from "@/constants/index";

const RegisterForm = ({ userId }: { userId: string }) => {
  const t = useTranslations("Auth.register");

  const tOptions = useTranslations("Options");

  const { isPending, form, onSubmitHandler } = useRegisterForm({ userId });

  return (
    <form onSubmit={form.handleSubmit(onSubmitHandler)}>
      <section className="my-12">
        <h1 className="header mb-2">{t("greeting")}</h1>
        <p className="text-soft">{t("subtitle")}</p>
      </section>

      {/* Name & Phone number */}
      <section>
        <div className="mb-2">
          <h2 className="sub-header underline">{t("sections.personal")}</h2>
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="name"
            label={t("fields.name.label")}
            placeholder={t("fields.name.placeholder")}
            iconSrc="/assets/icons/user.svg"
          />

          <InputField
            fieldType={InputFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label={t("fields.phone.label")}
            placeholder={t("fields.phone.placeholder")}
          />
        </div>

        {/* BirthDate & Gender */}
        <div className="my-8 flex flex-col gap-6 xl:flex-row">
          <InputField
            fieldType={InputFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label={t("fields.birthDate.label")}
          />

          <InputField
            fieldType={InputFieldType.SKELETON}
            control={form.control}
            name="gender"
            label={t("fields.gender.label")}
            renderSkeleton={(field) => (
              <RadioGroup
                className="flex h-12 gap-6 xl:justify-between"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {GenderOptions.map((option) => (
                  <div key={option} className="radio-group">
                    <RadioGroupItem value={option} id={option} />
                    <Label className="cursor-pointer" htmlFor={option}>
                      {tOptions(`gender.${option.toLowerCase()}`)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
        </div>
      </section>

      {/* Identification and Verification */}
      <section>
        <div className="mb-4 space-y-1">
          <h2 className="sub-header underline">
            {t("sections.identification")}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            fieldType={InputFieldType.SELECT}
            control={form.control}
            name="identificationType"
            label={t("fields.identificationType.label")}
            placeholder={t("fields.identificationType.placeholder")}
            items={IdentificationTypes.map((type) => ({
              value: type,
              label: tOptions(
                `identification.${IDENTIFICATION_TYPE_KEYS[type]}`,
              ),
            }))}
          >
            {IdentificationTypes.map((type) => (
              <SelectItem
                className="cursor-pointer transition duration-100 hover:bg-deep"
                key={type}
                value={type}
              >
                {tOptions(`identification.${IDENTIFICATION_TYPE_KEYS[type]}`)}
              </SelectItem>
            ))}
          </InputField>

          <InputField
            fieldType={InputFieldType.SKELETON}
            control={form.control}
            name="identificationDocument"
            label={t("fields.identificationDocument.label")}
            renderSkeleton={(field) => (
              <FileUploader
                files={(field.value as File[]) ?? []}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </section>

      {/* Consent and Privacy */}
      <section className="my-10 space-y-6">
        <div>
          <h2 className="sub-header underline">{t("sections.consent")}</h2>
        </div>

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="treatmentConsent"
          label={t("consent.treatment")}
        />

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="disclosureConsent"
          label={t("consent.disclosure")}
        />

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label={t("consent.privacy")}
        />
      </section>

      <SubmitButton isLoading={isPending}>{t("submit")}</SubmitButton>
    </form>
  );
};

export default RegisterForm;
