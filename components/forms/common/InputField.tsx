"use client";

import { IFormField, InputFieldType } from "@/types/form.types";
import Image from "next/image";
import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PhoneInputField from "./PhoneInputField";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const InputField = <TFieldValues extends FieldValues>({
  control,
  fieldType,
  name,
  label,
  placeholder,
  iconSrc,
  iconAlt,
  disabled,
  dateFormat,
  showTimeSelect,
  children,
  renderSkeleton,
}: IFormField<TFieldValues>) => {
  switch (fieldType) {
    case InputFieldType.INPUT:
      return (
        <Field className="flex flex-col gap-1.5 w-full">
          {label && (
            <FieldLabel className="text-sm font-bold text-dark-700 dark:text-gray-300">
              {label}
            </FieldLabel>
          )}
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1">
                <div
                  className={`flex items-center h-11 w-full rounded-md border bg-dark-400 px-3 transition-colors ${
                    fieldState.invalid
                      ? "border-red-500 focus-within:border-red-500"
                      : "border-dark-500 focus-within:border-primary-500"
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
                    value={field.value ?? ""}
                    aria-invalid={fieldState.invalid}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="w-full border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none text-white placeholder:text-dark-600"
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

    case InputFieldType.TEXTAREA:
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
                <FieldError
                  errors={[fieldState.error]}
                  className="text-red-500"
                />
              )}
            </Field>
          )}
        />
      );

    case InputFieldType.PHONE_INPUT:
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

    case InputFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
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
      );

    case InputFieldType.SELECT:
      return (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>{label}</FieldLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <div>
                  <SelectTrigger className="shad-select-trigger">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </div>
                <SelectContent className="shad-select-content">
                  {children}
                </SelectContent>
              </Select>

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className="text-red-500"
                />
              )}
            </Field>
          )}
        />
      );

    case InputFieldType.SKELETON:
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

    case InputFieldType.CHECKBOX:
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

    default:
      break;
  }
};

export default InputField;
