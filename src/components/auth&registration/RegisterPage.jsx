

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../common/AuthLayout";
import InputField from "../common/InputField";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <AuthLayout
      title="Register To FASCO"
      image="https://pikaso.cdnpk.net/private/production/2013384533/render.jpg?token=exp=1775001600~hmac=09a5464286067a670d2f78c9ab18efea882f2e3e5760a0305be4616ab3da0a71"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            className="w-full bg-white text-blue-800 border border-blue-500 rounded-lg py-2 font-semibold hover:bg-black hover:text-white"
          >
            Sign Up
          </button>
          <Link
            to="/"
            className="w-full text-center bg-white text-blue-800 border border-blue-500 rounded-lg py-2 font-semibold hover:bg-black hover:text-white"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
