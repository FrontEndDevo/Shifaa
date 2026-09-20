"use client";

// Next components:
import Image from "next/image";

// Shadcn UI:
import { SelectItem } from "@/components/ui/select";

// Constants:
import { Doctors } from "@/constants";

// Components:
import SubmitButton from "../common/SubmitButton";
import InputField from "../common/InputField";

// Hooks:
import useAppointmentForm from "./useAppointmentForm";

// Types:
import { TAppointmentFormProps } from "./appointment.types";
import { InputFieldType } from "@/types/form.types";

import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = ({
  userId,
  patientId,
  type = "create",
  appointment,
  setOpen,
}: TAppointmentFormProps) => {
  const { isLoading, buttonLabel, onSubmit, form } = useAppointmentForm({
    userId,
    patientId,
    appointment,
    type,
    setOpen,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
      {type === "create" && (
        <section className="my-12 space-y-4">
          <h1 className="header">New Appointment</h1>
          <p className="text-dark-700">
            Request a new appointment in 10 seconds.
          </p>
        </section>
      )}

      {type !== "cancel" && (
        <>
          <InputField
            fieldType={InputFieldType.SELECT}
            control={form.control}
            name="primaryPhysician"
            label="Doctor"
            placeholder="Select a doctor"
          >
            {Doctors.map((doctor, i) => (
              <SelectItem key={doctor.name + i} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2">
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

          <InputField
            fieldType={InputFieldType.DATE_PICKER}
            control={form.control}
            name="schedule"
            label="Expected appointment date"
            showTimeSelect
            dateFormat="MM/dd/yyyy  -  h:mm aa"
          />

          <div
            className={`flex flex-col gap-6 ${type === "create" && "xl:flex-row"}`}
          >
            <InputField
              fieldType={InputFieldType.TEXTAREA}
              control={form.control}
              name="reason"
              label="Appointment reason"
              placeholder="Annual montly check-up"
              disabled={type === "schedule"}
            />

            <InputField
              fieldType={InputFieldType.TEXTAREA}
              control={form.control}
              name="note"
              label="Comments/notes"
              placeholder="Prefer afternoon appointments, if possible"
              disabled={type === "schedule"}
            />
          </div>
        </>
      )}

      {type === "cancel" && (
        <InputField
          fieldType={InputFieldType.TEXTAREA}
          control={form.control}
          name="cancellationReason"
          label="Reason for cancellation"
          placeholder="Urgent meeting came up"
        />
      )}

      <SubmitButton
        isLoading={isLoading}
        className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
      >
        {buttonLabel}
      </SubmitButton>
    </form>
  );
};
