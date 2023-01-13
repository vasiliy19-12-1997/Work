import React from "react";
import s from "./MyInput.module.scss";
const MyInput = (props) => {
  return <input className={s.MyInput} {...props}></input>;
};

export default MyInput;
