// Next Components:
import Image from "next/image";

// Next Intl:
import { useLocale, useTranslations } from "next-intl";
import { ar } from "date-fns/locale/ar";

// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Shadcn UI:
import { Field, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

// Types:
import type { DatePickerTypeProps } from "@/types/form.types";

// Date Picker:
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ar", ar);

const DatePickerType = <T extends FieldValues>({
  name,
  label,
  control,
  dateFormat,
  showTimeSelect,
}: DatePickerTypeProps<T>) => {
  const t = useTranslations("DatePicker");
  const locale = useLocale();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <Label className="mb-2">{label}</Label>
          <div className="flex h-fit items-center rounded-md border border-line bg-card">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt=""
              className="ms-2"
            />
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              locale={locale}
              showTimeSelect={showTimeSelect ?? false}
              timeCaption={t("time")}
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
              popperPlacement={locale === "ar" ? "bottom-end" : "bottom-start"}
            />
          </div>

          {fieldState.invalid && (
            <FieldError
              errors={[fieldState.error]}
              className="mt-1 text-xs font-medium text-red-500"
            />
          )}
        </Field>
      )}
    />
  );
};

export default DatePickerType;
