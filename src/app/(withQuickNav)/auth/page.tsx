import "./auth.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const page = () => {
  return (
    <div className="auth container">
      <Login />
      <Signup />
    </div>
  );
};

export default page;
