import React, { useRef } from "react";
import MyButton from "./../ui/myButton/MyButton";
import MyInput from "./../ui/myInput/MyInput";

const TodoItem = (props) => {
  const check = useRef();
  const removes = () => {
    if (check) {
      setTimeout(() => {
        return props.remove(props.todo);
      }, 500);
    }
  };
  return (
    <div>
      <div>
        <strong>{props.todo.index}</strong>
        <div>{props.todo.title}</div>
        <div>{props.todo.body}</div>
        <input
          onChange={removes}
          ref={check}
          value={props.todo.completed}
          type="checkbox"
        ></input>
      </div>
      <MyButton onClick={() => props.remove(props.todo)}>Delete</MyButton>
    </div>
  );
};

export default TodoItem;
