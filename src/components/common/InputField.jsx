import { useState } from "react";

export default function InputField({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  labelText,
  validationType,
  required = true,
  compareWith = "",
}) {
  const [error, setError] = useState("");

  const baseClasses =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none transition-colors duration-200";

  const validate = (val) => {
    let errorMsg = "";
    const trimmedVal = val.trim();

    // Required field validation
    if (required && !trimmedVal) {
      errorMsg = "The field is required";
    }

    // Email validation
    if (!errorMsg && validationType === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (trimmedVal && !emailRegex.test(trimmedVal)) {
        errorMsg = "Please enter a valid email address.";
      }
    }

    // CVC validation
    if (!errorMsg && validationType === "cvc") {
      const cvcNumber = trimmedVal.replace(/\s+/g, "");
      if (!/^\d{3}$/.test(cvcNumber)) {
        errorMsg = "CVC must consist of 3 digits.";
      }
    }

    // Card number validation
    if (!errorMsg && validationType === "card") {
      const cardNumber = trimmedVal.replace(/\s+/g, "");
      if (cardNumber.length > 16) {
        errorMsg = "The card number must consist of a maximum of 16 digits";
      } else if (!/^\d+$/.test(cardNumber)) {
        errorMsg = "The card number must consist of numbers only";
      }
    }

    // Date validation
    if (!errorMsg && validationType === "date") {
      const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!dateRegex.test(trimmedVal)) {
        errorMsg = "Enter the date in the correct format (e.g. 12/27)";
      }
    }

    // Postal code validation
    if (!errorMsg && validationType === "postalCode") {
      const postalCodeNumber = trimmedVal.replace(/\s+/g, "");
      if (!/^\d{4,6}$/.test(postalCodeNumber)) {
        errorMsg = "Postal code must consist of 4 to 6 digits";
      }
    }

    // Address validation (letters and numbers)
    if (!errorMsg && validationType === "address") {
      if (!/^[a-zA-Z0-9\s]+$/.test(trimmedVal)) {
        errorMsg = "Address must contain only letters and numbers";
      } else if (trimmedVal.length < 5) {
        errorMsg = "Address must be at least 5 characters long";
      }
    }

    setError(errorMsg);
  };

  const handleChange = (e) => {
    let val = e.target.value;


    if (validationType === "cvc") {
      val = val.replace(/\D/g, "").slice(0, 3);
    }
    if (validationType === "card") {
      val = val.replace(/\D/g, "").slice(0, 16);
    }
    if (validationType === "postalCode") {
      val = val.replace(/\D/g, "").slice(0, 6);
    }
    if (validationType === "date") {
      val = val.replace(/\D/g, "");
      if (val.length > 2) {
        val = val.slice(0, 2) + "/" + val.slice(2, 4);
      }
    }
    if (validationType === "address") {
      val = val.replace(/[^a-zA-Z0-9\s]/g, "");
    }

    onChange({
      target: {
        name,
        value: val,
        type: e.target.type,
        checked: e.target.checked,
      },
    });
    validate(val);
  };

  return (
    <div className="relative mb-4">
      {labelText && (
        <label
          htmlFor={id || name}
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          {labelText}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        )}
        <input
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={() => validate(value)}
          className={`${baseClasses} ${Icon ? "pl-12" : ""} ${error ? "border-red-500 focus:ring-red-500" : ""
            }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}