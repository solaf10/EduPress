"use client";
import AuthForm from "../AuthForm/AuthForm";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { register } from "@/redux/slices/Auth";
import { AuthState } from "@/app/interfaces";
import toast from "react-hot-toast";

interface RegisterData {
  userName: string;
  mail: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const inps = [
    { id: 1, type: "email", placeHolder: "Email*", name: "mail" },
    { id: 2, type: "text", placeHolder: "Username*", name: "userName" },
    { id: 3, type: "password", placeHolder: "Password*", name: "password" },
    {
      id: 4,
      type: "password",
      placeHolder: "Confirm Password*",
      name: "confirmPassword",
    },
  ];
  const [data, setData] = useState<RegisterData>({
    userName: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const [authChanged, setAuthChanged] = useState(false);
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmitData = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register(data));
    setAuthChanged(true);
  };
  // handling authentication
  useEffect(() => {
    if (!authChanged) return;
    if (isAuthenticated) {
      toast.success("You Registered Successfully!!");
      router.push("/");
    } else {
      toast.error("Try Again!!");
    }
    setAuthChanged(false);
  }, [authChanged]);
  return (
    <div className="Register">
      <h2>Register</h2>
      <AuthForm<RegisterData>
        inps={inps}
        onHandleSetData={setData}
        data={data}
        sendBtn="Register"
        onHandleSubmitData={handleSubmitData}
      />
    </div>
  );
};

export default Register;
