import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoItem = (props) => {
  return (
    <div>
      <div>
        <strong>{props.todos.title}</strong>
        <div></div>
      </div>

      <MyButton />
    </div>
  );
};

export default TodoItem;
