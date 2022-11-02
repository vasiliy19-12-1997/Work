import React from "react";
import s from "./MyButton.module.scss";
//выцепляем children а все остальные пропсы как есть
const MyButton = ({ children, ...props }) => {
  return (
    //все пропсы которые мы будем передавать в май батн будут прилетать в этот батн ниже
    <button className={s.MyButton} {...props}>
      <div>{children}</div>
    </button>
  );
};

export default MyButton;
