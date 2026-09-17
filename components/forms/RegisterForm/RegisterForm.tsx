"use client";

// Next components:
import Image from "next/image";

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
import { IUser } from "@/types";

// Constants:
import { Doctors, GenderOptions, IdentificationTypes } from "@/constants/index";

const RegisterForm = ({ userInfo }: { userInfo: IUser }) => {
  const { isLoading, form, onSubmitHandler } = useRegisterForm({ userInfo });

  return (
    <form onSubmit={form.handleSubmit(onSubmitHandler)}>
      <section className="mb-12">
        <h1 className="header mb-2">Welcome again 👋🏻</h1>
        <p className="text-dark-700">Tell us more about yourself.</p>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="sub-header underline">Personal Information</h2>
        </div>

        {/* Name & Email & Phone number */}
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
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="John_Doe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
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

        {/* Address & Occupation */}
        <div className="flex flex-col gap-6 xl:flex-row my-6">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="address"
            label="Address"
            placeholder="14 street, New york, NY - 5101"
          />

          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="occupation"
            label="Occupation"
            placeholder=" Software Engineer"
          />
        </div>

        {/* Emergency Contact Name & Emergency Contact Number */}
        <div className="flex flex-col gap-6 xl:flex-row">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="emergencyContactName"
            label="Emergency contact name"
            placeholder="Guardian's name"
          />

          <InputField
            fieldType={InputFieldType.PHONE_INPUT}
            control={form.control}
            name="emergencyContactNumber"
            label="Emergency contact number"
            placeholder="(555) 123-4567"
          />
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-6 space-y-1">
          <h2 className="sub-header underline">Medical Information</h2>
        </div>

        {/* PRIMARY CARE PHYSICIAN */}
        <div>
          <InputField
            fieldType={InputFieldType.SELECT}
            control={form.control}
            name="primaryPhysician"
            label="Primary care physician"
            placeholder="Select a physician"
          >
            {Doctors.map((doctor, i) => (
              <SelectItem key={doctor.name + i} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2 w-full rounded-l-xl rounded-r-sm transition duration-100 hover:bg-dark-200">
                  <Image
                    src={doctor.image}
                    width={32}
                    height={32}
                    alt="doctor"
                    className="rounded-full border border-dark-500"
                  />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </InputField>
        </div>

        {/* INSURANCE & POLICY NUMBER */}
        <div className="flex flex-col gap-6 my-6 xl:flex-row">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="insuranceProvider"
            label="Insurance provider"
            placeholder="BlueCross BlueShield"
          />

          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="insurancePolicyNumber"
            label="Insurance policy number"
            placeholder="ABC123456789"
          />
        </div>

        {/* ALLERGY & CURRENT MEDICATIONS */}
        <div className="flex flex-col gap-6 my-6 xl:flex-row">
          <InputField
            fieldType={InputFieldType.TEXTAREA}
            control={form.control}
            name="allergies"
            label="Allergies (optional)"
            placeholder="Peanuts, Penicillin, Pollen"
          />

          <InputField
            fieldType={InputFieldType.TEXTAREA}
            control={form.control}
            name="currentMedication"
            label="Current medications (optional)"
            placeholder="Ibuprofen 200mg, Levothyroxine 50mcg"
          />
        </div>

        {/* FAMILY MEDICATION & PAST MEDICATIONS */}
        <div className="flex flex-col gap-6 my-6 xl:flex-row">
          <InputField
            fieldType={InputFieldType.TEXTAREA}
            control={form.control}
            name="familyMedicalHistory"
            label=" Family medical history (optional)"
            placeholder="Mother had brain cancer, Father has hypertension"
          />

          <InputField
            fieldType={InputFieldType.TEXTAREA}
            control={form.control}
            name="pastMedicalHistory"
            label="Past medical history (optional)"
            placeholder="Appendectomy in 2015, Asthma diagnosis in childhood"
          />
        </div>
      </section>

      {/* Identification and Verfication */}
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header underline">
            Identification and Verfication
          </h2>
        </div>

        <div>
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
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            fieldType={InputFieldType.INPUT}
            control={form.control}
            name="identificationNumber"
            label="Identification Number"
            placeholder="123456789"
          />

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
        <div className="mb-2 space-y-1">
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
