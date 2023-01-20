import Q from "q";
import { useMemo } from "react";
export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) =>
        a[sort].toLowerCase().localeCompare(b[sort].toLowerCase())
      );
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos;
};
export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);

  const sortedAndSearchTodos = useMemo(() => {
    return sortedTodos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.body.toLowerCase().includes(query)
    );
  }, [query, sortedTodos]);
  return sortedAndSearchTodos;
};
export default useTodos;
