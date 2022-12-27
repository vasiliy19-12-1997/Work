import React from "react";
import TodoItem from "./../todoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index + 1} />
      ))}
    </div>
  );
};

export default TodoList;
