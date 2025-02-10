import LoginForm from "@/components/LoginForm";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Login() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  if (user.isUserLoggedIn) {
    navigate("/");
    return null;
  }
  return (
    <main className="min-h-screen bg-background container mx-auto px-4 py-8 flex justify-center items-center ">
      <LoginForm />
    </main>
  );
}

export default Login;
