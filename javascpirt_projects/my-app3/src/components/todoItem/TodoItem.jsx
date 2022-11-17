import React, { useState } from "react";
import MyButton from "../ui/myButton/MyButton";
import s from "./TodoItem.module.scss";
import MyInput from "./../ui/myInput/MyInput";
const TodoItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className={s.TodoItem}>
      <div className={s.TodoItemText}>
        <strong>
          {props.number}.{props.todo.title}
        </strong>
        <div>{props.todo.body}</div>
      </div>

      <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
    </div>
  );
};

export default TodoItem;
