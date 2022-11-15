import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <div>
        <strong>
          {props.number}. {props.todo.title}
        </strong>
        <div>{props.todo.body}</div>
      </div>
    </div>
  );
};

export default TodoItem;
