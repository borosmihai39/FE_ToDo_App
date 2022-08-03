import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, About, Login, RegisterPage } from "./pages";
import { UserContext } from "./context/UserContext";
function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
        <>
          {loggedIn === true ? (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          )}
        </>
      </UserContext.Provider>
    </div>
  );
}

export default App;
