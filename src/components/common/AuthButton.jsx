// src/common/AuthButton.jsx
import { Link } from "react-router-dom";

// ღილაკის ზოგადი კლასები
const baseButtonClasses = "w-full text-center rounded-lg py-2 font-semibold transition-colors duration-300";
const buttonHoverClasses = "hover:bg-black hover:text-white";

// Submit ტიპის ღილაკი
export const PrimaryButton = ({ children }) => (
  <button
    type="submit"
    className={`${baseButtonClasses} bg-white text-blue-800 border border-blue-500 ${buttonHoverClasses}`}
  >
    {children}
  </button>
);

// Link ტიპის ღილაკი
export const LinkButton = ({ to, children }) => (
  <Link
    to={to}
    className={`${baseButtonClasses} bg-white text-blue-800 border border-blue-500 ${buttonHoverClasses}`}
  >
    {children}
  </Link>
);