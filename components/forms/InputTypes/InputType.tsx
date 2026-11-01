// Next Components:
import Image from "next/image";

// Shadcn UI:
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Types:
import { InputTypeProps } from "@/types/form.types";

const InputType = <T extends FieldValues>({
  name,
  label,
  placeholder,
  type,
  control,
  iconAlt,
  iconSrc,
}: InputTypeProps<T>) => {
  return (
    <Field className="flex flex-col gap-1.5 w-full my-4">
      {label && (
        <FieldLabel className="text-sm font-bold text-soft dark:text-gray-300">
          {label}
        </FieldLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-1">
            <div
              className={`flex items-center h-11 w-full rounded-md border bg-card px-3 transition-colors ${
                fieldState.invalid
                  ? "border-red-500 focus-within:border-red-500"
                  : "border-line focus-within:border-primary-500"
              }`}
            >
              {iconSrc && (
                <Image
                  src={iconSrc}
                  alt={iconAlt || "icon"}
                  width={24}
                  height={24}
                  className="mr-2 flex-shrink-0"
                />
              )}

              <Input
                {...field}
                type={type}
                value={field.value ?? ""}
                aria-invalid={fieldState.invalid}
                placeholder={placeholder}
                autoComplete="off"
                className="w-full border-0 focus:border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none text-main placeholder:text-faint"
              />
            </div>

            {fieldState.invalid && (
              <FieldError
                errors={[fieldState.error]}
                className="text-xs font-medium text-red-500 mt-1"
              />
            )}
          </div>
        )}
      />
    </Field>
  );
};

export default InputType;
