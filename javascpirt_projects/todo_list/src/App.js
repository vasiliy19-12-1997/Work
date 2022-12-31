import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./components/pages/About";
import Todos from "./components/pages/Todos";
import Navbar from "./components/ui/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Todos />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
