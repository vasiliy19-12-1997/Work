import React from "react";
import s from "./MyButton.module.scss";
const MyButton = ({ children, ...props }) => {
  return (
    <div className={s.MyButton}>
      <button className={s.MyButtonS} {...props}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
