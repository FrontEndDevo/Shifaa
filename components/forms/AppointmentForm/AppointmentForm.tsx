"use client";

// Next Components:
import Image from "next/image";

// Next Intl:
import { useTranslations } from "next-intl";

// Shadcn UI:
import { cn } from "@/lib/utils";
import { SelectItem } from "@/components/ui/select";

// Custom Hooks:
import useLocalizedDoctors from "@/hooks/useLocalizedDoctors";
import useAppointmentForm from "./useAppointmentForm";

// Components:
import SubmitButton from "../common/SubmitButton";
import InputField from "../common/InputField";

// Types:
import { InputFieldType } from "@/types/form.types";
import { TAppointmentFormProps } from "@/types/appointment.types";

// Datepicker Styles:
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = ({
  userId,
  patientId,
  type,
  appointment,
  setOpen,
}: TAppointmentFormProps) => {
  const t = useTranslations("Appointment.form");
  const doctors = useLocalizedDoctors();

  const { isLoading, hasError, buttonLabel, onSubmit, form } =
    useAppointmentForm({
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
          <h1 className="header">{t("newTitle")}</h1>
          <p className="text-soft">{t("newSubtitle")}</p>
        </section>
      )}

      {(type === "create" || type === "schedule") && (
        <>
          <InputField
            fieldType={InputFieldType.SELECT}
            control={form.control}
            name="primaryPhysician"
            label={t("doctor.label")}
            placeholder={t("doctor.placeholder")}
          >
            {doctors.map((doctor) => (
              <SelectItem key={doctor.doctorId} value={doctor.doctorId}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image
                    src={doctor.image}
                    width={32}
                    height={32}
                    alt=""
                    className="rounded-full border border-line"
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
            label={t("schedule")}
            showTimeSelect
            dateFormat="MM/dd/yyyy  -  h:mm aa"
          />

          <div
            className={cn(
              "flex flex-col gap-6",
              type === "create" && "xl:flex-row",
            )}
          >
            <InputField
              fieldType={InputFieldType.TEXTAREA}
              control={form.control}
              name="reason"
              label={t("reason.label")}
              placeholder={t("reason.placeholder")}
              disabled={type === "schedule"}
            />

            <InputField
              fieldType={InputFieldType.TEXTAREA}
              control={form.control}
              name="note"
              label={t("note.label")}
              placeholder={t("note.placeholder")}
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
          label={t("cancellationReason.label")}
          placeholder={t("cancellationReason.placeholder")}
        />
      )}

      {type === "delete" && <p>{t("deleteConfirm")}</p>}

      {hasError && <p className="text-sm text-red-400">{t("error")}</p>}

      <SubmitButton
        isLoading={isLoading}
        className={cn(
          "w-full",
          type === "create" || type === "schedule"
            ? "shad-primary-btn"
            : "shad-danger-btn",
        )}
      >
        {buttonLabel}
      </SubmitButton>
    </form>
  );
};
