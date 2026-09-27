"use client";

// Hooks:
import useRegisterForm from "./useRegisterForm";

// Components:
import InputField from "../common/InputField";
import SubmitButton from "../common/SubmitButton";
import FileUploader from "../common/FileUploader";

// Shadcn UI:
import { SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../../ui/label";

// Types:
import { InputFieldType } from "@/types/form.types";

// Constants:
import { GenderOptions, IdentificationTypes } from "@/constants/index";

const RegisterForm = ({ userId }: { userId: string }) => {
  const { isLoading, form, onSubmitHandler } = useRegisterForm({ userId });

  return (
    <form onSubmit={form.handleSubmit(onSubmitHandler)}>
      <section className="my-12">
        <h1 className="header mb-2">Welcome again 👋🏻</h1>
        <p className="text-dark-700">Tell us more about yourself.</p>
      </section>

      {/* Name & Phone number */}
      <section>
        <div className="mb-2">
          <h2 className="sub-header underline">Personal Information</h2>
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="name"
            label="full Name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <InputField
            fieldType={InputFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone Number"
            placeholder="Enter phone number"
          />
        </div>

        {/* BirthDate & Gender */}
        <div className="flex flex-col gap-6 xl:flex-row my-8">
          <InputField
            fieldType={InputFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Date of birth"
          />

          <InputField
            fieldType={InputFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
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
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
        </div>
      </section>

      {/* Identification and Verfication */}
      <section>
        <div className="mb-4 space-y-1">
          <h2 className="sub-header underline">
            Identification and Verfication
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            fieldType={InputFieldType.SELECT}
            control={form.control}
            name="identificationType"
            label="Identification Type"
            placeholder="Select identification type"
          >
            {IdentificationTypes.map((type, i) => (
              <SelectItem
                className="hover:bg-dark-200 transition duration-100 cursor-pointer"
                key={type + i}
                value={type}
              >
                {type}
              </SelectItem>
            ))}
          </InputField>

          <InputField
            fieldType={InputFieldType.SKELETON}
            control={form.control}
            name="identificationDocument"
            label="Scanned Copy of Identification Document"
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
      <section className="space-y-6 my-10">
        <div>
          <h2 className="sub-header underline">Consent and Privacy</h2>
        </div>

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="treatmentConsent"
          label="I consent to receive treatment for my health condition."
        />

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="disclosureConsent"
          label="I consent to the use and disclosure of my health
            information for treatment purposes."
        />

        <InputField
          fieldType={InputFieldType.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label="I acknowledge that I have reviewed and agree to the
            privacy policy"
        />
      </section>

      <SubmitButton isLoading={isLoading}>Register</SubmitButton>
    </form>
  );
};

export default RegisterForm;
