// Shadcn UI:
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field";

// Validation:
import { Controller, FieldValues } from "react-hook-form";

// Types:
import { SkeletonTypeProps } from "@/types/form.types";

const SkeletonType = <T extends FieldValues>({
  name,
  label,
  control,
  renderSkeleton,
}: SkeletonTypeProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
          <Label>{label}</Label>

          {renderSkeleton ? renderSkeleton(field) : null}

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

export default SkeletonType;
