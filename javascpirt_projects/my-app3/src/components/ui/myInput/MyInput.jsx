import React from "react";
import s from "./MyInput.module.scss";
const MyInput = (props) => {
  return (
    <div className={s.MyInput}>
      <input className={s.MyInputInp} {...props} type="text" />
    </div>
  );
};

export default MyInput;
