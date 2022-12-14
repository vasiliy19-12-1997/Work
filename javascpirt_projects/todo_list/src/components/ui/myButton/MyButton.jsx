import React from "react";
import s from "./MyButton.module.scss";
const MyButton = ({ children, ...props }) => {
  return (
    <div className={s.MyButton}>
      <button {...props} className={s.MyButtonButton}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
