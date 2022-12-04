import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./../pages/About";
import Todos from "./../pages/Todos";
import Error from "./../pages/Error";
import TodoIdPage from "./../pages/TodoIdPage";
import { privateRoutes, publicRoutes } from "./router/Router";
import { useContext } from "react";
import { AuthContext } from "../context/Context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
