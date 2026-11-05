import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

export enum InputFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export interface IFormField<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  fieldType: InputFieldType;
  name: Path<TFieldValues>;
  type?: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  items?: { value: string; label: string }[];
  renderSkeleton?: (
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>,
  ) => React.ReactNode;
}

// Input
export type InputTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "placeholder" | "type" | "control" | "iconAlt" | "iconSrc"
>;

// Textarea
export type TextareaTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "placeholder" | "control" | "disabled"
>;

// Phone
export type PhoneTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "placeholder" | "control"
>;

// Date Picker
export type DatePickerTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "control" | "dateFormat" | "showTimeSelect"
>;

// Select
export type SelectTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "placeholder" | "control" | "children" | "items"
>;

// Skeleton
export type SkeletonTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "control" | "renderSkeleton"
>;

// Checkbox
export type CheckboxTypeProps<T extends FieldValues> = Pick<
  IFormField<T>,
  "name" | "label" | "control"
>;
