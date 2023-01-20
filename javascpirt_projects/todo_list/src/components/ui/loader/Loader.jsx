import React from "react";
import s from "./Loader.module.scss";
const Loader = ({ children }) => {
  return <div className={s.Loader}>{children}</div>;
};

export default Loader;
