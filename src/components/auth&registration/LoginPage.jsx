import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../common/AuthLayout";
import InputField from "../common/InputField";

import { PrimaryButton, } from "../common/AuthButton";



export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <AuthLayout
      title="Sign In To FASCO"
      image="https://pikaso.cdnpk.net/private/production/1963245266/render.jpeg?token=exp=1775001600~hmac=07078b7cef2be8d9b52ff170fd9700bf3693c271718c4ba7e8398c3359662095"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <PrimaryButton>Sign in</PrimaryButton>
          <PrimaryButton to="/register">Register Now</PrimaryButton>
        </div>
      </form>

      <div className="flex justify-end items-center mt-6 text-sm">
        <Link to="/forgot-password" className="text-blue-700 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </AuthLayout>
  );
}