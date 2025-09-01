import Logo from "./Logo";

export default function AuthLayout({ children, title, image }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-10 flex flex-col justify-center">
          <Logo />
          {title && (
            <p className="text-black-500 font-bold text-center text-xl mt-20 mb-6">
              {title}
            </p>
          )}
          {children}
          <p className="text-xs text-gray-400 mt-10 text-center">
            FASCO Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
