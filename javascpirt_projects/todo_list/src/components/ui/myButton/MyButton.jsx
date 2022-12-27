import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}></button>
      <div>{children}</div>
    </div>
  );
};

export default MyButton;
