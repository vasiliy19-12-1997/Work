import React from "react";
import s from "./MyInput.module.scss";
const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={s.input} {...props} />;
});

export default MyInput;
