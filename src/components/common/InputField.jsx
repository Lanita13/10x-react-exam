export default function InputField({ type, placeholder, value, onChange, icon: Icon }) {
  const baseClasses = "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none";
  return (
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${Icon ? "pl-12" : ""}`}
      />
    </div>
  );
}
