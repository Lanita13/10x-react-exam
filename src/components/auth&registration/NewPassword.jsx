import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../common/AuthLayout";
import InputField from "../common/InputField";

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

        <button
          type="submit"
          className="w-full bg-white text-blue-800 border border-blue-500 rounded-lg py-2 font-semibold hover:bg-black hover:text-white"
        >
          Save Password
        </button>
      </form>
    </AuthLayout>
  );
}




