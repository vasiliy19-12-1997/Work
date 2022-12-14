import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoItem = (props) => {
  return (
    <div>
      <div>
        <strong>{props.todo.index}</strong>
        <div>{props.todo.title}</div>
      </div>
      <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
    </div>
  );
};

export default TodoItem;
