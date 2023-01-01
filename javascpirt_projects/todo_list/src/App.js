import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import About from "./components/pages/About";
import Todos from "./components/pages/Todos";
import Navbar from "./components/ui/navbar/Navbar";
import Error from "./components/pages/Error";
import AppRouter from "./components/appRouter/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
