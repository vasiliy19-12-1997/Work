import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoForm = () => {
  return (
    <div>
      <MyInput />
      <MyButton value="Create"></MyButton>
    </div>
  );
};

export default TodoForm;
