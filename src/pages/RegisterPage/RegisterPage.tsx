import React from "react";
import { Navbar, Footer, RegisterForm } from "../../components/index";
import "./RegisterPage.css";

const Register = () => {
  return (
    <div className="flex-wrapper">
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
