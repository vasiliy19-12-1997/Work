import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      {/* <h3>{props.todo.index}</h3> */}
      <div>{props.todo.title}</div>
      <div>{props.todo.body}</div>

      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
