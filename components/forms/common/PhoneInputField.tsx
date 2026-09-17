"use client";

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
  return (
    <PhoneInput
      defaultCountry="US"
      international
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-phone"
    />
  );
};

export default PhoneInputField;
