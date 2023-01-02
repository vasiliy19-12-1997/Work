import Todos from "./../pages/Todos";
import About from "./../pages/About";
import TodoIdPage from "./../todoIdPage/TodoIdPage";
import Login from "./../pages/Login";
export const privateRoutes = [
  { path: "/todos", element: Todos },
  { path: "/todos/:id", element: TodoIdPage },
  { path: "/about", element: About },
  { path: "/error", element: Error },
];
export const publicRoutes = [{ path: "/login", element: Login }];
