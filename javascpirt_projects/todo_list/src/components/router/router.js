import Todos from "./../pages/Todos";
import About from "./../pages/About";
import TodoIdPage from "./../todoIdPage/TodoIdPage";
export const routes = [
  { path: "/todos", element: Todos },
  { path: "/todos/:id", element: TodoIdPage },
  { path: "/about", element: About },
  { path: "/error", element: Error },
];
