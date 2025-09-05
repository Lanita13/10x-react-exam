// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../common/AuthLayout";
import InputField from "../common/InputField";
import { PrimaryButton, LinkButton } from "../common/AuthButton";

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
          <PrimaryButton>Sign Up</PrimaryButton>
          <LinkButton to="/">Already have an account? Sign In</LinkButton>
        </div>
      </form>
    </AuthLayout>
  );
}