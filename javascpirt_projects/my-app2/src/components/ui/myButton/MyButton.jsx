import React from "react";
//выцепляем children а все остальные пропсы как есть
const MyButton = ({ children, ...props }) => {
  return (
    //все пропсы которые мы будем передавать в май батн будут прилетать в этот батн ниже
    <button {...props}>
      <div>{children}</div>
    </button>
  );
};

export default MyButton;
