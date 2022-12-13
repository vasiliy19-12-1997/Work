import React from "react";
import s from "./MyButton.module.scss";
const MyButton = (props) => {
  return (
    <div className={s.MyButton}>
      <button className={s.MyButtonButton}>{props.value}</button>
    </div>
  );
};

export default MyButton;
