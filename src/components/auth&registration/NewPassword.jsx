// src/pages/NewPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../auth&registration/AuthLayout";
import InputField from "../common/InputField";
import { PrimaryButton } from "../common/AuthButton";

export default function NewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout
      title="Set New Password"
      image="https://pikaso.cdnpk.net/private/production/1963245266/render.jpeg?token=exp=1775001600~hmac=07078b7cef2be8d9b52ff170fd9700bf3693c271718c4ba7e8398c3359662095"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <PrimaryButton>Save Password</PrimaryButton>
      </form>
    </AuthLayout>
  );
}