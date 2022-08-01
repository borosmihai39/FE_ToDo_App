import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, About } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
