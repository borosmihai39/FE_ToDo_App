import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, About, Login, RegisterPage } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
