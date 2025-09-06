// src/pages/ForgotPasswordPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../auth&registration/AuthLayout";
import InputField from "../common/InputField";
import { PrimaryButton } from "../common/AuthButton";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation-code");
  };

  return (
    <AuthLayout
      title="Forgot Password"
      image="https://pikaso.cdnpk.net/private/production/1963245266/render.jpeg?token=exp=1775001600~hmac=07078b7cef2be8d9b52ff170fd9700bf3693c271718c4ba7e8398c3359662095"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PrimaryButton>Send Confirmation Code</PrimaryButton>
      </form>
    </AuthLayout>
  );
}