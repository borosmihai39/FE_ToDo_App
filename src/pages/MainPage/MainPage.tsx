import React, { useContext } from "react";
import { Todos, Navbar, Footer } from "../../components/index";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const MainPage = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Navbar />
      <Todos />
      <Footer />
    </>
  );
};

export default MainPage;
