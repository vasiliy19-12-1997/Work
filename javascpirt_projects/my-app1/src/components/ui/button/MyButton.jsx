import React from "react";
import s from "./MyButton.module.scss";
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={s.myBtn}>
      <div>{children}</div>
    </button>
  );
};

export default MyButton;
