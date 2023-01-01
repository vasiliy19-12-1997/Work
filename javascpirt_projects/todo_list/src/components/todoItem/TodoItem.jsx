import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoItem = (props) => {
  const navigate = useNavigate();
  console.log(props.todo.id);
  const check = useRef("");
  const remove = () => {
    if (check) {
      setTimeout(() => {
        props.remove(props.todo);
      }, 1000);
    }
  };

  return (
    <div>
      {/* <h3>{props.todo.index}</h3> */}
      <div>{props.todo.title}</div>
      <div>{props.todo.body}</div>
      <MyInput type="checkbox" ref={check} onClick={remove} />
      <MyButton onClick={() => navigate(`/todos/${props.todo.id}`)}>
        Open
      </MyButton>
      <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
    </div>
  );
};

export default TodoItem;
