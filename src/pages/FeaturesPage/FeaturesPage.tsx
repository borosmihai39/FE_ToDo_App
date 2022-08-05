import React, { useContext } from "react";
import { Navbar, Footer, FeaturesMarkdown } from "../../components/index";
import "./FeaturesPage.css";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const FeaturesPage = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>Features</title>
      </Helmet>
      <Navbar />
      <FeaturesMarkdown />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
