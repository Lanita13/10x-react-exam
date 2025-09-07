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

    // სავალდებულო ველის ვალიდაცია
    if (required && !trimmedVal) {
      errorMsg = "ველი სავალდებულოა";
    }

    // Email ვალიდაცია
    if (!errorMsg && validationType === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (trimmedVal && !emailRegex.test(trimmedVal)) {
        errorMsg = "შეიყვანეთ სწორი ელ-ფოსტა";
      }
    }

    // CVC ვალიდაცია
    if (!errorMsg && validationType === "cvc") {
      const cvcNumber = trimmedVal.replace(/\s+/g, "");
      if (!/^\d{3}$/.test(cvcNumber)) {
        errorMsg = "CVC უნდა შედგებოდეს 3 ციფრისგან";
      }
    }

    // ბარათის ნომრის ვალიდაცია
    if (!errorMsg && validationType === "card") {
      const cardNumber = trimmedVal.replace(/\s+/g, "");
      if (cardNumber.length > 16) {
        errorMsg = "ბარათის ნომერი უნდა შედგებოდეს მაქსიმუმ 16 ციფრისგან";
      } else if (!/^\d+$/.test(cardNumber)) {
        errorMsg = "ბარათის ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან";
      }
    }

    // თარიღის ვალიდაცია
    if (!errorMsg && validationType === "date") {
      const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!dateRegex.test(trimmedVal)) {
        errorMsg = "შეიყვანეთ თარიღი სწორი ფორმატით (მაგ: 12/27)";
      }
    }

    // საფოსტო კოდის ვალიდაცია
    if (!errorMsg && validationType === "postalCode") {
      const postalCodeNumber = trimmedVal.replace(/\s+/g, "");
      if (!/^\d{4,6}$/.test(postalCodeNumber)) {
        errorMsg = "საფოსტო კოდი უნდა შედგებოდეს 4-დან 6-მდე ციფრისგან";
      }
    }

    // მისამართის ვალიდაცია (ასოები და ციფრები)
    if (!errorMsg && validationType === "address") {
      if (!/^[a-zA-Z0-9\s]+$/.test(trimmedVal)) {
        errorMsg = "მისამართი უნდა შეიცავდეს მხოლოდ ასოებსა და ციფრებს";
      } else if (trimmedVal.length < 5) {
        errorMsg = "მისამართი უნდა შედგებოდეს მინიმუმ 5 სიმბოლოსგან";
      }
    }

    setError(errorMsg);
  };

  const handleChange = (e) => {
    let val = e.target.value;

    // სიმბოლოების შეზღუდვა
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
          className={`${baseClasses} ${Icon ? "pl-12" : ""} ${
            error ? "border-red-500 focus:ring-red-500" : ""
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}