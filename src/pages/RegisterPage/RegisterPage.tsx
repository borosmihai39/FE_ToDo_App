import React, { useContext } from "react";
import { Navbar, Footer, RegisterForm } from "../../components/index";
import "./RegisterPage.css";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const Register = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
