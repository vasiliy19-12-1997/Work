import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../myButton/MyButton";
import s from "./Navbar.module.scss";
import { AuthContext } from "./../../../context/Context";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    //посмотреть 'auth or Auth'
    localStorage.removeItem("Auth");
  };

  return (
    <div className={s.Navbar}>
      <MyButton onClick={logout}>Log out</MyButton>

      <div className={s.NavbarLinks}>
        <Link to="/about">About site</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </div>
  );
};

export default Navbar;
