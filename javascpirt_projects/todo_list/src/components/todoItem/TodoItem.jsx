import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";
import s from "./TodoItem.module.scss";
const TodoItem = (props) => {
  const navigate = useNavigate();

  const check = useRef("");
  const remove = () => {
    if (check) {
      setTimeout(() => {
        props.remove(props.todo);
      }, 1000);
    }
  };

  return (
    <div className={s.TodoItem}>
      <div className={s.TodoItemText}>
        <h3>{props.todo.title}</h3>
      </div>
      <div>{props.todo.body}</div>
      <div className={s.TodoItemCheck}>
        <input
          className={s.TodoItemCheckBox}
          type="checkbox"
          ref={check}
          onClick={remove}
        />
      </div>
      <div>
        <MyButton onClick={() => navigate(`/todos/${props.todo.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default TodoItem;
