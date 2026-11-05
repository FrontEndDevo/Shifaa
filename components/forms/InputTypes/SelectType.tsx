// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Shadcn UI:
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types:
import { SelectTypeProps } from "@/types/form.types";

const SelectType = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  items,
  children,
}: SelectTypeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Select
            onValueChange={field.onChange}
            value={field.value}
            items={items}
          >
            <div>
              <SelectTrigger
                aria-invalid={fieldState.invalid}
                className="shad-select-trigger"
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </div>
            <SelectContent className="shad-select-content">
              {children}
            </SelectContent>
          </Select>

          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className="text-red-500" />
          )}
        </Field>
      )}
    />
  );
};

export default SelectType;
