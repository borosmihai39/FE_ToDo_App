import React, { useContext } from "react";
import { Navbar, Footer, ContactInput } from "../../components/index";
import "./Contact.css";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const Contact = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Navbar />
      <ContactInput />
      <Footer />
    </div>
  );
};

export default Contact;
