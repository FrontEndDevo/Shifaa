"use client";

// Next Intl:
import { useLocale } from "next-intl";
import en from "react-phone-number-input/locale/en.json";
import ar from "react-phone-number-input/locale/ar.json";

// React Phone Number Library:
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface IPhoneInputFieldProps {
  placeholder?: string;
  value?: string;
  onChange: (value?: string) => void;
}

const PhoneInputField = ({
  placeholder,
  value,
  onChange,
}: IPhoneInputFieldProps) => {
  const locale = useLocale();

  return (
    <PhoneInput
      defaultCountry="US"
      international
      labels={locale === "ar" ? ar : en}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ direction: "ltr" }}
      className="input-phone"
    />
  );
};

export default PhoneInputField;
