
export default function InputField({ id, type, placeholder, value, onChange, icon: Icon, labelText }) {
  const baseClasses = "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none";

  return (
    <div className="relative mb-4">
     
      {labelText && (
        <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-1">
          {labelText}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${Icon ? "pl-12" : ""}`}
        />
      </div>
    </div>
  );
}