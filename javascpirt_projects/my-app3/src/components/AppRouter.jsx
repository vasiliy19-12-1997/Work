import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./../pages/About";
import Todos from "./../pages/Todos";
import Error from "./../pages/Error";
import TodoIdPage from "./../pages/TodoIdPage";
import { privateRoutes, publicRoutes } from "./router/Router";
import { useContext } from "react";
import { AuthContext } from "../context/Context";
import Loader from "./ui/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
