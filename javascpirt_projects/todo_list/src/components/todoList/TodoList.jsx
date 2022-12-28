import React from "react";
import TodoItem from "./../todoItem/TodoItem";

const TodoList = ({ todos, remove }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index + 1} remove={remove} />
      ))}
    </div>
  );
};

export default TodoList;
