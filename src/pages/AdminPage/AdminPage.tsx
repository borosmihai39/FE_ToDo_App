import React, { useContext } from "react";
import { Navbar, Footer, AdminDashboard } from "../../components/index";
import "./AdminPage.css";
import { Helmet } from "react-helmet";
import { UserContext } from "../../context/UserContext";
const AdminPage = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  if (localStorage.getItem("authorizationToken")) {
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>AdminPage</title>
      </Helmet>
      <Navbar />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default AdminPage;
