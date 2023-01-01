import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import About from "./components/pages/About";
import Todos from "./components/pages/Todos";
import Navbar from "./components/ui/navbar/Navbar";
import Error from "./components/pages/Error";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Todos />} path="/"></Route>
        <Route element={<Error />} path="/error"></Route>
        {/* если пользователь введет не существующий url, то перейдем к туду листу */}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
