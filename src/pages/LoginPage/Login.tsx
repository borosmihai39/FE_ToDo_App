import React from "react";
import { Navbar, Footer, LoginForm } from "../../components/index";
import "./Login.css";

const Login = () => {
  return (
    <div className="flex-wrapper">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
