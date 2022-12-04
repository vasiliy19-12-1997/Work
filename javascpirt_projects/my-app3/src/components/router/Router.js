import About from "./../../pages/About";
import Todos from "./../../pages/Todos";
import Error from "./../../pages/Error";
import TodoIdPage from "./../../pages/TodoIdPage";
import Login from "./../../pages/Login";
export const privateRoutes = [
  { path: "/todos", element: Todos },
  { path: "/about", element: About },
];
export const publicRoutes = [{ path: "/login", element: Login }];
