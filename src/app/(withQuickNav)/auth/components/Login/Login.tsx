"use client";
import Link from "next/link";
import AuthForm from "../AuthForm/AuthForm";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setCurrentUser, updateUsers } from "@/redux/slices/Auth";
import { AuthState } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface LoginData {
  identity: string;
  password: string;
  isRemembered: boolean;
}

const Login = () => {
  const inps = [
    {
      id: 1,
      type: "text",
      placeHolder: "Email or username*",
      name: "identity",
    },
    { id: 2, type: "password", placeHolder: "Password*", name: "password" },
    { id: 3, type: "checkbox", label: "Remember me", name: "isRemembered" },
  ];
  const [data, setData] = useState<LoginData>({
    identity: "",
    password: "",
    isRemembered: false,
  });
  const [authChanged, setAuthChanged] = useState(false);
  const users = useSelector((state: AuthState) => state.auth.users);
  const currentUser = useSelector((state: AuthState) => state.auth.currentUser);
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmitData = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login(data));
    setAuthChanged(true);
  };
  // handling authentication
  useEffect(() => {
    if (!authChanged) return;
    if (isAuthenticated) {
      toast.success("You SignedIn successfully!!");
      router.push("/");
    } else {
      toast.error("Try Again!!");
    }
    setAuthChanged(false);
  }, [authChanged]);
  // for initial users array
  useEffect(() => {
    dispatch(updateUsers(JSON.parse(localStorage.getItem("users") || "[]")));
  }, []);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      const user = users.find(
        (user) => user.id == parseInt(localStorage.getItem("token") || "")
      );
      dispatch(setCurrentUser(user));
    }
  }, []);
  return (
    <div className="login">
      <h2>Login</h2>
      <AuthForm<LoginData>
        inps={inps}
        onHandleSetData={setData}
        data={data}
        sendBtn="Login"
        onHandleSubmitData={handleSubmitData}
      />
      <Link href="/auth">Lost your password?</Link>
    </div>
  );
};

export default Login;
