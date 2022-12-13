import React from "react";
import TodoItem from "./../todoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(() => (
        <TodoItem todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
