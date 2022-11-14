import React from "react";
import s from "./MyButton.module.scss";
const MyButton = ({ children }) => {
  return (
    <button className={s.MyButton}>
      <div>{children}</div>
    </button>
  );
};

export default MyButton;
