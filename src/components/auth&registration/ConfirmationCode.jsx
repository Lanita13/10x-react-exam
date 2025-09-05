// src/pages/ConfirmationCode.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../common/AuthLayout";
import InputField from "../common/InputField";
import { PrimaryButton } from "../common/AuthButton";

export default function ConfirmationCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // აქ უნდა იყოს API-ით კოდის ვალიდაციის ლოგიკა
    navigate("/submit");
  };

  return (
    <AuthLayout
      title="Enter Confirmation Code"
      image="https://pikaso.cdnpk.net/private/production/1963245266/render.jpeg?token=exp=1775001600~hmac=07078b7cef2be8d9b52ff170fd9700bf3693c271718c4ba7e8398c3359662095"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <PrimaryButton>Verify Code</PrimaryButton>
      </form>
    </AuthLayout>
  );
}