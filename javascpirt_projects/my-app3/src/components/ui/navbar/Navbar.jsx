import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={s.Navbar}>
      <div className={s.NavbarLinks}>
        <Link to="/about">About site</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </div>
  );
};

export default Navbar;
