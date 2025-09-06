import { Link } from "react-router-dom";

const baseButtonClasses = "w-full text-center rounded-lg py-2 font-semibold transition-colors duration-300";
const buttonHoverClasses = "hover:bg-black hover:text-white";

export const PrimaryButton = ({ children }) => (
  <button type="submit" className={`${baseButtonClasses} bg-white text-blue-800 border border-blue-500 ${buttonHoverClasses}`}>
    {children}
  </button>
);

export const TextLink = ({ to, children }) => (
  <Link to={to} className="text-blue-500 font-medium hover:underline transition-colors duration-300">
    {children}
  </Link>
);
