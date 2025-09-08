
import Logo from "../common/Logo";

export default function AuthLayout({ children, title, image }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
       
        <div className="hidden md:block">
          <img
            src={image}
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>

 
        <div className="p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          {title && (
            <p className="text-gray-800 font-bold text-center text-2xl mt-4 mb-8">
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