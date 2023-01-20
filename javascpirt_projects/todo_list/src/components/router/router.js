import TodoIdPage from "./../todoIdPage/TodoIdPage";
import Todos from "./../pages/todos/Todos";

import Login from "./../pages/login/Login";
import About from "./../pages/about/About";

export const privateRoutes = [
  { path: "/todos", element: Todos },
  { path: "/todos/:id", element: TodoIdPage },
  { path: "/about", element: About },
  { path: "/error", element: Error },
];
export const publicRoutes = [{ path: "/login", element: Login }];
