import React, { useContext } from "react";
import MyButton from "../components/ui/myButton/MyButton";
import MyInput from "./../components/ui/myInput/MyInput";
import { AuthContext } from "./../context/Context";

const Login = ({ todos }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("Auth", "true");
  };
  return (
    <div>
      <h1>This site for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="enter login" />
        <MyInput type="password" placeholder="enter password" />
        <MyButton>Log in</MyButton>
      </form>
      {/* если авторизовался то переходим на туду  */}
    </div>
  );
};

export default Login;
