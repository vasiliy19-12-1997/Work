import { useMemo } from "react";
export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    console.log("функция отработала");
    if (sort) {
      [...todos].sort((a, b) =>
        a[sort].toLowerCase().localeCompare(b[sort].toLowerCase())
      );
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos;
};
export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);
  const searchAndSortTodos = useMemo(() => {
    return sortedTodos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.body.toLowerCase().includes(query)
    );
  }, [sortedTodos, query]);
  return searchAndSortTodos;
};
