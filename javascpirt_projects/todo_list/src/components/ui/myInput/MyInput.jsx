import React from "react";
import s from "./MyInput.module.scss";
const MyInput = (props) => {
  return (
    <div className={s.MyInput}>
      <input className={s.MyInputInput}></input>
    </div>
  );
};

export default MyInput;
