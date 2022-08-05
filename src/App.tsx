import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  About,
  Login,
  RegisterPage,
  Contact,
  AdminPage,
  FeaturesPage,
} from "./pages";
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/features" element={<FeaturesPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<FeaturesPage />} />
            </Routes>
          )}
        </>
      </UserContext.Provider>
    </div>
  );
}

export default App;
