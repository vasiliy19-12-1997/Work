import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default MyButton;
