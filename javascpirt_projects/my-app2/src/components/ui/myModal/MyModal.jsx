import React from "react";
import s from "./MyModale.module.scss";
const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [s.MyModal];

  if (visible) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(",")}>
      <div className={s.MyModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
