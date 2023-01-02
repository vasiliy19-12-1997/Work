import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import About from "./components/pages/About";
import Todos from "./components/pages/Todos";
import Navbar from "./components/ui/navbar/Navbar";
import Error from "./components/pages/Error";
import AppRouter from "./components/appRouter/AppRouter";
import { AuthContext } from "./context/Context";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
