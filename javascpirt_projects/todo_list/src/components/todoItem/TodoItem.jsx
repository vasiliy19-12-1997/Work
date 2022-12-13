import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoItem = (props) => {
  return (
    <div>
      <div>{props.todo.title}</div>
      <div></div>
    </div>
  );
};

export default TodoItem;
