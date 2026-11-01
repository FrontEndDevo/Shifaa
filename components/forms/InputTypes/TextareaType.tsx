// Shadcn UI:
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Types:
import { TextareaTypeProps } from "@/types/form.types";

const TextareaType = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  disabled,
}: TextareaTypeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea"
            disabled={disabled}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className="text-red-500" />
          )}
        </Field>
      )}
    />
  );
};

export default TextareaType;
