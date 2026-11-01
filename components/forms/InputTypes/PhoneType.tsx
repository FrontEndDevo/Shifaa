import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Controller, FieldValues } from "react-hook-form";
import PhoneInputField from "../common/PhoneInputField";
import { PhoneTypeProps } from "@/types/form.types";

const PhoneType = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
}: PhoneTypeProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          <PhoneInputField
            placeholder={placeholder}
            value={field.value}
            onChange={field.onChange}
          />
          {fieldState.invalid && (
            <FieldError
              errors={[fieldState.error]}
              className="text-xs font-medium text-red-500 mt-1"
            />
          )}
        </Field>
      )}
    />
  );
};

export default PhoneType;
