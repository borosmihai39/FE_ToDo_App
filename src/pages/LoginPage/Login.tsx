import React, { useContext } from "react";
import { Navbar, Footer, LoginForm } from "../../components/index";
import "./Login.css";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Navbar />
      {loggedIn === true ? (
        <h2>
          You are already logged in. Please Logout if you want to switch
          accoutnts.
        </h2>
      ) : (
        <LoginForm />
      )}

      <Footer />
    </div>
  );
};

export default Login;
