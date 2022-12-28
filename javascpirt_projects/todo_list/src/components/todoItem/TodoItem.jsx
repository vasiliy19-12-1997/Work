import React, { useRef } from "react";

const TodoItem = (props) => {
  const check = useRef("");
  const remove = () => {
    if (check) {
      setTimeout(() => {
        props.remove(props.todo);
      }, 600);
    }
  };
  return (
    <div>
      {/* <h3>{props.todo.index}</h3> */}
      <div>{props.todo.title}</div>
      <div>{props.todo.body}</div>
      <input type="checkbox" ref={check} onClick={remove} />
      <button onClick={() => props.remove(props.todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
