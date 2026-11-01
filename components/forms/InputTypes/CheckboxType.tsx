// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Shadcn UI:
import { FieldError } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

// Types:
import { CheckboxTypeProps } from "@/types/form.types";

const CheckboxType = <T extends FieldValues>({
  name,
  label,
  control,
}: CheckboxTypeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div>
          <div className="flex items-center gap-4">
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={name} className="checkbox-label">
              {label}
            </label>
          </div>
          {fieldState.invalid && (
            <FieldError
              errors={[fieldState.error]}
              className="text-xs font-medium text-red-500 mt-2"
            />
          )}
        </div>
      )}
    />
  );
};

export default CheckboxType;
