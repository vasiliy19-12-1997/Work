import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../myButton/MyButton";
import { AuthContext } from "./../../../context/Context";
import s from "./Navbar.module.scss";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={s.Navbar}>
      <MyButton onClick={logout}>Log out</MyButton>
      <div className={s.NavbarLink}>
        <Link className={s.NavbarLinkL} to="/about">
          About
        </Link>
        <Link className={s.NavbarLinkL} to="/todos">
          Todos
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
