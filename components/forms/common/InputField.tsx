"use client";

// Validation
import { FieldValues } from "react-hook-form";

// Types:
import { IFormField, InputFieldType } from "@/types/form.types";

// Input Types Components:
import InputType from "../InputTypes/InputType";
import TextareaType from "../InputTypes/TextareaType";
import PhoneType from "../InputTypes/PhoneType";
import DatePickerType from "../InputTypes/DatePickerType";
import SelectType from "../InputTypes/SelectType";
import SkeletonType from "../InputTypes/SkeletonType";
import CheckboxType from "../InputTypes/CheckboxType";

const InputField = <TFieldValues extends FieldValues>({
  control,
  fieldType,
  name,
  type,
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
        <InputType
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          control={control}
          iconAlt={iconAlt}
          iconSrc={iconSrc}
        />
      );

    case InputFieldType.TEXTAREA:
      return (
        <TextareaType
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
          disabled={disabled}
        />
      );

    case InputFieldType.PHONE_INPUT:
      return (
        <PhoneType
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
        />
      );

    case InputFieldType.DATE_PICKER:
      return (
        <DatePickerType
          name={name}
          label={label}
          control={control}
          dateFormat={dateFormat}
          showTimeSelect={showTimeSelect}
        />
      );

    case InputFieldType.SELECT:
      return (
        <SelectType
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
        >
          {children}
        </SelectType>
      );

    case InputFieldType.SKELETON:
      return (
        <SkeletonType
          name={name}
          label={label}
          control={control}
          renderSkeleton={renderSkeleton}
        />
      );

    case InputFieldType.CHECKBOX:
      return <CheckboxType name={name} label={label} control={control} />;

    default:
      break;
  }
};

export default InputField;
