// Next Components:
import Image from "next/image";

// Shadcn UI:
import { Label } from "@/components/ui/label";

// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Types:
import { DatePickerTypeProps } from "@/types/form.types";

// Date Picker:
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerType = <T extends FieldValues>({
  name,
  label,
  control,
  dateFormat,
  showTimeSelect,
}: DatePickerTypeProps<T>) => {
  return (
    <div>
      <Label className="mb-2">{label}</Label>
      <div className="flex h-fit items-center rounded-md border border-line bg-card">
        <Image
          src="/assets/icons/calendar.svg"
          height={24}
          width={24}
          alt="user"
          className="ml-2"
        />
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          )}
        />
      </div>
    </div>
  );
};

export default DatePickerType;
