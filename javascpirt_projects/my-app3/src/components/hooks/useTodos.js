import { useMemo } from "react";
export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos;
};
export const useTodos = (todos, sort, query) => {
  const sortedTodos = useSortedTodos(todos, sort);
  const sortedAndSearchTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedTodos]);
  return sortedAndSearchTodos;
};
export default useTodos;
