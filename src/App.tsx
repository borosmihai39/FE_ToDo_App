import React from "react";
import "./App.css";
import { Todos, Navbar, Footer } from "./components/index";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos />
      <Footer></Footer>
    </div>
  );
}

export default App;
