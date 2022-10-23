import React from "react";
import s from "./MyModal.module.scss";
const MyModal = ({ children }) => {
  return (
    <div className={[s.myModal, s.MyModal.active].join(" ")}>
      <div className={s.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
