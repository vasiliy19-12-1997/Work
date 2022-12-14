import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";
import s from "./TodoForm.module.scss";
const TodoForm = () => {
  return (
    <div className={s.TodoForm}>
      <MyInput />
      <MyButton value="Create"></MyButton>
    </div>
  );
};

export default TodoForm;
