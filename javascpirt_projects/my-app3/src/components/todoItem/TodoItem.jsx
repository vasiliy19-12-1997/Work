import React, { useEffect, useRef, useState } from "react";
import MyButton from "../ui/myButton/MyButton";
import s from "./TodoItem.module.scss";
import MyInput from "./../ui/myInput/MyInput";
const TodoItem = (props) => {
  // const [isEditMode, setIsEditMode] = useState(false);
  // const [edit, setEdit] = useState("");
  // const editTask = () => {
  //   if (isEditMode) {
  //   }
  // };
  // const editTitleInputRef = useRef(null);
  // useEffect(() => {
  //   if (isEditMode) {
  //     editTitleInputRef.current.focus();
  //   }
  // });
  // console.log(props.post.description);
  return (
    <div className={s.TodoItem}>
      <div className={s.TodoItemText}>
        <strong>
          {props.index}.{props.todo.title}
        </strong>

        <div>{props.todo.body}</div>
      </div>

      <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
    </div>
  );
};

export default TodoItem;
