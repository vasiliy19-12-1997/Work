import React, { useContext } from "react";
import MyButton from "../ui/myButton/MyButton";
import MyInput from "../ui/myInput/MyInput";
import { AuthContext } from "./../../context/Context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter name" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
