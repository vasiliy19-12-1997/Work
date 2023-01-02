import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../myButton/MyButton";
import { AuthContext } from "./../../../context/Context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <MyButton onClick={logout}>Log out</MyButton>
      <div>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </div>
  );
};

export default Navbar;
